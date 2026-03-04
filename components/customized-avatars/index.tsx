"use client";

import { useState, useRef } from "react";
import { RiGalleryLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import router from "next/router";

export default function AvatarCustomizer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const handleSave = () => {
    // For presentation: navigate to homepage
    router.push("/");
  };

  return (
    <div className="w-full flex flex-col items-center text-white space-y-2">
      {/* TOP TABS */}
      <div className="flex items-center gap-10 text-lg font-medium">
        <div className="flex items-center gap-2 text-gray-400">
          <FaUserCircle />
          <span>Avatar</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-white">
            <RiGalleryLine />
            <span>Upload</span>
          </div>
          <div className="h-[3px] w-20 bg-yellow-400 mt-2 rounded-full" />
        </div>
      </div>

      {/* UPLOAD CARD */}
      <div className="w-full max-w-lg border border-white/40 rounded-xl p-10 bg-gradient-to-b from-[#1b2c3b]/60 to-[#0e1c28]/60 backdrop-blur-md">
        {/* Inner Preview Area */}
        <div className="w-full h-40 rounded-2xl bg-[#1b2c3b]/60 flex items-center justify-center mb-8 overflow-hidden">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Avatar Preview"
              className="h-full object-contain"
            />
          ) : (
            <FaUserCircle size={50} className="text-black opacity-40" />
          )}
        </div>

        {/* Upload Button */}
        <div className="flex justify-center">
          <button
            onClick={handleUploadClick}
            className="px-10 py-3 rounded-xl border border-white text-white hover:bg-white/10 transition"
          >
            Upload
          </button>
        </div>

        {/* Hidden Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={handleSave}
        className="w-full max-w-lg bg-[#FB8500] hover:opacity-90 transition py-4 rounded-2xl text-lg font-semibold"
      >
        Save & Enter ConnTree
      </button>
    </div>
  );
}
