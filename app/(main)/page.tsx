import Feed from "@/app/(main)/feed";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-10">
        <Feed />
      </main>
    </div>
  );
}
