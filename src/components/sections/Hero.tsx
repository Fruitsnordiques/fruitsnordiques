'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

/**
 * Hero — Composition libre éditoriale
 * Cartes superellipse qui se chevauchent, props physiques décoratifs,
 * surfaces mates et satinées. Style organique matière.
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
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

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-fn-cream flex items-center justify-center"
      aria-label="Section d'accueil principale"
    >
      {/* Fond — grande forme organique vert profond */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Forme verte principale — couvre la moitié droite */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[70%] h-[120%] bg-fn-vert-profond"
          style={{ borderRadius: '40% 0% 0% 40% / 45% 0% 0% 55%' }}
        />
        {/* Zone de transition douce */}
        <div
          className="absolute top-[10%] right-[30%] w-[25%] h-[80%] bg-gradient-to-r from-transparent to-fn-vert-profond/40"
          style={{ borderRadius: '50%', filter: 'blur(80px)' }}
        />
      </div>

      {/* Props décoratifs — objets physiques posés */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Capsule ovale orange — haut droite */}
        <motion.div
          className="absolute top-[18%] right-[12%] w-20 h-12 md:w-28 md:h-16 bg-fn-orange prop-capsule"
          animate={{ y: [-4, 4, -4], rotate: [12, 14, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ borderRadius: '50%' }}
        />

        {/* Capsule blanche mate — gauche milieu */}
        <motion.div
          className="absolute top-[55%] left-[8%] w-16 h-10 md:w-24 md:h-14 bg-white prop-capsule"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ borderRadius: '50%' }}
        />

        {/* Petite sphère vert forêt — bas droite */}
        <motion.div
          className="absolute bottom-[22%] right-[20%] w-10 h-10 md:w-14 md:h-14 bg-fn-vert-foret prop-oval"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Capsule crème allongée — haut gauche */}
        <motion.div
          className="absolute top-[12%] left-[20%] w-12 h-7 md:w-16 md:h-10 bg-fn-cream-dark prop-capsule"
          animate={{ y: [0, -5, 0], rotate: [-8, -6, -8] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ borderRadius: '50%' }}
        />
      </div>

      {/* Contenu principal — composition libre */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Colonne gauche — texte */}
        <div className="lg:pr-8">
          {/* Badge phase */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fn-cream-dark text-fn-vert-profond font-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-fn-orange animate-pulse-soft" />
              phase 0 — fondation 2025-2026
            </span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-titre font-bold text-fn-vert-profond mb-6 leading-[1.08] tracking-tight"
            variants={itemVariants}
          >
            Nourrir le Nord.
            <br />
            <span className="text-fn-orange">Ensemble.</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            className="text-lg md:text-xl font-corps text-fn-gris-chaud mb-10 max-w-lg leading-relaxed"
            variants={itemVariants}
          >
            Une serre de production d'un hectare, à vocation sociale, éducative
            et alimentaire — pour bâtir la résilience alimentaire du Québec.
          </motion.p>

          {/* Boutons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button
              variant="accent"
              size="lg"
              onClick={() => handleScroll('problematique')}
            >
              découvrir le projet
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/contact"
            >
              nous contacter
            </Button>
          </motion.div>
        </div>

        {/* Colonne droite — cartes éditoriales superposées */}
        <motion.div
          className="relative hidden lg:block h-[480px]"
          variants={itemVariants}
        >
          {/* Carte principale — vert forêt */}
          <motion.div
            className="absolute top-8 right-0 w-80 card-matte-dark p-8"
            style={{ transform: 'rotate(-2deg)' }}
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <h3 className="font-titre text-2xl text-white mb-3 leading-tight">
              Visions
            </h3>
            <p className="font-corps text-sm text-white/70 leading-relaxed">
              Un écosystème complet au service de la communauté, de la terre au consommateur.
            </p>
            {/* Petits indicateurs de navigation */}
            <div className="flex gap-1.5 mt-5">
              <span className="w-1.5 h-1.5 rounded-full bg-fn-orange" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
          </motion.div>

          {/* Carte secondaire — blanche mate */}
          <motion.div
            className="absolute top-0 left-0 w-64 card-matte p-6"
            style={{ transform: 'rotate(1.5deg)' }}
            animate={{ y: [-2, 4, -2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <p className="font-accent text-xs text-fn-gris-chaud tracking-wide mb-2">vision · couleurs</p>
            <p className="font-corps text-sm text-fn-noir/80 leading-relaxed">
              Blanc crème, vert forêt, orange soleil — les couleurs de la terre et du vivant.
            </p>
          </motion.div>

          {/* Carte feature — en bas */}
          <motion.div
            className="absolute bottom-0 left-8 right-16 card-satin p-6"
            style={{ transform: 'rotate(0.5deg)' }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            <p className="font-accent text-xs text-fn-gris-chaud tracking-wide mb-2">feature</p>
            <p className="font-corps text-sm text-fn-noir/80 leading-relaxed mb-3">
              Production locale, 12 mois par année, pour les communautés qui en ont besoin.
            </p>
            <span className="inline-block px-4 py-1.5 rounded-full bg-fn-orange text-white text-xs font-accent font-semibold">
              en savoir plus
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-5 h-9 rounded-full border-2 border-fn-vert-profond/25 flex justify-center pt-2">
          <motion.div
            className="w-1 h-1 rounded-full bg-fn-vert-profond/40"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
