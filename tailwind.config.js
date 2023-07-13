/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        // Your custom colors
        primary: {
          DEFAULT: "#007FF5",
          100: "#94CCFF",
          200: "#7ABFFF",
          300: "#61B3FF",
          400: "#46A6FF",
          500: "#2E9BFF",
          600: "#148EFF",
        },
        base: {
          DEFAULT: "#0c1531",
          600: "#111e46",
          500: "#16275a",
          400: "#1b2f6f",
          300: "#203883",
          200: "#233d8f",
          100: "#2846a4",
        },
        gray: {
          DEFAULT: "#EDEFf1",
          10: "#C9CEd6",
          20: "#A4ADBa",
          30: "#80918F",
          40: "#606D7F",
          50: "#454E5B",
          60: "#292F36",
          70: "#0E1012",
        },
        white: "#fefcfb",
        lightBlue: {
          100: "#ced7f3",
          200: "#97a2c4",
        },
        black: "#040710",

        success: "#4CAF50",
        warning: "#FF9800",
        error: "#F44336",
        info: "#3A9CF6",
        orange: "#FF9900",
        blue: "#3A9CF6",
        red: "#FF595E",
        yellow: "#FFD400",
        "red-10": "#FFE5E6",
      },
    },
  },
  plugins: [],
};
