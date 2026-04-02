"use client";

import React, { useState } from "react";
import AvatarCustomizer from "@/components/customized-avatars";
import { Settings, Bell, X } from "lucide-react";

type Notification = {
  id: number;
  avatar: string;
  name: string;
  message: string;
  time: string;
  unread: boolean;
  isSystem: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    avatar: "https://res.cloudinary.com/doedqs4f5/image/upload/v1775084282/Frame_5852_rbar2u.png",
    name: "ConnTree",
    message: "You earned 50 CONN tokens for reaching 100 likes!",
    time: "2m ago",
    unread: true,
    isSystem: true,
  },
  {
    id: 2,
    avatar: "https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1775084282/animoji_iidhsr.png",
    name: "Maya Patel",
    message: `commented, "This is exactly what we need"`,
    time: "15m ago",
    unread: true,
    isSystem: false,
  },
  {
    id: 3,
    avatar: "https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1775084282/animoji_1_oi9td2.png",
    name: "Jordan Kim",
    message: "Liked your post",
    time: "2h ago",
    unread: true,
    isSystem: false,
  },
  {
    id: 4,
    avatar: "https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1775084282/Frame_5852_rbar2u.png",
    name: "ConnTree",
    message: "You earned 50 CONN tokens for reaching 100 likes!",
    time: "2m ago",
    unread: false,
    isSystem: true,
  },
  {
    id: 5,
    avatar: "https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1775084282/animoji_iidhsr.png",
    name: "Maya Patel",
    message: `commented, "This is exactly what we need"`,
    time: "15m ago",
    unread: false,
    isSystem: false,
  }
];

export default function NotificationsPage() {
  // ── STATE ──────────────────────────────────────────────────
  // Full notifications list — source of truth for unread dots
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  // Which row the user is currently hovering
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Whether the settings panel is visible
  const [showSettings, setShowSettings] = useState(false);

  // ── DERIVED (no useState needed) ──────────────────────────
  const unreadCount = notifications.filter((n) => n.unread).length;

  // ── HANDLERS ──────────────────────────────────────────────
  // Mark a single notification as read when clicked
  const markOneAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  // Mark every notification as read
  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  // Dismiss (remove) a notification
  const dismissNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      {/* Outer parent container */}
   
      {/* Main dark card */}
      <div className="w-[705px] h-[810px] px-20 py-6 gap-[14px] rounded-lg opacity-100 mx-[200px] flex justify-center items-center flex-col bg-[#8ECAE61A]">
        {/* ── FIRST COLUMN: Header ── */}
        <div className="w-[665px] h-[98px] flex flex-row justify-between pb-8 opacity-100">
          {/* Left: icon + text block */}
          <div className="flex flex-row items-start gap-3">
            {/* Bell icon badge */}
            <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center flex-shrink-0">
              <Bell className="w-[18px] h-[18px] text-white" />
            </div>

            {/* Title + subtitle + action */}
            <div className="flex flex-col gap-0.5">
              <span className="text-white font-bold text-[17px] leading-tight">
                Notifications
              </span>

              {/* unreadCount is derived — updates automatically from notifications state */}
              <span className="text-gray-400 text-[13px]">
                {unreadCount > 0
                  ? `${unreadCount} unread message${unreadCount > 1 ? "s" : ""}`
                  : "No unread messages"}
              </span>

              {/* Only visible when unread notifications exist */}
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-orange-400 text-[13px] text-left mt-1 hover:text-orange-300 transition-colors"
                >
                  Mark all as read
                </button>
              )}
            </div>
          </div>

          {/* Right: settings icon — toggles showSettings */}
          <div className="flex items-start pt-1 relative">
            <Settings
              onClick={() => setShowSettings((prev) => !prev)}
              className={`w-5 h-5 transition-colors cursor-pointer ${
                showSettings
                  ? "text-orange-400"
                  : "text-gray-400 hover:text-white"
              }`}
            />

            {/* Settings dropdown — controlled by showSettings state */}
            {showSettings && (
              <div className="absolute right-0 top-7 w-44 bg-[#2a2a2a] border border-gray-700 rounded-lg shadow-xl z-10 overflow-hidden">
                <button
                  onClick={() => {
                    markAllAsRead();
                    setShowSettings(false);
                  }}
                  className="w-full text-left px-4 py-3 text-[13px] text-gray-300 hover:bg-[#333] hover:text-white transition-colors"
                >
                  Mark all as read
                </button>
                <button
                  onClick={() => {
                    setNotifications([]);
                    setShowSettings(false);
                  }}
                  className="w-full text-left px-4 py-3 text-[13px] text-gray-300 hover:bg-[#333] hover:text-white transition-colors"
                >
                  Clear all
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full text-left px-4 py-3 text-[13px] text-gray-300 hover:bg-[#333] hover:text-white transition-colors"
                >
                  Notification settings
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── REMAINING COLUMNS: Notification rows ── */}
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 gap-2">
            <Bell className="w-10 h-10 text-gray-600" />
            <span className="text-gray-500 text-[14px]">No notifications</span>
          </div>
        ) : (
          notifications.map((notification, index) => (
            <div key={notification.id} className="flex flex-col">

              {/* Notification row — hover tracked via hoveredId state */}
              <div
                className={`w-[665px] h-[106px] pt-5 pr-6 pb-5 pl-6 gap-[11px] opacity-100 flex flex-row items-center rounded-lg cursor-pointer transition-colors duration-150 ${
                  hoveredId === notification.id
                    ? "bg-[#2a2a2a]"
                    : "bg-transparent"
                }`}
                onMouseEnter={() => setHoveredId(notification.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => markOneAsRead(notification.id)}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={notification.avatar}
                    alt={notification.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-1 gap-0.5">
                  <span className="text-white font-semibold text-[14px] leading-tight">
                    {notification.name}
                  </span>
                  <span className="text-gray-400 text-[13px] leading-snug">
                    {notification.message}
                  </span>
                  <span className="text-gray-500 text-[12px] mt-0.5">
                    {notification.time}
                  </span>
                </div>

                {/* Right side: unread dot + dismiss X on hover */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0 self-start mt-1">
                  {notification.unread && (
                    <div className="w-[10px] h-[10px] rounded-full bg-orange-400" />
                  )}

                  {/* Dismiss button — only appears when hoveredId matches */}
                  {hoveredId === notification.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent triggering markOneAsRead
                        dismissNotification(notification.id);
                      }}
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Divider — skipped after last item */}
              {index < notifications.length - 1 && (
                <div className="w-[665px] h-px bg-gray-700/60" />
              )}
            </div>
          ))
        )}
      </div>
   
    </>
  );
}