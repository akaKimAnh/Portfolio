import { ReactNode } from 'react';

export type LocalizedString = {
  en: string;
  vi: string;
};

export type LocalizedStringArray = {
  en: string[];
  vi: string[];
};

export interface Project {
  id: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  category: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  highlights: LocalizedStringArray;
}

export interface Experience {
  id: string;
  role: LocalizedString;
  company: string;
  period: string;
  location: string;
  description: LocalizedStringArray;
  skills: string[];
  type: LocalizedString;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
  description?: LocalizedString;
}

export interface Education {
  degree: LocalizedString;
  institution: string;
  period: string;
  details: LocalizedString;
}

export interface TerminalCommand {
  command: string;
  description: string;
  action: () => string | ReactNode;
}
