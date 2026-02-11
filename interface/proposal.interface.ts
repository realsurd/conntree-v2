import { PaginationResponse } from './pagination.interface';

export interface IAsset {
  asset_id: number;
  name: string;
  unit_name: string;
  fraction_decimals: number;
  total_supply: number;
  is_deleted: boolean;
  creator_address: string;
  url: string;
  logo: string;
  verification_tier: 'verified';
  usd_value: string | null;
  is_collectible: boolean;
}

export interface IProposalCard {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'approved' | 'denied';
  votingTag: string;
  yesPercentage: number;
  noPercentage: number;
  totalVotes: number;
  createdBy: string;
  creatorAvatar: string;
  endsIn?: string;
  timestamp?: string;
  onDelete: (id: number) => void;
}

export interface ProposalApi {
  appId: string;
  asaId: string;
  creator: string;
  description: string;
  startDate: number;
  endDate: number;
  ongoing: boolean;
  yesVotes: string[];
  noVotes: string[];
  registeredVoters: string[];
  title: string;
}

export interface IProposalCardApi {
  proposal: ProposalApi;
  onDelete: (id: string) => void; // appId is string
}

export type ProposalStatus = 'IN_PROGRESS' | 'APPROVED' | 'DENIED';

export interface FetchProposalsDto {
  page?: number;
  numOfItemsPerPage?: number;
  order?: 'asc' | 'desc';
  searchTerm?: string;
  status?: ProposalStatus;
}

export type IProposalRes = PaginationResponse<IProposalCard>;

export interface ICreateProposalContract {
  title: string;
  description: string;
  endDate: number;
}

export interface IProposalContract {
  appId: string;
  asaId: string;
  title: string;
  description: string;
  startDate: number;
  endDate: number;
  creator: string;
  ongoing: boolean;
  registeredVoters: string[];
  yesVotes: string[];
  noVotes: string[];
}

export interface ICreateProposalContractApi {
  title: string;
  description: string;
  endDate: number;
  appId: string;
  startDate: number;
  creator: string;
}

export interface IBootstrapProposalDto {
  asaId: string;
  appId: string;
}

export interface IVoteProposalDto {
  vote: boolean;
  voterAddress: string;
  appId: string;
}

export interface ValidateWalletAddressResponse {
  valid: boolean;
  address: string;
  assetId: string;
}