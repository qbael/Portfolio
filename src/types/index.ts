export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'archived';
  year: string;
  highlight?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'tools';
  icon?: string;
}

export interface SkillCategory {
  label: string;
  key: 'frontend' | 'backend' | 'devops' | 'tools';
  color: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
