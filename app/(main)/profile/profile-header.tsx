"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import type { IProfileSummary } from "@/interface/profile.interface";
import { useProfile } from "@/hooks/use-profile";
import { formatCount } from "@/utils/format";
import { UserEditIcon } from "./icons";
import { ProfileRewards } from "./profile-rewards";
import { ProfileTabs } from "./profile-tabs";

// Breakpoints are chosen for the width of the main column, which is the
// viewport minus the 288px sidebar and the layout's padding: from `lg` the
// avatar sits beside the text, from `xl` the figures sit beside the name. The
// design's 150px right gutter and its divider (85px short of the edge) only
// apply once the card has its full 1031px width, from a 1376px viewport.
const CARD =
  "relative overflow-hidden rounded-lg border border-[#6E6E6E] bg-[#FB8501]/10";

/** Avatar with initials when there is no picture or it fails to load. */
const Avatar = ({ profile }: { profile: IProfileSummary }) => {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div className="size-24 shrink-0 overflow-hidden rounded-full bg-[#8ECAE6]/10">
      {profile.avatar && !failed ? (
        <img
          src={profile.avatar}
          alt=""
          width={96}
          height={96}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid h-full w-full place-items-center text-2xl font-semibold text-[#FCFCFC]"
        >
          {initials}
        </span>
      )}
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: number | null }) => (
  <div className="flex flex-col items-center gap-2">
    <span
      className="text-2xl font-bold leading-[29px] text-[#FFB703]"
      title={value === null ? "Not available yet" : undefined}
    >
      {value === null ? "—" : formatCount(value)}
    </span>
    <span className="text-xs leading-[15px] tracking-[-0.048px] text-[#FCFCFC]">
      {label}
    </span>
  </div>
);

const ProfileAction = ({ isOwner }: { isOwner: boolean }) =>
  isOwner ? (
    <Link
      href="/profile/settings"
      aria-label="Edit profile"
      title="Edit profile"
      className="flex h-[38px] w-[68px] items-center justify-center rounded-xl border border-[#FB8500] text-[#FB8500] transition-colors hover:bg-[#FB8501]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB8500]"
    >
      <UserEditIcon />
    </Link>
  ) : (
    // Following needs the backend; the button is shown but cannot act yet.
    <button
      type="button"
      disabled
      title="Following is not available yet"
      className="flex h-[38px] min-w-[68px] items-center justify-center rounded-xl border border-[#FB8500] px-4 text-sm font-semibold text-[#FB8500] disabled:cursor-not-allowed disabled:opacity-60"
    >
      Follow
    </button>
  );

const ProfileHeaderSkeleton = () => (
  <section aria-busy="true" aria-label="Loading profile" className={CARD}>
    <div className="flex flex-col gap-6 px-5 pb-6 pt-5 lg:flex-row lg:px-[43px] lg:pt-[31px] xl:pb-[58px] min-[1376px]:pr-[150px]">
      <div className="flex shrink-0 flex-col items-center gap-[10px] self-start">
        <span className="size-24 animate-pulse rounded-full bg-white/10" />
        <span className="h-[38px] w-[68px] animate-pulse rounded-xl bg-white/10" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
          <div className="flex flex-col gap-3">
            <span className="h-[22px] w-56 animate-pulse rounded bg-white/10" />
            <span className="h-[15px] w-32 animate-pulse rounded bg-white/10" />
          </div>
          <div className="flex gap-6 xl:mt-[22px]">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-[52px] w-14 animate-pulse rounded bg-white/10"
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex max-w-[700px] flex-col gap-2 xl:mt-[21px]">
          <span className="h-3 w-full animate-pulse rounded bg-white/10" />
          <span className="h-3 w-11/12 animate-pulse rounded bg-white/10" />
          <span className="h-3 w-2/3 animate-pulse rounded bg-white/10" />
        </div>
      </div>
    </div>
    <div className="h-px bg-[#707988] min-[1376px]:mr-[85px]" />
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 pb-[22px] pt-[17px] lg:px-[39px] min-[1376px]:pr-[152px]">
      <ProfileTabs />
      <div className="ml-auto">
        <ProfileRewards total={null} loading />
      </div>
    </div>
  </section>
);

export const ProfileHeader = () => {
  const { status, profile, isOwner } = useProfile();

  if (status === "loading") return <ProfileHeaderSkeleton />;

  if (status === "error" || !profile) {
    return (
      <section role="alert" className={`${CARD} px-6 py-10 text-center`}>
        <p className="text-base font-semibold text-[#FCFCFC]">
          Couldn&apos;t load this profile
        </p>
        <p className="mt-1 text-sm text-[#A9A9A9]">
          Check your connection and refresh the page.
        </p>
      </section>
    );
  }

  return (
    <section aria-labelledby="profile-name" className={CARD}>
      <div className="flex flex-col gap-6 px-5 pb-6 pt-5 lg:flex-row lg:px-[43px] lg:pt-[31px] xl:pb-[58px] min-[1376px]:pr-[150px]">
        <div className="flex shrink-0 flex-col items-center gap-[10px] self-start">
          <Avatar profile={profile} />
          <ProfileAction isOwner={isOwner} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div className="flex min-w-0 flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <h1
                  id="profile-name"
                  className="text-lg font-semibold leading-[22px] text-[#FFB703]"
                >
                  {profile.name}
                </h1>
                {profile.verified && (
                  <IoIosCheckmarkCircle
                    className="text-[#FB8500]"
                    size={16}
                    aria-label="Verified"
                  />
                )}
                {profile.username && (
                  <>
                    <span
                      aria-hidden="true"
                      className="text-sm leading-[1.75] text-[#FCFCFC]"
                    >
                      /
                    </span>
                    <span className="text-xs leading-[15px] tracking-[-0.048px] text-[#FCFCFC] [overflow-wrap:anywhere]">
                      @{profile.username}
                    </span>
                  </>
                )}
              </div>
              {profile.headline && (
                <p className="text-xs leading-[15px] tracking-[-0.048px] text-[#FCFCFC]">
                  {profile.headline}
                </p>
              )}
            </div>

            <div className="flex items-center gap-6 xl:mt-[22px]">
              <Stat label="Posts" value={profile.stats.posts} />
              <Stat label="Followers" value={profile.stats.followers} />
              <Stat label="Following" value={profile.stats.following} />
            </div>
          </div>

          {profile.bio && (
            <p className="mt-4 max-w-[700px] whitespace-pre-line break-words text-xs font-semibold leading-4 text-[#A9A9A9] xl:mt-[21px]">
              {profile.bio}
            </p>
          )}
        </div>
      </div>

      <div className="h-px bg-[#707988] min-[1376px]:mr-[85px]" />

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 pb-[22px] pt-[17px] lg:px-[39px] min-[1376px]:pr-[152px]">
        <ProfileTabs />
        <div className="ml-auto">
          <ProfileRewards total={profile.rewards} />
        </div>
      </div>
    </section>
  );
};
