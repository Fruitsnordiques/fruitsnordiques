import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'stat';
  className?: string;
}

/**
 * Carte v4 — style Kainon, surfaces subtiles
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', className = '' }, ref) => {
    const variants = {
      default: 'card-kainon',
      accent: 'card-kainon-accent',
      stat: 'card-stat-kainon',
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
