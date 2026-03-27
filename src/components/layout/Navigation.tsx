'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Le Projet', href: '/projet' },
  { label: 'Impact', href: '/impact' },
  { label: 'Roadmap', href: '/roadmap' },
];

/**
 * Navigation v4 — style Kainon
 * Liens discrets, bouton Contact avec bordure capsule
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === '/' && pathname === '/') return true;
    return href !== '/' && pathname.startsWith(href);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="relative"
      aria-label="Navigation principale"
    >
      {/* Navigation Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-accent text-[13px] tracking-wide transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-fn-blanc'
                    : 'text-fn-gris hover:text-fn-blanc'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Contact — capsule bordée */}
        <Link
          href="/contact"
          className="btn-capsule border border-fn-gris-bordure-hover text-fn-gris-clair px-5 py-2 text-[13px] font-accent tracking-wide hover:text-fn-blanc hover:border-fn-gris transition-all duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Bouton Menu Mobile */}
      <button
        className="md:hidden p-2 -mr-2 text-fn-gris-clair hover:text-fn-blanc transition-colors"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed top-[72px] left-0 right-0 bg-fn-noir-profond/98 backdrop-blur-md border-b border-white/[0.04] md:hidden z-50"
        >
          <ul className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-accent text-sm block px-4 py-3 rounded-xl transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-fn-blanc'
                      : 'text-fn-gris hover:text-fn-blanc'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="font-accent text-sm block px-4 py-3 text-fn-teal"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
