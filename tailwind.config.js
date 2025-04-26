/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",  // ✅ Must be set to 'class' to work with ThemeToggle
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1.2s infinite',
      },
    },
  },
  plugins: [],
};
