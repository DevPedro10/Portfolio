// src/components/Blog.tsx
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { BlogHeader } from "./BlogHeader";
import { Footer } from "./Footer";
import { BlogNewsletter } from "./BlogNewsletter";
import { BlogPost } from "./BlogPost";
import { SlideIn } from "./animations";
import { useEffect, useState } from "react";
import { loadArticles, type Article } from "@/lib/markdown";

export const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const loadedArticles = await loadArticles();
        setArticles(loadedArticles);
      } catch (error) {
        console.error("Erro ao carregar artigos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const featuredArticles = articles.filter((article) => article.featured);
  const otherArticles = articles.filter((article) => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (selectedArticle) return <BlogPost article={selectedArticle} />

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Carregando artigos...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SlideIn direction="down" duration={0.8} delay={2.5}>
        <BlogHeader />
      </SlideIn>
      <div className="min-h-screen py-0 sm:py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {featuredArticles.length > 0 && (
            <div className="mb-8">
              <div className="grid lg:grid-cols-1 gap-8">
                {featuredArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="bg-card/50 border border-border/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group cursor-pointer"
                  >
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

                      <h3 className="font-sourceserif text-xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-200">
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
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedArticle(article);
                        }}
                        className="border-border/50 hover:border-border hover:bg-secondary/30 transition-all duration-300"
                      >
                        Ler artigo
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {otherArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-card/50 border border-border/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300 group cursor-pointer"
              >
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

                  <h3 className="font-sourceserif text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors duration-200">
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedArticle(article);
                    }}
                    className="border-border/50 hover:border-border hover:bg-secondary/30 transition-all duration-300"
                  >
                    Ler artigo
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="text-center py-12 text-muted-foreground space-y-2">
              <p className="text-lg">Nenhum artigo encontrado.</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center w-full">
          <BlogNewsletter />
        </div>
      </div>
      <Footer />
    </>
  );
};