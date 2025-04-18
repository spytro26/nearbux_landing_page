/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eeeefe',
          100: '#d6d5fc',
          200: '#b3b0f8',
          300: '#8f8af4',
          400: '#6c64f0',
          500: '#493eec',
          600: '#3932bd',
          700: '#29278e',
          800: '#1a1b5f',
          900: '#1e1a64', // Deep navy blue (from logo)
        },
        accent: {
          50: '#fff0f0',
          100: '#ffe0e0',
          200: '#ffc1c1',
          300: '#ffa3a3',
          400: '#ff8484',
          500: '#ff6b6b', // Coral orange (from logo)
          600: '#cc5656',
          700: '#994040',
          800: '#662b2b',
          900: '#331515',
        },
      },
      height: {
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
      },
      fontFamily: {
        sans: [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};