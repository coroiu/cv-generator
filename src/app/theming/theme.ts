export interface Theme {
  styleUrl?: string;
  style?: string;
  sections: Sections;
}

export interface Sections {
  [section: string]: Element[];
}

export type Element = 'basics' |
  'work' |
  'volunteer' |
  'education' |
  'awards' |
  'publications' |
  'skills' |
  'languages' |
  'interests' |
  'references' |
  'projects' |
  string;
