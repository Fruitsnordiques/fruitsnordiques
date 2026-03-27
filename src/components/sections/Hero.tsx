'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

/**
 * Hero v4 — Style Kainon
 * Typographie géante, 2 colonnes, fond noir uniforme
 * Stats en grille avec chiffres énormes
 */
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '1ha', label: 'Serre intelligente' },
    { value: '12', label: 'Mois de production' },
    { value: '4', label: 'Vocations intégrées' },
    { value: '50+', label: 'Emplois créés' },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-fn-noir-profond"
      aria-label="Section d'accueil principale"
    >
      {/* Gradient subtil en haut */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(74, 191, 180, 0.04) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Contenu — layout 2 colonnes */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full py-32 md:py-40"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Label */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="label-kainon text-fn-teal">
            Phase 0 — Fondation 2025–2026
          </span>
        </motion.div>

        {/* Titre géant */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-titre font-bold text-fn-gris-clair mb-8 leading-[0.95] tracking-tight"
          variants={itemVariants}
        >
          Nourrir
          <br />
          le Nord.
          <br />
          <span className="text-fn-teal">Ensemble.</span>
        </motion.h1>

        {/* Sous-titre — colonne droite sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          <div /> {/* Espace vide à gauche sur desktop */}
          <motion.div variants={itemVariants}>
            <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed mb-8">
              Une serre de production d'un hectare, à vocation sociale,
              éducative et alimentaire — pour bâtir la résilience alimentaire
              du Québec.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('problematique')}
              >
                Découvrir le projet
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/contact"
              >
                Nous contacter
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <motion.div variants={itemVariants} className="divider-kainon mb-12" />

        {/* Statistiques — chiffres géants */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={itemVariants}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-left">
              <div className="font-titre text-4xl md:text-5xl lg:text-6xl font-bold text-fn-blanc mb-2">
                {stat.value}
              </div>
              <div className="label-kainon">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
