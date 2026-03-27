'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Composant Formation — Section de formation de la relève
 * Section sombre et contrastée sur fond vert profond
 * Présente les programmes de formation et partenariats
 * Animations staggered au scroll
 */

interface TrainingCard {
  id: string;
  title: string;
  emoji: string;
  description: string;
}

const trainingCards: TrainingCard[] = [
  {
    id: 'agronomy',
    title: 'Agronomie & Horticulture',
    emoji: '🌾',
    description:
      'Maîtriser les sciences fondamentales de la culture et de la gestion des plantes.',
  },
  {
    id: 'greenhouse',
    title: 'Gestion de serre',
    emoji: '🏠',
    description:
      'Exploiter les technologies modernes pour optimiser la production en environnement contrôlé.',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneuriat agricole',
    emoji: '💼',
    description:
      "Développer votre vision d'entreprise et créer un projet agricole viable et durable.",
  },
];

/**
 * Composant de carte de formation
 */
function TrainingCardComponent({
  card,
  index,
}: {
  card: TrainingCard;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="h-full"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="h-full bg-fn-vert-vif/10 backdrop-blur-sm rounded-lg p-8 border border-fn-vert-vif/30 hover:border-fn-vert-vif/60 transition-all duration-300 flex flex-col">
        {/* Icône */}
        <div className="text-5xl mb-4" aria-hidden="true">
          {card.emoji}
        </div>

        {/* Titre */}
        <h3 className="font-accent font-bold text-xl md:text-2xl text-fn-neige mb-4">
          {card.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-base text-fn-neige/90 leading-relaxed flex-grow">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Formation() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const isTitleInView = useInView(titleRef, {
    once: true,
    margin: '-100px',
  });

  const isContentInView = useInView(contentRef, {
    once: true,
    margin: '-100px',
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <section
      id="formation"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-fn-vert-profond px-6 sm:px-8 overflow-hidden"
      aria-label="Section de formation de la relève"
    >
      {/* Décoration de fond subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-fn-vert-vif rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-fn-bleu-glace rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Titre de la section */}
        <motion.div
          ref={titleRef}
          className="mb-8 md:mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-neige text-center leading-tight">
            Former la relève.<br />Créer l'avenir.
          </h2>
        </motion.div>

        {/* Contenu descriptif */}
        <motion.div
          ref={contentRef}
          className="mb-12 md:mb-16 space-y-6"
          variants={contentVariants}
          initial="hidden"
          animate={isContentInView ? 'visible' : 'hidden'}
        >
          <p className="font-corps text-lg text-fn-neige/95 leading-relaxed text-center max-w-3xl mx-auto">
            Fruits Nordiques offre un programme de formation en agronomie, horticulture,
            gestion de serre et entrepreneuriat agricole. Des connaissances pratiques qui
            préparent la relève à réussir dans le secteur agroalimentaire québécois.
          </p>

          <div className="bg-fn-vert-clair/20 border border-fn-vert-clair/40 rounded-lg p-6 md:p-8">
            <p className="font-corps text-base md:text-lg text-fn-neige mb-4">
              <span className="font-accent font-semibold">Partenariats:</span> Nous collaborons avec
              des établissements d'enseignement locaux (DEP, AEC, universitaire) pour assurer
              une formation alignée avec les besoins du marché.
            </p>
            <p className="font-corps text-base md:text-lg text-fn-neige">
              <span className="font-accent font-semibold">Priorité:</span> Jeunes, personnes sans
              emploi et en réorientation professionnelle trouvent ici une porte d'entrée vers
              une carrière significative.
            </p>
          </div>
        </motion.div>

        {/* Cartes de formation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
