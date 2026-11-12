"use client";

import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useWallet } from "@txnlab/use-wallet";
import { ProfileAtom } from "@/state/profile.atom";
import type { IProfile, IProfileSummary } from "@/interface/profile.interface";
import { posts as allPosts, type Post } from "@/lib/data/post";
import { developmentProfile } from "@/lib/data/profile";

export type ProfileStatus = "loading" | "ready" | "error";

export interface ProfileData {
  status: ProfileStatus;
  /** The profile to show; null while loading or after an error. */
  profile: IProfileSummary | null;
  /** Posts written by the profile, newest first. */
  posts: Post[];
  /** True when the visitor is looking at their own profile (always, on /profile). */
  isOwner: boolean;
  /** "api" when the profile came from ProfileAtom, "fixture" for the development data. */
  source: "api" | "fixture";
}

/** The API profile (IProfile) as the page displays it. */
const summarize = (profile: IProfile): IProfileSummary => ({
  id: profile.id,
  name:
    [profile.firstName, profile.lastName].filter(Boolean).join(" ") ||
    profile.email,
  avatar: profile.image,
  walletAddress: profile.walletAddress,
  // IProfile has no handle, headline, bio or follow counts yet.
  stats: { posts: null, followers: null, following: null },
  rewards: profile.awardedAlgos ?? null,
});

const publishedAt = (post: Post) =>
  post.createdAt ? new Date(post.createdAt).getTime() : 0;

/** The posts an account wrote, newest first (undated posts keep their order, last). */
const postsBy = (username: string | undefined) =>
  username
    ? allPosts
        .filter((post) => post.author.username === username)
        .sort((a, b) => publishedAt(b) - publishedAt(a))
    : [];

/**
 * The signed-in person's profile and posts.
 *
 * The profile comes from ProfileAtom when the backend has filled it. Until the
 * backend exists the atom is always null, and the development fixture from
 * lib/data/profile.ts is shown instead, so the page can be built and reviewed.
 * Posts come from the feed data (lib/data/post.ts) in both cases.
 *
 * Integration point: when the profile endpoint exists, load it here with
 * useClient(), return status "loading" while the request runs and "error" if
 * it fails, and take the posts from the API instead of the feed data.
 */
export const useProfile = (): ProfileData => {
  const apiProfile = useRecoilValue(ProfileAtom);
  const { activeAddress } = useWallet();

  return useMemo(() => {
    const source = apiProfile ? "api" : "fixture";
    const summary = apiProfile ? summarize(apiProfile) : developmentProfile;
    const posts = postsBy(summary.username);

    const profile: IProfileSummary = {
      ...summary,
      // The connected wallet stands in until the API profile carries one.
      walletAddress: summary.walletAddress ?? activeAddress ?? undefined,
      stats: {
        ...summary.stats,
        // The post count is counted from the posts when the source has none.
        posts: summary.stats.posts ?? posts.length,
      },
    };

    return { status: "ready", profile, posts, isOwner: true, source };
  }, [apiProfile, activeAddress]);
};
