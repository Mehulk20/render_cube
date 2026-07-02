/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2effe',
          100: '#e6e0fd',
          200: '#c9bcfb',
          300: '#a68cf7',
          400: '#8a63f2',
          500: '#7345ec',
          600: '#6430db',
          700: '#5424b8',
          800: '#451f95',
          900: '#3a1d78',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d7dbe3',
          300: '#b3bac8',
          400: '#8a93a6',
          500: '#69728a',
          600: '#525a70',
          700: '#3f4557',
          800: '#262a37',
          900: '#14161d',
          950: '#0b0c11',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 22, 29, 0.04), 0 16px 40px -12px rgba(76, 48, 219, 0.18)',
        'card-dark': '0 1px 2px rgba(0, 0, 0, 0.3), 0 16px 40px -12px rgba(0, 0, 0, 0.55)',
        glow: '0 0 0 1px rgba(115, 69, 236, 0.08), 0 8px 24px -4px rgba(115, 69, 236, 0.35)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
