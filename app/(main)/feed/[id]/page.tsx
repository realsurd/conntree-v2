import { notFound } from "next/navigation";
import PostThread from "../post-thread";
import { posts } from "@/lib/data/post";
import BackButton from "@/components/back-button";

interface Props {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) return notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Back Button */}
      <BackButton />

      {/* Single Post */}
      <PostThread post={post} />
    </div>
  );
}
