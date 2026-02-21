"use client";

export default function RotatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden h-full w-full">
      <div
        className="
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          animate-rotate-fast
          transform-gpu
          origin-center
          motion-reduce:animate-none
        "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du153mzwk/image/upload/v1771288710/Frame_5827_asofhh.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
