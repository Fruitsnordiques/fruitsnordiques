'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

/**
 * Composant Hero — Section principale du site
 * Affiche un en-tête de bienvenue avec appel à l'action
 * Animations au chargement et indicateur de scroll
 */
export default function Hero() {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  // Animation du chevron de scroll
  const chevronVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Gestionnaire de scroll vers une section
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-fn-vert-profond to-fn-vert-vif flex items-center justify-center"
      aria-label="Section d'accueil principale"
    >
      {/* Décoration SVG optionnelle — feuille ou motif */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute top-10 right-10 w-32 h-32"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Motif de feuille stylisée */}
          <ellipse cx="50" cy="50" rx="40" ry="25" fill="currentColor" />
          <path
            d="M 50 25 Q 60 40 50 75"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-20 left-5 w-24 h-24"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" />
        </svg>
      </div>

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Titre principal */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-titre font-bold text-fn-neige mb-6 leading-tight"
          variants={itemVariants}
        >
          Nourrir le Nord.
          <br />
          Ensemble.
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-corps text-fn-bleu-glace mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Une serre de production d'un hectare, à vocation sociale, éducative et
          alimentaire — pour bâtir la résilience alimentaire du Québec.
        </motion.p>

        {/* Boutons d'appel à l'action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleScroll('problematique')}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            Découvrir le projet
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/contact"
            className="border-fn-neige text-fn-neige hover:bg-fn-neige hover:text-fn-vert-profond shadow-lg hover:shadow-xl transition-shadow"
          >
            Nous contacter
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll animé */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        variants={chevronVariants}
        animate="animate"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-fn-neige"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
