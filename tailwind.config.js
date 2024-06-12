/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        havelock: {
          '50': '#f5fdff', 
          '100': '#e8f8fc', 
          '200': '#caedfa', 
          '300': '#abe0f7', 
          '400': '#6fc4f2', 
          '500': '#37a1ee', 
          '600': '#2d8ad6', 
          '700': '#1e6bb3', 
          '800': '#144d8f', 
          '900': '#0b336b', 
          '950': '#051d45',
      },
      woodsmoke: {
    '50': '#f2f2f2', 
    '100': '#e8e8e8', 
    '200': '#c4c4c4', 
    '300': '#a1a1a1', 
    '400': '#5c5c5c', 
    '500': '#141414', 
    '600': '#121010', 
    '700': '#0f0b0b', 
    '800': '#0d0808', 
    '900': '#0a0505', 
    '950': '#050101'
},
silver: {
    '50': '#fcfcfc', 
    '100': '#fafafa', 
    '200': '#f0f0f0', 
    '300': '#e6e6e6', 
    '400': '#d4d4d4', 
    '500': '#c3c3c3', 
    '600': '#ad9c9c', 
    '700': '#916d6d', 
    '800': '#754646', 
    '900': '#572727', 
    '950': '#381010'
},
blackhaze: {
    '50': '#ffffff', 
    '100': '#ffffff', 
    '200': '#fcfcfc', 
    '300': '#fcfcfc', 
    '400': '#fafafa', 
    '500': '#f7f7f7', 
    '600': '#dec8c8', 
    '700': '#ba8c8c', 
    '800': '#945959', 
    '900': '#703232', 
    '950': '#471515',
},
    }
    },
  },
  plugins: [],
}