// 📄 hf-performance-demo/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F4F4F6',
        section: '#E0E0E3',
        textPrimary: '#1E1E1E',
        textSecondary: '#5A5A5A',
        accentBlue: '#0033A0',
        accentCopper: '#B87333',
        white: '#FFFFFF',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        heading: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
