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
 * Bouton v5 — style neumorphique
 * Ombres en relief, effet enfoncé au clic
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
        'btn-neu bg-fn-teal text-white font-semibold hover:bg-fn-teal-fonce focus-visible:ring-2 focus-visible:ring-fn-teal focus-visible:ring-offset-2 focus-visible:ring-offset-fn-fond',
      secondary:
        'btn-neu bg-fn-orange text-white font-semibold hover:bg-fn-orange-doux focus-visible:ring-2 focus-visible:ring-fn-orange focus-visible:ring-offset-2 focus-visible:ring-offset-fn-fond',
      ghost:
        'btn-neu text-fn-texte-sub hover:text-fn-texte-titre focus-visible:ring-2 focus-visible:ring-fn-teal focus-visible:ring-offset-2 focus-visible:ring-offset-fn-fond',
      outline:
        'btn-neu text-fn-teal-fonce hover:text-fn-teal focus-visible:ring-2 focus-visible:ring-fn-teal focus-visible:ring-offset-2 focus-visible:ring-offset-fn-fond',
    };

    const disabledClasses = disabled
      ? 'opacity-40 cursor-not-allowed'
      : 'cursor-pointer';

    const baseClasses = `inline-flex items-center justify-center whitespace-nowrap rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`;

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
