"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import PostCard from "@/app/(main)/feed/post-card";
import { useProfile } from "@/hooks/use-profile";
import { EmptyState } from "./section-card";

const PostsSkeleton = () => (
  <div aria-busy="true" aria-label="Loading posts" className="space-y-4">
    {[0, 1].map((i) => (
      <div key={i} className="space-y-4 rounded-2xl border border-white/10 p-6">
        <div className="flex items-center gap-3">
          <span className="size-10 animate-pulse rounded-full bg-white/10" />
          <span className="h-4 w-40 animate-pulse rounded bg-white/10" />
        </div>
        <span className="block h-4 w-3/4 animate-pulse rounded bg-white/10" />
      </div>
    ))}
  </div>
);

/** "My Posts": the posts the profile has written, in the feed's own post card. */
export const ProfilePostsFeed = () => {
  const { status, profile, posts, isOwner } = useProfile();

  if (status === "loading") return <PostsSkeleton />;

  if (status === "error" || !profile) {
    return (
      <EmptyState
        icon={<FileText size={22} />}
        title="Couldn't load posts"
        text="Check your connection and refresh the page."
      />
    );
  }

  if (posts.length === 0) {
    return (
      <EmptyState
        icon={<FileText size={22} />}
        title="No posts yet"
        text={
          isOwner
            ? "Posts you publish will show up here."
            : `${profile.name} hasn't posted anything yet.`
        }
        action={
          isOwner && (
            <Link
              href="/create"
              className="inline-block rounded-full bg-[#FB8500] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#ff9b3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB8500]"
            >
              Create a post
            </Link>
          )
        }
      />
    );
  }

  return (
    <section aria-label="Posts" className="space-y-4">
      {/* No Follow button on your own posts. */}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} showFollow={!isOwner} />
      ))}
    </section>
  );
};
