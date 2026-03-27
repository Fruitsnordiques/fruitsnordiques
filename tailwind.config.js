/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* Palette Kainon-inspired — ultra-dark, teal accent, minimaliste */
      colors: {
        fn: {
          /* Surfaces — noir uniforme profond */
          'noir-profond':  '#0A0B0F',
          'noir':          '#0F1014',
          'noir-carte':    '#141519',
          'noir-eleve':    '#1A1B22',
          'gris-bordure':  'rgba(255, 255, 255, 0.06)',
          'gris-bordure-hover': 'rgba(255, 255, 255, 0.12)',

          /* Texte — hiérarchie grise */
          'gris-fonce':    '#3A3D4A',
          'gris':          '#6B7080',
          'gris-clair':    '#8A8F9C',
          'blanc':         '#E8E9ED',
          'blanc-pur':     '#FFFFFF',

          /* Accents */
          'teal':          '#4ABFB4',
          'teal-glow':     'rgba(74, 191, 180, 0.12)',
          'orange':        '#E8862A',
          'orange-doux':   '#F0A050',
          'orange-glow':   'rgba(232, 134, 42, 0.10)',
          'vert-vif':      '#34D399',
          'rouge':         '#EF4444',
          'jaune':         '#F59E0B',
          'bleu':          '#3B82F6',
        },
      },
      /* Typographie — serif géant + sans-serif épuré */
      fontFamily: {
        titre:  ['Playfair Display', 'Georgia', 'serif'],
        corps:  ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'Arial', 'sans-serif'],
        mono:   ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      /* Espacements généreux */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      /* Tailles de texte géantes */
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem', { lineHeight: '1.02' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
      },
      /* Arrondis fins */
      borderRadius: {
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      /* Ombres ultra-subtiles */
      boxShadow: {
        'subtle':     '0 1px 2px rgba(0, 0, 0, 0.2)',
        'card':       '0 2px 8px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.25)',
        'glow-teal':  '0 0 24px rgba(74, 191, 180, 0.15)',
        'glow-orange':'0 0 24px rgba(232, 134, 42, 0.12)',
      },
      /* Animations — fluides et discrètes */
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up':  'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in':     'fade-in 0.4s ease-out',
        'pulse-soft':  'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
