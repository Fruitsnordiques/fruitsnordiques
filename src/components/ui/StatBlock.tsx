import React from 'react';

interface StatBlockProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  accentColor?: 'orange' | 'vert' | 'bleu' | 'jaune';
  className?: string;
}

/**
 * Bloc statistique — style dashboard data, chiffres dominants.
 * Typographie : chiffre massif, label discret, barre indicatrice colorée.
 */
const StatBlock = React.forwardRef<HTMLDivElement, StatBlockProps>(
  ({ value, label, description, icon, accentColor = 'orange', className = '' }, ref) => {
    const accentClasses = {
      orange: 'bg-fn-orange',
      vert:   'bg-fn-vert-vif',
      bleu:   'bg-fn-bleu',
      jaune:  'bg-fn-jaune',
    };

    const textAccent = {
      orange: 'text-fn-orange',
      vert:   'text-fn-vert-vif',
      bleu:   'text-fn-bleu',
      jaune:  'text-fn-jaune',
    };

    return (
      <div
        ref={ref}
        className={`card-stat flex flex-col ${className}`}
      >
        {/* Barre indicatrice colorée */}
        <div className={`w-10 h-1 rounded-full ${accentClasses[accentColor]} mb-5`} />

        {icon && (
          <div className={`mb-3 ${textAccent[accentColor]} text-2xl flex items-center`}>
            {icon}
          </div>
        )}

        <div className={`font-accent text-4xl md:text-5xl font-bold ${textAccent[accentColor]} mb-2 tracking-tight`}>
          {value}
        </div>

        <div className="font-accent text-xs font-semibold tracking-wider text-fn-gris-clair uppercase mb-1">
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
