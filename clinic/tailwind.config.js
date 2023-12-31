/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'complement': 'url("/images/banner.webp")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        svgs: 'var(--svg-color)',
        'color-card': 'var(--text-card-color)'
      },
      screens: {
        'mobileMini': '510px',
        'tabletMini': '755px',
        'tabletBig': '900px',
        'desktopMini': '1100px',
        'desktop': '1320px',
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      },
    },
  },
  plugins: [],
}
