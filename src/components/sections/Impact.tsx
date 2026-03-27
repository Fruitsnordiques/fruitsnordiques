'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Impact — Trois dimensions avec métriques et barres data
 * Style dashboard : indicateurs colorés, cartes sombres structurées
 */

interface ImpactCategory {
  id: string;
  title: string;
  icon: string;
  accent: string;
  barColor: string;
  bulletPoints: string[];
  gridClass: string;
}

const impactCategories: ImpactCategory[] = [
  {
    id: 'economic',
    title: 'Impact économique',
    icon: '💰',
    accent: 'text-fn-orange',
    barColor: 'bg-fn-orange',
    bulletPoints: [
      "Création d'emplois directs permanents",
      "Stimulation de l'économie locale",
      'Filière de transformation à valeur ajoutée',
      'Modèle reproductible exportable',
    ],
    gridClass: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'ecological',
    title: 'Impact écologique',
    icon: '🌍',
    accent: 'text-fn-vert-vif',
    barColor: 'bg-fn-vert-vif',
    bulletPoints: [
      'Réduction des émissions de transport',
      'Bilan carbone maîtrisé (technologies Kainon)',
      "Gestion optimisée de l'eau",
      'Réduction du gaspillage alimentaire',
    ],
    gridClass: 'md:col-span-1',
  },
  {
    id: 'social',
    title: 'Impact social',
    icon: '❤️',
    accent: 'text-fn-rouge',
    barColor: 'bg-fn-rouge',
    bulletPoints: [
      'Sécurité alimentaire régionale renforcée',
      "Espace d'appartenance communautaire",
      'Formation et insertion professionnelle',
      'Accès aux aliments frais pour revenus modestes',
    ],
    gridClass: 'md:col-span-1',
  },
];

function ImpactCardComponent({
  category,
  index,
}: {
  category: ImpactCategory;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={`${category.gridClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="h-full card-dark p-6 md:p-8 flex flex-col">
        {/* Barre accent */}
        <div className={`w-8 h-1 rounded-full ${category.barColor} mb-5`} />

        {/* Icône + titre */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl" aria-hidden="true">{category.icon}</span>
          <h3 className={`font-accent font-bold text-base md:text-lg ${category.accent}`}>
            {category.title}
          </h3>
        </div>

        {/* Points */}
        <ul className="space-y-3 flex-grow">
          {category.bulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start font-corps text-sm text-fn-gris-clair"
            >
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${category.barColor} mr-3 mt-1.5 flex-shrink-0 opacity-60`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="impact"
      className="relative w-full py-20 md:py-28 lg:py-32 bg-fn-noir-profond px-5 sm:px-8"
      aria-label="Section sur les trois dimensions d'impact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-fn-vert-vif" />
            <span className="font-accent text-xs font-semibold text-fn-gris tracking-wider uppercase">Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc leading-tight">
            Un impact à
            <br />
            <span className="text-fn-vert-vif">trois dimensions</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {impactCategories.map((category, index) => (
            <ImpactCardComponent
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
