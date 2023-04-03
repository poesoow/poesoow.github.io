/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js}"],
  // tailwind다크모드 를 쓰려면 이 코드가 필수
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
