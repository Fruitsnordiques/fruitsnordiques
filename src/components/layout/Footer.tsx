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
 * Footer v4 — ultra-minimal Kainon
 * Espacement généreux, texte petit, ligne séparatrice subtile
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-fn-noir-profond border-t border-white/[0.04]"
      aria-label="Pied de page"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Colonne 1 : Marque */}
          <div className="flex flex-col gap-5">
            <span className="font-accent text-sm font-semibold text-fn-blanc tracking-[0.08em] uppercase">
              Fruits Nordiques
            </span>
            <p className="font-corps text-sm text-fn-gris leading-relaxed max-w-xs">
              Cultiver un futur durable en explorant les richesses botaniques
              des terres nordiques.
            </p>
            <p className="font-accent text-xs text-fn-gris-fonce">
              Propulsé par{' '}
              <span className="text-fn-teal font-medium">
                Kainon Technologies
              </span>
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <nav aria-label="Liens du pied de page">
            <h3 className="label-kainon mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-corps text-sm text-fn-gris hover:text-fn-blanc transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne 3 : Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="label-kainon">
              Contact
            </h3>
            <div className="font-corps text-sm text-fn-gris space-y-3">
              <p>
                <a
                  href="mailto:info@fruitsnordiques.com"
                  className="hover:text-fn-teal transition-colors duration-300"
                >
                  info@fruitsnordiques.com
                </a>
              </p>
              <p>Québec, Canada</p>
            </div>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-corps text-xs text-fn-gris-fonce">
            © {currentYear} Fruits Nordiques. Tous droits réservés.
          </p>
          <Link
            href="/politique-de-confidentialite"
            className="font-corps text-xs text-fn-gris-fonce hover:text-fn-gris transition-colors duration-300"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
