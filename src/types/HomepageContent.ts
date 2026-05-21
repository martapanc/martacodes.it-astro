export interface HomepageContent {
  greeting: string;
  introduction: Introduction;
  skills: Skills;
  updates: Updates;
}

export interface Introduction {
  now: string;
  passion: string;
  education: string;
  work: string;
  cv: string;
  freeTime: string;
}

export interface Skills {
  fullStack: string;
  languages: string;
  latest: string;
}

export interface Updates {
  learning?: string[];
  willLearn?: string[];
  reading?: string[];
  gaming?: string[];
}
