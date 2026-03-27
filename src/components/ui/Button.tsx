'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Bouton v4 — style capsule Kainon
 * Bordures fines, transitions subtiles, variantes minimales
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
      sm: 'px-5 py-2 text-xs',
      md: 'px-7 py-3 text-sm',
      lg: 'px-9 py-3.5 text-sm',
    };

    const variantClasses = {
      primary:
        'btn-capsule bg-fn-teal text-fn-noir-profond font-semibold hover:bg-fn-teal/90 focus-visible:ring-2 focus-visible:ring-fn-teal focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir-profond',
      secondary:
        'btn-capsule bg-fn-orange text-white font-semibold hover:bg-fn-orange-doux focus-visible:ring-2 focus-visible:ring-fn-orange focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir-profond',
      ghost:
        'btn-capsule border border-fn-gris-bordure-hover text-fn-gris-clair bg-transparent hover:text-fn-blanc hover:border-fn-gris focus-visible:ring-2 focus-visible:ring-fn-gris focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir-profond',
      outline:
        'btn-capsule border border-fn-teal/40 text-fn-teal bg-transparent hover:bg-fn-teal/5 hover:border-fn-teal/60 focus-visible:ring-2 focus-visible:ring-fn-teal focus-visible:ring-offset-2 focus-visible:ring-offset-fn-noir-profond',
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
