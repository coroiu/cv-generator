import { JsonResume } from '../json-resume/json-resume';

export interface Theme {
  styleUrl?: string;
  style?: string;
  pages: ThemeSections[];
}

export interface ThemeSections {
  [section: string]: ResumeSection[];
}

export type ResumeSection = keyof JsonResume;
