/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./form1.html","./form2.html", "./src/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#ffe450 ',
        'secondary': '#6c757d',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
