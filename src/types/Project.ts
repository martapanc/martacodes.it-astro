import type { Icon } from '@/types/Icon';

export interface Project {
  title: string;
  image: Icon;
  shortDescription: string;
  mediumDescription?: string;
  longDescription?: string;
  tools: string[];
  date: string;
  tags: string[];
  links: {
    github?: string;
    github2?: string;
    screenshots?: string;
    publicUrl?: string;
    article?: string;
    video?: string;
    video2?: string;
  };
}

export interface RawProject {
  id: string;
  title: string;
  image: Icon;
  shortDescription: string;
  mediumDescription?: string;
  longDescription?: string;
  tools: string;
  date: string;
  tags: string;
  links: object;
}
