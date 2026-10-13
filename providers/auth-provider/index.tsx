"use client";

import { authAtom } from "@/state";
import { ReactNode, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { AuthLoader } from "./loader";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  const setAuth = useSetRecoilState(authAtom);

  useEffect(() => {
    // Restore a saved sign-in, if there is one. Having none only means the
    // visitor is signed out. It must not disconnect the wallet or clear
    // localStorage: the wallet library keeps the connected account there, and
    // clearing it is what dropped the wallet on every page refresh.
    try {
      const saved = localStorage.getItem("auth");
      const auth = saved ? JSON.parse(saved) : null;

      if (auth?.accessToken) setAuth(auth);
    } catch {
      // Unreadable entry, or storage is blocked: carry on signed out.
    }

    setLoading(false);
  }, [setAuth]);

  return loading ? <AuthLoader /> : <>{children}</>;
};
