import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa de e-commerce com sistema de pagamento integrado, painel administrativo e gestão de estoque em tempo real.",
      image: project1Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com visualizações dinâmicas, relatórios personalizáveis e integração com múltiplas APIs.",
      image: project2Image,
      technologies: ["Vue.js", "Python", "MongoDB", "Chart.js", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Aplicação social com chat em tempo real, sistema de posts, stories e notificações push. Interface responsiva e moderna.",
      image: project3Image,
      technologies: ["React Native", "Firebase", "TypeScript", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos projetos mais relevantes que desenvolvi, 
            demonstrando minhas habilidades e paixão por tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass overflow-hidden group hover:glow-secondary transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="glass">
                    Ver Demo
                  </Button>
                  <Button size="sm" variant="outline" className="glass">
                    GitHub
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-space font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass font-medium">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};