import { Activity, Bell } from "lucide-react";
import { EmptyState, SectionCard } from "../section-card";

// /profile/activity: what happened around this account. Nothing records
// activity yet (likes, comments and follows are not stored), so the list is
// empty until the backend provides it.
export default function ActivityPage() {
  return (
    <SectionCard
      icon={<Bell size={20} />}
      title="Recent Activity"
      description="Likes, comments, new followers and rewards, as they happen."
    >
      <EmptyState
        icon={<Activity size={22} />}
        title="No activity yet"
        text="Activity will appear here once ConnTree starts recording it. Highlights and achievements will be added here too."
      />
    </SectionCard>
  );
}
