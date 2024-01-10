/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'map': "url('/src/assets/map.png')",
      },
      colors: {
        "app-bg": "#233142",
        "app-green": "#2ac420",
        "light-gray": "#9C9C9C",
        "dark-gray": "#515152",
      },
      height: {
        "1/10": "10%",
        "9/10": "90%",
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'lato': ["Lato", "sans-serif"],
        
      },
      spacing: {
        '-19.25': '-77px',
        '-21.75': '-87px',
        '-23': '-92px',
        '-25.25': '-101px',
        '-43': '-172px',
      },
    },
  },
  plugins: [],
};