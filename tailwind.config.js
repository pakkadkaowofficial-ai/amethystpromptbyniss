/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: '#050409',
        obsidian: '#0A0812',
        titanium: '#120E1E',
        amethyst: {
          DEFAULT: '#A855F7',
          light: '#C084FC',
          dark: '#6B21A8'
        },
        alpenglow: {
          DEFAULT: '#F59E0B',
          warm: '#D97706',
          amber: '#FF9E44'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      letterSpacing: {
        widest2: '0.3em',
        tighter2: '-0.02em'
      }
    },
  },
  plugins: [],
}
