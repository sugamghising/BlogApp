import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useArticles } from "../context/ArticleContext";
import ArticleDetail from "../components/article/ArticleDetail";
import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";
import { Article } from "../types";
import "./ArticlePage.css";

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { fetchArticleById, loading, error } = useArticles();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (id) {
        const data = await fetchArticleById(id);
        setArticle(data);
      }
    };
    loadArticle();
  }, [id, fetchArticleById]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!article) return <ErrorMessage message="Article not found" />;

  return (
    <div className="article-page">
      <div className="article-page-content">
        <Link to="/" className="back-link">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
        <ArticleDetail article={article} />
      </div>
    </div>
  );
};

export default ArticlePage;
