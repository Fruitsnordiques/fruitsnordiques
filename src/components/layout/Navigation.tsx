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
 * Navigation v5 — Neumorphique
 * Boutons avec ombres douces, texte sombre sur fond clair
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
                    ? 'text-fn-teal-fonce font-semibold'
                    : 'text-fn-texte-muted hover:text-fn-texte-titre'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton Contact — neumorphique */}
        <Link
          href="/contact"
          className="btn-neu px-5 py-2 text-[13px] font-accent tracking-wide text-fn-texte-sub hover:text-fn-teal-fonce transition-all duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Bouton Menu Mobile */}
      <button
        className="md:hidden p-2 -mr-2 text-fn-texte-sub hover:text-fn-texte-titre transition-colors"
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
          className="fixed top-[72px] left-0 right-0 bg-fn-fond/98 backdrop-blur-md md:hidden z-50"
          style={{
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)'
          }}
        >
          <ul className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-accent text-sm block px-4 py-3 rounded-xl transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-fn-teal-fonce font-semibold'
                      : 'text-fn-texte-sub hover:text-fn-texte-titre'
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
                className="font-accent text-sm block px-4 py-3 text-fn-teal-fonce font-medium"
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
