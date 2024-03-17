/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include all Vue components
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tech': 'linear-gradient(to top, #f3f6f8 0%, #f3f6f8 79%, white 79%, white 100%)',
        'backgr': "url('./src/assets/back.svg')",
        'backContact': "url('./src/assets/contact.svg')",
      },
      colors: {
        'primary': "#0E77FF",
        'secondary-light': "#21B3FF",
        'secondary-dark': "#16B2FF17"
      }, 
      boxShadow: {
        custom: '0px 30px 60px #0e77ff26',
        pill: '0px 20px 30px #0e77ff26'
      }
    },
    fontFamily:{
      poppins: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}

