"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { authAtom, ConnectWalletVisibleAtom } from "@/state";
import { useWallet } from "@txnlab/use-wallet";
import RotatingBackground from "@/components/rotating-background";

import { useNotify } from "@/hooks/useNotify";

import { usePathname } from "next/navigation";

function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showWalletConnect, setShowWalletConnect] = useRecoilState(
    ConnectWalletVisibleAtom,
  );
  // const [showProfilePopup, setShowProfilePopup] = useState(false);
  // const [showEditProfilePopup, setShowEditProfilePopup] = useState(false);
  // const profile = useRecoilValue(ProfileAtom);
  // const [loggingIn, setLoggingIn] = useState(false);
  // const { logout, login, signAuthTransaction } = useAuthActions();
  // const { getProfile } = useProfileActions();
  const auth = useRecoilValue(authAtom);
  const { notify } = useNotify();
  const { activeAddress } = useWallet();

  const pathname = usePathname();

  const userIsLoggedin = !!auth && !!activeAddress;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundColor: "#0A1117",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-linear-to-br from-[#0d2847] to-[#0a1e35] h-161.75 rounded-3xl p-8 relative overflow-hidden">
          <RotatingBackground />

          <div className="space-y-6 mt-87.5 relative z-10">
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? "bg-orange-500" : "bg-gray-600"
                }`}
              >
                <span className="text-white font-semibold">1</span>
              </div>
              <div className="hidden lg:flex justify-center items-center relative">
                {!activeAddress && (
                  <Button onClick={() => setShowWalletConnect(true)}>
                    Connect wallet
                  </Button>
                )}
                {activeAddress && (
                  <span>
                    {activeAddress.slice(0, 6)}...
                    {activeAddress.slice(activeAddress.length - 3)}
                  </span>
                )}
              </div>
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
            <div className="bg-[#28282880] p-6 rounded-full">
              <p className="text-white font-sans text-[19px] p-2 text-sm leading-relaxed">
                A social platform where creators own their content and earn
                rewards for every like, comment, and share. Built for the Web3
                era.
              </p>
            </div>
          </div>

          <div className="w-full space-y-4">
            <button
              className="font-sans w-full py-4 rounded-xl border-2 bg-[#FB85011A] border-[#FB8500] text-[#FB8500] font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
              onClick={() => alert("Wallet connection coming soon!")}
            >
              Connect Wallet
            </button>

            <button
              className="font-sans w-full py-4 rounded-xl bg-white text-gray-700 text-lg hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-10"
              onClick={() => alert("Google authentication coming soon!")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1713 8.36788H17.5001V8.33329H10.0001V11.6666H14.7096C14.0225 13.607 12.1763 15 10.0001 15C7.23882 15 5.00007 12.7612 5.00007 9.99996C5.00007 7.23871 7.23882 4.99996 10.0001 4.99996C11.2746 4.99996 12.4342 5.48079 13.3171 6.26621L15.6742 3.90913C14.1859 2.52204 12.1951 1.66663 10.0001 1.66663C5.39798 1.66663 1.66675 5.39788 1.66675 9.99996C1.66675 14.602 5.39798 18.3333 10.0001 18.3333C14.6021 18.3333 18.3334 14.602 18.3334 9.99996C18.3334 9.44121 18.2759 8.89579 18.1713 8.36788Z"
                  fill="#FFC107"
                />
                <path
                  d="M2.62756 6.12121L5.36548 8.12913C6.10631 6.29496 7.90048 5 10.0001 5C11.2746 5 12.4342 5.48083 13.3171 6.26625L15.6742 3.90917C14.1859 2.52208 12.1951 1.66667 10.0001 1.66667C6.79923 1.66667 4.02339 3.47375 2.62756 6.12121Z"
                  fill="#FF3D00"
                />
                <path
                  d="M10.0001 18.3333C12.1526 18.3333 14.1092 17.5095 15.5871 16.1712L13.0079 13.9875C12.1429 14.6479 11.0862 15.0008 10.0001 15C7.83257 15 5.99215 13.6179 5.29882 11.6891L2.58215 13.783C3.96049 16.4816 6.76132 18.3333 10.0001 18.3333Z"
                  fill="#4CAF50"
                />
                <path
                  d="M18.1713 8.36796H17.5V8.33337H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1708C15.4046 16.3354 18.3333 14.1667 18.3333 10C18.3333 9.44129 18.2758 8.89587 18.1713 8.36796Z"
                  fill="#1976D2"
                />
              </svg>
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
    </div>
  );
}

export default RegisterPage;
