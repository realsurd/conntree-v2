import { Bookmark } from "lucide-react";
import { EmptyState, SectionCard } from "../section-card";

// /profile/saved: posts the reader has saved. Saving posts is not in the app
// yet (no save action on the post card and no backend), so the list is empty.
export default function SavedPostsPage() {
  return (
    <SectionCard
      icon={<Bookmark size={20} />}
      title="Saved Posts"
      description="0 posts saved for later"
    >
      <EmptyState
        icon={<Bookmark size={22} />}
        title="Nothing saved yet"
        text="Saving posts is coming soon. Posts you save will be kept here for later."
      />
    </SectionCard>
  );
}
