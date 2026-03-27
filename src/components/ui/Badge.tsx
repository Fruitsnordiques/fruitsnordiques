import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'vert' | 'orange' | 'cream';
  className?: string;
}

/**
 * Badge pilule — mate, discret, éditorial.
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'vert', className = '' }, ref) => {
    const variantClasses = {
      vert: 'bg-fn-vert-profond text-white',
      orange: 'bg-fn-orange text-white',
      cream: 'bg-fn-cream-dark text-fn-vert-profond',
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center px-3 py-1 rounded-full
          font-accent font-semibold text-xs tracking-wide
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
