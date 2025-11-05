import React, { useEffect } from "react";
import { useArticles } from "../context/ArticleContext";
import ArticleList from "../components/article/ArticleList";
import Loading from "../components/common/Loading";
import ErrorMessage from "../components/common/ErrorMessage";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const { articles, loading, error, fetchArticles } = useArticles();

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  return (
    <div className="home-page">
      <section className="home-header">
        <h1>Welcome to BlogApp</h1>
        <p>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </section>

      <section>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <ArticleList articles={articles} />
        )}
      </section>
    </div>
  );
};

export default HomePage;
