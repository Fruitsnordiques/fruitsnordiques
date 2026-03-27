'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Impact — Trois dimensions en cartes matière
 * Surfaces satinées avec accent de bordure gauche
 * Palette stricte : vert, orange, crème
 */

interface ImpactCategory {
  id: string;
  title: string;
  emoji: string;
  accentBorder: string;
  bulletPoints: string[];
  gridClass: string;
}

const impactCategories: ImpactCategory[] = [
  {
    id: 'economic',
    title: 'Impact économique',
    emoji: '💰',
    accentBorder: 'border-l-fn-orange',
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
    emoji: '🌍',
    accentBorder: 'border-l-fn-vert-moyen',
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
    emoji: '❤️',
    accentBorder: 'border-l-fn-orange-doux',
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
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={`${category.gridClass}`}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
    >
      <div className={`h-full card-matte border-l-4 ${category.accentBorder} p-8 md:p-10 flex flex-col`}>
        {/* Icône */}
        <div className="text-5xl mb-5" aria-hidden="true">
          {category.emoji}
        </div>

        {/* Titre */}
        <h3 className="font-accent font-bold text-xl md:text-2xl text-fn-vert-profond mb-6">
          {category.title}
        </h3>

        {/* Points */}
        <ul className="space-y-4 flex-grow">
          {category.bulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start font-corps text-base text-fn-gris-chaud"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-moyen/50 mr-3 mt-2 flex-shrink-0" />
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
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="impact"
      className="relative w-full py-20 md:py-28 lg:py-36 bg-fn-cream px-5 sm:px-8"
      aria-label="Section sur les trois dimensions d'impact"
    >
      {/* Props décoratifs */}
      <div className="absolute top-20 left-8 w-14 h-14 bg-fn-orange/6 prop-oval" aria-hidden="true" />
      <div className="absolute bottom-16 right-12 w-10 h-6 bg-fn-vert-profond/5 prop-capsule" style={{ borderRadius: '50%' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-vert-profond text-center leading-tight">
            Un impact à
            <br />
            <span className="text-fn-vert-moyen">trois dimensions</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
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
