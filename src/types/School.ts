import type { Icon } from '@/types/Icon';

export interface School {
  schoolName: string;
  icon: Icon;
  flag: Icon;
  degreeName: string;
  degreeUrl: string;
  grade: string | null;
  start: string;
  end: string;
  description: string;
}
