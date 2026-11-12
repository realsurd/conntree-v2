"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  CalendarDays,
  ChartColumn,
  ChartLine,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { SiAlgorand } from "react-icons/si";
import { useProfile } from "@/hooks/use-profile";
import { formatCount } from "@/utils/format";
import { EmptyState, SectionCard } from "./section-card";

const StatCard = ({
  icon,
  label,
  value,
  note,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  note: string;
}) => (
  <div className="rounded-xl bg-[#8ECAE6]/10 px-6 py-5">
    <p className="flex items-center gap-2 text-sm text-[#A9A9A9]">
      <span className="text-[#FB8500]" aria-hidden="true">
        {icon}
      </span>
      {label}
    </p>
    <p className="mt-3 text-3xl font-bold leading-none text-[#FCFCFC]">
      {value}
    </p>
    <p className="mt-3 text-sm text-[#A9A9A9]">{note}</p>
  </div>
);

const orDash = (value: number | null) =>
  value === null ? "—" : formatCount(value);

/**
 * "Analytics": figures worked out from the profile's posts. Nothing here is
 * invented; the engagement history chart waits for the backend to record it.
 */
export const ProfileAnalytics = () => {
  const { status, profile, posts } = useProfile();

  if (status !== "ready" || !profile) {
    return (
      <EmptyState
        icon={<ChartColumn size={22} />}
        title={
          status === "loading" ? "Loading analytics…" : "Analytics unavailable"
        }
        text={
          status === "loading"
            ? "One moment."
            : "Check your connection and refresh the page."
        }
      />
    );
  }

  const totals = posts.reduce(
    (sum, post) => ({
      likes: sum.likes + post.engagement.likes,
      comments: sum.comments + post.engagement.comments,
      shares: sum.shares + post.engagement.shares,
      reward: sum.reward + post.engagement.reward,
    }),
    { likes: 0, comments: 0, shares: 0, reward: 0 },
  );
  const engagement = totals.likes + totals.comments + totals.shares;
  const postCount = `${posts.length} post${posts.length === 1 ? "" : "s"}`;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          icon={<TrendingUp size={18} />}
          label="Total engagement"
          value={formatCount(engagement)}
          note={`Likes, comments and reposts on ${postCount}`}
        />
        <StatCard
          icon={<Sparkles size={18} />}
          label="Total rewards"
          value={orDash(profile.rewards)}
          note="Earned on ConnTree so far"
        />
        <StatCard
          icon={<Users size={18} />}
          label="Followers"
          value={orDash(profile.stats.followers)}
          note={`Following ${orDash(profile.stats.following)}`}
        />
      </div>

      <SectionCard
        icon={<CalendarDays size={20} />}
        title="Weekly engagement"
        description="Likes, comments and reposts per day over the last seven days."
      >
        <EmptyState
          icon={<ChartLine size={22} />}
          title="No history yet"
          text="ConnTree does not record engagement over time yet. The weekly chart appears here as soon as it does."
        />
      </SectionCard>

      <SectionCard
        icon={<ChartColumn size={20} />}
        title="Posts"
        description="How each post has performed."
        aside={postCount}
      >
        {posts.length === 0 ? (
          <EmptyState
            icon={<ChartColumn size={22} />}
            title="Nothing to measure yet"
            text="Publish a post and its likes, comments, reposts and rewards show up here."
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-[#A9A9A9]">
                  <th scope="col" className="pb-3 pr-4 font-medium">
                    Post
                  </th>
                  <th scope="col" className="pb-3 pr-4 text-right font-medium">
                    Likes
                  </th>
                  <th scope="col" className="pb-3 pr-4 text-right font-medium">
                    Comments
                  </th>
                  <th scope="col" className="pb-3 pr-4 text-right font-medium">
                    Reposts
                  </th>
                  <th scope="col" className="pb-3 text-right font-medium">
                    Reward
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="max-w-[420px] py-3 pr-4">
                      <Link
                        href={`/feed/${post.id}`}
                        className="line-clamp-1 text-[#FCFCFC] hover:text-[#FB8500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB8500]"
                      >
                        {post.content}
                      </Link>
                    </td>
                    <td className="py-3 pr-4 text-right tabular-nums">
                      {formatCount(post.engagement.likes)}
                    </td>
                    <td className="py-3 pr-4 text-right tabular-nums">
                      {formatCount(post.engagement.comments)}
                    </td>
                    <td className="py-3 pr-4 text-right tabular-nums">
                      {formatCount(post.engagement.shares)}
                    </td>
                    <td className="py-3 text-right tabular-nums">
                      <span className="inline-flex items-center gap-1 text-[#FB8500]">
                        {post.engagement.reward}
                        <SiAlgorand size={12} aria-hidden="true" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-white/10 font-semibold text-[#FCFCFC]">
                  <th scope="row" className="pt-3 pr-4 text-left">
                    Total
                  </th>
                  <td className="pt-3 pr-4 text-right tabular-nums">
                    {formatCount(totals.likes)}
                  </td>
                  <td className="pt-3 pr-4 text-right tabular-nums">
                    {formatCount(totals.comments)}
                  </td>
                  <td className="pt-3 pr-4 text-right tabular-nums">
                    {formatCount(totals.shares)}
                  </td>
                  <td className="pt-3 text-right tabular-nums">
                    <span className="inline-flex items-center gap-1 text-[#FB8500]">
                      {Math.round(totals.reward * 100) / 100}
                      <SiAlgorand size={12} aria-hidden="true" />
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </SectionCard>
    </div>
  );
};
