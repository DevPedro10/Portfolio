// src/components/Blog.tsx
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogHeader } from "./BlogHeader";
import { BlogNewsletter } from "./BlogNewsletter";
import { useEffect, useState } from "react";
import { loadArticles, type Article } from "@/lib/markdown";
import { MobileBottomNav } from "../shared/MobileBottomNav";
import { Footer } from "../footer/Footer";

export const Blog = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
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
  const allArticles = [...featuredArticles, ...otherArticles];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
      <BlogHeader />
      <div className="min-h-screen py-0 sm:py-20 px-0 sm:px-6">
        <div className="container mx-auto sm:max-w-6xl px-4 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {articles.length} artigos publicados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allArticles.map((article) => (
              <article
                key={article.id}
                className="bg-card/50 border border-border/20 rounded-xl p-6 hover:bg-card/60 transition-colors duration-300"
              >
                <div className="flex flex-col h-full gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    {article.featured && (
                      <span className="ml-1 px-2 py-0.5 text-[10px] uppercase tracking-wide rounded-full border border-primary/30 text-primary">
                        Destaque
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sourceserif text-lg md:text-xl font-semibold text-foreground">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary/40 rounded-full text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {article.tags.length > 4 && (
                      <span className="px-2 py-1 bg-secondary/40 rounded-full text-[11px] font-medium">
                        +{article.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/blog/${article.slug}`)}
                    className="mt-auto border-border/50 hover:border-border hover:bg-secondary/30 transition-all duration-300 w-max"
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

        <div className="mb-10 p-3 text-center w-full">
          <BlogNewsletter />
        </div>
      </div>
      <MobileBottomNav />
      <Footer />
    </>
  );
};