/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '450px',
      md: '650px',
      ml: '850px',
      lg: '1150px',
      xl: '2750px',
    },
    colors: {
      'txt-wht': '#eaeaea',
      'blue-drk': '#28293d',
      'blue-mid': '#3f4664',
      'blue-hgh': '#9ab8ff',
      'red-mid': '#534050',
      'red-hgh': '#ff9a9a',
      'contrast': '#595968',
      'txt-grey': '#bababf',
    },
    extend: {},
  },
  plugins: [],
}
