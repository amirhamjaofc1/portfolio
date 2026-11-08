import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0D',
        surface: {
          DEFAULT: '#141B2D',
          light: '#1B243B',
          card: '#121727',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        text: {
          DEFAULT: '#F2F2EE',
          muted: '#9A9AA3',
          dim: '#65656E',
        },
        accent: {
          DEFAULT: '#D7E52A', // vibrant lime
          hover: '#c3d122',
          glow: 'rgba(215, 229, 42, 0.35)',
          subtle: 'rgba(215, 229, 42, 0.08)',
        },
        'accent-2': {
          DEFAULT: '#D81B52', // crimson
          hover: '#b51443',
          glow: 'rgba(216, 27, 82, 0.4)',
          subtle: 'rgba(216, 27, 82, 0.1)',
        },
        purple: {
          DEFAULT: '#8B5CF6', // vibrant violet/purple preference
          light: '#A78BFA',
          hover: '#7C3AED',
          glow: 'rgba(139, 92, 246, 0.4)',
          subtle: 'rgba(139, 92, 246, 0.12)',
        },
        detail: {
          DEFAULT: '#1F8A8A', // deep teal
          light: '#2aa6a6',
          subtle: 'rgba(31, 138, 138, 0.15)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Space Grotesk', 'Syne', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 35px -5px rgba(215, 229, 42, 0.3)',
        'glow-crimson': '0 0 40px -5px rgba(216, 27, 82, 0.35)',
        'glow-purple': '0 0 40px -5px rgba(139, 92, 246, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px -5px rgba(215, 229, 42, 0.12)',
        'glow-teal': '0 0 25px -5px rgba(31, 138, 138, 0.35)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
