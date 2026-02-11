export interface ICreateProfile {
  firstName: string;
  lastName: string;
  country: string;
  stateOfResidence: string;
  email: string;
  githubLink: string;
}

export interface IProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  country: string;
  stateOfResidence: string;
  githubLink: string;
  walletAddress: string;
  awardedAlgos: number;
}

export interface IUpdateProfile {
  firstName: string;
  lastName: string;
  country: string;
  stateOfResidence: string;
  githubLink: string;
}
