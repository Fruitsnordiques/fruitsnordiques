'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

/**
 * Technologie v4 — Style Kainon
 * Métriques énormes, cartes subtiles, lien Kainon en teal
 */

const features = [
  {
    id: 'efficacite',
    metric: '-40%',
    metricLabel: 'Coûts énergie',
    titre: 'Efficacité énergétique',
    description:
      'Réduction significative des coûts énergétiques par rapport aux serres conventionnelles.',
  },
  {
    id: 'monitoring',
    metric: '24/7',
    metricLabel: 'Surveillance',
    titre: 'Monitoring en temps réel',
    description: 'Optimisation des conditions de croissance par capteurs IoT.',
  },
  {
    id: 'predictive',
    metric: '+35%',
    metricLabel: 'Rendement',
    titre: 'Gestion prédictive',
    description:
      "Cycles de production optimisés par l'intelligence des données.",
  },
  {
    id: 'scalabilite',
    metric: '∞',
    metricLabel: 'Potentiel',
    titre: 'Scalabilité',
    description:
      "Modèle reproductible vers d'autres régions du Québec.",
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
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="card-kainon p-6 md:p-8 h-full flex flex-col">
        {/* Métrique géante */}
        <div className="mb-6">
          <span className="font-titre text-4xl md:text-5xl font-bold text-fn-teal">
            {feature.metric}
          </span>
          <span className="label-kainon block mt-2">
            {feature.metricLabel}
          </span>
        </div>

        {/* Titre */}
        <h3 className="font-accent font-semibold text-base text-fn-blanc mb-3 tracking-wide">
          {feature.titre}
        </h3>

        {/* Description */}
        <p className="font-corps text-sm text-fn-gris leading-relaxed flex-grow">
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
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 bg-fn-noir-profond"
      aria-label="Section technologie"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête 2 colonnes */}
        <motion.div
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="label-kainon block mb-5">Technologie</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-gris-clair leading-[1.02]">
              La technologie
              <br />
              <span className="text-fn-teal">au service du vivant</span>
            </h2>
          </div>
          <div className="flex items-end">
            <div>
              <p className="text-base md:text-lg font-corps text-fn-gris leading-relaxed mb-4">
                Notre infrastructure repose sur les systèmes avancés de gestion
                de serre, conçus pour maximiser la production tout en minimisant
                l'empreinte environnementale.
              </p>
              <p className="font-corps text-sm text-fn-gris">
                Propulsé par{' '}
                <Link
                  href="https://kainon.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-accent font-medium text-fn-teal hover:text-fn-teal/80 transition-colors duration-300"
                >
                  Kainon Technologies
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-kainon mb-12 md:mb-16" />

        {/* Grille 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
