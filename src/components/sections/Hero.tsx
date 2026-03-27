'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

/**
 * Hero — Section d'accueil immersive
 * Éléments flottants organiques, glassmorphisme, profondeur visuelle
 * Inspiré du style moodboard : capsules flottantes, composition libre
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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-fn-vert-profond via-fn-vert-vif/90 to-fn-vert-profond flex items-center justify-center"
      aria-label="Section d'accueil principale"
    >
      {/* Éléments flottants organiques — capsules et formes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Grande capsule verre — haut droite */}
        <motion.div
          className="absolute top-[15%] right-[8%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/[0.07] backdrop-blur-sm border border-white/10"
          animate={{ y: [-12, 12, -12], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Petite capsule soleil — gauche */}
        <motion.div
          className="absolute top-[35%] left-[5%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-fn-soleil/20 backdrop-blur-sm border border-fn-soleil/20"
          animate={{ y: [0, -16, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Capsule allongée — bas droite */}
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-20 h-10 md:w-36 md:h-16 rounded-full bg-fn-vert-clair/15 backdrop-blur-sm border border-fn-vert-clair/15"
          animate={{ y: [0, 20, 0], x: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Mini sphère — centre gauche */}
        <motion.div
          className="absolute top-[60%] left-[12%] w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/15"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Capsule subtile — haut gauche */}
        <motion.div
          className="absolute top-[10%] left-[25%] w-8 h-8 md:w-12 md:h-12 rounded-full bg-fn-bleu-glace/10 border border-fn-bleu-glace/10"
          animate={{ y: [0, 14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* Grand anneau décoratif — bas gauche */}
        <motion.div
          className="absolute bottom-[10%] left-[20%] w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/[0.04]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Dégradé radial subtil pour profondeur */}
      <div
        className="absolute inset-0 bg-gradient-radial"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(91, 173, 122, 0.15) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 font-accent text-sm">
            <span className="w-2 h-2 rounded-full bg-fn-soleil animate-pulse-soft" />
            Phase 0 — Fondation 2025-2026
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-titre font-bold text-white mb-8 leading-[1.05] tracking-tight"
          variants={itemVariants}
        >
          Nourrir le Nord.
          <br />
          <span className="text-fn-soleil">Ensemble.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-corps text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
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
            Découvrir le projet
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/contact"
          >
            Nous contacter
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/60"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
