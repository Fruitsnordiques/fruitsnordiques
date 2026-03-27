import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'orange' | 'neutre' | 'rouge';
  className?: string;
}

/**
 * Badge v5 — style neumorphique, léger relief
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, variant = 'teal', className = '' }, ref) => {
    const variantClasses = {
      teal:   'bg-fn-teal/15 text-fn-teal-fonce',
      orange: 'bg-fn-orange/15 text-fn-orange',
      neutre: 'bg-fn-fond-fonce text-fn-texte-muted',
      rouge:  'bg-fn-rouge/15 text-fn-rouge',
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center px-3 py-1 rounded-full
          font-accent font-medium text-[11px] tracking-[0.08em]
          ${variantClasses[variant]}
          ${className}
        `}
        style={{
          boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.05), -2px -2px 4px rgba(255, 255, 255, 0.6)'
        }}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
