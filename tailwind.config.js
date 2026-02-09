module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotateSlow: {
          "0%": { transform: "rotate(0deg) scale(1.25)" },
          "100%": { transform: "rotate(360deg) scale(1.25)" },
        },
      },
      animation: {
        "rotate-slow": "rotateSlow 90s linear infinite",
      },
    },
  },
};
