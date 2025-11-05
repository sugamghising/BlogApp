import React, { useState, useEffect } from "react";
import { Article, ArticleInput } from "../../types";
import "./ArticleForm.css";

interface ArticleFormProps {
  article?: Article;
  onSubmit: (article: ArticleInput) => Promise<boolean>;
  onCancel: () => void;
}

const ArticleForm: React.FC<ArticleFormProps> = ({
  article,
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setContent(article.content);
    }
  }, [article]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title || !content) {
      setError("Title and content are required");
      return;
    }

    setLoading(true);
    const articleData: ArticleInput = {
      title,
      content,
    };

    const success = await onSubmit(articleData);
    setLoading(false);

    if (success) {
      setTitle("");
      setContent("");
    } else {
      setError("Failed to save article");
    }
  };

  return (
    <div className="article-form">
      <div className="form-header">
        <h3 className="form-title">
          {article ? "Edit Article" : "Create New Article"}
        </h3>
      </div>

      {error && (
        <div className="error-message">
          <div className="error-content">
            <div className="error-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="error-text">{error}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
            placeholder="Enter article title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">
            Content <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
            placeholder="Write your article content here..."
          />
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--text-light)",
            }}
          >
            {content.length} characters •{" "}
            {content.split(/\s+/).filter(Boolean).length} words
          </p>
        </div>

        <div className="form-actions">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="btn cancel-button"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary submit-button"
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                Saving...
              </>
            ) : article ? (
              "Update Article"
            ) : (
              "Create Article"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
