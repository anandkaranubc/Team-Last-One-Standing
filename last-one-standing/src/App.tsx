// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import PersonaProfile from "./components/PersonaProfile";
import LocationHistory from "./components/LocationHistory";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20 px-4">
          <Routes>
            <Route path="/" element={<UserProfile />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/persona" element={<PersonaProfile />} />
            <Route path="/location-history" element={<LocationHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
