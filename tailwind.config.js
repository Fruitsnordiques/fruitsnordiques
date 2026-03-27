/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* Palette Éditorial Organique — stricte : crème / vert forêt / orange soleil */
      colors: {
        fn: {
          'vert-profond':  '#1A3A2A',
          'vert-foret':    '#1E4A35',
          'vert-moyen':    '#2D7A4F',
          'orange':        '#E8862A',
          'orange-doux':   '#F0A050',
          'cream':         '#FAF8F4',
          'cream-dark':    '#F0EDE6',
          'blanc':         '#FFFFFF',
          'noir':          '#1A1A1A',
          'gris-chaud':    '#6B6560',
          'gris-clair':    '#B5B0A8',
        },
      },
      /* Typographie — élégante, éditoriale */
      fontFamily: {
        titre:  ['Playfair Display', 'Georgia', 'serif'],
        corps:  ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'Arial', 'sans-serif'],
      },
      /* Superellipse — coins très arrondis */
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        'superellipse': '38% 62% 55% 45% / 50% 42% 58% 50%',
      },
      /* Ombres matières — profondes, diffuses, pas de glow */
      boxShadow: {
        'matte':       '0 4px 20px rgba(26, 58, 42, 0.06)',
        'matte-md':    '0 8px 32px rgba(26, 58, 42, 0.08), 0 2px 8px rgba(26, 58, 42, 0.04)',
        'matte-lg':    '0 16px 48px rgba(26, 58, 42, 0.10), 0 4px 16px rgba(26, 58, 42, 0.05)',
        'matte-xl':    '0 24px 64px rgba(26, 58, 42, 0.14), 0 8px 24px rgba(26, 58, 42, 0.06)',
        'editorial':   '0 20px 60px rgba(26, 58, 42, 0.12), 0 6px 20px rgba(26, 58, 42, 0.06)',
        'capsule':     '0 6px 18px rgba(232, 134, 42, 0.25), 0 2px 6px rgba(232, 134, 42, 0.12)',
        'dark-card':   '0 20px 60px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(0, 0, 0, 0.12)',
        'float':       '0 12px 36px rgba(26, 58, 42, 0.15)',
      },
      /* Animations — douces et organiques */
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'drift': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        'drift-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up':  'fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in':     'fade-in 0.5s ease-out',
        'drift':       'drift 7s ease-in-out infinite',
        'drift-slow':  'drift-slow 10s ease-in-out infinite',
        'pulse-soft':  'pulse-soft 3s ease-in-out infinite',
        'scale-in':    'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
