export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  isHighlighted?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  isHighlighted?: boolean;
}