"use client";
import React, { useState } from "react";
import CommentBox from "./comment/comment-box";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { SiAlgorand } from "react-icons/si";
import CommentReply from "./comment/comment-reply";

interface PostThreadProps {
  post: any;
}

/* 🔹 SINGLE COMMENT COMPONENT */
const CommentItem = ({
  comment,
  timeAgo,
}: {
  comment: any;
  timeAgo: (timestamp: number) => string;
}) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes || 0);
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <img src={comment.author.avatar} className="w-8 h-8 rounded-full" />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{comment.author.name}</p>

            <span className="text-xs text-white/40">
              {timeAgo(comment.createdAt)}
            </span>
          </div>

          <p className="text-sm text-white/90">{comment.text}</p>

          {comment.image && (
            <img
              src={comment.image}
              className="mt-2 rounded-lg max-h-40 object-cover"
            />
          )}

          {/* 🔹 ACTIONS */}
          <div className="flex flex-col gap-2 mt-2 text-[11px] text-white/70">
            {/* TOP ACTION ROW */}
            <div className="flex gap-5 items-center">
              {/* LIKE */}
              <button
                onClick={() => {
                  setLiked(!liked);
                  setLikesCount((prev: number) =>
                    liked ? prev - 1 : prev + 1,
                  );
                }}
                className="flex items-center gap-1"
              >
                <AiOutlineHeart
                  className={`text-lg ${
                    liked ? "text-[#FB8500]" : "text-white"
                  }`}
                />
                {likesCount}
              </button>

              {/* COMMENT / REPLY */}
              <button
                onClick={() => setShowReply(!showReply)}
                className="flex items-center gap-1"
              >
                <AiOutlineComment className="text-lg" />
              </button>

              {/* REPOST */}
              <button className="flex items-center gap-1">
                <BiRepost className="text-lg" />
                {comment.shares || 0}
              </button>

              {/* REWARD */}
              <span className="ml-auto flex items-center gap-1 text-[#FB8500] font-bold">
                {comment.reward || 0} <SiAlgorand />
              </span>
            </div>

            {/* 🔹 REPLY COMPONENT (UNDER ACTIONS) */}
            {showReply && (
              <div className="pl-2 border-l border-white/10">
                <CommentReply />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PostThread = ({ post }: PostThreadProps) => {
  const [comments, setComments] = useState(post.comments || []);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.engagement?.likes || 0);

  const handleSendComment = (data: { text: string; image?: File }) => {
    const newComment = {
      id: Date.now(),
      text: data.text,
      image: data.image ? URL.createObjectURL(data.image) : null,
      createdAt: Date.now(),
      author: {
        name: "You",
        avatar:
          "https://res.cloudinary.com/du153mzwk/image/upload/v1775577955/image_37_hpbrpo.png", // Placeholder avatar for the current user
      },
      likes: 0,
      shares: 0,
      reward: 0,
    };

    setComments((prev: any) => [newComment, ...prev]);
  };
  //Comment timestamp formatter (e.g., "5m ago", "2h ago")
  const timeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return `${seconds}s ago`;
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div className="flex flex-col">
      {/* 🔹 POST CONTENT */}
      <div className="p-4 border-white/10">
        <div className="flex gap-3">
          <img src={post.author.avatar} className="w-10 h-10 rounded-full" />

          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-gray-400">@{post.author.username}</p>
          </div>
        </div>

        <p className="mt-3">{post.content}</p>

        {/* MEDIA */}
        {post.media && (
          <div className="grid grid-cols-2 gap-2 mt-3">
            {post.media.map((url: string, i: number) => {
              const isVideo = url.match(/\.(mp4|webm|ogg|mov)$/);

              return (
                <div
                  key={i}
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
      </div>
      {/* 🔹 POST ACTIONS */}
      <div className="flex gap-6 text-sm px-4 py-3 border-b border-white/10">
        {/* LIKE */}
        <button
          onClick={() => {
            setLiked(!liked);
            setLikesCount((prev: number) => (liked ? prev - 1 : prev + 1));
          }}
          className="flex items-center gap-1 text-[12px]"
        >
          <AiOutlineHeart
            className={`text-xl transition ${
              liked ? "text-[#FB8500]" : "text-white"
            }`}
          />
          {likesCount}
        </button>

        {/* COMMENT (scroll focus later if needed) */}
        <button className="flex items-center gap-1 text-[12px]">
          <AiOutlineComment className="text-xl" />
          {comments.length}
        </button>

        {/* REPOST */}
        <button className="flex items-center gap-1 text-[12px]">
          <BiRepost className="text-xl" />
          {post.engagement?.shares || 0}
        </button>

        {/* REWARD */}
        <span className="text-[10px] font-bold border border-[#FB8500] text-[#FB8500] px-1 rounded-full flex items-center gap-1 ml-auto">
          {post.engagement?.reward || 0} <SiAlgorand />
        </span>
      </div>

      {/* 🔹 COMMENT BOX */}
      <CommentBox onSend={handleSendComment} />

      {/* 🔹 COMMENT COUNTER */}
      <h1 className="text-sm font-semibold text-white/80 px-4 mt-4">
        Comments ({comments.length})
      </h1>

      {/* 🔹 COMMENTS LIST */}
      <div className="flex flex-col py-5 gap-5">
        {comments.map((comment: any) => (
          <div
            key={comment.id}
            className="p-4 border-b bg-[#8ECAE61A] rounded-md border-white/10"
          >
            <CommentItem comment={comment} timeAgo={timeAgo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostThread;
