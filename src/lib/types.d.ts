export interface TOKEN {
  tokenName: string;
  tokenTicker: string;
  tokenImage: string;
  tokenDescription: tokenDescription;
  tokenCA?: string;
  dexLink?: string;
  roadmap: ROADMAP[];
  roadmapProgress: number;
  socials: SOCIALS;
}

export interface ROADMAP {
  phase: string;
  items: string[];
}

export interface SOCIAL {
  [key: string]: string;
}
