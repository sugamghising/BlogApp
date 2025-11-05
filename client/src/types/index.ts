export interface Article {
    _id: string;
    title: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

export interface ArticleInput {
    title: string;
    content: string;
    publishedAt?: string;
}

export interface AuthContextType {
    isAdmin: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
    loading: boolean;
}

export interface ArticleContextType {
    articles: Article[];
    loading: boolean;
    error: string | null;
    fetchArticles: () => Promise<void>;
    fetchArticleById: (id: string) => Promise<Article | null>;
    createArticle: (article: ArticleInput) => Promise<boolean>;
    updateArticle: (id: string, article: ArticleInput) => Promise<boolean>;
    deleteArticle: (id: string) => Promise<boolean>;
}