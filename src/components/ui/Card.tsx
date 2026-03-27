import React from 'react';

interface CardProps {
  /** Contenu de la carte */
  children: React.ReactNode;
  /** Variante de surface dark dashboard */
  variant?: 'dark' | 'elevated' | 'accent' | 'stat';
  /** Classes CSS supplémentaires */
  className?: string;
}

/**
 * Carte dashboard — surfaces sombres, bordures subtiles, accents data.
 * Quatre variantes : dark (standard), elevated (surélevée), accent (orange), stat (données).
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'dark', className = '' }, ref) => {
    const variants = {
      dark: 'card-dark',
      elevated: 'card-elevated',
      accent: 'card-accent',
      stat: 'card-stat',
    };

    return (
      <div
        ref={ref}
        className={`${variants[variant]} ${className}`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
