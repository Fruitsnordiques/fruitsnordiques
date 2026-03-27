'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Style variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Optional link href */
  href?: string;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Bouton dashboard — propre, professionnel, accent orange parcimonie.
 * Style : rounded-xl, ombres data, transitions rapides.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      children,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-3.5 text-base',
    };

    const variantClasses = {
      primary:
        'btn-dashboard bg-fn-orange text-white shadow-glow-orange hover:bg-fn-orange-doux focus-visible:ring-2 focus-visible:ring-fn-orange focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir',
      secondary:
        'btn-dashboard bg-fn-noir-eleve border border-fn-gris-bordure text-fn-blanc hover:bg-fn-gris-fonce hover:border-fn-gris focus-visible:ring-2 focus-visible:ring-fn-gris focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir',
      accent:
        'btn-dashboard bg-fn-orange text-white shadow-glow-orange hover:bg-fn-orange-doux focus-visible:ring-2 focus-visible:ring-fn-orange focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir',
      ghost:
        'btn-dashboard border border-fn-gris-bordure text-fn-gris-clair bg-transparent hover:bg-fn-noir-eleve hover:text-fn-blanc hover:border-fn-gris focus-visible:ring-2 focus-visible:ring-fn-gris focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir',
      outline:
        'btn-dashboard border-2 border-fn-orange/50 text-fn-orange bg-transparent hover:bg-fn-orange/10 hover:border-fn-orange focus-visible:ring-2 focus-visible:ring-fn-orange focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir',
    };

    const disabledClasses = disabled
      ? 'opacity-40 cursor-not-allowed'
      : 'cursor-pointer';

    const baseClasses = `inline-flex items-center justify-center whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

    if (href && !disabled) {
      return (
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
