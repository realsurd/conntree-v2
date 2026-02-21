module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateSlow: {
          "0%": { transform: "rotate(0deg) scale(1.25)" },
          "100%": { transform: "rotate(360deg) scale(1.25)" },
        },
      },
      fontFamily: {
        goodtiming: "var(--font-good-timing)",
      },
      animation: {
        "rotate-slow": "rotateSlow 90s linear infinite",
        "rotate-fast": "rotateSlow 30s linear infinite",
      },
    },
  },
};
