// export interface ICreateProfile {
//   firstName: string;
//   lastName: string;
//   country: string;
//   stateOfResidence: string;
//   email: string;
//   githubLink: string;
// }

// export interface IProfile {
//   id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   image?: string;
//   country: string;
//   stateOfResidence: string;
//   githubLink: string;
//   walletAddress: string;
//   awardedAlgos: number;
// }

// export interface IUpdateProfile {
//   firstName: string;
//   lastName: string;
//   country: string;
//   stateOfResidence: string;
//   githubLink: string;
// }

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

/** Figures shown on a profile. null means the figure is not known yet. */
export interface IProfileStats {
  posts: number | null;
  followers: number | null;
  following: number | null;
}

/**
 * What the profile page displays. useProfile() builds it from IProfile (the
 * API shape above) or, until the backend exists, from a development fixture.
 */
export interface IProfileSummary {
  id: string;
  name: string;
  /** Handle without the "@". Missing until the API provides one. */
  username?: string;
  avatar?: string;
  verified?: boolean;
  headline?: string;
  bio?: string;
  walletAddress?: string;
  stats: IProfileStats;
  /** Total rewards earned. null when the figure is not known. */
  rewards: number | null;
}
