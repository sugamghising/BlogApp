import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Dashboard from "../components/admin/Dashboard";
import Loading from "../components/common/Loading";
import "./AdminDashboardPage.css";

const AdminDashboardPage: React.FC = () => {
  const { isAdmin, loading } = useAuth();

  if (loading) return <Loading />;
  if (!isAdmin) return <Navigate to="/admin/login" />;

  return (
    <div className="admin-dashboard-page">
      <Dashboard />
    </div>
  );
};

export default AdminDashboardPage;
