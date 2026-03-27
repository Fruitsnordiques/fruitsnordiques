'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

/**
 * Technologie — Dashboard data avec métriques tech
 * Cartes sombres élevées, indicateurs de performance
 */

const features = [
  {
    id: 'efficacite',
    titre: 'Efficacité énergétique',
    description:
      'Réduction significative des coûts énergétiques par rapport aux serres conventionnelles',
    icon: '⚡',
    metric: '-40%',
    metricLabel: 'coûts énergie',
    accent: 'text-fn-jaune',
    barColor: 'bg-fn-jaune',
  },
  {
    id: 'monitoring',
    titre: 'Monitoring en temps réel',
    description: 'Optimisation des conditions de croissance par capteurs IoT',
    icon: '📊',
    metric: '24/7',
    metricLabel: 'surveillance',
    accent: 'text-fn-vert-vif',
    barColor: 'bg-fn-vert-vif',
  },
  {
    id: 'predictive',
    titre: 'Gestion prédictive',
    description:
      'Cycles de production optimisés par l\'intelligence des données',
    icon: '🧠',
    metric: '+35%',
    metricLabel: 'rendement',
    accent: 'text-fn-orange',
    barColor: 'bg-fn-orange',
  },
  {
    id: 'scalabilite',
    titre: 'Scalabilité',
    description:
      'Modèle reproductible vers d\'autres régions du Québec',
    icon: '🚀',
    metric: '∞',
    metricLabel: 'potentiel',
    accent: 'text-fn-bleu',
    barColor: 'bg-fn-bleu',
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
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="h-full card-elevated p-6 md:p-8 flex flex-col group">
        {/* Barre accent */}
        <div className={`w-8 h-1 rounded-full ${feature.barColor} mb-5`} />

        {/* Icône + métrique */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-fn-noir-carte border border-fn-gris-bordure/40 flex items-center justify-center group-hover:border-fn-gris-bordure transition-colors">
            <span className="text-xl">{feature.icon}</span>
          </div>
          <div className="text-right">
            <span className={`font-accent text-2xl font-bold ${feature.accent}`}>
              {feature.metric}
            </span>
            <p className="font-corps text-[10px] text-fn-gris-fonce">{feature.metricLabel}</p>
          </div>
        </div>

        {/* Titre */}
        <h3 className="text-base md:text-lg font-accent font-bold text-fn-blanc mb-2">
          {feature.titre}
        </h3>

        {/* Description */}
        <p className="text-sm font-corps text-fn-gris leading-relaxed flex-grow">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Technologie() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="technologie"
      className="relative w-full py-20 md:py-28 lg:py-32 px-5 sm:px-8"
      aria-label="Section technologie"
      style={{
        background: `linear-gradient(180deg,
          #0C0E14 0%,
          #16150F 15%,
          #2A2214 35%,
          #3D3018 50%,
          #2A2214 65%,
          #16150F 85%,
          #0C0E14 100%
        )`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 rounded-full bg-fn-orange" />
            <span className="font-accent text-xs font-semibold text-fn-gris tracking-wider uppercase">Technologie</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc mb-5 leading-tight">
            La technologie
            <br />
            <span className="text-fn-orange">au service du vivant</span>
          </h2>

          <p className="text-base md:text-lg font-corps text-fn-gris">
            Propulsé par{' '}
            <Link
              href="https://kainon.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-accent font-semibold text-fn-orange hover:text-fn-orange-doux transition-colors duration-200"
            >
              Kainon Technologies
            </Link>
          </p>
        </motion.div>

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* Citation */}
        <motion.div
          className="card-dark p-6 md:p-10 text-center border-fn-gris-bordure/40"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <p className="text-base md:text-lg font-corps text-fn-gris-clair max-w-2xl mx-auto leading-relaxed italic">
            « Notre approche intègre innovation technologique et respect du vivant
            pour créer un écosystème durable et productif. »
          </p>
        </motion.div>
      </div>
    </section>
  );
}
