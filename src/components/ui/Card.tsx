import React from 'react';

interface CardProps {
  /** Contenu de la carte */
  children: React.ReactNode;
  /** Variante de style */
  variant?: 'glass' | 'glass-dark' | 'solid';
  /** Couleur d'accent en haut de la carte */
  accentColor?: string;
  /** Classes CSS supplémentaires */
  className?: string;
}

/**
 * Carte glassmorphique — coins très arrondis, ombres profondes, surface en verre.
 * Trois variantes : glass (clair), glass-dark (vert foncé), solid (opaque blanc).
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'glass', accentColor, className = '' }, ref) => {
    const variants = {
      glass: 'glass-card',
      'glass-dark': 'glass-card-dark',
      solid: 'bg-white rounded-4xl shadow-glass',
    };

    return (
      <div
        ref={ref}
        className={`
          ${variants[variant]}
          ${accentColor ? `border-t-4 ${accentColor}` : ''}
          hover:translate-y-[-6px]
          transition-all duration-500 ease-out
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
