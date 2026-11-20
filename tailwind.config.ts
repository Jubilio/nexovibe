import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // One typeface (Geist); Geist Mono only for data and code.
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        brand: {
          blue:   '#0A192F', // Deep Navy (Trust)
          purple: '#7B2CBF', // AI/Innovation
          green:  '#00F5D4', // GIS/Sustain
          dark:   '#0a0e11', // Near Black background
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
    },
  },
  plugins: [],
}
export default config
