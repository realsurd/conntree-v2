import React from "react";

const CreatePost = () => {
  return (
    <div className="w-full h-full flex flex-col px-20 py-5 gap-5">
      <h1 className=" font-goodtiming font-bold text-2xl">Create a Post</h1>

      <div
        className="w-[626px]
                   pt-6 pr-8 pb-10 pl-8
                   flex flex-col gap-[28px]
                   border-b border-[#707988] bg-[#1a1f27] rounded-2xl"
      >

        {/* ─── User Row ────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-[#2a2f38]">
            <img
              src="https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1776381295/5366979e657fc9546d942d832169c93a4d9ce075_eorf9k.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500" />
          </div>

          {/* Username + badge + role */}
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm">Ibromax...</span>
            <span className="text-orange-400 text-base">
              <img
                src="https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1776381361/verify_u5axg3.png"
                alt="Verified Badge"
                className="w-4 h-4"
              />
            </span>
            <span className="text-gray-400 text-sm">UI/UX Designer</span>
          </div>
        </div>

        {/* ─── Textarea ────────────────────────────────────────────────────── */}
        <textarea
          placeholder="Share your thoughts"
          className="w-full min-h-[148px] bg-[#8ECAE61A] text-gray-300 placeholder-[#707988]
                     text-sm rounded-xl border border-[#2a2f38] p-4 resize-y
                     focus:outline-none focus:ring-1 focus:ring-orange-500
                     transition-colors duration-200"
        />

        {/* ─── Media Buttons ───────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Image Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl
                       border border-[#2a2f38] bg-[#8ECAE61A]
                       text-gray-300 text-sm font-medium
                      "
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <img src="https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1776381774/gallery-add_lcgeil.png" alt="upload photo" />
            </span>
            Image
          </button>

          {/* Video Button */}
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl
                       border border-[#2a2f38] bg-[#8ECAE61A]
                       text-gray-300 text-sm font-medium
                       "
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <img src="https://res.cloudinary.com/doedqs4f5/image/upload/q_auto/f_auto/v1776381801/video-add_rct1xh.png" alt="upload video" />
            </span>
            Video
          </button>
        </div>

        {/* ─── Publish Button ──────────────────────────────────────x────────── */}
        <button
          className="w-full py-4 rounded-full bg-[#FB8500]
                     text-white font-semibold text-base tracking-wide
                     hover:bg-[#e07800] active:scale-[0.98]
                     transition-all duration-200"
        >
          Publish
        </button>

      </div>

    </div>
  );
}
   

export default CreatePost;
