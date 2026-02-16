import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadArticleBySlug, type Article } from "@/lib/markdown";
import { BlogPost } from "@/components/blog/BlogPost";

export const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!slug) return;

            try {
                const loadedArticle = await loadArticleBySlug(slug);
                if (loadedArticle) {
                    setArticle(loadedArticle);
                } else {
                    setNotFound(true);
                }
            } catch (error) {
                console.error("Erro ao carregar artigo:", error);
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="text-muted-foreground">Carregando artigo...</p>
                </div>
            </div>
        );
    }

    if (notFound) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
                    <p className="text-muted-foreground">O artigo que você procura não existe.</p>
                    <button
                        onClick={() => navigate("/blog")}
                        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Voltar para o Blog
                    </button>
                </div>
            </div>
        );
    }

    if (!article) {
        return null;
    }

    return (
        <BlogPost article={article} />
    );
};
