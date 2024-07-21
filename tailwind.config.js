/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest-purple': '#1B0422',
        'amethyst': '#8B5FBF',
        'snow': '#FFFCFD',
        'pink': '#FEC0CE',
        'dark-pink': '#D183C9',
        'dark-purple': '#643A71',
      },
      fontFamily: {
        cursive: ['Bonheur Royale', 'serif'],
        normal: ['Karla', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
