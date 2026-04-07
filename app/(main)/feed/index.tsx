import React from "react";

import PostCard from "./post-card";
import { posts } from "@/lib/data/post";
import FeedTabs from "./feed-tabs";

const Feed = () => {
  return (
    <div className="space-y-6 w-full">
      <FeedTabs />

      <div className="space-y-4 w-full">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
