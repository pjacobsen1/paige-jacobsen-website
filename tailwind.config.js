/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateX(var(--radius)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateX(var(--radius)) rotate(calc(var(--angle) * -1deg - 360deg))",
          },
        },
      },
      animation: {
        orbit: "orbit var(--duration,20s) linear infinite",
      },
    },
  },
  plugins: [],
};
