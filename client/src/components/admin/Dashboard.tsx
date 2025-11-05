import React, { useState, useEffect } from "react";
import { useArticles } from "../../context/ArticleContext";
import ArticleForm from "./ArticleForm";
import { Article } from "../../types";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const {
    articles,
    fetchArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    loading,
  } = useArticles();
  const [showForm, setShowForm] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | undefined>(
    undefined
  );

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreate = async (articleData: any) => {
    const success = await createArticle(articleData);
    if (success) {
      setShowForm(false);
      fetchArticles();
    }
    return success;
  };

  const handleUpdate = async (articleData: any) => {
    if (editingArticle) {
      const success = await updateArticle(editingArticle._id, articleData);
      if (success) {
        setEditingArticle(undefined);
        setShowForm(false);
        fetchArticles();
      }
      return success;
    }
    return false;
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (
      window.confirm(
        "Are you sure you want to delete this article? This action cannot be undone."
      )
    ) {
      await deleteArticle(id);
      fetchArticles();
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingArticle(undefined);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p style={{ color: "var(--text-gray)", marginTop: "0.25rem" }}>
            Manage your blog articles
          </p>
        </div>
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginRight: "0.5rem",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Article
          </button>
        )}
      </div>

      {showForm && (
        <ArticleForm
          article={editingArticle}
          onSubmit={editingArticle ? handleUpdate : handleCreate}
          onCancel={handleCancel}
        />
      )}

      <div className="dashboard-content">
        {loading ? (
          <div className="loading-wrapper">
            <div className="loading-content">
              <div className="spinner"></div>
              <p>Loading articles...</p>
            </div>
          </div>
        ) : articles.length === 0 ? (
          <div className="no-articles-message">
            <p>No articles yet. Create your first article to get started!</p>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="btn btn-primary"
              >
                Create Article
              </button>
            )}
          </div>
        ) : (
          <div className="dashboard-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Published Date</th>
                  <th>Status</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article._id}>
                    <td>
                      <div className="article-title-cell">{article.title}</div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-light)",
                          marginTop: "0.25rem",
                        }}
                      >
                        {article.content.substring(0, 60)}...
                      </div>
                    </td>
                    <td>{formatDate(article.publishedAt)}</td>
                    <td>
                      <span className="article-category">Published</span>
                    </td>
                    <td>
                      <div
                        className="table-actions"
                        style={{ justifyContent: "flex-end" }}
                      >
                        <button
                          onClick={() => handleEdit(article)}
                          className="icon-button edit-button"
                          title="Edit"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(article._id)}
                          className="icon-button delete-button"
                          title="Delete"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
