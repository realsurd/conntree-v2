export type Post = {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    verified?: boolean;
  };
  content: string;
  media?: string[];
  engagement: {
    likes: number;
    comments: number;
    shares: number;
    reward: number;
  };
};

// Mock feed data, used until posts come from the backend.
// ConnTree's account and Sadiq's are real. Every other account is made up, and
// the avatars, images and clips under /mock were drawn for this file.
export const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "ConnTree",
      username: "ConnTreeHQ",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1772533292/image_2_kyhega.png",
      verified: true,
    },
    content:
      "Welcome to ConnTree 🌱 A new kind of social space where your voice isn’t just heard — it’s valued. Here, creators don’t chase algorithms. Communities grow organically. And every post, idea, and interaction has real meaning. ConnTree was built for those who believe the internet should empower people, not exploit them. Create. Connect. Earn. 🌍 This is just the beginning. #ConnTree #Web3 #Creators #Decentralized #BuildInPublic",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775002138/ChatGPT_Image_Apr_1_2026_01_07_55_AM_zhq15o.png",
    ],
    engagement: {
      likes: 15000,
      comments: 700,
      shares: 6000,
      reward: 30,
    },
  },
  {
    id: "2",
    author: {
      name: "Bessie Cooper",
      username: "bessie.eth",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1774437630/902a4da6d363e7419862c6cc52a7d0fc4fcda463_mes9ee.png",
      verified: true,
    },
    content:
      "Just launched my first NFT collection! The intersection of art and tech is crazy. What do you think?",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1774713457/Rectangle_5340_p5lqay.png",
      "https://res.cloudinary.com/du153mzwk/image/upload/v1774713471/1db4a94870f6ecaa0772cbb3710e50f7f3960b88_to2s3x.jpg",
    ],
    engagement: {
      likes: 16200,
      comments: 132,
      shares: 2000,
      reward: 0.03,
    },
  },
  {
    id: "3",
    author: {
      name: "Jordan Kim",
      username: "jordan.web3",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562572/animoji_weqlnz.png",
    },
    content:
      "Tokenomics should reward patience, not hype. Building for the long term always wins.",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1774713457/Rectangle_5340_p5lqay.png",
    ],
    engagement: {
      likes: 8200,
      comments: 54,
      shares: 900,
      reward: 0.01,
    },
  },
  {
    id: "4",
    author: {
      name: "Sadiq",
      username: "sadiqCNT",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1772456358/image_23_mfmeai.png",
      verified: true,
    },
    content:
      "ConnTree isn’t just another platform. It’s a shift in how creators earn from attention.",
    engagement: {
      likes: 24000,
      comments: 410,
      shares: 5000,
      reward: 0.12,
    },
  },
  {
    id: "5",
    author: {
      name: "Zuri",
      username: "zuri.animates",
      avatar: "/mock/avatars/zuri.svg",
      verified: true,
    },
    content:
      "Commissions are open again. Stickers, mascots, profile characters. And yes, I take ALGO. 😌",
    media: ["/mock/posts/zuri-commissions.svg"],
    engagement: {
      likes: 1840,
      comments: 96,
      shares: 212,
      reward: 0.42,
    },
  },
  {
    id: "6",
    author: {
      name: "Zuri",
      username: "zuri.animates",
      avatar: "/mock/avatars/zuri.svg",
      verified: true,
    },
    content: "New here, and I did not come empty-handed. First loop is up. 🌱",
    media: ["/mock/posts/zuri-seedling.mp4"],
    engagement: {
      likes: 932,
      comments: 41,
      shares: 77,
      reward: 0.18,
    },
  },
  {
    id: "7",
    author: {
      name: "Ada",
      username: "ada.onchain",
      avatar: "/mock/avatars/ada.svg",
      verified: true,
    },
    content:
      "Everyone asks what a token is worth. Fewer people ask what it lets you do. The useful part of this technology is almost boring: a record that nobody can quietly edit, and a payment that needs nobody’s permission. Price is the headline. Ownership is the story.",
    media: ["/mock/posts/ada-records.svg"],
    engagement: {
      likes: 5120,
      comments: 318,
      shares: 1240,
      reward: 1.35,
    },
  },
  {
    id: "8",
    author: {
      name: "Ada",
      username: "ada.onchain",
      avatar: "/mock/avatars/ada.svg",
      verified: true,
    },
    content:
      "Three months of building in public taught me one thing. The people who reply to your worst drafts are the ones who make the good ones possible. Find five of them, and reply to theirs too. That is the whole growth strategy. 🤝",
    media: ["/mock/posts/ada-circle.svg"],
    engagement: {
      likes: 2764,
      comments: 187,
      shares: 530,
      reward: 0.74,
    },
  },
  {
    id: "9",
    author: {
      name: "Femi | Product Designer",
      username: "femi.designs",
      avatar: "/mock/avatars/femi.svg",
      verified: true,
    },
    content:
      "Same screen, twice. The second version only changes spacing and the order of things. No new colors and no new font. Structure does most of the work, so sort that out before you touch the paint.",
    media: ["/mock/posts/femi-before.svg", "/mock/posts/femi-after.svg"],
    engagement: {
      likes: 3410,
      comments: 142,
      shares: 688,
      reward: 0.61,
    },
  },
  {
    id: "10",
    author: {
      name: "Femi | Product Designer",
      username: "femi.designs",
      avatar: "/mock/avatars/femi.svg",
      verified: true,
    },
    content: "Back at the desk. ☕",
    media: ["/mock/posts/femi-desk.svg"],
    engagement: {
      likes: 268,
      comments: 12,
      shares: 9,
      reward: 0.04,
    },
  },
  {
    id: "11",
    author: {
      name: "Femi | Product Designer",
      username: "femi.designs",
      avatar: "/mock/avatars/femi.svg",
      verified: true,
    },
    content:
      "Hi, I’m Femi. I design product interfaces, and I’m here to meet people who like to ship. Say hello.",
    media: ["/mock/posts/femi-hello.svg"],
    engagement: {
      likes: 1105,
      comments: 203,
      shares: 64,
      reward: 0.22,
    },
  },
  {
    id: "12",
    author: {
      name: "Zuri",
      username: "zuri.animates",
      avatar: "/mock/avatars/zuri.svg",
      verified: true,
    },
    content:
      "Pixel-art loop for a client’s launch page. Thirty frames, about a week of evenings. I also do character loops, logo stings and short explainers, so message me if you have a project in mind.",
    media: ["/mock/posts/zuri-rocket.mp4"],
    engagement: {
      likes: 2290,
      comments: 118,
      shares: 345,
      reward: 0.57,
    },
  },
  {
    id: "13",
    author: {
      name: "Zuri",
      username: "zuri.animates",
      avatar: "/mock/avatars/zuri.svg",
      verified: true,
    },
    content: "My best work happens after midnight. The owls understand. 🦉",
    media: ["/mock/posts/zuri-night.svg"],
    engagement: {
      likes: 760,
      comments: 58,
      shares: 43,
      reward: 0.11,
    },
  },
  {
    id: "14",
    author: {
      name: "Zuri",
      username: "zuri.animates",
      avatar: "/mock/avatars/zuri.svg",
      verified: true,
    },
    content:
      "Meet the squad: six characters from the series I’m drawing this month. Tell me your favorite and I’ll animate the winner first. #characterdesign",
    media: ["/mock/posts/zuri-squad.svg"],
    engagement: {
      likes: 1512,
      comments: 264,
      shares: 131,
      reward: 0.33,
    },
  },
  {
    id: "15",
    author: {
      name: "Kai",
      username: "kai.trades",
      avatar: "/mock/avatars/kai.svg",
      verified: true,
    },
    content:
      "A year from now, most traders will not place their own orders. Their software will.",
    engagement: {
      likes: 684,
      comments: 92,
      shares: 120,
      reward: 0.09,
    },
  },
  {
    id: "16",
    author: {
      name: "Kai",
      username: "kai.trades",
      avatar: "/mock/avatars/kai.svg",
      verified: true,
    },
    content:
      "Risk management is just admitting, in advance, that you might be wrong.",
    engagement: {
      likes: 1930,
      comments: 77,
      shares: 402,
      reward: 0.27,
    },
  },
  {
    id: "17",
    author: {
      name: "Kai",
      username: "kai.trades",
      avatar: "/mock/avatars/kai.svg",
      verified: true,
    },
    content:
      "I spent the evening letting a small script manage a test wallet. I am not an engineer. What I learned: • Give it a tiny budget first • Log every action it takes • Never hand it keys you cannot afford to lose. Slow and careful, and still the most interesting thing I did all week. 🌍",
    engagement: {
      likes: 3077,
      comments: 241,
      shares: 590,
      reward: 0.66,
    },
  },
  {
    id: "18",
    author: {
      name: "Rootline DAO",
      username: "rootlinedao",
      avatar: "/mock/avatars/rootline.svg",
      verified: true,
    },
    content:
      "Voting opens on Monday. Every member who reviewed grant proposals this season gets a say in how the next round is funded. One wallet, one voice, and the results sit on-chain for anyone to check. Details are in the community tab. 🌳",
    media: ["/mock/posts/rootline-vote.mp4"],
    engagement: {
      likes: 4418,
      comments: 356,
      shares: 972,
      reward: 1.08,
    },
  },
];
