import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sankalpa': {
          primary: '#B8860B',     // Deep temple gold
          secondary: '#FF9933',   // Sacred saffron
          accent: '#088F8F',      // Peacock green
          dark: '#4A4A4A',        // Temple stone gray
          light: '#F5E6D3',       // Sandalwood cream
          bg: '#FAFAFA',          // Sacred ash white
          gold: {
            light: '#F4E4C1',
            DEFAULT: '#B8860B',
            dark: '#8B6508',
          },
          green: {
            light: '#0FA3A3',
            DEFAULT: '#088F8F',
            dark: '#066666',
          },
          cream: {
            light: '#FBF6F0',
            DEFAULT: '#F5E6D3',
            dark: '#E6D0B3',
          }
        }
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Georgia', 'serif'],
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale': 'scale 0.2s ease-in-out',
        'float': 'float 6s ease-in-out infinite',
        'bell-ring': 'bellRing 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bellRing: {
          '0%': { transform: 'rotate(0)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config