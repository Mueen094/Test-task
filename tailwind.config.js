/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        Gray5: '#343b45',
        Gray4: '#f4f8f9',
        customWhite: '#FFFFFF',
        customBlue100: '#4CBBCB',
        customBlue40: '#1E4A52',
        customBlue30: '#022328',
        customBlue20: '#dbf1f5',
        darkGray100: '#2B3746',
        gray100: '#556373',
        gray70: '#8f99a3',
        gray10: '#eeeff1',
        tableHeaderBg: '#D0DEE1',
        newBtnBg: '#bee9d7',
        newBtnBorder: '#77d886',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
