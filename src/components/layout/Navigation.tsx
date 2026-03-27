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
 * Navigation — style éditorial mate
 * Typographie lowercase, accents orange
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
                  ? 'text-fn-orange border-fn-orange'
                  : 'text-white/80 border-b-transparent hover:text-fn-orange hover:border-fn-orange'
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
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
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
          className="fixed top-[72px] left-0 right-0 bg-fn-vert-profond/98 shadow-matte-lg md:hidden z-50"
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
                  className={`font-accent text-sm block px-4 py-2 rounded-xl transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'bg-fn-vert-moyen text-white'
                      : 'text-white/80 hover:bg-fn-vert-moyen/50'
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
