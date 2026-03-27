'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/* Mapping explicite des couleurs d'accent (requis pour que Tailwind détecte les classes) */
const accentStyles: Record<string, string> = {
  'fn-soleil': 'bg-fn-soleil/20 border-fn-soleil',
  'fn-vert-clair': 'bg-fn-vert-clair/20 border-fn-vert-clair',
};

/**
 * Composant Technologie — Présente l'avantage technologique de Fruits Nordiques
 * Powered by Kainon Technologies
 * Design sombre avec animations de fade-in
 */
export default function Technologie() {
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
        staggerChildren: 0.12,
        delayChildren: 0.15,
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

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Données des caractéristiques technologiques
  const features = [
    {
      id: 'efficacite',
      titre: 'Efficacité énergétique',
      description:
        'Réduction significative des coûts énergétiques par rapport aux serres conventionnelles',
      icon: '⚡',
      accentColor: 'fn-soleil',
    },
    {
      id: 'monitoring',
      titre: 'Monitoring en temps réel',
      description: 'Optimisation des conditions de croissance',
      icon: '📊',
      accentColor: 'fn-vert-clair',
    },
    {
      id: 'predictive',
      titre: 'Gestion prédictive',
      description:
        'Cycles de production optimisés par l\'intelligence des données',
      icon: '🧠',
      accentColor: 'fn-soleil',
    },
    {
      id: 'scalabilite',
      titre: 'Scalabilité',
      description:
        'Modèle reproductible vers d\'autres régions du Québec',
      icon: '🚀',
      accentColor: 'fn-vert-clair',
    },
  ];

  return (
    <section
      id="technologie"
      className="w-full py-20 md:py-28 lg:py-32 bg-fn-vert-profond text-fn-neige"
      aria-label="Section technologie"
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
            className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-neige mb-6 leading-tight"
            variants={itemVariants}
          >
            La technologie au service du vivant
          </motion.h2>

          {/* Sous-titre avec référence à Kainon */}
          <motion.p
            className="text-lg md:text-xl font-corps text-fn-bleu-glace mb-4"
            variants={itemVariants}
          >
            Propulsé par{' '}
            <Link
              href="https://kainon.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent font-semibold text-fn-soleil hover:text-fn-vert-clair transition-colors duration-300 underline"
            >
              Kainon Technologies
            </Link>
          </motion.p>
        </motion.div>

        {/* Grille des caractéristiques technologiques */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="flex flex-col sm:flex-row gap-6 items-start"
              variants={featureVariants}
            >
              {/* Icône circulaire avec accent couleur */}
              <div
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 ${accentStyles[feature.accentColor] || ''}`}
              >
                <span className="text-4xl md:text-5xl">{feature.icon}</span>
              </div>

              {/* Contenu textuel */}
              <div className="flex-grow pt-2">
                <h3 className="text-xl md:text-2xl font-accent font-bold text-fn-neige mb-3">
                  {feature.titre}
                </h3>
                <p className="text-base md:text-lg font-corps text-fn-bleu-glace leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section de fermeture / Appel à l'action optionnel */}
        <motion.div
          className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-fn-vert-vif border-opacity-30 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <p className="text-lg font-corps text-fn-bleu-glace max-w-2xl mx-auto leading-relaxed">
            Notre approche intègre innovation technologique et respect du vivant
            pour créer un écosystème durable et productif.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
