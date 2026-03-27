'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

/**
 * Technologie — Surface vert forêt profond mate
 * Cartes en surface satinée translucide sur fond sombre
 * Props décoratifs physiques, composition éditoriale
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
      <div className="h-full bg-white/[0.08] rounded-5xl border border-white/[0.06] p-8 hover:bg-white/[0.12] transition-all duration-500 group">
        {/* Icône dans cercle */}
        <div className="w-14 h-14 rounded-2xl bg-fn-orange/15 flex items-center justify-center mb-5 group-hover:bg-fn-orange/25 transition-colors duration-300">
          <span className="text-3xl">{feature.icon}</span>
        </div>

        {/* Titre */}
        <h3 className="text-xl md:text-2xl font-accent font-bold text-white mb-3">
          {feature.titre}
        </h3>

        {/* Description */}
        <p className="text-base font-corps text-white/65 leading-relaxed">
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
      {/* Fond mate vert profond */}
      <div className="absolute inset-0 bg-gradient-to-br from-fn-vert-profond via-fn-vert-foret to-fn-vert-profond" />

      {/* Props décoratifs physiques */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Capsule orange flottante */}
        <motion.div
          className="absolute top-[12%] right-[8%] w-16 h-10 bg-fn-orange/20 prop-capsule"
          style={{ borderRadius: '50%' }}
          animate={{ y: [0, -8, 0], rotate: [8, 12, 8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Sphère crème */}
        <motion.div
          className="absolute bottom-[18%] left-[6%] w-12 h-12 bg-fn-cream/8 prop-oval"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Petit ovale blanc */}
        <motion.div
          className="absolute top-[28%] left-[14%] w-8 h-5 bg-white/10 prop-capsule"
          style={{ borderRadius: '50%' }}
          animate={{ y: [0, -6, 0] }}
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
            <span className="text-fn-orange">au service du vivant</span>
          </h2>

          <p className="text-lg md:text-xl font-corps text-white/60 mb-3">
            Propulsé par{' '}
            <Link
              href="https://kainon.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent font-semibold text-fn-orange hover:text-fn-orange-doux transition-colors duration-300 underline decoration-fn-orange/30 hover:decoration-fn-orange-doux/50 underline-offset-4"
            >
              Kainon Technologies
            </Link>
          </p>
        </motion.div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Citation de fermeture */}
        <motion.div
          className="bg-white/[0.05] rounded-5xl border border-white/[0.06] p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-lg md:text-xl font-corps text-white/75 max-w-2xl mx-auto leading-relaxed italic">
            « Notre approche intègre innovation technologique et respect du vivant
            pour créer un écosystème durable et productif. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}
