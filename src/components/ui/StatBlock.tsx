import React from 'react';

interface StatBlockProps {
  /** Valeur principale (grand nombre) */
  value: string;
  /** Libellé de la statistique */
  label: string;
  /** Description optionnelle */
  description?: string;
  /** Icône optionnelle (React.ReactNode) */
  icon?: React.ReactNode;
  /** Classes CSS supplémentaires */
  className?: string;
}

/**
 * Composant d'affichage de statistiques.
 * Affiche un grand nombre, un libellé et une description optionnelle.
 * Inclut support pour icône optionnelle.
 */
const StatBlock = React.forwardRef<HTMLDivElement, StatBlockProps>(
  ({ value, label, description, icon, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center text-center ${className}`}
      >
        {/* Icône optionnelle */}
        {icon && (
          <div className="mb-3 text-fn-vert-vif text-3xl flex items-center justify-center">
            {icon}
          </div>
        )}

        {/* Valeur principale */}
        <div className="font-titre text-5xl md:text-6xl font-bold text-fn-vert-profond mb-2">
          {value}
        </div>

        {/* Libellé */}
        <div className="font-accent text-xs md:text-sm font-bold uppercase tracking-wider text-fn-gris-moyen mb-1">
          {label}
        </div>

        {/* Description optionnelle */}
        {description && (
          <p className="font-corps text-sm md:text-base text-fn-gris-moyen mt-2 max-w-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }
);

StatBlock.displayName = 'StatBlock';

export default StatBlock;
