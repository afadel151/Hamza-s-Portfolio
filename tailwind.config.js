/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-purple': '0px 0px 40px 0px rgba(136, 4, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

