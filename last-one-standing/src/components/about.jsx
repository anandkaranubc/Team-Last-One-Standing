  import React from 'react';
  import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  import './styles/about.css'; // Optional: for styling if you plan to use CSS
  import AuthPage from "./AuthPage";

  const AboutUs = () => {
    return (
      <div className="about-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>We are a passionate team dedicated to delivering high-quality projects and impactful results.</p>
          </div>
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="profile1.jpg" alt="Team member 1" className="profile-pic" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
              <p>John is a visionary leader with a background in software development and a passion for innovation.</p>
            </div>
            <div className="team-member">
              <img src="profile2.jpg" alt="Team member 2" className="profile-pic" />
              <h3>Jane Smith</h3>
              <p>Lead Designer</p>
              <p>Jane is a creative mastermind who brings design ideas to life with her stunning visuals.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to harness the power of technology to build solutions that improve the quality of life for our clients.
            We strive for excellence in everything we do, ensuring that we deliver products that meet the highest standards.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Constantly pushing boundaries to find new and better ways of doing things.</li>
            <li><strong>Integrity:</strong> We operate with honesty and transparency in all our work.</li>
            <li><strong>Collaboration:</strong> We believe in the power of teamwork and achieving more together.</li>
          </ul>
        
          <Link to="/auth">
            <button>Join Us!</button>
          </Link>
        </section>
      </div>
    );
  };


  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* You can add more routes here */}
        </Routes>
      </Router>
    );
  }

  export default AboutUs;
