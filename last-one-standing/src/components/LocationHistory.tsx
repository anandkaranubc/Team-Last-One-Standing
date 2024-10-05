// components/LocationHistory.tsx
import React from "react";
const Locs = [
  {
    name: "Tim Horton's",
    latitude: 49.26908,
    longitude: -123.24872,
  },
  {
    name: "Starbucks",
    latitude: 49.26545,
    longitude: -123.24991,
  },
  {
    name: "LSK",
    latitude: 49.26908,
    longitude: -123.25514,
  },
  {
    name: "ESB",
    latitude: 49.26335,
    longitude: -123.24984,
  },
  {
    name: "ICICS",
    latitude: 49.26118,
    longitude: -123.24918,
  },
  {
    name: "Ponderosa",
    latitude: 49.26417,
    longitude: -123.25583,
  },
];
const locationData = [
  {
    area: "Food-Lover",
    latitude: 49.26906,
    longitude: -123.24873,
    time: "2023-10-01 10:00 AM",
  },
  {
    area: "Food-Lover",
    latitude: 49.26905,
    longitude: -123.24873,
    time: "2023-10-01 11:00 AM",
  },
  {
    area: "Food-Lover",
    latitude: 49.26906,
    longitude: -123.24872,
    time: "2023-10-01 12:00 AM",
  },
  {
    area: "Nalla",
    latitude: 49.26416,
    longitude: -123.25583,
    time: "2023-10-01 1:00 PM",
  },
  {
    area: "Nalla",
    latitude: 49.26417,
    longitude: -123.25584,
    time: "2023-10-01 2:00 PM",
  },
  {
    area: "Studious",
    latitude: 49.26117,
    longitude: -123.24917,
    time: "2023-10-01 3:00 PM",
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
              <span className="font-semibold">Latitude:</span> {item.latitude}
            </p>
            <p className="text-lg text-gray-800 mb-1">
              <span className="font-semibold">Longitutde:</span>{" "}
              {item.longitude}
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
