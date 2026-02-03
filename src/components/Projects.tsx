import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/project";
import { useSupabaseQuery } from "@/hooks/useSupabase";
import { FadeInUp } from "@/components/animations";

interface ProjectFromDB {
  id: number;
  title: string;
  description: string;
  image_url: string;
  technologies: string[];
  live_url?: string;
  github_url?: string;
  is_highlighted: boolean;
}

export const Projects = () => {
  const { t } = useLanguage();
  const {
    data: dbProjects,
    loading,
    execute,
  } = useSupabaseQuery<ProjectFromDB>("projects");

  useEffect(() => {
    execute();
  }, [execute]);

  const projects: Project[] = (dbProjects || []).map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image_url,
    technologies: p.technologies,
    liveUrl: p.live_url,
    githubUrl: p.github_url,
    isHighlighted: p.is_highlighted,
  }));

  const highlightedProjects = projects.filter(
    (project) => project.isHighlighted,
  );
  const regularProjects = projects.filter((project) => !project.isHighlighted);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp duration={0.7}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space font-light mb-6">
              {t.projects.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>
        </FadeInUp>

        {loading ? (
          <div className="text-center py-12">Carregando projetos...</div>
        ) : (
          <>
            {/* Projetos em Destaque */}
            {highlightedProjects.length > 0 && (
              <div className="mb-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {highlightedProjects.map((project, index) => (
                    <FadeInUp
                      key={project.id}
                      delay={index * 0.15}
                      duration={0.6}
                    >
                      <ProjectCard project={project} isHighlighted={true} />
                    </FadeInUp>
                  ))}
                </div>
              </div>
            )}

            {/* Projetos Regulares */}
            {regularProjects.length > 0 && (
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {regularProjects.map((project, index) => (
                  <FadeInUp
                    key={project.id}
                    delay={index * 0.12}
                    duration={0.6}
                  >
                    <ProjectCard project={project} isHighlighted={false} />
                  </FadeInUp>
                ))}
              </div>
            )}
          </>
        )}

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
