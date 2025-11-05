import React from "react";
import ArticleCard from "./ArticleCard";
import { Article } from "../../types";
import "./ArticleList.css";

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="no-articles">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3>No Articles Yet</h3>
        <p>Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
