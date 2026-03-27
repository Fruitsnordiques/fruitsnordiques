/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* Palette Dark Dashboard — charcoal professionnel, accents vifs */
      colors: {
        fn: {
          'noir-profond':  '#0C0E14',
          'noir':          '#13151D',
          'noir-carte':    '#1A1D28',
          'noir-eleve':    '#222535',
          'gris-bordure':  '#2E3245',
          'gris-fonce':    '#3D4155',
          'gris':          '#6B7280',
          'gris-clair':    '#9CA3AF',
          'blanc':         '#F1F3F7',
          'blanc-pur':     '#FFFFFF',
          'orange':        '#E8862A',
          'orange-doux':   '#F0A050',
          'orange-glow':   'rgba(232, 134, 42, 0.15)',
          'vert-profond':  '#1A3A2A',
          'vert-moyen':    '#2D7A4F',
          'vert-vif':      '#34D399',
          'vert-glow':     'rgba(52, 211, 153, 0.12)',
          'rouge':         '#EF4444',
          'jaune':         '#F59E0B',
          'bleu':          '#3B82F6',
        },
      },
      /* Typographie — pro et lisible */
      fontFamily: {
        titre:  ['Playfair Display', 'Georgia', 'serif'],
        corps:  ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Montserrat', 'Arial', 'sans-serif'],
        mono:   ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      /* Arrondis dashboard */
      borderRadius: {
        'xl':  '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      /* Ombres dark — subtiles et profondes */
      boxShadow: {
        'dark-sm':    '0 2px 8px rgba(0, 0, 0, 0.3)',
        'dark-md':    '0 4px 16px rgba(0, 0, 0, 0.35), 0 2px 4px rgba(0, 0, 0, 0.2)',
        'dark-lg':    '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 12px rgba(0, 0, 0, 0.25)',
        'dark-xl':    '0 16px 48px rgba(0, 0, 0, 0.5), 0 8px 20px rgba(0, 0, 0, 0.3)',
        'glow-orange':'0 0 20px rgba(232, 134, 42, 0.2), 0 0 40px rgba(232, 134, 42, 0.08)',
        'glow-vert':  '0 0 20px rgba(52, 211, 153, 0.15), 0 0 40px rgba(52, 211, 153, 0.06)',
        'card':       '0 1px 3px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(46, 50, 69, 0.5)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(232, 134, 42, 0.2)',
      },
      /* Animations — fluides et pro */
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
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(232, 134, 42, 0.15)' },
          '50%':      { boxShadow: '0 0 20px rgba(232, 134, 42, 0.3)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up':  'fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in':     'fade-in 0.4s ease-out',
        'pulse-soft':  'pulse-soft 3s ease-in-out infinite',
        'pulse-glow':  'pulse-glow 3s ease-in-out infinite',
        'scale-in':    'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer':     'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}
