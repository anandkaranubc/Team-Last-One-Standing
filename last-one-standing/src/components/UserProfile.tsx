// components/UserProfile.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/location-history");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div
        onClick={handleClick}
        className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-4">User Profile</h2>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">ID:</span> 12345
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Phone Number:</span> (555) 123-4567
          </p>
          <p className="mt-4 text-sm text-gray-500 italic">
            Click to view location history
          </p>
        </div>
      </div>
    </div>
  );
}
