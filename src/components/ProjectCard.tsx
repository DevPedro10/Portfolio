import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectInterface } from "@/types/projects";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = { project: ProjectInterface };

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  if (project.isHighlighted) {
    return (
      <div className="bg-card/50 border border-border/20 rounded-lg overflow-hidden group hover:bg-card/70 transition-all duration-300 flex flex-col h-full">
        <div className="relative overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <h3 className="text-xl font-inter font-semibold">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                >
                  <ExternalLink size={16} />
                  {t.projects.viewDemo}
                </Button>
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="gap-2"
              >
                <Github size={16} />
                {t.projects.viewCode}
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Layout para projetos coadjuvantes (menor)
  return (
    <div className="bg-card/50 border border-border/20 rounded-lg overflow-hidden group hover:bg-card/70 transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <h3 className="text-xl font-inter font-semibold">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="gap-2"
              >
                <ExternalLink size={16} />
                {t.projects.viewDemo}
              </Button>
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
            >
              <Github size={16} />
              {t.projects.viewCode}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
