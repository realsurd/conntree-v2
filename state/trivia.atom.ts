import { ITriviaRes } from '@/interface/challenge.interface';
import { IUnclaimedBounty } from '@/interface/notifications.interface';
import { atom } from 'recoil';

export const TriviasAtom = atom<ITriviaRes | null>({
  key: 'TriviasAtom',
  default: null,
});

export const TriviaSearchTerm = atom<string>({
  key: 'TriviaSearchTerm',
  default: '',
});

export const UnclaimedBountiesAtom = atom<IUnclaimedBounty[] | null>({
  key: 'UnclaimedBountiesAtom',
  default: null,
});