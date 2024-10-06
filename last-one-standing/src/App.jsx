// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthPage from "./components/AuthPage"; // Make sure the path is correct
import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutUs from "./components/about";
import Dashboard from "./components/Dashboard";

function Home() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <Link to="/about">
          <button>Welcome to the Home Page!</button>
        </Link>
      </div>
      <p className="read-the-docs">Click on the React logo to learn more</p>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
