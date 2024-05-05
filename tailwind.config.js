/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-blue' : '#180C88',
        'brand-pink' : '#EB1B74',
        'tcolor' : '#000',
        'lightgray' : '#f4f4f4',
        'lightpink' : '#e8d4',
        'gray' : '#00000026',
        'bntgray' : '#212529',
        'hcolor' : '#464f57',
      },
      fontFamily: { 
        "samsungSharpSans": ['SamsungSharpSans'],
        "samsungOne": ['SamsungOne'],
        "inter": ['Inter'],
      } 
    },
  },
  plugins: [],
}
