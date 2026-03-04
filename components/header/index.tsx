"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-20 px-20 border-b border-white/10 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className=" flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1772533292/image_2_kyhega.png"
            alt="Logo"
            width={45}
            height={45}
          />
        </div>
        <h1 className="text-3xl font-goodtiming font-semibold">Conntree</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center gap-10">
        <div className="relative w-[400px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#0E1C28] rounded-md pl-10 pr-4 py-3 text-sm outline-none border border-white/10 focus:border-[#FB8500]"
          />
        </div>

        {/* Button */}
        <Link href="/auth/register">
          <button className="bg-[#FB8500] px-12 py-3 rounded-lg font-medium">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
