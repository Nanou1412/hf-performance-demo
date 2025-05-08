/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e11d48",     // rouge racing
        accent: "#f97316",      // orange fluo
        dark: "#0f0f0f",        // noir carbone
        surface: "#1c1c1e",     // gris métal
        light: "#f5f5f5"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        smooth: "0 4px 12px rgba(0,0,0,0.1)"
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem"
      },
      transitionDuration: {
        DEFAULT: "300ms"
      }
    }
  },
  plugins: []
}
