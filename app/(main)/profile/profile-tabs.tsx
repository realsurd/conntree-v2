"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Each tab is a route under /profile, so the selected tab is in the URL and
// survives a refresh, the back button and sharing the link.
export const PROFILE_TABS = [
  { label: "My Posts", href: "/profile" },
  { label: "Saved Posts", href: "/profile/saved" },
  { label: "Analytics", href: "/profile/analytics" },
  { label: "Activity", href: "/profile/activity" },
  { label: "Settings", href: "/profile/settings" },
] as const;

export const ProfileTabs = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/profile"
      ? pathname === "/profile"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    // Scrolls sideways when the tabs do not fit, e.g. on a phone.
    <nav
      aria-label="Profile sections"
      className="-mx-1 min-w-0 flex-1 basis-[20px] overflow-x-auto px-3 py-1"
    >
      <ul className="flex items-center gap-2.5">
        {PROFILE_TABS.map((tab) => {
          const active = isActive(tab.href);

          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`block whitespace-nowrap rounded-lg px-3.5 py-1.5 text-sm font-medium leading-[1.75] text-[#FCFCFC] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB8500] ${
                  active ? "bg-[#FB8501]/10" : "hover:bg-[#FB8501]/5"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
