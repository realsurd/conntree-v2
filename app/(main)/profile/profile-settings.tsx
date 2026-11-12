"use client";

import Link from "next/link";
import { Settings, Wallet } from "lucide-react";
import { useProfile } from "@/hooks/use-profile";
import { EmptyState, SectionCard } from "./section-card";

const shortAddress = (address: string) =>
  `${address.slice(0, 6)}…${address.slice(-4)}`;

/**
 * "Settings": the account details the app has today, read-only. Editing a
 * profile needs the backend, so there is no form that pretends to save.
 */
export const ProfileSettings = () => {
  const { status, profile } = useProfile();

  if (status !== "ready" || !profile) {
    return (
      <EmptyState
        icon={<Settings size={22} />}
        title={
          status === "loading" ? "Loading settings…" : "Settings unavailable"
        }
        text={
          status === "loading"
            ? "One moment."
            : "Check your connection and refresh the page."
        }
      />
    );
  }

  const fields: [string, string | undefined][] = [
    ["Display name", profile.name],
    ["Username", profile.username && `@${profile.username}`],
    ["Headline", profile.headline],
    ["Bio", profile.bio],
  ];

  return (
    <div className="space-y-4">
      <SectionCard
        icon={<Settings size={20} />}
        title="Profile settings"
        description="Editing your profile is not available yet: it needs the ConnTree API, which is still being built. This is what your profile shows today."
      >
        <dl className="divide-y divide-white/10">
          {fields.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-1 py-3 sm:grid-cols-[160px_1fr] sm:gap-6"
            >
              <dt className="text-sm text-[#A9A9A9]">{label}</dt>
              <dd className="break-words text-sm text-[#FCFCFC]">
                {value || <span className="text-[#707988]">Not set</span>}
              </dd>
            </div>
          ))}
        </dl>
      </SectionCard>

      <SectionCard
        icon={<Wallet size={20} />}
        title="Wallet"
        description="The Algorand wallet linked to this account."
      >
        {profile.walletAddress ? (
          <p
            className="break-all font-mono text-sm text-[#FCFCFC]"
            title={profile.walletAddress}
          >
            <span className="sm:hidden">
              {shortAddress(profile.walletAddress)}
            </span>
            <span className="hidden sm:inline">{profile.walletAddress}</span>
          </p>
        ) : (
          <EmptyState
            icon={<Wallet size={22} />}
            title="No wallet connected"
            text="Connect a wallet to sign in and start earning rewards."
            action={
              <Link
                href="/auth/register"
                className="inline-block rounded-full bg-[#FB8500] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#ff9b3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB8500]"
              >
                Get started
              </Link>
            }
          />
        )}
      </SectionCard>
    </div>
  );
};
