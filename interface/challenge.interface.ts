import { FetchPaginatedDataDto, PaginationResponse } from './pagination.interface';

export type TriviaDifficulty = 'novice' | 'amateur' | 'pro';

export type TriviaStatus = 'ongoing' | 'expired';

export type SubmissionStatus = 'approved' | 'pending' | 'rejected';

export type DisbursementStatus =
  | 'disbursed'
  | 'not_disbursed'
  | 'pending'
  | 'not_eligible'
  | 'eligible';

export interface ITrivia {
  id: string;
  title: string;
  duration: number;
  difficulty: TriviaDifficulty;
  prize: number;
  maxWinners: number;
  winnersCount: number;
  description: string;
  skill: string;
  createdAt: string;
  status: TriviaStatus;
  endTimeStamp: number;
}

export type ITriviaRes = PaginationResponse<ITrivia>;

export interface FetchPaginatedTrivia extends FetchPaginatedDataDto {
  status?: TriviaStatus;
}

export interface FetchTriviaDto {
  page?: number;
  numOfItemsPerPage?: number;
  filterBy?: TriviaDifficulty;
  searchTerm?: string;
}

export interface ISubmission {
  id: string;
  githubLink: string;
  title: string;
  submissionStatus: SubmissionStatus;
  disbursementStatus: DisbursementStatus;
  developer: string;
  createdAt: string;
  walletAddress: string;
  bounty: number;
}

export interface LeaderBoardItem {
  name: string;
  totalAlgos: number;
}

export interface ITriviaBounty {
  id: string;
  githubLink: string;
  title: string;
  smartContractId: number;
  bounty: number;
}

export interface SubmitTriviaAnswer {
  triviaId: string;
  githubRepoLink: string;
}
