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
import { usePathname } from "next/navigation";
import {
  formatAlgo,
  useWalletBalance,
} from "@/providers/wallet-balance-provider";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const balance = useWalletBalance();

  // Highlight the item for the page the user is on. Post pages (/feed/...) belong to Home.
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/" || pathname.startsWith("/feed")
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div
      className={`${
        collapsed ? "w-[120px]" : "w-72"
      } px-10 py-5 border-white/10 flex flex-col transition-all duration-300 relative`}
    >
      {/* TOGGLE BUTTON */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
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

          {/* ALGO balance of the connected wallet; a grey bar while it loads */}
          <p
            className="mt-1 font-semibold flex items-center gap-1"
            title={
              balance.error ? "Could not load the latest balance" : undefined
            }
          >
            {balance.loading ? (
              <span className="h-4 w-12 rounded bg-white/10 animate-pulse" />
            ) : (
              formatAlgo(balance.microAlgos)
            )}
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
          active={isActive("/")}
        />

        <NavItem
          collapsed={collapsed}
          href="/notifications"
          icon={<Bell size={20} />}
          label="Notifications"
          active={isActive("/notifications")}
          dot
        />

        <NavItem
          collapsed={collapsed}
          href="/create"
          icon={<Plus size={20} />}
          label="Create"
          active={isActive("/create")}
        />

        <NavItem
          collapsed={collapsed}
          href="/messages"
          icon={<MessageCircle size={20} />}
          label="Messages"
          active={isActive("/messages")}
        />

        <NavItem
          collapsed={collapsed}
          href="/communities"
          icon={<TbUsersGroup size={20} />}
          label="Communities"
          active={isActive("/communities")}
        />

        <NavItem
          collapsed={collapsed}
          href="/profile"
          icon={<User size={20} />}
          label="Profile"
          active={isActive("/profile")}
        />
      </nav>
    </div>
  );
};

export default Sidebar;

/* 🔹 NAV ITEM COMPONENT (clean & reusable) */
type NavItemProps = {
  collapsed: boolean;
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  dot?: boolean;
};

const NavItem = ({
  collapsed,
  href,
  icon,
  label,
  active,
  dot,
}: NavItemProps) => {
  return (
    // aria-label: when the sidebar is collapsed the link shows only an icon.
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
    >
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
