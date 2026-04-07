"use client";

import React from "react";
import { SiAlgorand } from "react-icons/si";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useWallet } from "@txnlab/use-wallet";

interface DisconnectWalletProps {
  onClose?: () => void;
}

const DisconnectWallet: React.FC<DisconnectWalletProps> = ({ onClose }) => {
  const { providers: wallets } = useWallet();

  const handleDisconnect = async () => {
    // Disconnect all wallet providers
    for (const wallet of wallets || []) {
      await wallet.disconnect();
    }

    // Optional: clear stored auth if you are storing anything
    localStorage.clear();

    if (onClose) onClose();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#8ECAE61A] backdrop-blur-md py-6 px-6 rounded-2xl w-full max-w-[320px] min-h-[180px] space-y-6 mt-2">
      <h1 className="text-white text-center text-lg font-sans font-semibold">
        Algorand Network
      </h1>

      <p className="flex items-center gap-2 text-white font-semibold text-md">
        0.52
        <span className="bg-[#8ECAE61A] rounded-full p-3 flex items-center justify-center">
          <SiAlgorand size={20} />
        </span>
      </p>

      <button
        onClick={handleDisconnect}
        className="flex gap-4 items-center bg-[#FB8500] text-white px-20 py-2 rounded-full font-medium hover:opacity-90 transition"
      >
        Disconnect
        <VscDebugDisconnect size={20} />
      </button>
    </div>
  );
};

export default DisconnectWallet;
