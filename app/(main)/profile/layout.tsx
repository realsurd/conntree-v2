import type { Metadata } from "next";
import { ProfileHeader } from "./profile-header";

export const metadata: Metadata = {
  title: "Profile · Conntree",
};

// The profile header (identity, figures, tabs, rewards) stays while the tabs
// below it change route: /profile, /profile/saved, /profile/analytics, ...
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-[1031px] flex-col gap-[14px] pb-10">
      <ProfileHeader />
      {children}
    </div>
  );
}
