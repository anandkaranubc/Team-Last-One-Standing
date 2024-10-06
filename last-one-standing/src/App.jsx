// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthPage from "./components/AuthPage"; // Make sure the path is correct
import reactLogo from "./assets/react.svg"; 
import AboutUs from "./components/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<AboutUs />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
