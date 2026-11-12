import type { IProfileSummary } from "@/interface/profile.interface";

// Development fixture for the profile page, used only while there is no
// backend: useProfile() switches to the real profile (ProfileAtom) as soon as
// one is set. The person and the figures are made up and match the Figma
// reference; the avatar is the one the sidebar already shows, and the posts
// are the ones by this account in lib/data/post.ts.

export const developmentProfile: IProfileSummary = {
  id: "dev-profile",
  name: "Ibrahim Salami",
  username: "ibromaxdesign",
  avatar:
    "https://res.cloudinary.com/du153mzwk/image/upload/v1772456358/image_23_mfmeai.png",
  verified: true,
  headline: "Software Engineer",
  bio: "UI/UX Designer crafting clean, intuitive digital experiences. I turn complex ideas into simple, user-centered products with a strong focus on usability, aesthetics, and real-world impact. Passionate about design systems, interaction design, and building products that people actually enjoy using.",
  stats: {
    // Counted from the posts (useProfile fills it in).
    posts: null,
    followers: 207,
    following: 64,
  },
  rewards: 57,
};
