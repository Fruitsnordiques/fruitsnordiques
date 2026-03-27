'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';

/**
 * En-tête dashboard — barre sombre, transition au scroll
 * Fond charcoal avec bordure subtile quand scrollé
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Lien d'accessibilité */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-fn-orange focus:text-white"
      >
        Sauter au contenu principal
      </a>

      {/* En-tête fixe dark */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-fn-noir/95 border-b border-fn-gris-bordure/50 shadow-dark-md backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Indicateur de statut */}
              <span className="w-2 h-2 rounded-full bg-fn-vert-vif animate-pulse-soft" />
              <span className="font-accent text-xl sm:text-2xl font-bold text-fn-blanc tracking-tight">
                Fruits Nordiques
              </span>
            </div>

            {/* Navigation */}
            <Navigation />
          </div>
        </div>
      </header>
    </>
  );
}
