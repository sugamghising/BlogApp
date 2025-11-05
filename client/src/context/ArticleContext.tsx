import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { ArticleContextType, Article, ArticleInput } from "../types";
import * as api from "../services/api";

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getArticles();
      setArticles(data);
    } catch (err) {
      setError("Failed to fetch articles");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchArticleById = useCallback(
    async (id: string): Promise<Article | null> => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getArticleById(id);
        return data;
      } catch (err) {
        setError("Failed to fetch article");
        console.error(err);
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const createArticle = useCallback(
    async (article: ArticleInput): Promise<boolean> => {
      setLoading(true);
      setError(null);
      try {
        const newArticle = await api.createArticle(article);
        setArticles((prevArticles) => [newArticle, ...prevArticles]);
        return true;
      } catch (err) {
        setError("Failed to create article");
        console.error(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateArticle = useCallback(
    async (id: string, article: ArticleInput): Promise<boolean> => {
      setLoading(true);
      setError(null);
      try {
        const updatedArticle = await api.updateArticle(id, article);
        setArticles((prevArticles) =>
          prevArticles.map((a) => (a._id === id ? updatedArticle : a))
        );
        return true;
      } catch (err) {
        setError("Failed to update article");
        console.error(err);
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteArticle = useCallback(async (id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await api.deleteArticle(id);
      setArticles((prevArticles) => prevArticles.filter((a) => a._id !== id));
      return true;
    } catch (err) {
      setError("Failed to delete article");
      console.error(err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        loading,
        error,
        fetchArticles,
        fetchArticleById,
        createArticle,
        updateArticle,
        deleteArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = (): ArticleContextType => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticles must be used within ArticleProvider");
  }
  return context;
};
