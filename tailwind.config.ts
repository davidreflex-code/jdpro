import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#050510',
          dark: '#0a0a1a',
          card: 'rgba(15, 15, 35, 0.6)',
        },
        brand: {
          green: '#8cc63f',
          magenta: '#ec268f',
          red: '#ed1c24',
          orange: '#f7941d',
          cyan: '#27aae1',
        },
        white: {
          DEFAULT: '#f0f0f5',
          dim: 'rgba(240, 240, 245, 0.7)',
          muted: 'rgba(240, 240, 245, 0.4)',
        },
      },
      fontFamily: {
        body: ['var(--font-heebo)', 'Heebo', 'sans-serif'],
        display: ['var(--font-rubik)', 'Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #ec268f, #ed1c24)',
        'gradient-hero': 'linear-gradient(135deg, #ec268f, #f7941d, #27aae1)',
        'gradient-divider': 'linear-gradient(90deg, #8cc63f, #ec268f, #ed1c24, #f7941d, #27aae1)',
        'gradient-nav': 'linear-gradient(90deg, #ec268f, #27aae1)',
      },
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'float-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-30px, 40px) scale(1.15)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(236, 38, 143, 0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(236, 38, 143, 0.7)' },
        },
        'logo-glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'scroll-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'blink': 'blink 1.5s ease-in-out infinite',
        'float-1': 'float-1 12s ease-in-out infinite',
        'float-2': 'float-2 15s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'logo-glow-pulse': 'logo-glow-pulse 4s ease-in-out infinite',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
