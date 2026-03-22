export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  badgeColor: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  status: 'Live' | 'Prototype' | 'Coming Soon';
}

export interface SocialLink {
  platform:
    | 'GitHub'
    | 'LinkedIn'
    | 'Facebook'
    | 'Discord'
    | 'Instagram'
    | 'Email'
    | 'WhatsApp'
    | 'Website';
  url: string;
  icon: string;
  label: string;
}

export interface TeachingFocus {
  methods: string[];
  targets: string[];
  formats: string[];
}

export interface ProfileData {
  name: string;
  headline: string;
  summary: string[];
  location: string;
  teachingFocus: TeachingFocus;
  skills: SkillItem[];
  projects: ProjectItem[];
  socialLinks: SocialLink[];
}
