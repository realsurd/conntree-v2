"use client";
import React, { useState } from "react";
import { TbUsersGroup } from "react-icons/tb";
import { Home, Bell, Plus, MessageCircle, User } from "lucide-react";
import {
  IoIosCheckmarkCircle,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { SiAlgorand } from "react-icons/si";
import Link from "next/link";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? "w-50" : "w-72"
      } px-10 py-5 border-white/10 flex flex-col transition-all duration-300 relative`}
    >
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[25%] -translate-y-1/2 text-2xl text-[#1b2c3b] hover:text-[#FB8500] transition"
      >
        {collapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </button>

      {/* Profile Section */}
      <div
        className={`flex items-center gap-4 mb-6 ${
          collapsed ? "justify-center" : ""
        }`}
      >
        <img
          src="https://res.cloudinary.com/du153mzwk/image/upload/v1772456358/image_23_mfmeai.png"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />

        {!collapsed && (
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">RealSurd..</h3>
              <span className="text-[#FB8500]">
                <IoIosCheckmarkCircle />
              </span>
            </div>
            <p className="text-[12px] text-gray-400">Software Developer</p>
          </div>
        )}
      </div>

      {/* Balance Card */}
      {!collapsed && (
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
      )}

      {/* Navigation */}
      <nav
        className={`flex flex-col text-gray-300 ${
          collapsed ? "gap-10" : "gap-5"
        }`}
      >
        <NavItem
          collapsed={collapsed}
          href="/"
          icon={<Home size={20} />}
          label="Home"
          active
        />

        <NavItem
          collapsed={collapsed}
          href="/notifications"
          icon={<Bell size={20} />}
          label="Notifications"
          dot
        />

        <NavItem
          collapsed={collapsed}
          href="/create"
          icon={<Plus size={20} />}
          label="Create"
        />

        <NavItem
          collapsed={collapsed}
          href="/messages"
          icon={<MessageCircle size={20} />}
          label="Messages"
        />

        <NavItem
          collapsed={collapsed}
          href="/communities"
          icon={<TbUsersGroup size={20} />}
          label="Communities"
        />

        <NavItem
          collapsed={collapsed}
          href="/profile"
          icon={<User size={20} />}
          label="Profile"
        />
      </nav>
    </div>
  );
};

export default Sidebar;

/* 🔹 NAV ITEM COMPONENT (clean & reusable) */
const NavItem = ({ collapsed, href, icon, label, active, dot }: any) => {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 cursor-pointer group ${
          active ? "text-[#FB8500]" : "hover:text-white"
        } ${collapsed ? "justify-center" : ""}`}
      >
        {icon}

        {!collapsed && (
          <>
            <span>{label}</span>
            {dot && (
              <span className="w-2 h-2 bg-orange-500 rounded-full ml-auto" />
            )}
          </>
        )}
      </div>
    </Link>
  );
};
