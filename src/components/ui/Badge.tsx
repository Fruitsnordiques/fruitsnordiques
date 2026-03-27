import React from 'react';

interface BadgeProps {
  /** Contenu du badge */
  children: React.ReactNode;
  /** Variante de couleur */
  variant?: 'vert' | 'soleil' | 'terre' | 'bleu';
  /** Classes CSS supplémentaires */
  className?: string;
}

/**
 * Petit badge/tag avec forme de pilule.
 * Supporte plusieurs variantes de couleur.
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'vert', className = '' }, ref) => {
    // Classes de variante de couleur
    const variantClasses = {
      vert: 'bg-fn-vert-clair text-fn-neige',
      soleil: 'bg-fn-soleil text-fn-gris-fonce',
      terre: 'bg-fn-terre text-fn-neige',
      bleu: 'bg-fn-bleu-glace text-fn-gris-fonce',
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center px-3 py-1 rounded-full
          font-accent font-semibold text-xs uppercase tracking-wide
          ${variantClasses[variant]}
          ${className}
        `}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
