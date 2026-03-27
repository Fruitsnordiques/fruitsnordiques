import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'orange' | 'neutre' | 'rouge';
  className?: string;
}

/**
 * Badge v4 — style Kainon, discret et élégant
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'teal', className = '' }, ref) => {
    const variantClasses = {
      teal:   'bg-fn-teal/10 text-fn-teal border-fn-teal/20',
      orange: 'bg-fn-orange/10 text-fn-orange border-fn-orange/20',
      neutre: 'bg-white/[0.04] text-fn-gris-clair border-white/[0.06]',
      rouge:  'bg-fn-rouge/10 text-fn-rouge border-fn-rouge/20',
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center px-3 py-1 rounded-full border
          font-accent font-medium text-[11px] tracking-[0.08em]
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
