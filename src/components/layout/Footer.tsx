'use client';

import Link from 'next/link';

const footerNavLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Le Projet', href: '/projet' },
  { label: 'Impact', href: '/impact' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Footer v5 — Neumorphique
 * Fond gris clair, séparation douce, labels accent
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-fn-fond"
      aria-label="Pied de page"
    >
      {/* Séparateur neumorphique */}
      <div className="divider-neu" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Colonne 1 : Marque */}
          <div className="flex flex-col gap-5">
            <span className="font-accent text-sm font-semibold text-fn-texte-titre tracking-[0.08em] uppercase">
              Fruits Nordiques
            </span>
            <p className="font-corps text-sm text-fn-texte-muted leading-relaxed max-w-xs">
              Cultiver un futur durable en explorant les richesses botaniques
              des terres nordiques.
            </p>
            <p className="font-accent text-xs text-fn-texte-light">
              Propulsé par{' '}
              <span className="text-fn-teal-fonce font-medium">
                Kainon Technologies
              </span>
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <nav aria-label="Liens du pied de page">
            <h3 className="label-neu mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-corps text-sm text-fn-texte-muted hover:text-fn-teal-fonce transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne 3 : Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="label-neu">
              Contact
            </h3>
            <div className="font-corps text-sm text-fn-texte-muted space-y-3">
              <p>
                <a
                  href="mailto:info@fruitsnordiques.com"
                  className="hover:text-fn-teal-fonce transition-colors duration-300"
                >
                  info@fruitsnordiques.com
                </a>
              </p>
              <p>Québec, Canada</p>
            </div>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="divider-neu mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-corps text-xs text-fn-texte-light">
            © {currentYear} Fruits Nordiques. Tous droits réservés.
          </p>
          <Link
            href="/politique-de-confidentialite"
            className="font-corps text-xs text-fn-texte-light hover:text-fn-texte-muted transition-colors duration-300"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
