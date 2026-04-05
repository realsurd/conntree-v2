import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import CommunitiesFeed from "@/components/communities-feed";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 grid grid-cols-12 gap-6 px-6 py-4">
          {/* Feed - BIGGER */}
          <main className="col-span-8 overflow-y-auto pr-2">{children}</main>

          {/* Communities Feed (Right Panel) */}
          <aside className="col-span-4">
            <CommunitiesFeed />
          </aside>
        </div>
      </div>
    </div>
  );
}
