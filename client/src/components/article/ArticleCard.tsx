import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../../types";
import "./ArticleCard.css";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getExcerpt = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <article className="article-card">
      <div className="card-content">
        <div className="card-header">
          <span className="badge">Article</span>
          <time className="date" dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>

        <h2 className="title">{article.title}</h2>

        <p className="excerpt">{getExcerpt(article.content)}</p>

        <Link to={`/article/${article._id}`} className="read-more">
          Read More
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
