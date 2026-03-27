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
  { label: 'Contact', href: '/contact' },
];

/**
 * Navigation — style dashboard dark
 * Accents orange sur actif, transitions rapides, menu mobile sombre
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

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.04 },
    }),
  };

  return (
    <nav
      className="relative"
      aria-label="Navigation principale"
    >
      {/* Navigation Desktop */}
      <ul className="hidden md:flex gap-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-accent text-sm px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-fn-orange bg-fn-orange/10'
                  : 'text-fn-gris-clair hover:text-fn-blanc hover:bg-fn-blanc/5'
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

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
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-[64px] left-0 right-0 bg-fn-noir/98 border-b border-fn-gris-bordure/50 shadow-dark-lg md:hidden z-50"
        >
          <ul className="flex flex-col p-3 gap-1">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`font-accent text-sm block px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-fn-orange/10 text-fn-orange'
                      : 'text-fn-gris-clair hover:bg-fn-noir-eleve hover:text-fn-blanc'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
