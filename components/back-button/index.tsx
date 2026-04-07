"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 text-sm text-gray-400 hover:text-white"
    >
      ← Back to Feed
    </button>
  );
}
