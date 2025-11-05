import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";

const Header: React.FC = () => {
  const { isAdmin, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <svg
              className="logo-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h1 className="logo-text">BlogApp</h1>
          </Link>

          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {isAdmin ? (
              <>
                <Link to="/admin" className="nav-link">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/admin/login" className="btn btn-primary">
                Admin Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
