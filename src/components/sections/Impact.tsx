'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Impact v5 — Neumorphique
 * 3 colonnes en relief, numéros décoratifs, bullet points
 */

const impactCategories = [
  {
    id: 'economic',
    title: 'Économique',
    points: [
      "Création d'emplois directs permanents",
      "Stimulation de l'économie locale",
      'Filière de transformation à valeur ajoutée',
      'Modèle reproductible exportable',
    ],
  },
  {
    id: 'ecological',
    title: 'Écologique',
    points: [
      'Réduction des émissions de transport',
      'Bilan carbone maîtrisé (technologies Kainon)',
      "Gestion optimisée de l'eau",
      'Réduction du gaspillage alimentaire',
    ],
  },
  {
    id: 'social',
    title: 'Social',
    points: [
      'Sécurité alimentaire régionale renforcée',
      "Espace d'appartenance communautaire",
      'Formation et insertion professionnelle',
      'Accès aux aliments frais pour revenus modestes',
    ],
  },
];

function ImpactCard({
  category,
  index,
}: {
  category: typeof impactCategories[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="card-neu h-full flex flex-col">
        {/* Numéro décoratif */}
        <span className="font-titre text-5xl md:text-6xl font-bold text-fn-teal/20 mb-4">
          0{index + 1}
        </span>

        {/* Titre */}
        <h3 className="font-accent font-semibold text-base text-fn-teal-fonce mb-6 tracking-wide">
          {category.title}
        </h3>

        {/* Points */}
        <ul className="space-y-3 flex-grow">
          {category.points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start font-corps text-sm text-fn-texte-sub"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-fn-teal/40 mr-3 mt-2 flex-shrink-0" />
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
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 bg-fn-fond-clair"
      aria-label="Section sur les trois dimensions d'impact"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="label-neu block mb-5">Impact</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre leading-[1.02]">
              Un impact à
              <br />
              <span className="text-fn-teal">trois dimensions</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
              Chaque action génère des bénéfices économiques, écologiques et
              sociaux — un cercle vertueux au service du territoire.
            </p>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-neu mb-12 md:mb-16" />

        {/* Grille 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {impactCategories.map((category, index) => (
            <ImpactCard
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
