import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles/about.css'; // Optional: for styling if you plan to use CSS
import AuthPage from "./AuthPage";
import React from "react";
import "./styles/about.css";

function AboutUs() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to our innovative location-based service platform! Our mission is to enhance your everyday experiences
          by delivering <span className="about-highlight">personalized recommendations</span> and 
          <span className="about-highlight">promotional offers</span> tailored to your preferences and 
          frequently visited locations.
        </p>
        <p className="about-text">
          Whether you're searching for new food spots or exploring shopping stores, our service ensures 
          that you get the best options based on your habits. With advanced network APIs and location verification,
          we ensure that each recommendation you receive is highly relevant and timely.
        </p>
        <p className="about-text">
          Our goal is to provide you with a seamless experience, making sure you never miss out on exciting 
          promotions or hidden gems in the areas you frequent.
        </p>
        <div className="about-footer">
          <Link to="/auth"><button className="get-started-btn">Get Started!</button></Link>
          
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
