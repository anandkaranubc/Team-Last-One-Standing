// AuthPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
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
          <h2>Last One Standing</h2>
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
            {/* <input id="inpLock" type="checkbox" />
            <label class="btn-lock" for="inpLock">
              <svg width="36" height="40" viewBox="0 0 36 40">
                <path
                  class="lockb"
                  d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"
                ></path>
                <path
                  class="lock"
                  d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"
                ></path>
                <path class="bling" d="M29 20L31 22"></path>
                <path class="bling" d="M31.5 15H34.5"></path>
                <path class="bling" d="M29 10L31 8"></path>
              </svg>
            </label> */}
            <div className="terms-container">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="terms">
                I agree to the{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </p>
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
