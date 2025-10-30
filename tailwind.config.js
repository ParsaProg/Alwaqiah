/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Light: "#4C5FD5",
          Dark: "",
        },
        secondry: {
          Light: "#FFB400",
          Dark: "",
        },
        confirmHover: {
          Light: "#7C5CE3",
          Dark: ""
        }
      },
    },
  },
  plugins: [],
};
