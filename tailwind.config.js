/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* Palette v5 — Neumorphique, fond gris clair, accents teal + orange */
      colors: {
        fn: {
          /* Surfaces neumorphiques */
          'fond':          '#E8EAEC',
          'fond-clair':    '#EEF0F2',
          'fond-fonce':    '#DFE1E3',
          'fond-carte':    '#E8EAEC',

          /* Texte — hiérarchie sombre sur fond clair */
          'texte':         '#2D3142',
          'texte-titre':   '#1A1D2E',
          'texte-sub':     '#4A4E69',
          'texte-muted':   '#6B7080',
          'texte-light':   '#8A8F9C',

          /* Accents — conservés */
          'teal':          '#4ABFB4',
          'teal-fonce':    '#3AA89E',
          'teal-glow':     'rgba(74, 191, 180, 0.15)',
          'orange':        '#E8862A',
          'orange-doux':   '#F0A050',
          'orange-glow':   'rgba(232, 134, 42, 0.12)',
          'vert-vif':      '#34D399',
          'rouge':         '#EF4444',
          'jaune':         '#F59E0B',
          'bleu':          '#3B82F6',

          /* Bordures neumorphiques */
          'bordure':       'rgba(255, 255, 255, 0.7)',
          'bordure-fonce': 'rgba(0, 0, 0, 0.08)',
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
      /* Arrondis doux neumorphiques */
      borderRadius: {
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      /* Ombres neumorphiques — double ombre (lumière + sombre) */
      boxShadow: {
        /* Éléments en relief (convexe) */
        'neu':          '6px 6px 12px rgba(0, 0, 0, 0.08), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        'neu-md':       '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.85)',
        'neu-lg':       '12px 12px 24px rgba(0, 0, 0, 0.1), -12px -12px 24px rgba(255, 255, 255, 0.9)',
        'neu-xl':       '16px 16px 32px rgba(0, 0, 0, 0.12), -16px -16px 32px rgba(255, 255, 255, 0.9)',
        /* Éléments enfoncés (concave) */
        'neu-inset':    'inset 4px 4px 8px rgba(0, 0, 0, 0.08), inset -4px -4px 8px rgba(255, 255, 255, 0.8)',
        'neu-inset-md': 'inset 6px 6px 12px rgba(0, 0, 0, 0.1), inset -6px -6px 12px rgba(255, 255, 255, 0.85)',
        /* Boutons pressés */
        'neu-pressed':  'inset 3px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -3px 6px rgba(255, 255, 255, 0.7)',
        /* Glow accent */
        'glow-teal':    '0 0 20px rgba(74, 191, 180, 0.25), 6px 6px 12px rgba(0, 0, 0, 0.08), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        'glow-orange':  '0 0 20px rgba(232, 134, 42, 0.2), 6px 6px 12px rgba(0, 0, 0, 0.08), -6px -6px 12px rgba(255, 255, 255, 0.8)',
      },
      /* Animations */
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
