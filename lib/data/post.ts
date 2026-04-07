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
      "Welcome to ConnTree 🌱A new kind of social space where your voice isn’t just heard — it’s valued. Here, creators don’t chase algorithms. Communities grow organically. And every post, idea, and interaction has real meaning.ConnTree was built for those who believe the internet should empower people, not exploit them. Create. Connect. Earn. 🌍This is just the beginning. #ConnTree #Web3 #Creators #Decentralized #BuildInPublic",
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
      name: "Brahim Diaz",
      username: "brahim.web3",
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
      name: "David",
      username: "davoritoons",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562035/cTUPG7EE_400x400_eybpdp.jpg",
      verified: true,
    },
    content: "I accept crypto too 🫢🫢☺️☺️.",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1774860302/davori_flxlyd.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "6",
    author: {
      name: "Darvori",
      username: "davoritoons",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562035/cTUPG7EE_400x400_eybpdp.jpg",
      verified: true,
    },
    content: "I am new here on the space, I am coming fully loaded. 💯💯 ",
    media: [
      "https://res.cloudinary.com/du153mzwk/video/upload/v1774861127/davori2_ffbxm9.mp4",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "7",
    author: {
      name: "Andi",
      username: "Handinomeric",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562431/Z9egUvZt_400x400_jvt9wx.jpg",
      verified: true,
    },
    content:
      "Most people walk into crypto looking at charts. Green candles, red candles, hype, fear. Price becomes the loudest signal. But the real revolution of blockchain has never been about how high a token can go—it’s about what becomes possible when no one needs to grant you access. ",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775338518/HEpnkrKWcAAlPeT_tifdyr.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "8",
    author: {
      name: "Andi",
      username: "Handinomeric",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562431/Z9egUvZt_400x400_jvt9wx.jpg",
      verified: true,
    },
    content:
      "We Avalanche (but not the snow fall😏) The Avalanche Blockchain makes me remember a popular quote often attributed to Robert Ingersoll which says: “We rise by lifting others.” Truth be told, If you want to go fast, go alone. If you want to go far, go together🤝 ",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775338959/HDCjwuRXcAACuAC_yeuazb.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "9",
    author: {
      name: "Tom | UiUx Designer",
      username: "designwithtom",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562292/yVaPi9hr_400x400_zdfrvu.jpg",
      verified: true,
    },
    content:
      "Before colors and fonts, also remember: Layout - Flow - Information hierarchy. If the structure is bad, no UI will save it. Enjoy your weekend guys ",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775339234/HD7GFdmakAAUucd_h4rina.jpg",
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775339233/HD7GFdpa4AAdJNk_mzojdv.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "10",
    author: {
      name: "Tom | UiUx Designer",
      username: "designwithtom",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562292/yVaPi9hr_400x400_zdfrvu.jpg",
      verified: true,
    },
    content: "On seat… ",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775340355/HDneaLEXQAAD7Fb_xhicub.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "11",
    author: {
      name: "Tom | UiUx Designer",
      username: "designwithtom",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562292/yVaPi9hr_400x400_zdfrvu.jpg",
      verified: true,
    },
    content:
      "I’m Tom, a 16-year-old UX designer based in the North-central part of Nigeria. Let’s connect and ship products",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775340854/HDOjlfqXEAAILJg_nw4yjk.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },
  {
    id: "12",
    author: {
      name: "Darvori",
      username: "davoritoons",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562035/cTUPG7EE_400x400_eybpdp.jpg",
      verified: true,
    },
    content:
      "I make every type of animation 🤯🤯 Here is a pixel art animation I did for mystic base. I’m one dm away, let’s talk about your next project.",
    media: [
      "https://res.cloudinary.com/du153mzwk/video/upload/v1775341427/814561b5-5e4b-4dd0-9fca-8ed8a13a85e3_phd4fp.mp4",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },
  {
    id: "13",
    author: {
      name: "Darvori",
      username: "davoritoons",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562035/cTUPG7EE_400x400_eybpdp.jpg",
      verified: true,
    },
    content:
      "My favorite time of the day to work, is late at night. At this point just call me Batman. 😂",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775341622/GuuD1rXXcAA71cy_bidieb.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "14",
    author: {
      name: "Darvori",
      username: "davoritoons",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775562035/cTUPG7EE_400x400_eybpdp.jpg",
      verified: true,
    },
    content:
      "My boys 😎 which one of these guys is your favorite. #jeet @HacsperLingoog @Charles_Fx16 @mhuxzitics @N1Fredy @onahcharles_ @Handinomeric @Garakazekag @BobbiAndrea_ZM @_Sammyp01 @KingDamilotun @king__ask",
    media: [
      "https://res.cloudinary.com/du153mzwk/image/upload/v1775343045/GuKVaU4WUAAOwJi_luiyf2.jpg",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "15",
    author: {
      name: "Anjorin",
      username: "cryp_Alchemist",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775563039/3MYgzaxE_400x400_uk7vuu.jpg",
      verified: true,
    },
    content: "Every serious trader will have an agent...",
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "16",
    author: {
      name: "Anjorin",
      username: "cryp_Alchemist",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775563039/3MYgzaxE_400x400_uk7vuu.jpg",
      verified: true,
    },
    content: "Teach them football and not that rugby they are playing",
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },

  {
    id: "17",
    author: {
      name: "Anjorin",
      username: "cryp_Alchemist",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775563039/3MYgzaxE_400x400_uk7vuu.jpg",
      verified: true,
    },
    content:
      "Tonight, I set up an AI Agent as an LP on a prediction market I am NOT a developer Here's what I learned: • MCP gives AI agents hands to interact with the world • x402 gives AI agents a wallet to pay for things•  Together they are the foundation of the agent economy We are so early 🌍",
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },
  {
    id: "18",
    author: {
      name: "DaoWakanda",
      username: "DaoWakanda",
      avatar:
        "https://res.cloudinary.com/du153mzwk/image/upload/v1775563771/FdFISPL__400x400_kv6a3j.jpg",
      verified: true,
    },
    content:
      "Participation = Power at Daowakanda. The People who secure & build get to decide. We’re evolving to validator-based, on-chain governance. By becoming a DAO Validator, you unlock proposal + voting rights. We’re aligning governance, power, and community value. The new Daowakanda is coming. Stay tuned. 🚀",
    media: [
      "https://res.cloudinary.com/du153mzwk/video/upload/v1775564161/122b734d-d6c3-46fb-a5c7-a9bc394a4075_mginhz.mov",
    ],
    engagement: {
      likes: 400,
      comments: 410,
      shares: 200,
      reward: 0.12,
    },
  },
];
