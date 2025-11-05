import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ArticleProvider } from "./context/ArticleContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ArticleProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
            </Routes>
          </Layout>
        </ArticleProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
