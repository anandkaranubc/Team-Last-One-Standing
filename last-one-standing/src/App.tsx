import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import UserProfile from "./components/UserProfile";
import PersonaProfile from "./components/PersonaProfile";
import LocationHistory from "./components/LocationHistory";

export default function App() {
  const [activeTab, setActiveTab] = useState("user");

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 p-4">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="mt-24 p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-xl">
          <Routes>
            <Route
              path="/"
              element={
                activeTab === "user" ? <UserProfile /> : <PersonaProfile />
              }
            />
            <Route path="/location-history" element={<LocationHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
