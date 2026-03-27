'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Communauté — Cartes dashboard sombres avec icônes
 * Panel de citation en carte élevée
 */

interface CommunityGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  accent: string;
}

const communityGroups: CommunityGroup[] = [
  {
    id: 'gardeners',
    name: 'Jardiniers urbains et ruraux',
    icon: '🌱',
    description:
      'Les passionnés de jardinage qui souhaitent cultiver et partager leurs récoltes.',
    accent: 'bg-fn-vert-vif',
  },
  {
    id: 'families',
    name: 'Familles et aînés',
    icon: '👨‍👩‍👧‍👦',
    description:
      "Un espace où générations se rencontrent autour de l'alimentation saine et locale.",
    accent: 'bg-fn-orange',
  },
  {
    id: 'entrepreneurs',
    name: 'Entrepreneurs alimentaires',
    icon: '🚀',
    description:
      'Des visionnaires qui transforment les fruits et légumes en produits innovants.',
    accent: 'bg-fn-jaune',
  },
  {
    id: 'organisms',
    name: 'Organismes communautaires',
    icon: '🤝',
    description:
      "Nos partenaires qui renforcent l'impact social et la portée collective.",
    accent: 'bg-fn-bleu',
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
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
    >
      <div className="h-full card-dark p-6 md:p-7 flex items-start gap-4">
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <span className="text-2xl" aria-hidden="true">{group.icon}</span>
          <div className={`w-1 h-6 rounded-full ${group.accent} opacity-40`} />
        </div>
        <div className="flex-grow">
          <h4 className="font-accent font-bold text-base text-fn-blanc mb-1.5">
            {group.name}
          </h4>
          <p className="font-corps text-sm text-fn-gris leading-relaxed">
            {group.description}
          </p>
        </div>
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
      className="relative w-full py-20 md:py-28 lg:py-32 px-5 sm:px-8"
      aria-label="Section au coeur de la communauté"
      style={{
        background: `linear-gradient(180deg,
          #0C0E14 0%,
          #14140E 15%,
          #22201A 35%,
          #2E2818 50%,
          #22201A 65%,
          #14140E 85%,
          #0C0E14 100%
        )`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <motion.div
          ref={titleRef}
          className="mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-fn-orange" />
            <span className="font-accent text-xs font-semibold text-fn-gris tracking-wider uppercase">Communauté</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc leading-tight">
            Au coeur de
            <br />
            <span className="text-fn-orange">la communauté</span>
          </h2>
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          className="text-base md:text-lg text-fn-gris mb-12 md:mb-14 font-corps max-w-2xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true }}
        >
          Fruits Nordiques est un espace d'appartenance ouvert à tous.
        </motion.p>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
          {communityGroups.map((group, index) => (
            <CommunityGroupCard
              key={group.id}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Panneau citation — carte élevée */}
        <motion.div
          className="card-elevated p-6 md:p-10 border-l-2 border-fn-orange/40"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="font-corps text-sm md:text-base text-fn-gris-clair leading-relaxed mb-3">
            Chez Fruits Nordiques, chacun trouve sa place. Qu'on soit passionné de jardinage,
            qu'on cherche à nourrir sa famille sainement ou qu'on rêve de lancer son projet
            alimentaire, notre communauté offre support, ressources et amitié.
          </p>
          <p className="font-corps text-sm md:text-base text-fn-gris-clair leading-relaxed">
            C'est bien plus qu'une serre : c'est un mouvement où l'alimentation saine,
            l'emploi durable et l'appartenance communautaire se nouent pour créer un impact
            véritable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
