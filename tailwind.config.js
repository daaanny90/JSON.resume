/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.ts", "./build/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
