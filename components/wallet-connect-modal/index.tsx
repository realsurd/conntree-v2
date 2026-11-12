// "use client";

// import { useWallet } from "@txnlab/use-wallet";
// import { BackgroundOverlay } from "../background-overlay";
// import { useEffect } from "react";

// interface Props {
//   onClose: () => void;
// }

// export const WalletConnectModal = ({ onClose }: Props) => {
//   const { providers: wallets, activeAddress } = useWallet();

//   useEffect(() => {
//     if (activeAddress) {
//       onClose();
//     }
//   }, [activeAddress]);

//   return (
//     <BackgroundOverlay onClose={onClose}>
//       <div className="w-[320px] max-w-[calc(100vw-32px)] p-8 rounded-[32px] bg-white flex flex-col gap-5">
//         <div className="flex flex-col gap-2">
//           <h4 className="text-2xl font-bold text-[#171717]">
//             Connect a Wallet
//           </h4>
//           <h5 className="text-base font-medium text-[#171717]">
//             Supported wallets
//           </h5>
//         </div>
//         <div className="flex flex-col gap-4">
//           {wallets?.map((wallet) => (
//             <button
//               type="button"
//               className="flex items-center gap-4 text-left cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
//               key={wallet.metadata.id}
//               onClick={wallet.connect}
//             >
//               <img
//                 src={wallet.metadata.icon}
//                 alt={`${wallet.metadata.name} icon`}
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="text-sm font-medium text-[#171717]">
//                 {wallet.metadata.name}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </BackgroundOverlay>
//   );
// };

"use client";

import { useEffect, useId } from "react";
import { Open_Sans } from "next/font/google";
import { PROVIDER_ID, useWallet } from "@txnlab/use-wallet";
import { Check, X } from "lucide-react";
import { BackgroundOverlay } from "../background-overlay";

// Body font of this modal in Figma. Only the modal uses it so far, so it is
// not preloaded on every page: it downloads the first time the modal opens.
const openSans = Open_Sans({ preload: false });

// "Orange linear" from Figma: 17 evenly spaced stops.
const ORANGE_STOPS = [
  "#FB8500",
  "#FB8500",
  "#FB8500",
  "#FF8C0B",
  "#FF8B07",
  "#FC8A09",
  "#FB8B0C",
  "#FC8F14",
  "#FF8F11",
  "#FF931A",
  "#F89525",
  "#FF9721",
  "#FF931A",
  "#F58C02",
  "#FF9317",
  "#FF8F11",
  "#FFA138",
];

// The gradient as Figma exports it for the modal border: a 258.63deg line
// with the first stop at 8.38% and the last one at 91.61%.
const ORANGE_BORDER = `linear-gradient(258.63deg, ${ORANGE_STOPS.map(
  (color, i) => `${color} ${(8.38 + (i * 83.23) / 16).toFixed(2)}%`,
).join(", ")})`;

// Wallets in the order Figma shows them. Any other wallet follows.
const WALLET_ORDER = [PROVIDER_ID.PERA, PROVIDER_ID.DEFLY, PROVIDER_ID.DAFFI];

const walletRank = (id: PROVIDER_ID) => {
  const index = WALLET_ORDER.indexOf(id);
  return index === -1 ? WALLET_ORDER.length : index;
};

const BENEFITS = [
  {
    title: "True Ownership",
    text: "Your content, your data, your control. No middlemen.",
  },
  {
    title: "Earn Rewards",
    text: "Get rewarded with tokens for every engagement on your posts.",
  },
  {
    title: "Transparent Analytics",
    text: "Track your rewards and engagement in real-time on-chain.",
  },
];

// The "wallet" icon from Iconsax (linear), drawn with the orange gradient.
const WalletIcon = () => {
  // useId() contains colons; they are removed to keep the id plain.
  const gradientId = `wallet-icon-${useId().replace(/:/g, "")}`;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <defs>
        {/* The same gradient line, measured in each shape's own box. */}
        <linearGradient
          id={gradientId}
          x1="0.967"
          y1="0.387"
          x2="0.033"
          y2="0.613"
        >
          {ORANGE_STOPS.map((color, i) => (
            <stop key={i} offset={i / 16} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <path d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" />
      <path d="M17.7514 7.05C17.5114 7.01 17.2614 7.00001 17.0014 7.00001H7.00141C6.72141 7.00001 6.45141 7.02001 6.19141 7.06001C6.33141 6.78001 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.79002C17.3714 5.42002 17.7114 6.22 17.7514 7.05Z" />
      <path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" />
    </svg>
  );
};

interface Props {
  onClose: () => void;
}

export const WalletConnectModal = ({ onClose }: Props) => {
  const { providers, activeAddress } = useWallet();
  const titleId = useId();

  useEffect(() => {
    if (activeAddress) {
      onClose();
    }
  }, [activeAddress]);

  const wallets = [...(providers ?? [])].sort(
    (a, b) => walletRank(a.metadata.id) - walletRank(b.metadata.id),
  );

  return (
    <BackgroundOverlay onClose={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`${openSans.className} flex max-h-[calc(100vh-32px)] w-[615px] max-w-[calc(100vw-32px)] flex-col gap-7 overflow-y-auto rounded-[32px] border-[5px] border-transparent px-4 py-[27px] sm:px-[37px] supports-[height:100dvh]:max-h-[calc(100dvh-32px)]`}
        style={{
          background: `linear-gradient(#0A1117, #0A1117) padding-box, ${ORANGE_BORDER} border-box`,
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-[9px]">
              <WalletIcon />
              <h2
                id={titleId}
                className="font-goodtiming text-[24px] leading-[29px] text-white"
              >
                Connect a Wallet
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#8ECAE6]/10 text-[#FCFCFC] transition-colors hover:bg-[#8ECAE6]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB8500]"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-base leading-[1.375] text-[#ECF0F5]">
              Securely connect your wallet to unlock seamless transactions,
              manage assets, and access exclusive platform features.
            </p>
            <h3 className="text-base font-semibold leading-[1.375] text-[#FCFCFC]">
              Supported Network
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-[#8ECAE6]/10 px-4 pb-5 pt-4 sm:flex-row sm:justify-between sm:gap-0">
          <div className="flex flex-col gap-[13px] px-3 py-[15px] sm:w-[277px]">
            <h3 className="text-base font-bold leading-[1.375] text-white">
              Why connect a wallet
            </h3>
            <ul className="flex flex-col gap-[13px]">
              {BENEFITS.map(({ title, text }) => (
                <li key={title} className="flex gap-1.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[0.5px] border-[#FB8500]/60 bg-[#FF8135]/20 text-[#FF8135]">
                    <Check
                      size={15}
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                      aria-hidden="true"
                    />
                  </span>
                  <div className="flex flex-col gap-[3px]">
                    <p className="text-[13px] font-semibold leading-[18px] text-white">
                      {title}
                    </p>
                    <p className="text-xs text-[#A9A9A9]">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* On phones the two columns stack and the wallets come first. */}
          <div className="order-first flex flex-col gap-5 sm:order-none sm:w-[194px] sm:pt-[15px]">
            {wallets.map((wallet) => (
              <button
                type="button"
                key={wallet.metadata.id}
                onClick={() => wallet.connect()}
                className="flex items-center gap-5 rounded-2xl border border-[#E3E5E8]/15 px-[19px] py-[11px] text-left transition-colors hover:border-[#FB8500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FB8500]"
              >
                <img
                  src={wallet.metadata.icon}
                  alt=""
                  className="h-10 w-10 shrink-0 rounded-full"
                />
                <span className="text-sm text-[#F8F7F5]">
                  {wallet.metadata.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </BackgroundOverlay>
  );
};
