/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* Palette Fruits Nordiques */
      colors: {
        fn: {
          'vert-profond': '#1A3A2A',
          'vert-vif':     '#2D7A4F',
          'vert-clair':   '#5BAD7A',
          'terre':        '#8B5E3C',
          'soleil':       '#E8A020',
          'neige':        '#F5F2EC',
          'rouge-baie':   '#C0392B',
          'bleu-glace':   '#A8C8D8',
          'gris-fonce':   '#2C2C2C',
          'gris-moyen':   '#6B6B6B',
          'gris-clair':   '#E8E8E8',
        },
      },
      /* Typographie */
      fontFamily: {
        titre:  ['Playfair Display', 'Georgia', 'serif'],
        corps:  ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'Arial', 'sans-serif'],
      },
      /* Animations personnalisées */
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in':    'fade-in 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
