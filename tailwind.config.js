/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "neutral-50": "#F9F9F9",
        "neutral-100": "#F4F4F4",
        "neutral-200": "#E4E4E4",
        "neutral-300": "#D3D3D3",
        "neutral-400": "#A2A2A2",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0A0A0A",
        "neutral-1000": "#000000",
        "twitter-default": "#1D9BF0",
        "twitter-hover": "#1871CA",
        "twitter-disabled": "#1E5D87",
        "blue-wash": "rgba(117, 190, 239, 0.75)",
        "button-stroke": "#546A7A",
        "searchbar-fill": "#212327",
        "card-fill": "#16181C",
        success: "#00BE74",
        error: "#8B141A",
        stroke: "rgba(29, 155, 240, 0.24)",
      },
      spacing: {
        "20.8rem": "20.875rem",
        // "5.3rem": "5.313rem",
        "5.2rem": "5.25rem",
        "27.6rem": "27.625rem",
        // "27.1rem": "27.125rem",
        "6.1rem": "6.125rem",
        // "0.9rem": "0.9375rem",
        // "5.8rem": "5.8125rem",
        "13.8rem": "13.875rem",
        "37.3rem": "37.375rem",
        "24.3rem": "24.375",
        // "3.6rem": "3.625rem",
        // "2.3rem": "2.375rem",
        "26.6rem": "26.625rem",
        "21.7rem": "21.75rem",
        // "2.4rem": "2.4375rem",
        // "15.4rem": "15.4375rem",
        "32rem": "32rem",
        // "22.1rem": "22.1875rem",
        "30.1rem": "30.125rem",
        // "0.3rem": "0.3125rem",
        "54.25rem": "868px",
      },
      borderRadius: {
        "4xl": "1.875rem",
        "5xl": "4.0625rem",
        "6xl": "624.9375rem",
        "7xl": "12.5rem",
      },
      height: {
        "98vh": "98vh",
        "100vh": "100vh",
      },
      boxShadow: {
        primary: "0px 8px 16px 0px rgba(0,0,0,0.25);",
      },
      bottom: {
        "115px": "115px",
      },
      left: {
        "210px": "210px",
      },
    },
  },
  plugins: [],
};
