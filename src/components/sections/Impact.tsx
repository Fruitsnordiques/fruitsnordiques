'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Impact — Trois dimensions dans un bento grid glassmorphique
 * Cartes en verre avec accents de couleur distincts
 */

interface ImpactCategory {
  id: string;
  title: string;
  emoji: string;
  accentGradient: string;
  accentBorder: string;
  bulletPoints: string[];
  gridClass: string;
}

const impactCategories: ImpactCategory[] = [
  {
    id: 'economic',
    title: 'Impact économique',
    emoji: '💰',
    accentGradient: 'from-fn-soleil/15 to-fn-soleil/5',
    accentBorder: 'border-fn-soleil/30',
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
    accentGradient: 'from-fn-vert-clair/15 to-fn-vert-clair/5',
    accentBorder: 'border-fn-vert-clair/30',
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
    accentGradient: 'from-fn-rouge-baie/10 to-fn-rouge-baie/5',
    accentBorder: 'border-fn-rouge-baie/20',
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
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
    >
      <div className={`h-full bg-gradient-to-br ${category.accentGradient} backdrop-blur-xl rounded-4xl border ${category.accentBorder} p-8 md:p-10 flex flex-col hover:translate-y-[-6px] transition-all duration-500`}>
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
              className="flex items-start font-corps text-base text-fn-gris-moyen"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-fn-vert-vif/60 mr-3 mt-2 flex-shrink-0" />
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
      {/* Décorations */}
      <div className="absolute top-20 left-8 w-48 h-48 rounded-full bg-fn-soleil/5 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-16 right-12 w-36 h-36 rounded-full bg-fn-vert-clair/6 blur-2xl" aria-hidden="true" />

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
            <span className="text-fn-vert-vif">trois dimensions</span>
          </h2>
        </motion.div>

        {/* Bento Grid — 2 colonnes, première carte s'étend sur 2 rangées */}
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
