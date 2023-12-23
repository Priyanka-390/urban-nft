/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': '"inter"',
        'LibreFranklin':'"Libre Franklin"'
      },
      backgroundImage: {
        'orange-white': ['linear-gradient(89.93deg, rgba(238, 169, 80, 0.27) 2.77%, rgba(238, 169, 80, 0) 109.06%)'],
        'text-gradient': ['linear-gradient(152deg, #FFC881 -19.27%, #DA8517 109.91%)'],


      }
    },
  },
  plugins: [],
}
