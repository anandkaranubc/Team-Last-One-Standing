// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

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
        <p>Welcome to the Home Page!</p>
        <Link to="/auth">
          <button>Login / Sign Up</button>
        </Link>
      </div>
      <p className="read-the-docs">Click on the React logo to learn more</p>
    </>
  );
}

export default Home;
