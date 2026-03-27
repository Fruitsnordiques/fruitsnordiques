'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Formation v5 — Neumorphique
 * Cartes numérotées en relief, panneau partenariats
 */

const trainingCards = [
  {
    id: 'agronomy',
    number: '01',
    title: 'Agronomie & horticulture',
    description:
      'Maîtriser les sciences fondamentales de la culture et de la gestion des plantes.',
  },
  {
    id: 'greenhouse',
    number: '02',
    title: 'Gestion de serre',
    description:
      'Exploiter les technologies modernes pour optimiser la production en environnement contrôlé.',
  },
  {
    id: 'entrepreneurship',
    number: '03',
    title: 'Entrepreneuriat agricole',
    description:
      "Développer votre vision d'entreprise et créer un projet agricole viable et durable.",
  },
];

function TrainingCard({
  card,
  index,
}: {
  card: typeof trainingCards[0];
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
        {/* Numéro */}
        <span className="font-titre text-4xl font-bold text-fn-teal/30 mb-6">
          {card.number}
        </span>

        {/* Titre */}
        <h3 className="font-accent font-semibold text-base text-fn-texte-titre mb-3 tracking-wide">
          {card.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-sm text-fn-texte-muted leading-relaxed flex-grow">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Formation() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="formation"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 bg-fn-fond-clair"
      aria-label="Section de formation de la relève"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête 2 colonnes */}
        <motion.div
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="label-neu block mb-5">Formation</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre leading-[1.02]">
              Former la relève.
              <br />
              <span className="text-fn-teal">Créer l'avenir.</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
              Fruits Nordiques offre un programme de formation en agronomie,
              horticulture, gestion de serre et entrepreneuriat agricole.
              Des connaissances pratiques qui préparent la relève à réussir.
            </p>
          </div>
        </motion.div>

        {/* Panneau partenariats — neumorphique accent */}
        <motion.div
          className="card-neu-accent mb-12 md:mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p className="font-corps text-sm text-fn-texte-sub leading-relaxed">
              <span className="font-accent font-semibold text-fn-teal-fonce">Partenariats</span> — Nous
              collaborons avec des établissements d'enseignement locaux (DEP, AEC,
              universitaire) pour assurer une formation alignée avec les besoins du marché.
            </p>
            <p className="font-corps text-sm text-fn-texte-sub leading-relaxed">
              <span className="font-accent font-semibold text-fn-teal-fonce">Priorité</span> — Jeunes,
              personnes sans emploi et en réorientation professionnelle trouvent
              ici une porte d'entrée vers une carrière significative.
            </p>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-neu mb-12 md:mb-16" />

        {/* Cartes de formation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {trainingCards.map((card, index) => (
            <TrainingCard
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
