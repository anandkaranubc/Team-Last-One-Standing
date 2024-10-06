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
    setAgreeTerms(false); // Reset terms agreement when switching forms
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Since the button is disabled when terms are not agreed,
    // we don't need to check agreeTerms here, but you can keep it for extra safety.
    if (!isLogin && !agreeTerms) {
      alert("Please agree to the terms and conditions to proceed.");
      return;
    }

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
            {!isLogin ? (
              <>
                <input type="text" name="firstName" autoComplete="off" placeholder="First Name" required />
                <input type="text" name="lastName" autoComplete="off" placeholder="Last Name" required />
                <input type="tel" name="phoneNo" autoComplete="new-tel" placeholder="Phone No." required />
                <input type="password" name="password" placeholder="Password" required />

                {/* Terms and Conditions Checkbox */}
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
              </>
            ) : (
              <>
                <input type="tel" placeholder="Phone No." required />
                <input type="password" placeholder="Password" required />
              </>
            )}
            <button
              type="submit"
              className={!isLogin && !agreeTerms ? "unclickable-button" : ""}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <div className="login-prompt">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={toggleForm}>{isLogin ? "Sign Up" : "Login"}</span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;