/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          50:  '#eef2ff',
          100: '#dde6ff',
          700: '#1a2f5a',
          800: '#112244',
          900: '#090f20',
        },
      },
      boxShadow: {
        'glow-teal': '0 0 32px rgba(20,184,166,0.35)',
        'glow-blue': '0 0 32px rgba(59,130,246,0.25)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        heartbeat: {
          '0%,100%': { transform: 'scale(1)' },
          '14%':     { transform: 'scale(1.18)' },
          '28%':     { transform: 'scale(1)' },
          '42%':     { transform: 'scale(1.10)' },
          '70%':     { transform: 'scale(1)' },
        },
      },
      animation: {
        float:     'float 5s ease-in-out infinite',
        heartbeat: 'heartbeat 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}