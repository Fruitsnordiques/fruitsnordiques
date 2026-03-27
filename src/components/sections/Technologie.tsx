'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

/**
 * Technologie — Surface en verre vert foncé
 * Inspiré du panneau central du moodboard
 * Cartes translucides sur fond profond
 */

const features = [
  {
    id: 'efficacite',
    titre: 'Efficacité énergétique',
    description:
      'Réduction significative des coûts énergétiques par rapport aux serres conventionnelles',
    icon: '⚡',
  },
  {
    id: 'monitoring',
    titre: 'Monitoring en temps réel',
    description: 'Optimisation des conditions de croissance',
    icon: '📊',
  },
  {
    id: 'predictive',
    titre: 'Gestion prédictive',
    description:
      'Cycles de production optimisés par l\'intelligence des données',
    icon: '🧠',
  },
  {
    id: 'scalabilite',
    titre: 'Scalabilité',
    description:
      'Modèle reproductible vers d\'autres régions du Québec',
    icon: '🚀',
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: typeof features[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="h-full bg-white/[0.07] backdrop-blur-md rounded-3xl border border-white/10 p-8 hover:bg-white/[0.12] hover:border-white/20 hover:translate-y-[-4px] transition-all duration-500 group">
        {/* Icône dans cercle translucide */}
        <div className="w-14 h-14 rounded-2xl bg-fn-soleil/15 border border-fn-soleil/20 flex items-center justify-center mb-5 group-hover:bg-fn-soleil/25 transition-colors duration-300">
          <span className="text-3xl">{feature.icon}</span>
        </div>

        {/* Titre */}
        <h3 className="text-xl md:text-2xl font-accent font-bold text-white mb-3">
          {feature.titre}
        </h3>

        {/* Description */}
        <p className="text-base font-corps text-white/70 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Technologie() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="technologie"
      className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden"
      aria-label="Section technologie"
    >
      {/* Fond — surface verre vert foncé style moodboard */}
      <div className="absolute inset-0 bg-gradient-to-br from-fn-vert-profond via-[#1E4A35] to-fn-vert-profond" />

      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[10%] right-[8%] w-40 h-40 rounded-full bg-fn-vert-clair/8 blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[5%] w-56 h-56 rounded-full bg-fn-bleu-glace/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Petite capsule dorée flottante */}
        <motion.div
          className="absolute top-[25%] left-[15%] w-10 h-10 rounded-full bg-fn-soleil/15 border border-fn-soleil/20"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-white mb-6 leading-tight">
            La technologie
            <br />
            <span className="text-fn-soleil">au service du vivant</span>
          </h2>

          <p className="text-lg md:text-xl font-corps text-white/70 mb-3">
            Propulsé par{' '}
            <Link
              href="https://kainon.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent font-semibold text-fn-soleil hover:text-fn-vert-clair transition-colors duration-300 underline decoration-fn-soleil/30 hover:decoration-fn-vert-clair/50 underline-offset-4"
            >
              Kainon Technologies
            </Link>
          </p>
        </motion.div>

        {/* Grille de cartes — bento 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Citation de fermeture — panneau glassmorphique */}
        <motion.div
          className="bg-white/[0.05] backdrop-blur-md rounded-4xl border border-white/10 p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-lg md:text-xl font-corps text-white/80 max-w-2xl mx-auto leading-relaxed italic">
            « Notre approche intègre innovation technologique et respect du vivant
            pour créer un écosystème durable et productif. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}
