import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'vert' | 'neutre' | 'rouge';
  className?: string;
}

/**
 * Badge — indicateur compact, style dashboard data.
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'orange', className = '' }, ref) => {
    const variantClasses = {
      orange: 'bg-fn-orange/15 text-fn-orange border-fn-orange/20',
      vert:   'bg-fn-vert-vif/12 text-fn-vert-vif border-fn-vert-vif/20',
      neutre: 'bg-fn-gris-fonce/50 text-fn-gris-clair border-fn-gris-bordure',
      rouge:  'bg-fn-rouge/12 text-fn-rouge border-fn-rouge/20',
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center px-3 py-1 rounded-lg border
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
