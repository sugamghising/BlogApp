import React from "react";
import { Article } from "../../types";
import "./ArticleDetail.css";

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="article-detail">
      <div className="article-content-wrapper">
        <header>
          <span className="article-badge">Article</span>
          <h1 className="article-title">{article.title}</h1>

          <div className="article-meta">
            <div className="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </div>

            <div className="meta-item">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {Math.ceil(article.content.split(" ").length / 200)} min read
              </span>
            </div>
          </div>
        </header>

        <div className="article-body">
          {article.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <footer>
          <div className="last-updated">
            Last updated: {formatDate(article.updatedAt)}
          </div>
          <div className="article-actions">
            <button className="action-button">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>Like</span>
            </button>
            <button className="action-button">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default ArticleDetail;
