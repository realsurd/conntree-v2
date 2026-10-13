import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import RecoilContextProvider from "@/providers/recoil-provider";

const goodTiming = localFont({
  src: "./fonts/good-timing/good-timing-bd.otf",
  variable: "--font-good-timing",
});

export const metadata: Metadata = {
  title: "Conntree",
  description:
    "A decentralized social platform where creators earn from real engagement, powered by communities.",
  icons: {
    icon: "https://res.cloudinary.com/du153mzwk/image/upload/v1775583122/Group_481425_lmh71y.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${goodTiming.variable} antialiased bg-[#0A1117] text-white`}
      >
        {/* RecoilContextProvider already mounts the wallet and auth providers. */}
        <RecoilContextProvider>{children}</RecoilContextProvider>
      </body>
    </html>
  );
}
