export interface TOKEN {
  tokenName: string;
  tokenTicker: string;
  tokenImage: string;
  tokenDescription: string;
  tokenCA?: string;
  dexLink?: string;
  roadmap?: ROADMAP[];
  roadmapProgress: number;
  features?: FEATURES[];
  tokenomics: TOKENOMICS;
  socials?: SOCIAL[];
  partners?: PARTNERS[];
  faq?: FAQ[];
}

export interface ROADMAP {
  phase: string;
  items: string[];
}

export interface SOCIAL {
  name: "twitter" | "telegram" | "discord" | "website";
  url: string;
}

export interface TOKENOMICS {
  totalSupply?: string;
  distribution?: DISTRIBUTION[];
  features?: TOKENOMICSFEATURES[];
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
