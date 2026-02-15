export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  github: string;
  live?: string;
  isHighlighted?: boolean;
}
