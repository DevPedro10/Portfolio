import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/types/project";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

export const AllProjects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamento integrado, painel administrativo e gestão de estoque em tempo real. Desenvolvida com React no frontend e Node.js no backend, utilizando PostgreSQL como banco de dados e integração com Stripe para processamento de pagamentos.",
      image: project1Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redux", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: true
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com visualizações dinâmicas, relatórios personalizáveis e integração com múltiplas APIs. Interface moderna construída com Vue.js e backend em Python, utilizando MongoDB para armazenamento de dados.",
      image: project2Image,
      technologies: ["Vue.js", "Python", "MongoDB", "Chart.js", "Docker", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: true
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Aplicação social com chat em tempo real, sistema de posts, stories e notificações push. Interface responsiva e moderna desenvolvida com React Native e backend em Firebase para sincronização em tempo real.",
      image: project3Image,
      technologies: ["React Native", "Firebase", "TypeScript", "WebSocket", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: false
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Sistema completo de gerenciamento de tarefas com funcionalidades de colaboração em equipe, notificações em tempo real e interface intuitiva. Desenvolvido com React e Java Spring Boot.",
      image: project1Image,
      technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: false
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Aplicativo de previsão do tempo com interface moderna e dados em tempo real. Integração com APIs meteorológicas e geolocalização para fornecer informações precisas.",
      image: project2Image,
      technologies: ["React", "TypeScript", "OpenWeather API", "Geolocation API"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Website portfolio responsivo com design moderno e animações suaves. Desenvolvido com React e Tailwind CSS, focando em performance e experiência do usuário.",
      image: project3Image,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      isHighlighted: false
    }
  ];

  const featuredProjects = projects.filter(project => project.isHighlighted);
  const otherProjects = projects.filter(project => !project.isHighlighted);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-space font-light mb-6">
              Todos os <span className="text-gradient font-medium">Projetos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma coleção completa dos projetos que desenvolvi, demonstrando diferentes tecnologias e soluções criativas para problemas reais.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-space font-semibold mb-8 text-center">Projetos em Destaque</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isHighlighted={true} 
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-space font-semibold mb-8 text-center">Outros Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isHighlighted={false} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};