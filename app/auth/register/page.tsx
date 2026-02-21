"use client";

import { useState } from "react";
import RotatingBackground from "@/components/rotating-background";
import { WalletConnectModal } from "@/components/wallet-connect-modal";
import { useWallet } from "@txnlab/use-wallet";

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showWalletModal, setShowWalletModal] = useState(false); // <-- modal state
  const { activeAccount } = useWallet();

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-10">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du153mzwk/image/upload/v1771289058/Bg_Pattern_jtayxy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay on top */}
      <div className="absolute inset-0 bg-[#0A1117]/80" />

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-gradient-to-br from-[#0d2847] to-[#0a1e35] min-h-[600px] rounded-3xl px-8 relative overflow-hidden flex flex-col justify-between">
          <RotatingBackground />

          <div className="mt-[310px] space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-orange-500" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">1</span>
              </div>
              <button
                onClick={() => setCurrentStep(1)}
                className={`px-6 py-3 rounded-lg border-2 transition-all ${
                  currentStep >= 1
                    ? "border-orange-500 text-orange-500 bg-transparent"
                    : "border-gray-600 text-gray-500 bg-transparent"
                }`}
              >
                Connect Wallet
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">2</span>
              </div>
              <button
                onClick={() => setCurrentStep(2)}
                className={`px-6 py-3 rounded-lg border-2 transition-all ${
                  currentStep >= 2
                    ? "border-green-500 text-green-500 bg-transparent"
                    : "border-gray-600 text-gray-500 bg-transparent"
                }`}
              >
                Create Account with Google
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 3 ? "bg-blue-500" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">3</span>
              </div>
              <button
                onClick={() => setCurrentStep(3)}
                className={`px-6 py-3 rounded-lg border-2 transition-all ${
                  currentStep >= 3
                    ? "border-blue-500 text-blue-500 bg-transparent"
                    : "border-gray-600 text-gray-500 bg-transparent"
                }`}
              >
                Customize your Avatar
              </button>
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(100, 150, 200, 0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="flex flex-col items-center text-white space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-[34px] font-bold font-goodtiming ">
              Connect Your Wallet to Get started
            </h2>
            <div className="bg-[#28282880] p-6 rounded-4xl">
              <p className="text-white font-sans text-[19px] p-2 text-sm leading-relaxed">
                A social platform where creators own their content and earn
                rewards for every like, comment, and share. Built for the Web3
                era.
              </p>
            </div>
          </div>

          <div className="w-full space-y-4">
            <button
              className={`font-sans w-full py-4 rounded-xl border-2 font-semibold text-lg transition-all duration-200 ${
                activeAccount
                  ? "bg-[#FB85011A] border-[#FF8135] text-[#FF8135]"
                  : "bg-[#FB85011A] border-[#FB8500] text-[#FB8500] hover:bg-orange-500 hover:text-white"
              }`}
              onClick={() => {
                if (!activeAccount) {
                  setShowWalletModal(true);
                }
              }}
            >
              {activeAccount
                ? ` ${formatAddress(activeAccount.address)}`
                : "Connect Wallet"}
            </button>

            <button
              className="font-sans w-full py-4 rounded-xl bg-white text-gray-700 text-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-10"
              onClick={() => alert("Google authentication coming soon!")}
            >
              <span>
                <img
                  src="https://res.cloudinary.com/du153mzwk/image/upload/v1771290978/Google_cepmtm.png"
                  alt="google-image"
                  className="w-5 h-5"
                />
              </span>
              Continue with Google
            </button>
          </div>

          <div className="text-center">
            <span className="text-gray-400">Already have an account? </span>
            <button
              className="text-orange-500 font-semibold hover:text-orange-400 transition-colors"
              onClick={() => alert("Sign in page coming soon!")}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
      {/* Wallet Connect Modal */}
      {showWalletModal && (
        <WalletConnectModal onClose={() => setShowWalletModal(false)} />
      )}
    </div>
  );
}

export default RegisterPage;
