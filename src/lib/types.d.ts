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
  socials?: SOCIAL;
  partners?: PARTNERS[];
  faq?: FAQ[];
}

interface FORMFIELD {
  form: UseFormReturn<TOKEN>;
}

export interface ROADMAP {
  phase: string;
  items: string[];
}

export interface SOCIAL {
  twitter?: string;
  telegram?: string;
  discord?: string;
  website?: string;
}

type SOCIALFIELDPATH = `socials.${keyof TOKEN["socials"]}`;

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
