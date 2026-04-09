/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FCD34D",
        "dark-purple": "#581C87",
        "deep-blue": "#001a4d",
      },
      fontFamily: {
        serif: ["Crimson Text", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "glow-gold": "0 0 30px rgba(250, 204, 21, 0.5)",
        "glow-purple": "0 0 30px rgba(139, 92, 246, 0.3)",
        "glow-gold-lg":
          "0 0 50px rgba(250, 204, 21, 0.8), 0 0 80px rgba(139, 92, 246, 0.4)",
      },
      textShadow: {
        glow: "0 0 30px rgba(250, 204, 21, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)",
        "glow-sm": "0 0 15px rgba(250, 204, 21, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(250, 204, 21, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(250, 204, 21, 0.8)",
          },
        },
      },
    },
  },
  plugins: [],
};
