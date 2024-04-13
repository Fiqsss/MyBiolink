/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '7px 7px 0px black', 
      },
      fontFamily: {
        'robo' : ["Roboto Mono", 'monospace']
      },
      backgroundColor:{
        'primaryC' : '#E4CABC',
      }
    },
  },
  plugins: [],
}

