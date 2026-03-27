'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';

/**
 * En-tête collant avec détection du défilement
 * Affiche le logo et la navigation principale
 * Ajoute une ombre subtile lors du défilement
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecte le défilement et met à jour l'état
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Lien d'accessibilité pour sauter au contenu principal */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-fn-vert-vif focus:text-fn-neige"
      >
        Sauter au contenu principal
      </a>

      {/* En-tête collant */}
      <header
        className={`sticky top-0 z-40 bg-fn-vert-profond transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="font-titre text-2xl sm:text-3xl text-fn-neige">
                Fruits Nordiques
              </h1>
            </div>

            {/* Navigation */}
            <Navigation />
          </div>
        </div>
      </header>

    </>
  );
}
