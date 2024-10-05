// components/LocationHistory.tsx
import React from "react";

const locationData = [
  {
    area: "East Vancouver",
    duration: "2 hours",
    time: "2023-10-01 10:00 AM",
  },
  {
    area: "West Vancouver",
    duration: "1.5 hours",
    time: "2023-10-02 2:00 PM",
  },
  {
    area: "North Vancouver",
    duration: "3 hours",
    time: "2023-10-03 9:00 AM",
  },
  {
    area: "South Vancouver",
    duration: "1 hour",
    time: "2023-10-04 5:00 PM",
  },
];

export default function LocationHistory() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Location History</h2>
      <ul className="space-y-4">
        {locationData.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow"
          >
            <p className="text-lg text-gray-800 mb-1">
              <span className="font-semibold">Area:</span> {item.area}
            </p>
            <p className="text-lg text-gray-800 mb-1">
              <span className="font-semibold">Duration:</span> {item.duration}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Time:</span> {item.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
