import { atom } from 'recoil';
import { ProposalApi } from '@/interface/proposal.interface';

export const ProposalsAtom = atom<ProposalApi[]>({
  key: 'ProposalsAtom',
  default: [],
});
