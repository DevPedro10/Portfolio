// src/components/BlogPost.tsx
import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { type Article } from "@/lib/markdown";
import { BlogHeader } from "./BlogHeader";
import { MobileBottomNav } from "./MobileBottomNav";
import { TableOfContents } from "./TableOfContents";
import ReactMarkdown from "react-markdown";
import { Footer } from "./Footer";


interface BlogPostProps {
    article: Article;
}

interface Heading {
    level: number;
    text: string;
    id: string;
}

export const BlogPost = ({ article }: BlogPostProps) => {
    const [headings, setHeadings] = useState<Heading[]>([]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    useEffect(() => {
        const lines = article.content.split('\n');
        const extractedHeadings: Heading[] = [];
        let headingCount = 0;

        lines.forEach(line => {
            if (line.startsWith('## ') || line.startsWith('### ')) {
                const level = line.startsWith('## ') ? 2 : 3;
                const text = line.replace(/^#+\s/, '').trim();
                const id = `heading-${headingCount}`;
                extractedHeadings.push({ level, text, id });
                headingCount++;
            }
        });

        setHeadings(extractedHeadings);
    }, [article.content]);

    return (
        <div className="min-h-screen" >
            <BlogHeader />

            <div className="flex justify-center py-8 sm:py-12">
                <div className="max-w-2xl px-4 sm:px-6 w-full">
                    <article className="font-sourceserif">
                        <header className="mb-12">
                            <h1 className="font-sourceserif font-normal text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <time>{formatDate(article.date)}</time>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>

                            {/* <div className="flex flex-wrap gap-2">
                                {article.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1 px-3 py-1 bg-secondary/50 rounded-full text-sm border border-border/50"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div> 
                            */}
                        </header>

                        <div style={{ color: 'var(--foreground)', fontSize: '18px' }}>
                            <ReactMarkdown
                                components={{
                                    h2: ({ node, children, ...props }) => (
                                        <h2
                                            id={headings[headings.findIndex(h => h.text === (children as any)[0])]?.id}
                                            style={{
                                                fontFamily: 'Source Serif 4, serif',
                                                fontWeight: 'bold',
                                                fontSize: '28px',
                                                marginTop: '40px',
                                                marginBottom: '24px',
                                                paddingBottom: '12px',
                                                borderBottom: '1px solid rgba(0,0,0,0.1)',
                                                color: 'currentColor',
                                            }}
                                            {...props}
                                        >
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ node, children, ...props }) => (
                                        <h3
                                            id={headings[headings.findIndex(h => h.text === (children as any)[0])]?.id}
                                            style={{
                                                fontFamily: 'Source Serif 4, serif',
                                                fontWeight: 'bold',
                                                fontSize: '24px',
                                                marginTop: '32px',
                                                marginBottom: '16px',
                                                color: 'currentColor',
                                            }}
                                            {...props}
                                        >
                                            {children}
                                        </h3>
                                    ),
                                    p: ({ node, ...props }) => (
                                        <p style={{
                                            fontSize: '18px',
                                            fontFamily: 'Source Serif 4, serif',
                                            color: 'currentColor', lineHeight: '1.625', marginBottom: '24px'
                                        }} {...props} />
                                    ),
                                    ul: ({ node, ...props }) => (
                                        <ul
                                            style={{
                                                listStyleType: 'disc',
                                                listStylePosition: 'inside',
                                                color: 'currentColor',
                                                marginTop: '24px',
                                                marginBottom: '24px',
                                                fontFamily: 'Source Serif 4, serif',
                                            }}
                                            {...props}
                                        />
                                    ),
                                    ol: ({ node, ...props }) => (
                                        <ol
                                            style={{
                                                listStyleType: 'decimal',
                                                listStylePosition: 'inside',
                                                color: 'currentColor',
                                                marginTop: '24px',
                                                marginBottom: '24px',
                                                fontFamily: 'Source Serif 4, serif',
                                            }}
                                            {...props}
                                        />
                                    ),
                                    li: ({ node, ...props }) => (
                                        <li style={{ marginLeft: '8px', marginBottom: '8px', fontFamily: 'Source Serif 4, serif' }} {...props} />
                                    ),
                                    code: ({ node, ...props }) => {
                                        return <code {...props} />;
                                    },
                                    pre: ({ node, ...props }) => (
                                        <pre
                                            style={{
                                                backgroundColor: 'rgba(0,0,0,0.05)',
                                                border: '1px solid rgba(0,0,0,0.1)',
                                                borderRadius: '8px',
                                                padding: '16px',
                                                overflowX: 'auto',
                                                marginTop: '24px',
                                                marginBottom: '24px',
                                            }}
                                            {...props}
                                        />
                                    ),
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote
                                            style={{
                                                borderLeft: '4px solid currentColor',
                                                paddingLeft: '16px',
                                                fontStyle: 'italic',
                                                color: 'currentColor',
                                                marginTop: '24px',
                                                marginBottom: '24px',
                                                fontFamily: 'Source Serif 4, serif',
                                            }}
                                            {...props}
                                        />
                                    ),
                                    hr: ({ node, ...props }) => (
                                        <hr
                                            style={{
                                                border: 'none',
                                                borderTop: '1px solid rgba(0,0,0,0.1)',
                                                marginTop: '32px',
                                                marginBottom: '32px',
                                            }}
                                            {...props}
                                        />
                                    ),
                                    a: ({ node, ...props }) => (
                                        <a style={{ color: 'currentColor', textDecoration: 'underline', fontFamily: 'Source Serif 4, serif' }} {...props} />
                                    ),
                                    strong: ({ node, ...props }) => (
                                        <strong style={{ fontWeight: '600', color: 'currentColor', fontFamily: 'Source Serif 4, serif' }} {...props} />
                                    ),
                                    em: ({ node, ...props }) => (
                                        <em style={{ fontStyle: 'italic', color: 'currentColor', fontFamily: 'Source Serif 4, serif' }} {...props} />
                                    ),
                                }}
                            >
                                {article.content}
                            </ReactMarkdown>
                        </div>
                    </article>
                </div>
            </div>

            <TableOfContents headings={headings} />
            <MobileBottomNav />
            <Footer />
        </div >
    );
};