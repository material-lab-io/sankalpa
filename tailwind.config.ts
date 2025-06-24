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
          primary: '#FF6B35',
          secondary: '#F7931E',
          accent: '#FCEE21',
          dark: '#2C3E50',
          light: '#ECF0F1',
        }
      },
    },
  },
  plugins: [],
}
export default config