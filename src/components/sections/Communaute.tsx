'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Composant Communaute — Section au coeur de la communauté
 * Affiche le caractère inclusif et accueillant de Fruits Nordiques
 * avec présentation des groupes cibles et accents chaleureux
 * Animations staggered au scroll
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

/**
 * Composant de groupe communautaire
 */
function CommunityGroupComponent({
  group,
  index,
}: {
  group: CommunityGroup;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.12,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-4"
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="text-4xl flex-shrink-0" aria-hidden="true">
        {group.emoji}
      </div>
      <div className="flex-grow">
        <h4 className="font-accent font-bold text-lg text-fn-gris-fonce mb-2">
          {group.name}
        </h4>
        <p className="font-corps text-base text-fn-gris-moyen leading-relaxed">
          {group.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Communaute() {
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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <section
      id="communaute"
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-white px-6 sm:px-8"
      aria-label="Section au coeur de la communauté"
    >
      <div className="max-w-4xl mx-auto">
        {/* Titre de la section */}
        <motion.div
          ref={titleRef}
          className="mb-6"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-titre font-bold text-fn-gris-fonce text-center leading-tight">
            Au coeur de la communauté
          </h2>
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          ref={contentRef}
          className="text-lg md:text-xl text-fn-gris-moyen text-center mb-12 md:mb-16 font-corps"
          variants={descriptionVariants}
          initial="hidden"
          animate={isContentInView ? 'visible' : 'hidden'}
        >
          Fruits Nordiques est un espace d'appartenance ouvert à tous.
        </motion.p>

        {/* Groupes communautaires */}
        <div className="space-y-8 md:space-y-10 mb-12 md:mb-16">
          {communityGroups.map((group, index) => (
            <CommunityGroupComponent
              key={group.id}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* Zone de contenu additionnel / témoignage */}
        <motion.div
          className="bg-gradient-to-r from-fn-terre/5 to-fn-soleil/5 rounded-lg p-8 md:p-12 border-l-4 border-fn-soleil"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="font-corps text-base md:text-lg text-fn-gris-fonce leading-relaxed mb-4">
            Chez Fruits Nordiques, chacun trouve sa place. Qu'on soit passionné de jardinage,
            qu'on cherche à nourrir sa famille sainement ou qu'on rêve de lancer son projet
            alimentaire, notre communauté offre support, ressources et amitié.
          </p>
          <p className="font-corps text-base md:text-lg text-fn-gris-fonce leading-relaxed">
            C'est bien plus qu'une serre : c'est un mouvement où l'alimentation saine,
            l'emploi durable et l'appartenance communautaire se nouent pour créer un impact
            véritable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
