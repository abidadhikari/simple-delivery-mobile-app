// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layout/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
