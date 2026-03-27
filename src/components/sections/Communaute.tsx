'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Communauté v5 — Neumorphique
 * Cartes en relief, citation en panneau accent
 */

const communityGroups = [
  {
    id: 'gardeners',
    name: 'Jardiniers urbains et ruraux',
    description:
      'Les passionnés de jardinage qui souhaitent cultiver et partager leurs récoltes.',
  },
  {
    id: 'families',
    name: 'Familles et aînés',
    description:
      "Un espace où générations se rencontrent autour de l'alimentation saine et locale.",
  },
  {
    id: 'entrepreneurs',
    name: 'Entrepreneurs alimentaires',
    description:
      'Des visionnaires qui transforment les fruits et légumes en produits innovants.',
  },
  {
    id: 'organisms',
    name: 'Organismes communautaires',
    description:
      "Nos partenaires qui renforcent l'impact social et la portée collective.",
  },
];

function CommunityGroupCard({
  group,
  index,
}: {
  group: typeof communityGroups[0];
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
        delay: index * 0.08,
      }}
    >
      <div className="card-neu h-full">
        {/* Titre */}
        <h4 className="font-accent font-semibold text-sm text-fn-texte-titre mb-2 tracking-wide">
          {group.name}
        </h4>
        {/* Description */}
        <p className="font-corps text-sm text-fn-texte-muted leading-relaxed">
          {group.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Communaute() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="communaute"
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 bg-fn-fond"
      aria-label="Section au coeur de la communauté"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête 2 colonnes */}
        <motion.div
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="label-neu block mb-5">Communauté</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre leading-[1.02]">
              Au coeur de
              <br />
              <span className="text-fn-teal">la communauté</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base md:text-lg font-corps text-fn-texte-sub leading-relaxed">
              Fruits Nordiques est un espace d'appartenance ouvert à tous.
              Chacun y trouve sa place, ses ressources et sa communauté.
            </p>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-neu mb-12 md:mb-16" />

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {communityGroups.map((group, index) => (
            <CommunityGroupCard
              key={group.id}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Panneau citation — neumorphique accent */}
        <motion.div
          className="card-neu-accent p-8 md:p-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="font-corps text-base md:text-lg text-fn-texte-sub leading-relaxed mb-4">
            C'est bien plus qu'une serre : c'est un mouvement où l'alimentation
            saine, l'emploi durable et l'appartenance communautaire se nouent
            pour créer un impact véritable.
          </p>
          <span className="label-neu text-fn-teal-fonce">
            — L'équipe Fruits Nordiques
          </span>
        </motion.div>
      </div>
    </section>
  );
}
