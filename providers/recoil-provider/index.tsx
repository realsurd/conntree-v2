"use client";

import { RecoilRoot } from "recoil";
import { AuthProvider } from "../auth-provider";
import { WalletConnectProvider } from "../wallet-connect-provider";

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <WalletConnectProvider>
        <AuthProvider>{children}</AuthProvider>
      </WalletConnectProvider>
    </RecoilRoot>
  );
}
