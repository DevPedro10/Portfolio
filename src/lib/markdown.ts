// src/lib/markdown.ts
export interface ArticleMetadata {
    title: string;
    date: string;
    description: string;
    tags: string[];
    readTime?: string;
    featured?: boolean;
}

export interface Article extends ArticleMetadata {
    id: string;
    slug: string;
    content: string;
    excerpt: string;
}

/**
 * Calculate reading time from content
 */
function calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min`;
}


export async function loadArticles(): Promise<Article[]> {
    // Import all markdown files from content directory
    const modules = import.meta.glob('/src/content/articles/**/*.md', {
        query: '?raw',
        import: 'default'
    });
    console.log(Object.keys(modules));

    const articles: Article[] = [];
    let id = 1;

    for (const path in modules) {
        try {
            const fileContent = await modules[path]();

            // Parse frontmatter using gray-matter
            const { data, content } = parseFrontmatter(fileContent as string);

            // Extract slug from filename
            const filename = path.split('/').pop()?.replace('.md', '') || '';

            // Calculate read time if not provided
            const readTime = data.readTime || calculateReadTime(content);

            // Generate excerpt from description or content
            const excerpt = data.description || content.substring(0, 160).trim() + '...';

            articles.push({
                id: String(id++),
                slug: filename,
                title: data.title || 'Sem título',
                date: data.date || new Date().toISOString(),
                description: data.description || '',
                tags: data.tags || [],
                featured: data.featured || false,
                content,
                excerpt,
                readTime,
            });
        } catch (error) {
            console.error(`Error loading article from ${path}:`, error);
        }
    }

    // Sort by date (newest first)
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function parseFrontmatter(fileContent: string) {
    const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

    if (!match) {
        return {
            data: {},
            content: fileContent
        };
    }

    const frontmatterRaw = match[1];
    const content = match[2];

    const data: any = {};

    frontmatterRaw.split('\n').forEach(line => {
        const [key, ...rest] = line.split(':');
        if (!key) return;

        const value = rest.join(':').trim();

        if (value.startsWith('[')) {
            data[key.trim()] = JSON.parse(value);
        } else if (value === 'true') {
            data[key.trim()] = true;
        } else if (value === 'false') {
            data[key.trim()] = false;
        } else {
            data[key.trim()] = value.replace(/^"|"$/g, '');
        }
    });

    return { data, content };
}


/**
 * Load a single article by slug
 */
export async function loadArticleBySlug(slug: string): Promise<Article | null> {
    const articles = await loadArticles();
    return articles.find(article => article.slug === slug) || null;
}