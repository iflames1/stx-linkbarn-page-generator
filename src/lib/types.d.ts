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
  tokenomics: TOKENOMICS;
}

export interface ROADMAP {
  phase: string;
  items: string[];
}

export interface SOCIAL {
  [key: string]: string;
}

export interface TOKENOMICS {
  totalSupply: string;
  distribution: DISTRIBUTION[];
  features: TOKENOMICSFEATURES[];
}

export interface DISTRIBUTION {
  title: string;
  percentage: number;
  description: string;
}

export interface TOKENOMICSFEATURES {
  title: string;
  content: string[];
}
