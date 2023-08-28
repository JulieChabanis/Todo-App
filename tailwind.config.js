/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // If using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        darumadrop: ['Darumadrop One', 'cursive'],
        oi: ['Oi', 'cursive'],
        'share-tech-mono': ['Share Tech Mono', 'monospace'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'tilt-warp': ['Tilt Warp', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#a78bfa',
          secondary: '#fda4af',
          accent: '#2dd4bf',
          neutral: '#1f2937',
          'base-100': '#ffe4e6',
          info: '#fecdd3',
          success: '#ddd6fe',
          warning: '#f87171',
          error: '#fdba74',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

