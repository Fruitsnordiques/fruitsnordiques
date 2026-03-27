'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';

/**
 * En-tête v4 — ultra-minimal Kainon
 * Fond transparent → fond noir au scroll, bordure quasi invisible
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-fn-teal focus:text-fn-noir-profond"
      >
        Sauter au contenu principal
      </a>

      {/* En-tête fixe */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-fn-noir-profond/95 backdrop-blur-md border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-5">
          <div className="flex items-center justify-between">
            {/* Logo — typographie simple */}
            <div className="flex-shrink-0">
              <span className="font-accent text-sm font-semibold text-fn-blanc tracking-[0.08em] uppercase">
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
