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
      },
      animation: {
        "bounce-slow": "bounce 1s ease-in-out infinite"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animation-delay")
  ]
};
