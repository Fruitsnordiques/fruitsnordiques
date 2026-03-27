'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';

/**
 * En-tête éditorial — mate, flottant sur fond crème ou vert
 * Transition douce au scroll, pas de glassmorphisme
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-fn-vert-moyen focus:text-white"
      >
        Sauter au contenu principal
      </a>

      {/* En-tête flottant mate */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-fn-vert-profond/95 shadow-matte-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="font-titre text-2xl sm:text-3xl text-white tracking-tight">
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
