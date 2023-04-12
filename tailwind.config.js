/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    letterSpacing: {
      wider: '0.1em',
      widest: '0.2em'
    },
    fontFamily: {
      sans: ['Poppins','sans-serif']
    },
    extend: {
      colors: {
        primary: {
          main1: '#282828',
          main2: '#FFFFFF',
          main3: '#D2461C',
          main4: '#AFAFAF',
          main5: '#FFCDBE',
        },
        neutral: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
          white: '#FFFFFF',
          black: '#000000'
        },
        status: {
          active: '#CDECDE',
          expire: '#E8E9EB',
          alert: '#FF4040'
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  plugins: [],
};
