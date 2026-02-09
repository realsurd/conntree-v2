"use client";

export default function RotatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          animate-rotate-slow
          transform-gpu
          origin-center
          motion-reduce:animate-none
        "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du153mzwk/image/upload/v1770498204/Property_1_Default_qs9s6y.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
