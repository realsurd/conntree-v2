"use client";

export default function RotatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden h-full w-full">
      {/* Background Layer (Deep Layer) */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          w-[170%] h-[170%]
          -translate-x-1/2 -translate-y-1/2
          bg-cover bg-center bg-no-repeat
          animate-rotate-reverse
          opacity-40
          blur-xl
          transform-gpu
        "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du153mzwk/image/upload/v1771288710/Frame_5827_asofhh.png')",
        }}
      />

      {/* Main Rotating Layer */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          w-[150%] h-[150%]
          -translate-x-1/2 -translate-y-1/2
          bg-cover bg-center bg-no-repeat
          animate-rotate-slow
         
          transform-gpu
        "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du153mzwk/image/upload/v1771288710/Frame_5827_asofhh.png')",
        }}
      />

      {/* Gradient Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50" />
    </div>
  );
}
