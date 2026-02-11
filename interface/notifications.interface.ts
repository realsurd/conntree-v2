export interface IUnclaimedBounty {
  message: string;
  id: string;
  githubLink: string;
  title: string;
  submissionStatus: string;
  disbursementStatus: string;
  smartContractId: number;
  bounty: number;
}

export interface IClaimResponse {
  submissionId: string;
}
