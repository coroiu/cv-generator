export interface Theme {
  styleUrl?: string;
  style?: string;
  sections: Section[];
}

export interface Section {
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
