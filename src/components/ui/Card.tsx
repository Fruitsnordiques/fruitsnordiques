import React from 'react';

interface CardProps {
  /** Contenu de la carte */
  children: React.ReactNode;
  /** Variante de surface */
  variant?: 'matte' | 'matte-dark' | 'satin' | 'accent';
  /** Légère inclinaison éditoriale */
  tilt?: 'none' | 'left' | 'right' | 'soft';
  /** Classes CSS supplémentaires */
  className?: string;
}

/**
 * Carte matière — surfaces mates et satinées, coins superellipse.
 * Style éditorial organique : pas de glassmorphisme, pas de transparence.
 * Quatre variantes : matte (blanc), matte-dark (vert forêt), satin (crème chaud), accent (orange).
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'matte', tilt = 'none', className = '' }, ref) => {
    const variants = {
      matte: 'card-matte',
      'matte-dark': 'card-matte-dark',
      satin: 'card-satin',
      accent: 'card-accent',
    };

    const tilts = {
      none: '',
      left: 'editorial-offset-left',
      right: 'editorial-offset-right',
      soft: 'editorial-tilt-soft',
    };

    return (
      <div
        ref={ref}
        className={`
          ${variants[variant]}
          ${tilts[tilt]}
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
