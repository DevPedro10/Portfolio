interface Heading {
    level: number;
    text: string;
    id: string;
}

interface TableOfContentsProps {
    headings: Heading[];
}

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
    if (headings.length === 0) {
        return null;
    }

    return (
        <aside className="font-inter hidden lg:block fixed right-8 top-32 w-64 h-64">
            <div className="bg-secondary/30 border border-border/30 rounded-lg p-4 max-h-96 overflow-y-auto">
                <h2 className="text-sm font-bold mb-3 text-foreground">
                    Neste artigo
                </h2>
                <nav className="space-y-1">
                    {headings.map((heading, index) => (
                        <a
                            key={index}
                            href={`#${heading.id}`}
                            className={`
                                block text-xs text-muted-foreground hover:text-foreground transition-colors truncate
                                ${heading.level === 3 ? 'pl-3' : ''}
                            `}
                            title={heading.text}
                        >
                            {heading.text}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};
