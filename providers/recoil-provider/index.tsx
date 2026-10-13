"use client";

import { RecoilRoot } from "recoil";
import { AuthProvider } from "../auth-provider";
import { WalletBalanceProvider } from "../wallet-balance-provider";
import { WalletConnectProvider } from "../wallet-connect-provider";

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <WalletConnectProvider>
        {/* Must sit inside WalletConnectProvider: it reads the connected wallet. */}
        <WalletBalanceProvider>
          <AuthProvider>{children}</AuthProvider>
        </WalletBalanceProvider>
      </WalletConnectProvider>
    </RecoilRoot>
  );
}
