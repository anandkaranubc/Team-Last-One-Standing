import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setAgreeTerms(false); // Reset terms agreement when switching forms
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payloadSignup = {
      firstName,
      lastName,
      password,
      phoneNumber
    };

    const payloadLogin = {
      phoneNumber,
      password
    }

    if (!isLogin) {
      // Include additional data for registration

      try {
        // Make a POST request to the Express API
        const response = await fetch('http://localhost:3000/api/signupUser', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payloadSignup),
        });
        const result =  response.json();

        if (result.ok) {
          navigate('/dashboard');
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred during registration.');
      } 

      
    } else {
      try {
        const response = await fetch("http://localhost:3000/api/loginUser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payloadLogin),
        })
        if (response.ok) {
          navigate('/dashboard');
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
      }
    }
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
                <input
                  type="text"
                  name="firstName"
                  autoComplete="off"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  autoComplete="off"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  name="phoneNo"
                  autoComplete="new-tel"
                  placeholder="Phone No."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

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
                <input
                  type="tel"
                  placeholder="Phone No."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
