'use client';

import { RecoilRoot } from 'recoil';
import { AuthProvider } from '../auth-provider';

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <AuthProvider>{children}</AuthProvider>
    </RecoilRoot>
  );
}
