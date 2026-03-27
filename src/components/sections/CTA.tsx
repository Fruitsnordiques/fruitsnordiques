'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/ui/Button';

/**
 * CTA — Section d'engagement final
 * Trois cartes glassmorphiques blanches sur fond vert profond
 * Effet de profondeur avec capsules flottantes
 */

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

function ActionCard({
  action,
  index,
}: {
  action: typeof actions[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
    >
      <div className="h-full bg-white/95 backdrop-blur-xl rounded-4xl p-8 lg:p-10 flex flex-col shadow-glass-xl hover:translate-y-[-8px] hover:shadow-[0_32px_72px_rgba(0,0,0,0.2)] transition-all duration-500">
        {/* Emoji */}
        <div className="text-5xl md:text-6xl mb-6">{action.icon}</div>

        {/* Titre */}
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
      </div>
    </motion.div>
  );
}

export default function CTA() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section
      id="agir"
      className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden"
      aria-label="Appel à l'action — Engagez-vous"
    >
      {/* Fond vert profond */}
      <div className="absolute inset-0 bg-gradient-to-br from-fn-vert-profond via-[#1A4A30] to-fn-vert-profond" />

      {/* Éléments flottants décoratifs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[12%] right-[10%] w-28 h-28 rounded-full bg-fn-soleil/10 border border-fn-soleil/15"
          animate={{ y: [0, -16, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[18%] left-[8%] w-20 h-20 rounded-full bg-white/[0.06] border border-white/10"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-[45%] left-[20%] w-10 h-10 rounded-full bg-fn-vert-clair/10 border border-fn-vert-clair/15"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-fn-vert-clair/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-fn-soleil/5 blur-3xl" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-titre font-bold text-white mb-6 leading-tight">
            Prêt à bâtir l'avenir
            <br />
            <span className="text-fn-soleil">alimentaire du Québec ?</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl font-corps text-white/75 max-w-3xl mx-auto leading-relaxed">
            Que vous soyez investisseur, partenaire, organisme ou citoyen engagé —
            il y a une place pour vous dans ce projet.
          </p>
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {actions.map((action, index) => (
            <ActionCard key={action.id} action={action} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
