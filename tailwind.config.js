/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Cobalt Blue - Trust, Precision, Technology
        primary: {
          DEFAULT: '#0055FF',
          hover: '#0044CC',
          black: '#F0F5FF', // Very light blue tint for backgrounds
        },
        // Platinum & Titanium Scale (Light Mode)
        stone: {
          50: '#FFFFFF',  // Pure White
          100: '#F5F5F7', // Platinum (Apple-style)
          200: '#E5E5EA', // Titanium
          300: '#D1D1D6', // Light Silver
          800: '#86868B', // Medium Grey (Text)
          900: '#1D1D1F', // Deep Charcoal (Headlines)
          950: '#000000', // Pure Black
        }
      },
      fontFamily: {
        // "Unbounded": Wide, geometric, distinctive headlines
        display: ['Unbounded', 'sans-serif'],
        // "Manrope": Clean, modern utilitarian body
        sans: ['Manrope', 'sans-serif'],
        // "JetBrains Mono": Technical data, specs, prices
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        // Subtle grey grid on white
        'grid-pattern': "linear-gradient(to right, #E5E5EA 1px, transparent 1px), linear-gradient(to bottom, #E5E5EA 1px, transparent 1px)",
      },
      animation: {
        'stamp': 'stamp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        stamp: {
          '0%': { opacity: '0', transform: 'scale(2) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
