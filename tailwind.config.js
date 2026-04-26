/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'Poppins', 'sans-serif']
      },
      colors: {
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primary-light)",
        primaryDark: "var(--color-primary-dark)",

        secondary: "var(--color-secondary)",

        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        textMuted: "var(--color-text-muted)",

        bgSoft: "var(--color-bg-soft)",
        bgMuted: "var(--color-bg-muted)",
      }
    },

      
  },
  plugins: [],
}