"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useWallet } from "@txnlab/use-wallet";
import { getAlgodClient } from "@/utils/get-algo-client-config";

// Reads the connected wallet's ALGO balance from the Algorand node and shares
// it with every component that shows it, so the sidebar and the wallet menu
// always show the same figure and the node is asked only once.
//
// The lookup is public and read-only: it needs no signature and no backend.

// The chain counts in microAlgos. 1 ALGO = 1,000,000 microAlgos.
const MICROALGOS_PER_ALGO = 1_000_000;

// While the tab is visible, the balance is read again this often.
const REFRESH_EVERY_MS = 30_000;

interface WalletBalance {
  /** Balance in microAlgos. null when it is not known: no wallet, still loading, or the lookup failed. */
  microAlgos: number | null;
  /** True while the first lookup for the connected wallet is running. */
  loading: boolean;
  /** True when the most recent lookup failed. */
  error: boolean;
}

// The result of the last lookup, tagged with the wallet it belongs to.
interface Lookup {
  address: string;
  microAlgos: number | null;
  failed: boolean;
}

const NO_BALANCE: WalletBalance = {
  microAlgos: null,
  loading: false,
  error: false,
};

const WalletBalanceContext = createContext<WalletBalance>(NO_BALANCE);

export const useWalletBalance = () => useContext(WalletBalanceContext);

/** Text for display, e.g. "1,204.50". A dash when the balance is not known. */
export const formatAlgo = (microAlgos: number | null) => {
  if (microAlgos === null) return "—";

  // Cut to two decimals instead of rounding, so the figure shown is never
  // more than the wallet holds.
  const hundredths = Math.floor(microAlgos / (MICROALGOS_PER_ALGO / 100));

  return (hundredths / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

interface Props {
  children: ReactNode;
}

export const WalletBalanceProvider = ({ children }: Props) => {
  const { activeAddress } = useWallet();
  const [lookup, setLookup] = useState<Lookup | null>(null);

  useEffect(() => {
    if (!activeAddress) return;

    const address = activeAddress;
    const algod = getAlgodClient();
    let stopped = false;
    let newestRequest = 0;

    const load = async () => {
      const request = ++newestRequest;
      let microAlgos: number | null = null;

      try {
        // exclude("all") leaves out the asset and app lists; only the balance is needed.
        const account = await algod
          .accountInformation(address)
          .exclude("all")
          .do();
        const amount = Number(account.amount);

        if (Number.isFinite(amount)) microAlgos = amount;
      } catch {
        // Offline, or the node did not answer. Handled below as a failed lookup.
      }

      // Drop the answer if the wallet changed meanwhile or a newer lookup has started.
      if (stopped || request !== newestRequest) return;

      setLookup((previous) =>
        microAlgos !== null
          ? { address, microAlgos, failed: false }
          : {
              address,
              // Keep the last balance known for this wallet on screen.
              microAlgos:
                previous?.address === address ? previous.microAlgos : null,
              failed: true,
            },
      );
    };

    const loadIfVisible = () => {
      if (document.visibilityState === "visible") load();
    };

    load();
    const timer = window.setInterval(loadIfVisible, REFRESH_EVERY_MS);
    // Read again as soon as the user comes back to the tab, e.g. from their wallet.
    document.addEventListener("visibilitychange", loadIfVisible);

    return () => {
      stopped = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", loadIfVisible);
    };
  }, [activeAddress]);

  const value = useMemo<WalletBalance>(() => {
    if (!activeAddress) return NO_BALANCE;

    // A result for another wallet (the user switched accounts) does not count.
    const current = lookup?.address === activeAddress ? lookup : null;

    return {
      microAlgos: current?.microAlgos ?? null,
      loading: current === null,
      error: current?.failed ?? false,
    };
  }, [activeAddress, lookup]);

  return (
    <WalletBalanceContext.Provider value={value}>
      {children}
    </WalletBalanceContext.Provider>
  );
};
