import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'stat';
  className?: string;
}

/**
 * Carte v5 — style neumorphique, relief doux
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', className = '' }, ref) => {
    const variants = {
      default: 'card-neu',
      accent: 'card-neu-accent',
      stat: 'card-stat-neu',
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
