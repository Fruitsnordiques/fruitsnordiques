'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

/**
 * Hero v3 — Dark dashboard immersif
 * Slogan centré dominant sur fond noir profond
 * Données-clés en mini-cartes stat sous le CTA
 * Ambiance tech-agriculture haut de gamme
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '1 ha', label: 'Serre intelligente', color: 'text-fn-orange' },
    { value: '12', label: 'Mois de production', color: 'text-fn-vert-vif' },
    { value: '4', label: 'Vocations intégrées', color: 'text-fn-jaune' },
    { value: '50+', label: 'Emplois créés', color: 'text-fn-bleu' },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      aria-label="Section d'accueil principale"
      style={{
        background: `linear-gradient(180deg,
          #1A3A2A 0%,
          #1A3A2A 40%,
          #1E4A35 55%,
          #2D5A3A 62%,
          #5A4A28 72%,
          #8B5A1E 78%,
          #E8862A 82%,
          #C46A1E 86%,
          #5A3212 90%,
          #1A1510 94%,
          #0C0E14 100%
        )`,
      }}
    >
      {/* Fond — grille et textures subtiles sur le vert */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Grille subtile */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Halo lumineux subtil au centre */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 35%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Contenu principal — centré, slogan dominant */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Badge statut */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-fn-noir-carte border border-fn-gris-bordure/50 text-fn-gris-clair font-accent text-sm">
            <span className="w-2 h-2 rounded-full bg-fn-vert-vif animate-pulse-soft" />
            Phase 0 — Fondation 2025-2026
          </span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-titre font-bold text-fn-blanc mb-6 leading-[1.05] tracking-tight"
          variants={itemVariants}
        >
          Nourrir le Nord.
          <br />
          <span className="text-fn-orange">Ensemble.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-lg md:text-xl font-corps text-fn-gris-clair mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Une serre de production d'un hectare, à vocation sociale, éducative et
          alimentaire — pour bâtir la résilience alimentaire du Québec.
        </motion.p>

        {/* Boutons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16"
          variants={itemVariants}
        >
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
        </motion.div>

        {/* Mini-cartes statistiques — style dashboard */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card-stat text-center group"
            >
              <div className={`font-accent text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="font-corps text-xs text-fn-gris">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="w-5 h-8 rounded-full border border-fn-gris-bordure flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1 rounded-full bg-fn-gris"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
