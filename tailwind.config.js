/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            500: '#3b82f6', // Your existing blue-500
            600: '#2563eb',
          },
          dark: {
            900: '#0f172a', // slate-900
          }
      },
      boxShadow: {
        'soft': '0 4px 14px 0 rgba(0, 0, 0, 0.08)',
        'hard': '0 4px 24px -2px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
} 