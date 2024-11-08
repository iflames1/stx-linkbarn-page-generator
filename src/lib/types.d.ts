export interface TOKEN {
  tokenName: string;
  tokenTicker: string;
  tokenImage: string;
  tokenDescription: tokenDescription;
  tokenCA?: string;
  dexLink?: string;
  roadmap?: ROADMAP[];
  features?: FEATURES[];
  roadmapProgress: number;
  socials?: SOCIAL[];
  tokenomics?: TOKENOMICS;
  partners?: PARTNERS[];
  faq?: FAQ[];
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

export interface FEATURES {
  title: string;
  description: string;
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

export interface PARTNERS {
  name: string;
  logo: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
