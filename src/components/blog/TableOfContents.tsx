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
        <aside className="font-inter hidden 2xl:block fixed right-0 top-24 w-full">
            <div className="flex justify-center">
                <div className="max-w-6xl w-full px-6 flex justify-end">
                    <div className="w-56">
                        <div className="bg-secondary/30 border border-border/30 rounded-lg p-3 max-h-96 overflow-y-auto">
                            <h2 className="text-xs font-bold mb-3 text-foreground uppercase tracking-wide">
                                Neste artigo
                            </h2>
                            <nav className="space-y-1.5">
                                {headings.map((heading, index) => (
                                    <a
                                        key={index}
                                        href={`#${heading.id}`}
                                        className={`
                                            block text-2xs text-muted-foreground hover:text-foreground transition-colors truncate
                                            ${heading.level === 3 ? 'pl-3' : ''}
                                        `}
                                        title={heading.text}
                                    >
                                        {heading.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
