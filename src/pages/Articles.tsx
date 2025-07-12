import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Notebook } from "lucide-react";
import { Link } from "react-router-dom";

export const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Construindo APIs REST Escaláveis com Spring Boot",
      excerpt: "Aprenda as melhores práticas para desenvolver APIs REST robustas e escaláveis usando Spring Boot, incluindo validação, tratamento de erros e documentação.",
      date: "2024-01-15",
      readTime: "8 min",
      tags: ["Java", "Spring Boot", "API", "Backend"],
      featured: true
    },
    {
      id: 2,
      title: "React Hooks: Guia Completo para Desenvolvedores",
      excerpt: "Um guia abrangente sobre React Hooks, desde os básicos useState e useEffect até hooks customizados e padrões avançados de desenvolvimento.",
      date: "2024-01-10",
      readTime: "12 min",
      tags: ["React", "JavaScript", "Frontend", "Hooks"],
      featured: true
    },
    {
      id: 3,
      title: "Microserviços com Java: Arquitetura e Implementação",
      excerpt: "Explore os conceitos fundamentais de microserviços e como implementá-los usando Java, Spring Cloud e Docker para criar sistemas distribuídos.",
      date: "2024-01-05",
      readTime: "15 min",
      tags: ["Java", "Microserviços", "Spring Cloud", "Docker"],
      featured: false
    },
    {
      id: 4,
      title: "TypeScript: Melhorando a Qualidade do Código JavaScript",
      excerpt: "Descubra como TypeScript pode melhorar significativamente a qualidade e manutenibilidade do seu código JavaScript através de tipagem estática.",
      date: "2023-12-28",
      readTime: "10 min",
      tags: ["TypeScript", "JavaScript", "Desenvolvimento"],
      featured: false
    },
    {
      id: 5,
      title: "Otimização de Performance em Aplicações React",
      excerpt: "Técnicas avançadas para otimizar a performance de aplicações React, incluindo lazy loading, memoização e otimização de re-renders.",
      date: "2023-12-20",
      readTime: "14 min",
      tags: ["React", "Performance", "Otimização", "Frontend"],
      featured: false
    },
    {
      id: 6,
      title: "Testes Automatizados em Java: JUnit e Mockito",
      excerpt: "Aprenda a implementar testes automatizados eficazes em Java usando JUnit e Mockito para garantir a qualidade e confiabilidade do código.",
      date: "2023-12-15",
      readTime: "11 min",
      tags: ["Java", "Testes", "JUnit", "Mockito"],
      featured: false
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-space font-light mb-6">
              Meus <span className="text-gradient font-medium">Artigos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Compartilho conhecimentos e experiências sobre desenvolvimento de software, melhores práticas e tecnologias modernas.
            </p>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-space font-semibold mb-8 text-center">Artigos em Destaque</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <article key={article.id} className="bg-card/50 border border-border/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-space font-semibold group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    Ler artigo
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Other Articles */}
        <div>
          <h2 className="text-2xl font-space font-semibold mb-8 text-center">Outros Artigos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherArticles.map((article) => (
              <article key={article.id} className="bg-card/50 border border-border/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-space font-semibold group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary/50 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 3 && (
                      <span className="px-2 py-1 bg-secondary/50 rounded-full text-xs font-medium">
                        +{article.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    Ler artigo
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-card/50 border border-border/20 rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Notebook className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-space font-semibold mb-4">Receba novos artigos</h3>
            <p className="text-muted-foreground mb-6">
              Inscreva-se para receber notificações sobre novos artigos e conteúdos sobre desenvolvimento de software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-background/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                variant="outline"
                className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};