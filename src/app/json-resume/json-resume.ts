export interface JsonResume {
  basics: Basics;
}

export interface Basics {
  name?: string;
  label?: string;
  picture?: string;
  email?: string;
  phone?: string;
  website?: string;
  summary?: string;
  location?: Location;
  profiles?: Profile[];
}

export interface Location {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface Profile {
  network?: string;
  username?: string;
  url?: string;
}
