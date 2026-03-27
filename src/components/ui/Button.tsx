'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Style variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
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
 * Bouton capsule — orange franc comme accent principal.
 * Forme arrondie, surface mate, sensation physique et tactile.
 * Style éditorial : utilisé avec parcimonie, jamais agressif.
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
      sm: 'px-5 py-2 text-sm',
      md: 'px-7 py-3 text-base',
      lg: 'px-9 py-4 text-lg',
    };

    const variantClasses = {
      primary:
        'btn-capsule bg-fn-orange text-white shadow-capsule hover:bg-fn-orange-doux hover:shadow-[0_8px_24px_rgba(232,134,42,0.3)] focus-visible:ring-2 focus-visible:ring-fn-orange focus-visible:ring-offset-2',
      secondary:
        'btn-capsule border-2 border-fn-vert-profond/20 text-fn-vert-profond bg-white hover:bg-fn-vert-profond hover:text-white hover:border-fn-vert-profond focus-visible:ring-2 focus-visible:ring-fn-vert-moyen focus-visible:ring-offset-2',
      accent:
        'btn-capsule bg-fn-orange text-white shadow-capsule hover:bg-fn-orange-doux focus-visible:ring-2 focus-visible:ring-fn-orange focus-visible:ring-offset-2',
      ghost:
        'btn-capsule border-2 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:border-white/50 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2',
    };

    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed'
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
