import React from 'react';

interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

/**
 * Bloc statistique v5 — neumorphique, chiffres géants
 */
const StatBlock = React.forwardRef<HTMLDivElement, StatBlockProps>(
  ({ value, label, description, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`card-stat-neu flex flex-col ${className}`}
      >
        <div className="font-titre text-4xl md:text-5xl font-bold text-fn-texte-titre mb-2 tracking-tight">
          {value}
        </div>

        <div className="label-neu mb-1">
          {label}
        </div>

        {description && (
          <p className="font-corps text-sm text-fn-texte-muted mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }
);

StatBlock.displayName = 'StatBlock';

export default StatBlock;
