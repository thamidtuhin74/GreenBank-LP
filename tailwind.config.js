/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
<<<<<<< HEAD
      "green-light": "#2BB32A",
      white: "#fff",
      gray: "#ADB2B1",
=======

      'green-light': '#2BB32A',
      'white': '#fff',
      'gray': '#ADB2B1'
>>>>>>> db60169067454b4f397c81478b720c1e168d10d2
    },
  },
  plugins: [require("daisyui")],
};
