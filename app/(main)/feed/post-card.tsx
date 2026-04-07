"use client";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { SiAlgorand } from "react-icons/si";
import CommentBox from "./comment/comment-box";
import { useRouter } from "next/navigation";

interface Post {
  author: {
    avatar: string;
    name: string;
    username: string;
  };
  content: string;
  media?: string[];
  engagement: {
    likes: number;
    comments: number;
    shares: number;
    reward: number;
  };
}

const PostCard = ({ post }: { post: any }) => {
  const [expanded, setExpanded] = useState(false);

  const CHARACTER_LIMIT = 150;
  const isLong = post.content.length > CHARACTER_LIMIT;

  const displayedText = expanded
    ? post.content
    : post.content.slice(0, CHARACTER_LIMIT);

  // Comment Box State
  const [showCommentBox, setShowCommentBox] = useState(false);

  //like button state
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.engagement.likes);

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  // Router
  const router = useRouter();

  const handleClick = () => {
    sessionStorage.setItem("feed-scroll", window.scrollY.toString());
    router.push(`/feed/${post.id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="w-full text-white rounded-2xl p-6 space-y-6 border border-white/10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img src={post.author.avatar} className="w-10 h-10 rounded-full" />

          <div className="flex flex-1 items-center justify-between">
            {/* Name + Username */}
            <div className="flex flex-col leading-4">
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-white/60">@{post.author.username}</p>
            </div>

            {/* Follow Button */}
            <button className="text-[10px] font-bold border border-[#FB8500] text-[#FB8500] px-1 rounded-full flex items-center gap-1">
              Follow
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm">
            {displayedText} {!expanded && isLong && "..."}
          </p>

          {isLong && (
            <button
              onClick={(e) => {
                stop(e);
                setExpanded(!expanded);
              }}
              className="text-xs text-[#FB8500]"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        {/* Media */}
        {post.media && (
          <div className="grid grid-cols-2 gap-2">
            {post.media.map((url: string, i: number) => {
              const isVideo = url.match(/\.(mp4|webm|ogg|mov)$/);

              return (
                <div
                  key={i}
                  onClick={stop}
                  className="border border-white/10 rounded-xl overflow-hidden"
                >
                  {isVideo ? (
                    <video
                      src={url}
                      controls
                      className="w-full aspect-[4/5] object-cover"
                    />
                  ) : (
                    <img
                      src={url}
                      alt="post media"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex gap-6 text-sm items-center">
          {/* LIKE */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
              setLikesCount((prev) => (liked ? prev - 1 : prev + 1));
            }}
            className="text-[12px] flex items-center gap-1"
          >
            <AiOutlineHeart
              className={`text-xl transition ${
                liked ? "text-[#FB8500]" : "text-white"
              }`}
            />
            {likesCount}
          </button>

          {/* COMMENT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCommentBox(!showCommentBox);
            }}
            className="text-[12px] flex items-center gap-1"
          >
            <AiOutlineComment className="text-xl" />
            {post.engagement.comments}
          </button>

          {/* REPOST */}
          <button
            onClick={(e) => e.stopPropagation()}
            className="text-[12px] flex items-center gap-1"
          >
            <BiRepost className="text-xl" />
            {post.engagement.shares}
          </button>

          {/* REWARD */}
          <span
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] font-bold border border-[#FB8500] text-[#FB8500] px-1 rounded-full flex items-center gap-1 ml-auto"
          >
            {post.engagement.reward} <SiAlgorand />
          </span>
        </div>

        {showCommentBox && <CommentBox />}
      </div>
    </div>
  );
};

export default PostCard;
