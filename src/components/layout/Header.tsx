'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';

/**
 * En-tête glassmorphique — flottant avec backdrop blur
 * Effet de transparence qui laisse voir le contenu derrière
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
      {/* Lien d'accessibilité pour sauter au contenu principal */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-fn-vert-vif focus:text-white"
      >
        Sauter au contenu principal
      </a>

      {/* En-tête glassmorphique flottant */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-fn-vert-profond/85 backdrop-blur-xl shadow-glass-lg'
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
