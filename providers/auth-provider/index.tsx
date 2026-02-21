"use client";

import { authAtom } from "@/state";
import { useWallet } from "@txnlab/use-wallet";
import { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { AuthLoader } from "./loader";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const setAuth = useSetRecoilState(authAtom);
  const { providers: wallets } = useWallet();

  const disconnectWallet = () => {
    for (const wallet of wallets || []) {
      wallet.disconnect();
    }

    localStorage.clear();
  };

  const checkAuth = () => {
    setLoading(true);
    const authFromStorage = localStorage.getItem("auth");

    if (!authFromStorage) {
      disconnectWallet();
      setLoading(false);
      return;
    }

    try {
      const auth = JSON.parse(authFromStorage);

      if (auth.accessToken) {
        setAuth(auth);
        setLoading(false);
      } else {
        disconnectWallet();
        setLoading(false);
      }
    } catch (error) {
      disconnectWallet();
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      checkAuth();
    })();
  }, []);

  return loading ? <AuthLoader /> : <>{children}</>;
};
