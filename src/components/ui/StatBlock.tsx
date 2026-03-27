import React from 'react';

interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

/**
 * Bloc statistique v4 — style Kainon, chiffres géants
 */
const StatBlock = React.forwardRef<HTMLDivElement, StatBlockProps>(
  ({ value, label, description, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`card-stat-kainon flex flex-col ${className}`}
      >
        <div className="font-titre text-4xl md:text-5xl font-bold text-fn-blanc mb-2 tracking-tight">
          {value}
        </div>

        <div className="label-kainon mb-1">
          {label}
        </div>

        {description && (
          <p className="font-corps text-sm text-fn-gris mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }
);

StatBlock.displayName = 'StatBlock';

export default StatBlock;
