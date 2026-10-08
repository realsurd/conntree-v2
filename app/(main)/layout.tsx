"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import CommunitiesFeed from "@/components/communities-feed";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define routes where right panel should be hidden
  const hideRightPanel = pathname.startsWith("/messages");

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 grid grid-cols-12 gap-6 px-6 py-4">
          {/* Main Content */}
          <main
            className={`overflow-y-auto pr-2 ${
              hideRightPanel ? "col-span-12" : "col-span-8"
            }`}
          >
            {children}
          </main>

          {/* Right Panel (conditionally rendered) */}
          {!hideRightPanel && (
            <aside className="col-span-4">
              <CommunitiesFeed />
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}