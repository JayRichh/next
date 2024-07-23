module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      scale: {
        175: "1.75",
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      colors: {
        primary: {
          100: "#f0ead2", // Light Green
          200: "#dde5b4", // Pale Green
          300: "#d0dcb0", // Light Medium Green
          400: "#adc178", // Medium Green
          500: "#a98467", // Olive Green
          600: "#8b7059", // Dark Olive Green
          700: "#6c584c", // Dark Brown
          800: "#56463c", // Darker Brown
          900: "#3e342d", // Darkest Brown
        },
        secondary: {
          100: "#e3e4e8", // Light Gray
          200: "#c8c9d0", // Pale Gray
          300: "#afb1b8", // Light Medium Gray
          400: "#9699a0", // Medium Gray
          500: "#7d8088", // Olive Gray
          600: "#65676e", // Dark Olive Gray
          700: "#4d5056", // Dark Gray
          800: "#35383c", // Darker Gray
          900: "#1e2024", // Darkest Gray
        },
        tertiary: {
          100: "#fae1dd", // Light Coral
          200: "#f9cdc9", // Pale Coral
          300: "#f7b9b5", // Light Medium Coral
          400: "#f5a5a1", // Medium Coral
          500: "#f3928d", // Coral
          600: "#e27b7a", // Dark Coral
          700: "#d16367", // Dark Red
          800: "#c04b54", // Darker Red
          900: "#af3341", // Darkest Red
        },
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
    },
  },
  plugins: [],
};
