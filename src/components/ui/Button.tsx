'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Style variant of the button */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
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
 * Bouton capsule — forme arrondie, ombres profondes, effet tactile.
 * Style inspiré du moodboard : dégradés subtils, sensation physique.
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
    // Classes de taille — plus généreuses pour l'aspect capsule
    const sizeClasses = {
      sm: 'px-5 py-2 text-sm',
      md: 'px-7 py-3 text-base',
      lg: 'px-9 py-4 text-lg',
    };

    // Classes de variante — capsule avec dégradés
    const variantClasses = {
      primary:
        'btn-capsule bg-gradient-to-r from-fn-vert-vif to-fn-vert-profond text-white hover:from-fn-vert-profond hover:to-fn-vert-vif focus-visible:ring-2 focus-visible:ring-fn-vert-vif focus-visible:ring-offset-2',
      secondary:
        'btn-capsule border-2 border-fn-vert-vif/30 text-fn-vert-profond bg-white/50 backdrop-blur-sm hover:bg-fn-vert-vif hover:text-white hover:border-fn-vert-vif focus-visible:ring-2 focus-visible:ring-fn-vert-vif focus-visible:ring-offset-2',
      accent:
        'btn-capsule bg-gradient-to-r from-fn-soleil to-amber-500 text-fn-gris-fonce hover:from-amber-500 hover:to-fn-soleil focus-visible:ring-2 focus-visible:ring-fn-soleil focus-visible:ring-offset-2',
      ghost:
        'rounded-full font-accent font-semibold border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2',
    };

    // Classes d'état désactivé
    const disabledClasses = disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'cursor-pointer';

    const baseClasses = `inline-flex items-center justify-center whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

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
