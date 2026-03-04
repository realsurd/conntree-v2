module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        rotateSlow: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg) scale(1.2)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg) scale(1.2)",
          },
        },
        rotateReverse: {
          "0%": {
            transform: "translate(-50%, -50%) rotate(360deg) scale(1.3)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(0deg) scale(1.3)",
          },
        },
        subtleBlur: {
          "0%, 100%": { filter: "blur(8px)" },
          "50%": { filter: "blur(12px)" },
        },
      },

      animation: {
        "rotate-slow": "rotateSlow 80s linear infinite",
        "rotate-fast": "rotateSlow 40s linear infinite",
        "rotate-reverse": "rotateReverse 120s linear infinite",
        "subtle-blur": "subtleBlur 10s ease-in-out infinite",
        fadeIn: "fadeIn 0.2s ease-out",
      },

      fontFamily: {
        goodtiming: "var(--font-good-timing)",
      },
    },
  },
};
