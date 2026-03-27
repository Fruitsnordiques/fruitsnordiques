'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';

/**
 * Composant Solution — Présente les quatre vocations principales
 * Affiche un écosystème complet au service de la communauté
 * Animations de stagger au scroll
 */
export default function Solution() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Variantes d'animation Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Données des quatre vocations
  const vocations = [
    {
      id: 'alimentation',
      emoji: '🌱',
      titre: 'Production alimentaire locale',
      description:
        'Fruits et légumes produits à l\'année, indépendamment du climat. Approvisionnement direct vers épiceries, restaurants, marchés et familles locales.',
    },
    {
      id: 'communautaire',
      emoji: '🤝',
      titre: 'Agriculture communautaire',
      description:
        'Parcelles de culture accessibles aux résidents. Serres communautaires pour jardinage en toute saison.',
    },
    {
      id: 'cuisine',
      emoji: '🍳',
      titre: 'Cuisine et transformation',
      description:
        'Centre de transformation alimentaire. Équipements professionnels pour entrepreneurs alimentaires locaux. Réduction du gaspillage.',
    },
    {
      id: 'formation',
      emoji: '🎓',
      titre: 'Formation et insertion',
      description:
        'Programme de formation en agronomie, horticulture, gestion de serre. Partenariats avec établissements d\'enseignement. Priorité aux jeunes.',
    },
  ];

  return (
    <section
      id="solution"
      className="w-full py-20 md:py-28 lg:py-32 bg-fn-neige"
      aria-label="Section des quatre vocations"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* En-tête de la section */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Titre principal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight"
            variants={itemVariants}
          >
            Un écosystème. Quatre vocations.
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            className="text-lg md:text-xl font-corps text-fn-gris-moyen max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Fruits Nordiques n'est pas une serre. C'est un écosystème complet au
            service de la communauté.
          </motion.p>
        </motion.div>

        {/* Grille de cartes — 2x2 sur desktop, 1 colonne sur mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {vocations.map((vocation) => (
            <motion.div key={vocation.id} variants={cardVariants}>
              <Card accent className="h-full p-8 lg:p-10 flex flex-col">
                {/* Emoji icon — Grand et visible */}
                <div className="text-5xl md:text-6xl mb-6">{vocation.emoji}</div>

                {/* Titre de la vocation */}
                <h3 className="text-xl md:text-2xl font-accent font-bold text-fn-vert-profond mb-4">
                  {vocation.titre}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg font-corps text-fn-gris-moyen leading-relaxed flex-grow">
                  {vocation.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
