/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf9ed',
          100: '#faf0cc',
          200: '#f5de95',
          300: '#efca5a',
          400: '#e9b830',
          500: '#C9A84C',
          600: '#b08a35',
          700: '#8a6a28',
          800: '#654e1e',
          900: '#3f3012',
        },
        crimson: {
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fca5a5',
          300: '#f87171',
          400: '#ef4444',
          500: '#D32F2F',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
        },
        dark: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#242424',
          500: '#2e2e2e',
          400: '#3a3a3a',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #e9b830 50%, #C9A84C 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'gold': '0 4px 40px rgba(201, 168, 76, 0.25)',
        'gold-lg': '0 8px 60px rgba(201, 168, 76, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'premium-dark': '0 20px 60px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.7)' },
          '70%': { boxShadow: '0 0 0 15px rgba(201, 168, 76, 0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
