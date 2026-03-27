'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/ui/Button';

/**
 * CTA v5 — Neumorphique
 * 3 cartes d'action en relief, fond légèrement distinct
 */

const actions = [
  {
    id: 'investir',
    number: '01',
    title: 'Investir',
    description: "Contribuez au financement d'une infrastructure alimentaire durable et rentable.",
    buttonText: "Discuter d'investissement",
    href: '/contact',
    variant: 'primary' as const,
  },
  {
    id: 'partenariat',
    number: '02',
    title: 'Devenir partenaire',
    description: 'Organismes, municipalités, entreprises : collaborons pour un impact concret.',
    buttonText: 'Proposer un partenariat',
    href: '/contact',
    variant: 'outline' as const,
  },
  {
    id: 'newsletter',
    number: '03',
    title: 'Rester informé',
    description: 'Recevez les nouvelles du projet et les jalons importants.',
    buttonText: "S'inscrire",
    href: '/contact',
    variant: 'ghost' as const,
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
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
    >
      <div className="card-neu h-full flex flex-col">
        {/* Numéro */}
        <span className="font-titre text-3xl font-bold text-fn-teal/30 mb-6">
          {action.number}
        </span>

        {/* Titre */}
        <h3 className="font-accent font-semibold text-lg text-fn-texte-titre mb-3 tracking-wide">
          {action.title}
        </h3>

        {/* Description */}
        <p className="font-corps text-sm text-fn-texte-muted leading-relaxed flex-grow mb-8">
          {action.description}
        </p>

        {/* Bouton */}
        <Button
          variant={action.variant}
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
      className="relative w-full py-24 md:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 bg-fn-fond-clair"
      aria-label="Appel à l'action — Engagez-vous"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="label-neu block mb-5">Agir</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-titre font-bold text-fn-texte-titre mb-6 leading-[1.02]">
            Prêt à bâtir l'avenir
            <br />
            <span className="text-fn-teal">alimentaire du Québec ?</span>
          </h2>
          <p className="text-base md:text-lg font-corps text-fn-texte-sub max-w-2xl mx-auto leading-relaxed">
            Que vous soyez investisseur, partenaire, organisme ou citoyen engagé —
            il y a une place pour vous dans ce projet.
          </p>
        </motion.div>

        {/* Séparateur */}
        <div className="divider-neu mb-12 md:mb-16" />

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {actions.map((action, index) => (
            <ActionCard key={action.id} action={action} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
