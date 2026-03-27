'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Navigation links structure
const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Le Projet', href: '/projet' },
  { label: 'Impact', href: '/impact' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Composant de navigation principal avec support du menu mobile
 * Gère la navigation responsive avec animation du menu hamburger
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

  // Variants pour l'animation Framer Motion du menu mobile
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <nav
      className="relative"
      aria-label="Navigation principale"
    >
      {/* Navigation Desktop */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-accent text-sm transition-colors duration-200 pb-1 border-b-2 ${
                isActive(link.href)
                  ? 'text-fn-soleil border-fn-soleil'
                  : 'text-fn-neige border-b-transparent hover:text-fn-soleil hover:border-fn-soleil'
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
        className="md:hidden p-2 -mr-2"
        onClick={toggleMenu}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-fn-neige" />
        ) : (
          <Menu className="w-6 h-6 text-fn-neige" />
        )}
      </button>

      {/* Menu Mobile Animé */}
      {isOpen && (
        <motion.div
          id="mobile-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute top-full left-0 right-0 mt-4 bg-fn-vert-profond rounded-lg shadow-lg md:hidden z-50"
        >
          <ul className="flex flex-col p-4 gap-2">
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
                  className={`font-accent text-sm block px-4 py-2 rounded-md transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'bg-fn-vert-vif text-fn-neige'
                      : 'text-fn-neige hover:bg-fn-vert-vif/50'
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
