'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Formation — Cartes élevées avec barres d'accent colorées
 * Panneau partenariats en carte dark avec bordure orange
 */

interface TrainingCard {
  id: string;
  title: string;
  icon: string;
  description: string;
  accent: string;
}

const trainingCards: TrainingCard[] = [
  {
    id: 'agronomy',
    title: 'Agronomie & horticulture',
    icon: '🌾',
    description:
      'Maîtriser les sciences fondamentales de la culture et de la gestion des plantes.',
    accent: 'bg-fn-vert-vif',
  },
  {
    id: 'greenhouse',
    title: 'Gestion de serre',
    icon: '🏠',
    description:
      'Exploiter les technologies modernes pour optimiser la production en environnement contrôlé.',
    accent: 'bg-fn-orange',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneuriat agricole',
    icon: '💼',
    description:
      "Développer votre vision d'entreprise et créer un projet agricole viable et durable.",
    accent: 'bg-fn-bleu',
  },
];

function TrainingCardComponent({
  card,
  index,
}: {
  card: TrainingCard;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="h-full card-elevated p-6 md:p-8 flex flex-col">
        {/* Barre accent */}
        <div className={`w-8 h-1 rounded-full ${card.accent} mb-5`} />

        {/* Icône */}
        <div className="text-3xl mb-4" aria-hidden="true">
          {card.icon}
        </div>

        {/* Titre */}
        <h3 className="font-accent font-bold text-base md:text-lg text-fn-blanc mb-3">
          {card.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-sm text-fn-gris leading-relaxed flex-grow">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Formation() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-60px' });

  return (
    <section
      id="formation"
      className="relative w-full py-20 md:py-28 lg:py-32 bg-fn-noir-profond px-5 sm:px-8"
      aria-label="Section de formation de la relève"
    >
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-fn-bleu" />
            <span className="font-accent text-xs font-semibold text-fn-gris tracking-wider uppercase">Formation</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc leading-tight">
            Former la relève.
            <br />
            <span className="text-fn-orange">Créer l'avenir.</span>
          </h2>
        </motion.div>

        {/* Contenu descriptif */}
        <motion.div
          ref={contentRef}
          className="mb-10 md:mb-14 space-y-5"
          initial={{ opacity: 0, y: 16 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="font-corps text-base text-fn-gris-clair leading-relaxed max-w-3xl">
            Fruits Nordiques offre un programme de formation en agronomie, horticulture,
            gestion de serre et entrepreneuriat agricole. Des connaissances pratiques qui
            préparent la relève à réussir dans le secteur agroalimentaire québécois.
          </p>

          {/* Panneau partenariats */}
          <div className="card-dark p-6 md:p-7 border-l-2 border-fn-orange/40">
            <p className="font-corps text-sm text-fn-gris-clair mb-3">
              <span className="font-accent font-semibold text-fn-orange">Partenariats :</span> Nous collaborons avec
              des établissements d'enseignement locaux (DEP, AEC, universitaire) pour assurer
              une formation alignée avec les besoins du marché.
            </p>
            <p className="font-corps text-sm text-fn-gris-clair">
              <span className="font-accent font-semibold text-fn-orange">Priorité :</span> Jeunes, personnes sans
              emploi et en réorientation professionnelle trouvent ici une porte d'entrée vers
              une carrière significative.
            </p>
          </div>
        </motion.div>

        {/* Cartes de formation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {trainingCards.map((card, index) => (
            <TrainingCardComponent
              key={card.id}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
