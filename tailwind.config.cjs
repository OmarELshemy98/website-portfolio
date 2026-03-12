/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00fff7",
        'neon-cyan': "#00fff7",
        accent: "#00c3ff",
        dark: "#181f2a",
        card: "#232b3a",
      },
    },
  },
  plugins: [],
}
