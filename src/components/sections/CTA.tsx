'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/ui/Button';

/**
 * CTA — Section d'engagement finale
 * Fond noir profond, cartes élevées, boutons accent orange
 * Gradient subtle pour marquer la conclusion
 */

const actions = [
  {
    id: 'investir',
    icon: '💼',
    title: 'Investir',
    description: 'Contribuez au financement d\'une infrastructure alimentaire durable et rentable.',
    buttonText: 'Discuter d\'investissement',
    href: '/contact',
    accent: 'bg-fn-orange',
  },
  {
    id: 'partenariat',
    icon: '🤝',
    title: 'Devenir partenaire',
    description: 'Organismes, municipalités, entreprises : collaborons pour un impact concret.',
    buttonText: 'Proposer un partenariat',
    href: '/contact',
    accent: 'bg-fn-vert-vif',
  },
  {
    id: 'newsletter',
    icon: '📧',
    title: 'Rester informé',
    description: 'Recevez les nouvelles du projet et les jalons importants.',
    buttonText: 'S\'inscrire',
    href: '/contact',
    accent: 'bg-fn-bleu',
  },
];

function ActionCard({
  action,
  index,
}: {
  action: typeof actions[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

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
      <div className="h-full card-elevated p-6 lg:p-8 flex flex-col">
        {/* Barre accent */}
        <div className={`w-8 h-1 rounded-full ${action.accent} mb-5`} />

        {/* Emoji */}
        <div className="text-3xl md:text-4xl mb-4">{action.icon}</div>

        {/* Titre */}
        <h3 className="text-lg md:text-xl font-accent font-bold text-fn-blanc mb-3">
          {action.title}
        </h3>

        {/* Description */}
        <p className="text-sm font-corps text-fn-gris leading-relaxed flex-grow mb-6">
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
      </div>
    </motion.div>
  );
}

export default function CTA() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section
      id="agir"
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden bg-fn-noir-profond px-5 sm:px-8"
      aria-label="Appel à l'action — Engagez-vous"
    >
      {/* Gradient décoratif subtil */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, rgba(232, 134, 42, 0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold text-fn-blanc mb-5 leading-tight">
            Prêt à bâtir l'avenir
            <br />
            <span className="text-fn-orange">alimentaire du Québec ?</span>
          </h2>

          <p className="text-base md:text-lg font-corps text-fn-gris max-w-3xl mx-auto leading-relaxed">
            Que vous soyez investisseur, partenaire, organisme ou citoyen engagé —
            il y a une place pour vous dans ce projet.
          </p>
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {actions.map((action, index) => (
            <ActionCard key={action.id} action={action} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
