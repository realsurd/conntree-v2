import React, { useRef, useState } from "react";
import { VscSend } from "react-icons/vsc";
import { GrGallery } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";

interface CommentBoxProps {
  onSend?: (data: { text: string; image?: File }) => void;
}

const CommentBox = ({ onSend }: CommentBoxProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleOpenGallery = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSend = () => {
    if (!text.trim() && !image) return;

    const payload = {
      text,
      ...(image && { image }),
    };

    console.log("Sending comment:", payload);
    onSend?.(payload);

    // reset
    setText("");
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-2 p-3 border-b border-white/30">
      {/* Image Preview */}
      {image && (
        <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-white/10">
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="w-full h-full object-cover"
          />

          {/* Close Icon */}
          <button
            onClick={handleRemoveImage}
            className="absolute top-1 right-1 bg-black/70 rounded-full"
          >
            <IoIosClose className="text-white text-xl" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* Avatar */}
        <img
          src="/avatars/avatar1.png"
          alt="user avatar"
          className="w-8 h-8 rounded-full object-cover"
        />

        {/* Input */}
        <div className="flex-1 rounded-full py-2">
          <div className="flex justify-between items-center">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a comment..."
              className="w-full bg-transparent outline-none text-sm placeholder:text-gray-400"
            />

            <div className="flex gap-4 items-center">
              {/* Send */}
              <VscSend
                onClick={handleSend}
                className="text-2xl text-[#FB8500] cursor-pointer"
              />

              {/* Gallery */}
              <GrGallery
                onClick={handleOpenGallery}
                className="text-lg cursor-pointer text-white/70 hover:text-white"
              />

              {/* Hidden Input */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
