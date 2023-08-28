/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a78bfa",
          "secondary": "#fda4af",
          "accent": "#2dd4bf",
          "neutral": "#1f2937",
          "base-100": "#ffe4e6",
          "info": "#fecdd3",
          "success": "#ddd6fe",
          "warning": "#f87171",
          "error": "#fdba74",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

