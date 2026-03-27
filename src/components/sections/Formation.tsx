'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Formation — Section sombre glassmorphique
 * Cartes translucides flottantes sur surface verre vert profond
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

function TrainingCardComponent({
  card,
  index,
}: {
  card: TrainingCard;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
    >
      <div className="h-full bg-white/[0.07] backdrop-blur-md rounded-4xl border border-white/10 p-8 md:p-10 hover:bg-white/[0.12] hover:border-white/20 hover:translate-y-[-6px] transition-all duration-500 flex flex-col">
        {/* Icône */}
        <div className="text-5xl mb-5" aria-hidden="true">
          {card.emoji}
        </div>

        {/* Titre */}
        <h3 className="font-accent font-bold text-xl md:text-2xl text-white mb-4">
          {card.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-base text-white/75 leading-relaxed flex-grow">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Formation() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });
  const isContentInView = useInView(contentRef, { once: true, margin: '-80px' });

  return (
    <section
      id="formation"
      className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden"
      aria-label="Section de formation de la relève"
    >
      {/* Fond vert profond */}
      <div className="absolute inset-0 bg-gradient-to-br from-fn-vert-profond via-[#1E4A35] to-fn-vert-profond" />

      {/* Décorations flottantes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[8%] right-[6%] w-48 h-48 rounded-full bg-fn-vert-clair/6 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[12%] left-[4%] w-40 h-40 rounded-full bg-fn-bleu-glace/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute top-[40%] right-[20%] w-8 h-8 rounded-full bg-fn-soleil/15 border border-fn-soleil/20"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-white text-center leading-tight">
            Former la relève.
            <br />
            <span className="text-fn-soleil">Créer l'avenir.</span>
          </h2>
        </motion.div>

        {/* Contenu descriptif */}
        <motion.div
          ref={contentRef}
          className="mb-14 md:mb-18 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <p className="font-corps text-lg text-white/85 leading-relaxed text-center max-w-3xl mx-auto">
            Fruits Nordiques offre un programme de formation en agronomie, horticulture,
            gestion de serre et entrepreneuriat agricole. Des connaissances pratiques qui
            préparent la relève à réussir dans le secteur agroalimentaire québécois.
          </p>

          {/* Panneau translucide partenariats */}
          <div className="bg-white/[0.06] backdrop-blur-md rounded-3xl border border-white/10 p-7 md:p-8">
            <p className="font-corps text-base md:text-lg text-white/85 mb-4">
              <span className="font-accent font-semibold text-fn-soleil">Partenariats :</span> Nous collaborons avec
              des établissements d'enseignement locaux (DEP, AEC, universitaire) pour assurer
              une formation alignée avec les besoins du marché.
            </p>
            <p className="font-corps text-base md:text-lg text-white/85">
              <span className="font-accent font-semibold text-fn-soleil">Priorité :</span> Jeunes, personnes sans
              emploi et en réorientation professionnelle trouvent ici une porte d'entrée vers
              une carrière significative.
            </p>
          </div>
        </motion.div>

        {/* Cartes de formation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
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
