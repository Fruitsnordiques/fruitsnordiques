import React from 'react';

interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Bloc statistique — typographie éditoriale, mate.
 */
const StatBlock = React.forwardRef<HTMLDivElement, StatBlockProps>(
  ({ value, label, description, icon, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center text-center ${className}`}
      >
        {icon && (
          <div className="mb-3 text-fn-orange text-3xl flex items-center justify-center">
            {icon}
          </div>
        )}

        <div className="font-titre text-5xl md:text-6xl font-bold text-fn-vert-profond mb-2">
          {value}
        </div>

        <div className="font-accent text-xs md:text-sm font-bold tracking-wider text-fn-gris-chaud mb-1">
          {label}
        </div>

        {description && (
          <p className="font-corps text-sm md:text-base text-fn-gris-chaud mt-2 max-w-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }
);

StatBlock.displayName = 'StatBlock';

export default StatBlock;
