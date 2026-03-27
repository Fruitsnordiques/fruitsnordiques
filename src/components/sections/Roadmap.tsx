'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Composant Roadmap — Feuille de route interactive du projet
 * Affiche 5 phases clés avec timeline verticale et animations au scroll
 * Phase actuelle (Phase 0) en surbrillance avec accent soleil
 */
export default function Roadmap() {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const phaseVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Données des 5 phases
  const phases = [
    {
      id: 0,
      number: '0',
      title: 'Fondation',
      period: '2025–2026',
      description: 'Étude de faisabilité, sélection du site, permis, design architectural, montage financier, partenariats fondateurs',
      isCurrent: true,
    },
    {
      id: 1,
      number: '1',
      title: 'Construction',
      period: '2026–2027',
      description: 'Construction de la serre (1 ha), installation des systèmes Kainon, aménagement des espaces communautaires',
      isCurrent: false,
    },
    {
      id: 2,
      number: '2',
      title: 'Lancement',
      period: '2027',
      description: 'Première saison de production, ouverture des parcelles communautaires, lancement du programme de formation',
      isCurrent: false,
    },
    {
      id: 3,
      number: '3',
      title: 'Croissance',
      period: '2028–2029',
      description: 'Rentabilité opérationnelle, expansion du programme de formation, développement de la cuisine communautaire',
      isCurrent: false,
    },
    {
      id: 4,
      number: '4',
      title: 'Réplication',
      period: '2030+',
      description: 'Exportation du modèle, licensing technologique Kainon, impact à l\'échelle provinciale',
      isCurrent: false,
    },
  ];

  return (
    <section
      id="roadmap"
      className="w-full py-20 md:py-28 lg:py-32 bg-fn-neige"
      aria-label="Feuille de route du projet"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* En-tête de la section */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Titre principal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-vert-profond mb-6 leading-tight"
            variants={itemVariants}
          >
            Notre feuille de route
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            className="text-lg md:text-xl font-corps text-fn-gris-moyen max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Un plan clair, des jalons concrets, une vision à long terme.
          </motion.p>
        </motion.div>

        {/* Timeline verticale */}
        <motion.div
          className="relative flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Ligne de connexion centrale */}
          <div
            className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-fn-vert-vif to-fn-soleil"
            aria-hidden="true"
          />

          {/* Phases */}
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className="relative mb-12 md:mb-16 last:mb-0"
              variants={phaseVariants}
            >
              {/* Conteneur de la phase */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                {/* Côté gauche (desktop) ou haut (mobile) */}
                <div className="md:w-1/2 md:pr-12 flex items-start gap-4 md:justify-end">
                  {/* Nœud/Cercle de la timeline */}
                  <div
                    className={`relative flex-shrink-0 mt-1 ${
                      phase.isCurrent ? 'z-20' : 'z-10'
                    }`}
                  >
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                        phase.isCurrent
                          ? 'bg-fn-soleil border-fn-vert-profond shadow-lg shadow-fn-soleil/50'
                          : 'bg-fn-vert-vif border-fn-neige hover:shadow-md'
                      }`}
                      animate={
                        phase.isCurrent
                          ? { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }
                          : {}
                      }
                      aria-hidden="true"
                    />
                  </div>

                  {/* Contenu de la phase (desktop — align right) */}
                  <div className="hidden md:block md:text-right">
                    {/* Badge du statut */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-accent font-semibold mb-2 ${
                        phase.isCurrent
                          ? 'bg-fn-soleil text-fn-gris-fonce'
                          : 'bg-fn-vert-vif text-fn-neige'
                      }`}
                    >
                      {phase.period}
                    </div>

                    {/* Titre de la phase */}
                    <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond mb-3">
                      Phase {phase.number} — {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg font-corps text-fn-gris-moyen leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Côté droit (desktop) ou bas (mobile) */}
                <div className="md:w-1/2 md:pl-12">
                  {/* Contenu de la phase (mobile — full width) */}
                  <div className="md:hidden">
                    {/* Badge du statut */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-accent font-semibold mb-2 ${
                        phase.isCurrent
                          ? 'bg-fn-soleil text-fn-gris-fonce'
                          : 'bg-fn-vert-vif text-fn-neige'
                      }`}
                    >
                      {phase.period}
                    </div>

                    {/* Titre de la phase */}
                    <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond mb-3">
                      Phase {phase.number} — {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg font-corps text-fn-gris-moyen leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Espace vide sur desktop */}
                  <div className="hidden md:block" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
