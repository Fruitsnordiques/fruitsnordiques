'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Communauté — Cartes mates blanches sur fond crème
 * Style éditorial avec props physiques décoratifs
 * Citation en panneau satin chaud
 */

interface CommunityGroup {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

const communityGroups: CommunityGroup[] = [
  {
    id: 'gardeners',
    name: 'Jardiniers urbains et ruraux',
    emoji: '🌱',
    description:
      'Les passionnés de jardinage qui souhaitent cultiver et partager leurs récoltes.',
  },
  {
    id: 'families',
    name: 'Familles et aînés',
    emoji: '👨‍👩‍👧‍👦',
    description:
      "Un espace où générations se rencontrent autour de l'alimentation saine et locale.",
  },
  {
    id: 'entrepreneurs',
    name: 'Entrepreneurs alimentaires',
    emoji: '🚀',
    description:
      'Des visionnaires qui transforment les fruits et légumes en produits innovants.',
  },
  {
    id: 'organisms',
    name: 'Organismes communautaires',
    emoji: '🤝',
    description:
      "Nos partenaires qui renforcent l'impact social et la portée collective.",
  },
];

function CommunityGroupCard({
  group,
  index,
}: {
  group: CommunityGroup;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="h-full card-matte p-7 md:p-8 flex items-start gap-5">
        <div className="text-4xl flex-shrink-0" aria-hidden="true">
          {group.emoji}
        </div>
        <div className="flex-grow">
          <h4 className="font-accent font-bold text-lg text-fn-vert-profond mb-2">
            {group.name}
          </h4>
          <p className="font-corps text-base text-fn-gris-chaud leading-relaxed">
            {group.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Communaute() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="communaute"
      className="relative w-full py-20 md:py-28 lg:py-36 bg-white px-5 sm:px-8"
      aria-label="Section au coeur de la communauté"
    >
      {/* Props décoratifs */}
      <div className="absolute top-20 right-16 w-10 h-10 bg-fn-orange/8 prop-oval" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="text-center mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-vert-profond leading-tight">
            Au coeur de
            <br />
            <span className="text-fn-orange">la communauté</span>
          </h2>
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          className="text-lg md:text-xl text-fn-gris-chaud text-center mb-14 md:mb-18 font-corps max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          viewport={{ once: true }}
        >
          Fruits Nordiques est un espace d'appartenance ouvert à tous.
        </motion.p>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-12 md:mb-16">
          {communityGroups.map((group, index) => (
            <CommunityGroupCard
              key={group.id}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Panneau citation — satin chaud */}
        <motion.div
          className="card-satin p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="font-corps text-base md:text-lg text-fn-noir leading-relaxed mb-4">
            Chez Fruits Nordiques, chacun trouve sa place. Qu'on soit passionné de jardinage,
            qu'on cherche à nourrir sa famille sainement ou qu'on rêve de lancer son projet
            alimentaire, notre communauté offre support, ressources et amitié.
          </p>
          <p className="font-corps text-base md:text-lg text-fn-noir leading-relaxed">
            C'est bien plus qu'une serre : c'est un mouvement où l'alimentation saine,
            l'emploi durable et l'appartenance communautaire se nouent pour créer un impact
            véritable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
