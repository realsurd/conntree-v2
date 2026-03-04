"use client";
import React from "react";

import { Home, Bell, Plus, MessageCircle, User } from "lucide-react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiAlgorand } from "react-icons/si";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-80 border-white/10 py-5 px-20 flex flex-col">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://res.cloudinary.com/du153mzwk/image/upload/v1772456358/image_23_mfmeai.png"
          alt="avatar/picture"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">Ibromax..</h3>
            <span className="text-[#FB8500]">
              <IoIosCheckmarkCircle />
            </span>
          </div>
          <p className="text-[12px] text-gray-400">UI/UX Designer</p>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-[#0E1C28] w-full flex justify-between items-center rounded-xl p-2 mb-8 text-sm">
        <div className="flex flex-col items-center justify-center text-sm text-center">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1772534724/wallet_ydxl8x.png"
            alt="wallet"
            className="w-5 h-5"
          />
          <p className="text-[10px] text-gray-400">Balance</p>
        </div>

        <p className="mt-1 font-semibold flex items-center gap-1">
          0.52
          <span className="bg-[#8ECAE61A] rounded-full p-2 flex items-center justify-center">
            <SiAlgorand />
          </span>
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 text-gray-300">
        <Link href="/">
          <div className="flex items-center gap-3 text-[#FB8500] cursor-pointer">
            <Home size={20} />
            <span>Home</span>
          </div>
        </Link>

        <Link href="/notifications">
          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            <Bell size={20} />
            <span>Notifications</span>
            <span className="w-2 h-2 bg-orange-500 rounded-full ml-auto" />
          </div>
        </Link>

        <Link href="/create">
          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            <Plus size={20} />
            <span>Create</span>
          </div>
        </Link>

        <Link href="/messages">
          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            <MessageCircle size={20} />
            <span>Messages</span>
          </div>
        </Link>

        <Link href="/profile">
          <div className="flex items-center gap-3 hover:text-white cursor-pointer">
            <User size={20} />
            <span>Profile</span>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
