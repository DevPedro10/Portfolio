import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectInterface } from "@/types/projects";

type ProjectCardProps = { project: ProjectInterface };

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useLanguage();

  if (project.isHighlighted) {
    return (
      <div className="bg-card/50 border border-border/20 rounded-lg overflow-hidden group hover:bg-card/70 transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <Button
              size="sm"
              variant="outline"
              className="bg-background/90 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              {t.projects.viewDemo}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-background/90 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              {t.projects.viewCode}
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-inter font-semibold">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
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
        </div>
      </div>
    );
  }

  // Layout para projetos coadjuvantes (menor)
  return (
    <div className="bg-card/50 border border-border/20 rounded-lg overflow-hidden group hover:bg-card/70 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <Button
            size="sm"
            variant="outline"
            className="bg-background/90 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
          >
            Ver Demo
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-background/90 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
          >
            GitHub
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-inter font-semibold">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
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
      </div>
    </div>
  );
};
