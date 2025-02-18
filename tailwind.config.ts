import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      regola: ['var(--font-regola)'],
      inter: ['var(--font-inter)'],
      roboto: ['var(--font-roboto)']
    },
    extend: {
      backgroundImage: {
        'hero-rings-line': 'linear-gradient(0deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1)), linear-gradient(90deg, #39d1f9 10.43%, #ffb400 27.01%, #00827c 44.64%, #008aff 56.05%, #ff3200 73.58%, #9896ff 90.51%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        dropdown: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        dropdown: 'dropdown 0.2s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      }
    }
  },
  plugins: [],
} satisfies Config;
