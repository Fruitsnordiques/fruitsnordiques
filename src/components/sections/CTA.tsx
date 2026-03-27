'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/ui/Button';

/**
 * CTA — Section d'engagement final
 * Cartes mates blanches sur fond vert forêt profond
 * Props physiques décoratifs, boutons capsule orange
 */

const actions = [
  {
    id: 'investir',
    icon: '💼',
    title: 'Investir',
    description: 'Contribuez au financement d\'une infrastructure alimentaire durable et rentable.',
    buttonText: 'discuter d\'investissement',
    href: '/contact',
  },
  {
    id: 'partenariat',
    icon: '🤝',
    title: 'Devenir partenaire',
    description: 'Organismes, municipalités, entreprises : collaborons pour un impact concret.',
    buttonText: 'proposer un partenariat',
    href: '/contact',
  },
  {
    id: 'newsletter',
    icon: '📧',
    title: 'Rester informé',
    description: 'Recevez les nouvelles du projet et les jalons importants.',
    buttonText: 's\'inscrire',
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
      initial={{ opacity: 0, y: 32, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.12,
      }}
    >
      <div className="h-full bg-white rounded-5xl p-8 lg:p-10 flex flex-col shadow-matte-xl hover:shadow-[0_32px_72px_rgba(0,0,0,0.18)] hover:translate-y-[-6px] transition-all duration-500">
        {/* Emoji */}
        <div className="text-5xl md:text-6xl mb-6">{action.icon}</div>

        {/* Titre */}
        <h3 className="text-2xl md:text-3xl font-accent font-bold text-fn-vert-profond mb-4">
          {action.title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg font-corps text-fn-gris-chaud leading-relaxed flex-grow mb-8">
          {action.description}
        </p>

        {/* Bouton capsule orange */}
        <Button
          variant="accent"
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
      {/* Fond vert forêt profond mate */}
      <div className="absolute inset-0 bg-gradient-to-br from-fn-vert-profond via-fn-vert-foret to-fn-vert-profond" />

      {/* Props décoratifs physiques */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[14%] right-[10%] w-20 h-12 bg-fn-orange/15 prop-capsule"
          style={{ borderRadius: '50%' }}
          animate={{ y: [0, -10, 0], rotate: [8, 12, 8] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[8%] w-14 h-14 bg-white/[0.06] prop-oval"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-[48%] left-[18%] w-8 h-5 bg-fn-cream/8 prop-capsule"
          style={{ borderRadius: '50%' }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
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
            <span className="text-fn-orange">alimentaire du Québec ?</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl font-corps text-white/65 max-w-3xl mx-auto leading-relaxed">
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
