"use client";

import React from 'react'

import Image from "next/image";
import {
  Search,
  Settings,
  Image as ImageIcon,
  Send,
  MoreHorizontal,
} from "lucide-react";

const chats = [
  {
    name: "Bessie Cooper",
    preview: "Missed audio call",
    date: "Feb 9",
    avatar: "/avatar.png",
    active: true,
  },
  {
    name: "Markup Designs",
    preview: "Great designs",
    date: "Feb 11",
    avatar: "/avatar.png",
  },
  {
    name: "NFT Studio",
    preview: "Get your reward on",
    date: "Feb 12",
    avatar: "/avatar.png",
  },
];

const messages = [
  {
    from: "Sarah",
    role: "Marketing Manager",
    text: "Hi, Bessie. I’m facing some challenges in optimizing my code for performance. Can you help?",
    time: "12:45 PM",
    mine: false,
  },
  {
    from: "You",
    text: "Hi, Sarah 👋 I’d be glad to help you with optimizing your code for better performance. To get started, could you provide me with some more details about the specific challenges you’re facing?",
    time: "12:55 PM",
    mine: true,
  },
];

const Message = () => {
  return (
     <section className="flex min-h-[calc(100vh-72px)] flex-1 gap-2 px-4 pb-6 pt-3 text-white">
      {/* Message list */}
      <aside className="w-[320px] rounded-xl border border-white/5 bg-[#0d1a23] p-4">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Messages</h1>
          <button className="rounded-lg p-2 text-white/70 hover:bg-white/10">
            <Settings size={17} />
          </button>
        </div>

        <div className="mb-5 flex items-center gap-2 rounded-xl bg-[#162a36] px-3 py-3">
          <Search size={17} className="text-white/45" />
          <input
            placeholder="Search message"
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/45"
          />
        </div>

        <div className="space-y-3">
          {chats.map((chat) => (
            <button
              key={chat.name}
              className={`flex w-full items-center gap-3 rounded-xl p-2 text-left transition ${
                chat.active ? "bg-[#132734]" : "hover:bg-white/5"
              }`}
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white/10">
                <Image
                  src={chat.avatar}
                  alt={chat.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <p className="truncate text-sm font-semibold">{chat.name}</p>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#fb8500]" />
                </div>
                <p className="truncate text-xs text-white/45">
                  {chat.preview} · {chat.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Chat window */}
      <section className="flex max-w-[620px] flex-1 flex-col overflow-hidden rounded-xl border border-[#314654] bg-[#0b1a24]">
        <div className="bg-[#27241d] px-6 py-7">
          <div className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/avatar.png"
                  alt="Bessie Cooper"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-semibold">Bessie Cooper</h2>
                  <span className="text-xs text-[#fb8500]">●</span>
                  <span className="text-xs text-white/60">
                    Digital Marketer
                  </span>
                </div>
                <p className="text-xs text-white/45">@bessiecooper</p>
              </div>
            </div>

            <div className="flex gap-7 text-center">
              <Stat value="12" label="Posts" />
              <Stat value="207" label="Followers" />
              <Stat value="64" label="Following" />
            </div>
          </div>

          <p className="mt-8 text-sm text-white/75">
            Libra || CR7 || CFC|| Ambivert || Legal practitioner
          </p>
        </div>

        <div className="flex-1 space-y-6 px-6 py-5">
          <div className="mx-auto w-fit rounded-full border border-white/15 px-5 py-2 text-xs text-white/60">
            Today
          </div>

          {messages.map((message) => (
            <div
              key={message.time}
              className={`flex ${message.mine ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-[72%]">
                {!message.mine && (
                  <p className="mb-2 text-xs]">
                    <span className="font-semibold text-[#FFB703] ">
                      {message.from}
                    </span>{" "}
                    <span className="text-white/45">{message.role}</span>
                  </p>
                )}

                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.mine
                      ? "rounded-br-sm bg-[#028fd3]"
                      : "rounded-tl-sm bg-transparent text-white/85"
                  }`}
                >
                  {message.text}
                </div>

                <p className="mt-1 text-right text-[10px] text-white/35">
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 bg-[#122532] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center rounded-xl border border-white/10 bg-[#1a3444] px-4 py-3">
              <input
                placeholder="What’s on your mind?"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/45"
              />
              <button className="text-[#fb8500]">
                <Send size={17} />
              </button>
            </div>

            <button className="rounded-xl p-3 text-white/65 hover:bg-white/10">
              <ImageIcon size={18} />
            </button>

            <button className="rounded-xl p-3 text-white/65 hover:bg-white/10">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-lg font-bold text-[#ffb000]">{value}</p>
      <p className="text-[10px] text-white/55">{label}</p>
    </div>
  );
}

export default Message