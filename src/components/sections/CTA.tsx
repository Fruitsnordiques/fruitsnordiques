'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

/**
 * Composant CTA (Call-To-Action) — Section d'engagement final
 * Trois cartes d'action (Investir, Partenariat, Rester informé)
 * Fond dégradé vert, texte clair, animations interactives
 */
export default function CTA() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardHoverVariants = {
    rest: { y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
    hover: {
      y: -8,
      boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  // Données des trois cartes d'action
  const actions = [
    {
      id: 'investir',
      icon: '💼',
      title: 'Investir',
      description: 'Contribuez au financement d\'une infrastructure alimentaire durable et rentable.',
      buttonText: 'Discuter d\'investissement',
      href: '/contact',
    },
    {
      id: 'partenariat',
      icon: '🤝',
      title: 'Devenir partenaire',
      description: 'Organismes, municipalités, entreprises : collaborons pour un impact concret.',
      buttonText: 'Proposer un partenariat',
      href: '/contact',
    },
    {
      id: 'newsletter',
      icon: '📧',
      title: 'Rester informé',
      description: 'Recevez les nouvelles du projet et les jalons importants.',
      buttonText: 'S\'inscrire',
      href: '/contact',
    },
  ];

  return (
    <section
      id="agir"
      className="relative w-full py-20 md:py-28 lg:py-32 bg-gradient-to-r from-fn-vert-profond to-fn-vert-vif overflow-hidden"
      aria-label="Appel à l'action — Engagez-vous"
    >
      {/* Décoration SVG optionnelle — motif subtil */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute top-10 right-10 w-40 h-40"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="50" cy="50" rx="40" ry="25" fill="currentColor" />
          <path
            d="M 50 25 Q 60 40 50 75"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-20 left-5 w-32 h-32"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" />
        </svg>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* En-tête de la section */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {/* Titre principal */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-titre font-bold text-fn-neige mb-6 leading-tight"
            variants={itemVariants}
          >
            Prêt à bâtir l'avenir alimentaire du Québec ?
          </motion.h2>

          {/* Sous-titre */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-corps text-fn-bleu-glace max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Que vous soyez investisseur, partenaire, organisme ou citoyen engagé —
            il y a une place pour vous dans ce projet.
          </motion.p>
        </motion.div>

        {/* Grille de cartes — 3 colonnes sur desktop, 1 colonne sur mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {actions.map((action) => (
            <motion.div
              key={action.id}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
            >
              <motion.div
                className="h-full bg-fn-neige rounded-xl p-8 lg:p-10 flex flex-col shadow-lg transition-all duration-300"
                variants={cardHoverVariants}
              >
                {/* Icône emoji — Grand et visible */}
                <div className="text-5xl md:text-6xl mb-6">{action.icon}</div>

                {/* Titre de l'action */}
                <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond mb-4">
                  {action.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg font-corps text-fn-gris-moyen leading-relaxed flex-grow mb-8">
                  {action.description}
                </p>

                {/* Bouton */}
                <Button
                  variant="primary"
                  size="md"
                  href={action.href}
                  className="w-full justify-center"
                >
                  {action.buttonText}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
