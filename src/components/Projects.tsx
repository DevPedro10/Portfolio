import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/project";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

export const Projects = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamento integrado, painel administrativo e gestão de estoque em tempo real.",
      image: project1Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: true
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com visualizações dinâmicas, relatórios personalizáveis e integração com múltiplas APIs.",
      image: project2Image,
      technologies: ["Vue.js", "Python", "MongoDB", "Chart.js", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: true
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Aplicação social com chat em tempo real, sistema de posts, stories e notificações push. Interface responsiva e moderna.",
      image: project3Image,
      technologies: ["React Native", "Firebase", "TypeScript", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: false
    }
  ];

  const highlightedProjects = projects.filter(project => project.isHighlighted);
  const regularProjects = projects.filter(project => !project.isHighlighted);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-space font-light mb-6">
            {t.projects.title} <span className="text-gradient font-medium">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projetos em Destaque */}
        {highlightedProjects.length > 0 && (
          <div className="mb-12">
            <div className="grid lg:grid-cols-2 gap-8">
              {highlightedProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isHighlighted={true} 
                />
              ))}
            </div>
          </div>
        )}

        {/* Projetos Regulares */}
        {regularProjects.length > 0 && (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isHighlighted={false} 
              />
            ))}
          </div>
        )}

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
      </div>
    </section>
  );
};