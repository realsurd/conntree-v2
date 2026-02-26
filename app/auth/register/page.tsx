"use client";

import { useState, useEffect } from "react";
import RotatingBackground from "@/components/rotating-background";
import { WalletConnectModal } from "@/components/wallet-connect-modal";
import AvatarCustomizer from "@/components/customized-avatars";
import { useWallet } from "@txnlab/use-wallet";

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [googleSignedUp, setGoogleSignedUp] = useState(false);

  const { activeAccount } = useWallet();

  // When wallet connects, activate step 2
  useEffect(() => {
    if (activeAccount) {
      setWalletConnected(true);
      setCurrentStep(2);
    }
  }, [activeAccount]);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const handleGoogleSignup = () => {
    if (!walletConnected) return;

    // Simulate Google success
    setGoogleSignedUp(true);
    setCurrentStep(3);
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du153mzwk/image/upload/v1772064920/photo_2026-02-26_01-13-34_bkhahr.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-[#0A1117]/80" />

      <div className="relative z-10 w-full h-full px-24 py-10 grid md:grid-cols-[45%_55%] gap-6 items-center">
        {/* LEFT PANEL */}
        <div className="bg-gradient-to-br from-[#0d2847] to-[#0a1e35] h-full rounded-3xl px-8 relative overflow-hidden flex flex-col justify-between">
          <RotatingBackground />

          <div className="mt-[420px] space-y-6 relative z-10">
            {/* STEP 1 */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FB8500]">
                <span className="text-white font-semibold">1</span>
              </div>
              <button className="px-6 py-3 rounded-lg border-2 border-[#FB8500] text-[#FB8500]">
                Connect Wallet
              </button>
            </div>

            {/* STEP 2 */}
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  walletConnected ? "bg-[#B5ED30]" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">2</span>
              </div>
              <button
                disabled={!walletConnected}
                className={`px-6 py-3 rounded-lg border-2 ${
                  walletConnected
                    ? "border-[#B5ED30] text-[#B5ED30]"
                    : "border-gray-600 text-gray-500"
                }`}
              >
                Create Account with Google
              </button>
            </div>

            {/* STEP 3 */}
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  googleSignedUp ? "bg-[#8ECAE6]" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">3</span>
              </div>
              <button
                disabled={!googleSignedUp}
                className={`px-6 py-3 rounded-lg border-2 ${
                  googleSignedUp
                    ? "border-[#8ECAE6] text-[#8ECAE6]"
                    : "border-gray-600 text-gray-500"
                }`}
              >
                Customize your Avatar
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col items-center text-white space-y-8 pt-10 px-[100px]">
          <div className="text-center space-y-4">
            <h2 className="text-[38px] font-bold">
              {!walletConnected
                ? "Connect Your Wallet to Get started"
                : !googleSignedUp
                  ? "Sign Up with Google"
                  : "Customize Your Metaverse Identity"}
            </h2>

            <div className="bg-[#28282880] p-3 rounded-full">
              <p className="text-white font-sans text-[20px] p-2 text-sm leading-relaxed">
                A social platform where creators own their content and earn
                rewards for every like, comment, and share. Built for the Web3
                era.
              </p>
            </div>
          </div>

          {googleSignedUp ? (
            <AvatarCustomizer />
          ) : (
            <div className="w-full space-y-4">
              {/* CONNECT WALLET BUTTON */}
              <button
                className={`font-sans w-full py-4 rounded-xl border-2 font-semibold text-lg ${
                  activeAccount
                    ? "bg-[#FB85011A] border-[#FF8135] text-[#FF8135]"
                    : "bg-[#FB85011A] border-[#FB8500] text-[#FB8500]"
                }`}
                onClick={() => {
                  if (!activeAccount) setShowWalletModal(true);
                }}
              >
                {activeAccount
                  ? `${formatAddress(activeAccount.address)}`
                  : "Connect Wallet"}
              </button>

              {/* GOOGLE BUTTON */}
              <button
                disabled={!walletConnected}
                onClick={handleGoogleSignup}
                className={`font-sans w-full py-4 rounded-xl text-lg flex items-center justify-center gap-10 ${
                  walletConnected
                    ? "bg-white text-gray-700"
                    : "bg-gray-400 text-gray-600 cursor-not-allowed"
                }`}
              >
                Continue with Google
              </button>
            </div>
          )}
        </div>
      </div>

      {showWalletModal && (
        <WalletConnectModal onClose={() => setShowWalletModal(false)} />
      )}
    </div>
  );
}

export default RegisterPage;
