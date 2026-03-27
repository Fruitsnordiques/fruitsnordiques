'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';

/**
 * En-tête v5 — Neumorphique
 * Fond gris clair, ombre douce au scroll
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-fn-teal focus:text-white"
      >
        Sauter au contenu principal
      </a>

      {/* En-tête fixe */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-fn-fond/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
        style={isScrolled ? {
          boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.06), -4px -4px 8px rgba(255, 255, 255, 0.7)'
        } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="font-accent text-sm font-semibold text-fn-texte-titre tracking-[0.08em] uppercase">
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
