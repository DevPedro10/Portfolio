import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { loadArticles, type Article } from "@/lib/markdown";

export default function BlogSearchInput() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  // Carregar artigos ao montar o componente
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const loadedArticles = await loadArticles();
        setArticles(loadedArticles);
      } catch (error) {
        console.error("Erro ao carregar artigos:", error);
      }
    };

    fetchArticles();
  }, []);

  // Função de busca
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);

    // Simula delay de busca
    const timer = setTimeout(() => {
      const results = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, articles]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  const handleArticleClick = (article: Article) => {
    // Navegar para o artigo
    navigate(`/blog/${article.slug}`, { replace: true });
    clearSearch();
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Input de Busca */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar artigos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery && setShowResults(true)}
          className="w-full pl-10 pr-10 py-2 bg-background border-2 border-neutral-400 dark:border-neutral-700 focus:border-neutral-500 dark:focus:border-neutral-600 rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Resultados da Busca */}
      {showResults && (
        <div className="absolute top-full mt-2 w-full bg-popover rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-muted-foreground">
              Buscando...
            </div>
          ) : searchResults.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {searchResults.length}{" "}
                {searchResults.length === 1 ? "Resultado" : "Resultados"}
              </div>
              {searchResults.map((article) => (
                <button
                  key={article.id}
                  onClick={() => handleArticleClick(article)}
                  className="w-full text-left px-4 py-3 hover:text-accent-foreground transition-colors border-t border-border first:border-t-0"
                >
                  <h3 className="font-medium text-foreground mb-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    {article.excerpt}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-muted-foreground">
              Nenhum artigo encontrado
            </div>
          )}
        </div>
      )}

      {/* Overlay para fechar resultados ao clicar fora */}
      {showResults && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowResults(false)}
        />
      )}
    </div>
  );
}
