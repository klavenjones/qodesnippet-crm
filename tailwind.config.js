module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px"
      }
    },
    extend: {
      spacing: {
        100: "25rem",
        112: "28rem",
        128: "32rem",
        144: "36rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/aspect-ratio")]
};
