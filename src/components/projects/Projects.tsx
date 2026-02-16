import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FadeInUp } from "@/components/animations";
import { projects } from "@/content/projects";

export const Projects = () => {
  const { t } = useLanguage();

  const highlightedProjects = projects.filter(
    (project) => project.isHighlighted,
  );
  // const regularProjects = projects.filter((project) => !project.isHighlighted);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto sm:max-w-6xl px-4 sm:px-6">
        <FadeInUp duration={0.7}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-light mb-6">
              {t.projects.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>
        </FadeInUp>

        {highlightedProjects.length > 0 && (
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {highlightedProjects.map((project, index) => (
                <FadeInUp key={project.id} delay={index * 0.15} duration={0.6}>
                  <ProjectCard project={project} />
                </FadeInUp>
              ))}
            </div>
          </div>
        )}

        {/* {regularProjects.length > 0 && (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <FadeInUp key={project.id} delay={index * 0.12} duration={0.6}>
                <ProjectCard project={project} />
              </FadeInUp>
            ))}
          </div>
        )} */}

        <FadeInUp delay={0.3} duration={0.7}>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                Ver Todos os Projetos
              </Button>
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
