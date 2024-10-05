// components/PersonaProfile.tsx
import React from "react";

const personaData = [
  {
    profileName: "Food-Lover",
    groups: ["Starbucks", "Tim Horton's"],
  },
  {
    profileName: "Studious",
    groups: ["ICICS/CS", "ESB", "LSK"],
  },
  {
    profileName: "Nalla",
    groups: ["Ponderosa"],
  },
];

export default function PersonaProfile() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-red-600 mb-6">Persona Profiles</h2>
      <ul className="space-y-4">
        {personaData.map((persona, index) => (
          <li
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow"
          >
            <p className="text-lg text-gray-800 mb-1">
              <span className="font-semibold">Profile Name:</span>{" "}
              {persona.profileName}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Associated Areas:</span>{" "}
              {persona.groups.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
