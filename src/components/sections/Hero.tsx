'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

/**
 * Hero — Composition centrée, immersive, slogan dominant
 * Le titre « Nourrir le Nord. Ensemble. » est le point focal unique.
 * Fond vert profond plein écran, props physiques mates en arrière-plan.
 * Pas de cartes latérales — tout converge vers le message.
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
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      className="relative min-h-screen w-full overflow-hidden bg-fn-vert-profond flex items-center justify-center"
      aria-label="Section d'accueil principale"
    >
      {/* Fond — dégradé subtil pour profondeur */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 35% 45%, rgba(45, 122, 79, 0.25) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 70%, rgba(91, 173, 122, 0.08) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Props décoratifs — objets physiques mates */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grande capsule ovale crème — haut droite */}
        <motion.div
          className="absolute top-[14%] right-[10%] w-20 h-12 md:w-28 md:h-16 bg-fn-cream/10"
          animate={{ y: [-4, 4, -4], rotate: [15, 18, 15] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ borderRadius: '50%' }}
        />

        {/* Capsule orange — bas gauche */}
        <motion.div
          className="absolute bottom-[22%] left-[8%] w-14 h-9 md:w-20 md:h-12 bg-fn-orange/20"
          animate={{ y: [0, -6, 0], rotate: [-6, -3, -6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          style={{ borderRadius: '50%' }}
        />

        {/* Petite sphère vert clair — droite milieu */}
        <motion.div
          className="absolute top-[55%] right-[6%] w-6 h-6 md:w-9 md:h-9 rounded-full bg-fn-vert-moyen/15"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Capsule allongée subtile — haut gauche */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-10 h-5 md:w-16 md:h-8 bg-white/[0.05]"
          animate={{ y: [0, 5, 0], rotate: [-10, -7, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ borderRadius: '50%' }}
        />

        {/* Mini sphère — bas droite */}
        <motion.div
          className="absolute bottom-[30%] right-[20%] w-5 h-5 md:w-7 md:h-7 rounded-full bg-fn-cream/[0.07]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* Anneau décoratif très subtil — centre */}
        <motion.div
          className="absolute top-[30%] left-[40%] w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/[0.03]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Contenu principal — centré, slogan dominant */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Badge phase */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.08] text-white/80 font-accent text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-fn-orange animate-pulse-soft" />
            phase 0 — fondation 2025-2026
          </span>
        </motion.div>

        {/* Titre principal — le point focal */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-titre font-bold text-white mb-8 leading-[1.05] tracking-tight"
          variants={itemVariants}
        >
          Nourrir le Nord.
          <br />
          <span className="text-fn-orange">Ensemble.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-corps text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Une serre de production d'un hectare, à vocation sociale, éducative et
          alimentaire — pour bâtir la résilience alimentaire du Québec.
        </motion.p>

        {/* Boutons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
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
            variant="ghost"
            size="lg"
            href="/contact"
          >
            nous contacter
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <motion.div
            className="w-1 h-1 rounded-full bg-white/40"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
