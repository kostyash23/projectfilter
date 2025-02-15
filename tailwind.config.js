/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: '48px 1.5fr 1.5fr 0.5fr 0.5fr 1.7fr 1fr 1fr 1fr 1fr',
      },
      colors: {
        black: {
          DEFAULT: '#171717',
          semi: '#1E293B',
          semibg: '#CBD5E1',
        },
        gray: {
          light: '#CCCCCC',
          dark: '#DDD',
          DEFAULT: '#525252',
          bg: '#E9E9E9',
          hover: '#F5F5F5'
        },
        orange: {
          DEFAULT: '#9A3412',
          bg: '#FDBA7480',
        },
        blue: {
          DEFAULT: '#1E30D8',
          bg: '#5F6EFF40',
        },
        indigo: {
          DEFAULT: '#3730A3',
          bg: '#A5B4FC80',
        },
        green: {
          DEFAULT: '#166534',
          bg: '#86EFAC80',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Додаємо кастомний шрифт
      }
    },
  },
  plugins: [],
}

