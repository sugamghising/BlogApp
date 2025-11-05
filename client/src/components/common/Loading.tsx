import React from "react";
import "./Loading.css";

const Loading: React.FC = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-content">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
