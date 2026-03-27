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
          /* Nouvelles couleurs pour glassmorphisme */
          'cream':        '#FAF8F4',
          'warm-gray':    '#E8E4DC',
        },
      },
      /* Typographie */
      fontFamily: {
        titre:  ['Playfair Display', 'Georgia', 'serif'],
        corps:  ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'Arial', 'sans-serif'],
      },
      /* Coins arrondis extra */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      /* Ombres profondes et layered */
      boxShadow: {
        'glass': '0 8px 32px rgba(26, 58, 42, 0.08)',
        'glass-lg': '0 16px 48px rgba(26, 58, 42, 0.12), 0 4px 16px rgba(26, 58, 42, 0.06)',
        'glass-xl': '0 24px 64px rgba(26, 58, 42, 0.16), 0 8px 24px rgba(26, 58, 42, 0.08)',
        'glass-dark': '0 16px 48px rgba(0, 0, 0, 0.25), 0 4px 16px rgba(0, 0, 0, 0.12)',
        'float': '0 20px 40px rgba(26, 58, 42, 0.15), 0 8px 16px rgba(26, 58, 42, 0.08)',
        'capsule': '0 4px 12px rgba(232, 160, 32, 0.3), 0 2px 4px rgba(232, 160, 32, 0.15)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      /* Animations personnalisées */
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%':      { transform: 'translateY(-12px) rotate(2deg)' },
          '66%':      { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(16px) rotate(-2deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up':    'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in':       'fade-in 0.5s ease-out',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-soft':    'pulse-soft 3s ease-in-out infinite',
        'scale-in':      'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
