import React from "react";
import LoginForm from "../components/admin/LoginForm";
import "./AdminLoginPage.css";

const AdminLoginPage: React.FC = () => {
  return (
    <div className="admin-login-page">
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
};

export default AdminLoginPage;
