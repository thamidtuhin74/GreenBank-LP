/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "green-light": "#2BB32A",
      white: "#fff",
    },
  },
  plugins: [require("daisyui")],
};
