module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        width: "width 1s ease-in-out 0.1s",
      },
      keyframes: {
        width: {
          "0%": { transform: "scaleX(0.0)" },
          "100%": { transform: "scaleX(1.0)" },
        },
      },
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
