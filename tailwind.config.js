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
        'custom-violet': '0px 0px 25px 0px rgba(136, 4, 255, 0.4)',
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(152, 53, 255, 0.5) 3px, transparent 2px)',
        'gradient-purple' : 'bg-gradient-to-r from-violet-900 to-purple-700',
      },
    },
    backgroundSize: {
      '20x20': '30px 30px'
    }
  },

plugins: [],
}

