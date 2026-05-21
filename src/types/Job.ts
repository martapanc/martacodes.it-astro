import type { Icon } from '@/types/Icon';

export interface Job {
  title: string;
  companyName: string;
  icon: Icon;
  location: string | null;
  startDate: string;
  endDate: string | null;
  isCurrentJob: boolean;
  description: string;
  mainColor: string;
  darkColor: string;
  technologies: string[];
}
