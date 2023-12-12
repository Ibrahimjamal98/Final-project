import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../style/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      // Redirect or perform additional actions on successful login
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className="login-container">
      <h1 className="sign-in-h1">Sign In</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}

      {/* Add Link to Signup page */}
      <div className="sign-up">
        <p>
          New to Techuick?{" "}
          <Link to="/register" style={{ fontSize: "16px" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
