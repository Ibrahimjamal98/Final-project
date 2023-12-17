import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import "../style/userDashboard.css";

const UserDashboard = ({ username, onLogout, role }) => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <nav>
        <ul>
          <li className="Welcome">
            <Link to="/profile">Welcome to your Profile!</Link>
          </li>
          {role === "admin" && (
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          )}
        </ul>
      </nav>
      {role === "admin" && <AdminOptions />} <UserProfile onLogout={onLogout} />
    </div>
  );
};

export default UserDashboard;
