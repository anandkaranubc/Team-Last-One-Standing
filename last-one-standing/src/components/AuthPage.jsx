// AuthPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    // After authentication, navigate to the desired page
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="logo">
          <h2>YourApp</h2>
        </div>
        <div className="form-container">
          <h1>{isLogin ? "Welcome Back!" : "Create Account"}</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && <input type="text" placeholder="Username" required />}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
