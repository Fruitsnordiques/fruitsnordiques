import React from 'react';

interface CardProps {
  /** Contenu de la carte */
  children: React.ReactNode;
  /** Affiche une bordure supérieure en vert-vif */
  accent?: boolean;
  /** Classes CSS supplémentaires */
  className?: string;
}

/**
 * Composant de carte réutilisable avec ombre subtile et coins arrondis.
 * Optionnellement affiche une bordure supérieure accent.
 * Inclut une animation de levée au survol.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, accent = false, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-fn-neige rounded-xl shadow-sm
          ${accent ? 'border-t-4 border-fn-vert-vif' : ''}
          hover:shadow-lg hover:translate-y-[-4px]
          transition-all duration-300 ease-out
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
