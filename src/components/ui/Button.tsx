'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Style variant of the button */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Optional link href for link-style button */
  href?: string;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Bouton réutilisable avec plusieurs variantes et tailles.
 * Supporte les états hover, focus et disabled.
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
    // Classes de taille
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    // Classes de variante
    const variantClasses = {
      primary:
        'bg-fn-vert-vif text-fn-neige hover:bg-fn-vert-profond focus-visible:ring-2 focus-visible:ring-fn-vert-vif focus-visible:ring-offset-2 active:bg-fn-vert-profond',
      secondary:
        'border-2 border-fn-vert-vif text-fn-vert-vif hover:bg-fn-vert-clair hover:text-fn-neige focus-visible:ring-2 focus-visible:ring-fn-vert-vif focus-visible:ring-offset-2 active:bg-fn-vert-vif',
      accent:
        'bg-fn-soleil text-fn-gris-fonce hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-fn-soleil focus-visible:ring-offset-2 active:bg-amber-700',
    };

    // Classes d'état désactivé
    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer transition-colors duration-200';

    const baseClasses = `font-accent font-semibold rounded-lg inline-flex items-center justify-center whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

    // Si href est fourni, utiliser le composant Link de Next.js
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
