import React from "react";
import { useNavigate } from "react-router-dom";
import auth from '../utils/auth';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="ui menu">
      <div className="ui container">
        <a href="/" className="header item">
          <i className="tasks icon"></i> Tasks
        </a>
        <div className="right menu">
          <button className="ui button red" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
