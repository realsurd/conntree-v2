"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useWallet } from "@txnlab/use-wallet";
import { IoCopyOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import DisconnectWallet from "../disconnect-wallet-modal";

const Header = () => {
  const { activeAccount } = useWallet();
  const [showToast, setShowToast] = useState(false);
  const [showWalletMenu, setShowWalletMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowWalletMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatAddress = (addr: string) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  const handleCopy = () => {
    if (!activeAccount) return;
    navigator.clipboard.writeText(activeAccount.address);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <header className="h-20 px-10 border-b border-white/10 flex items-center justify-between relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1775583122/Group_481425_lmh71y.png"
            alt="ConnTree Logo"
            width={45}
            height={45}
          />
          <h1 className="text-3xl font-goodtiming font-bold">
            Conn<span className="text-[#FB8500]">tree</span>
          </h1>
        </div>
      </Link>

      {/* Search + Wallet */}
      <div className="flex items-center gap-4 w-full max-w-4xl">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-[95%] bg-[#0E1C28] rounded-2xl pl-10 pr-4 py-3 text-sm outline-none border border-white/10 focus:border-[#FB8500]"
          />
        </div>

        {/* Wallet / Get Started */}
        {activeAccount ? (
          <div className="relative shrink-0" ref={menuRef}>
            {/* Connected Wallet Button */}
            <div className="flex items-center justify-between gap-2 px-4 py-2 rounded-2xl font-medium text-white border bg-[#292118] border-[#FB8501] cursor-pointer hover:opacity-90 transition w-fit min-w-[180px]">
              <span className="text-sm md:text-lg font-opensans">
                {formatAddress(activeAccount.address)}
              </span>
              <span
                className="cursor-pointer"
                onClick={handleCopy}
                title="Copy Wallet Address"
              >
                <IoCopyOutline size={20} />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => setShowWalletMenu((prev) => !prev)}
              >
                <IoIosArrowDown size={20} />
              </span>
            </div>

            {/* Wallet Menu Modal */}
            {showWalletMenu && (
              <div className="absolute top-full right-0 mt-2 w-[320px] rounded-lg shadow-lg z-50">
                <DisconnectWallet onClose={() => setShowWalletMenu(false)} />
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth/register">
            {/* Get Started Button */}
            <button className="bg-[#FB8500] hover:bg-[#ff9b3d] transition text-white font-semibold px-6 md:px-10 py-3 rounded-2xl text-sm md:text-base whitespace-nowrap shadow-md">
              Get Started
            </button>
          </Link>
        )}
      </div>

      {/* Copy Toast */}
      {showToast && (
        <div className="absolute right-8 top-24 z-50 bg-[#FB8500] backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-fadeIn">
          Wallet copied ✓
        </div>
      )}
    </header>
  );
};

export default Header;
