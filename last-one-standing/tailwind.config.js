import forms from "@tailwindcss/forms";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure paths match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    // Add other plugins if necessary
  ],
};
