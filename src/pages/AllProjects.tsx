import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const AllProjects = () => {
  const featuredProjects = projects.filter((project) => project.isHighlighted);
  const otherProjects = projects.filter((project) => !project.isHighlighted);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-space font-light mb-6">
              Todos os{" "}
              <span className="text-gradient font-medium">Projetos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma coleção completa dos projetos que desenvolvi, demonstrando
              diferentes tecnologias e soluções criativas.
            </p>
          </div>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-space font-semibold mb-8 text-center">
              Projetos em Destaque
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-space font-semibold mb-8 text-center">
              Outros Projetos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
