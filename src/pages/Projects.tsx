import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamento integrado, painel administrativo e gestão de estoque em tempo real.",
      image: project1Image,
      technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Dashboard interativo para análise de dados com visualizações dinâmicas, relatórios personalizáveis e integração com múltiplas APIs.",
      image: project2Image,
      technologies: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Sistema de gerenciamento de tarefas com colaboração em tempo real, notificações e interface responsiva moderna.",
      image: project3Image,
      technologies: ["React", "Java", "Spring Boot", "WebSocket", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="section-title mb-8">
            {t.projects.title} <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h1>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="imposing-card rounded-xl overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" className="imposing-button bg-imposing">
                    {t.projects.viewDemo}
                  </Button>
                  <Button size="sm" variant="outline" className="imposing-card">
                    {t.projects.viewCode}
                  </Button>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <h2 className="text-xl font-space font-bold">{project.title}</h2>
                <p className="text-soft leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="imposing-button imposing-card px-12">
            {t.projects.allProjects}
          </Button>
        </div>
      </div>
    </div>
  );
};