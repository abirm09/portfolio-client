/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#641ae6",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#F8F6F4",
          "base-200": "#E3F4F4",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      {
        dark: {
          primary: "#641AE6",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#020617",
          "base-200": "#0E0222",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
