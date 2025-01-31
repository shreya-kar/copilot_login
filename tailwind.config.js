/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {'custom-aquamarine':'#457E89',
        'custom-blue':'#197C92',
        'custom-gray':'#475467',
        'custom-light-blue':'#00758E',
        'custom-light-gray':'#939393',
        'custom-dark-gray':'#1A2E28',
        'custom-neon-green':'#49FDA6',},
      backgroundImage: {
        'neoImg' : "url('./neo_gpt_bg.svg')",
      },
    },
  },
  plugins: [],
}

