import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        brand: {
          blue:   '#0A192F', // Deep Navy (Trust)
          purple: '#7B2CBF', // AI/Innovation
          green:  '#00F5D4', // GIS/Sustain
          dark:   '#020617', // Near Black background
        },
        ink:   '#08090c',
        deep:  '#0e1018',
        panel: '#131620',
        gold:  '#c9a55a',
        gold2: '#e8c97a',
        teal:  '#1fcfbe',
        fog:   '#8892a4',
        frost: '#dde3ee',
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        pulse2: 'pulse2 2s ease-in-out infinite',
        'glow-slow': 'glow 8s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%':     { transform: 'translate(-20px,30px) scale(.95)' },
        },
        pulse2: {
          '0%,100%': { opacity: '0.3' },
          '50%':     { opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.3', filter: 'brightness(1)' },
          '50%': { opacity: '0.6', filter: 'brightness(1.5)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
