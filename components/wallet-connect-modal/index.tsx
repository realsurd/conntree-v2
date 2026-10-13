"use client";

import { useWallet } from "@txnlab/use-wallet";
import { BackgroundOverlay } from "../background-overlay";
import { useEffect } from "react";

interface Props {
  onClose: () => void;
}

export const WalletConnectModal = ({ onClose }: Props) => {
  const { providers: wallets, activeAddress } = useWallet();

  useEffect(() => {
    if (activeAddress) {
      onClose();
    }
  }, [activeAddress]);

  return (
    <BackgroundOverlay onClose={onClose}>
      <div className="w-[320px] max-w-[calc(100vw-32px)] p-8 rounded-[32px] bg-white flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-bold text-[#171717]">
            Connect a Wallet
          </h4>
          <h5 className="text-base font-medium text-[#171717]">
            Supported wallets
          </h5>
        </div>
        <div className="flex flex-col gap-4">
          {wallets?.map((wallet) => (
            <button
              type="button"
              className="flex items-center gap-4 text-left cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
              key={wallet.metadata.id}
              onClick={wallet.connect}
            >
              <img
                src={wallet.metadata.icon}
                alt={`${wallet.metadata.name} icon`}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-medium text-[#171717]">
                {wallet.metadata.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </BackgroundOverlay>
  );
};
