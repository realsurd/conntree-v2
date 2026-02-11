import { IProfile } from '@/interface/profile.interface';
import { atom } from 'recoil';

export const ProfileAtom = atom<IProfile | null>({
  key: 'ProfileAtom',
  default: null,
});
