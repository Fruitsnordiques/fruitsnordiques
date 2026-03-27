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
 * Pied de page — surface la plus sombre, bordure supérieure subtile
 * Style dashboard professionnel
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-fn-noir-profond border-t border-fn-gris-bordure/40 text-fn-gris-clair"
      aria-label="Pied de page"
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Colonne 1 : Marque */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fn-vert-vif" />
              <span className="font-accent text-2xl font-bold text-fn-blanc tracking-tight">
                Fruits Nordiques
              </span>
            </div>
            <p className="font-corps text-sm text-fn-gris leading-relaxed max-w-xs">
              Cultiver un futur durable en explorant les richesses botaniques
              des terres nordiques.
            </p>
            <p className="font-accent text-xs text-fn-gris-fonce">
              Propulsé par{' '}
              <span className="text-fn-orange font-semibold">
                Kainon Technologies
              </span>
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <nav aria-label="Liens du pied de page">
            <h3 className="font-accent font-semibold text-xs text-fn-gris-fonce tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-corps text-sm text-fn-gris hover:text-fn-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne 3 : Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-accent font-semibold text-xs text-fn-gris-fonce tracking-wider uppercase">
              Contact
            </h3>
            <div className="font-corps text-sm text-fn-gris space-y-2.5">
              <p>
                <a
                  href="mailto:info@fruitsnordiques.com"
                  className="hover:text-fn-orange transition-colors duration-200"
                >
                  info@fruitsnordiques.com
                </a>
              </p>
              <p>Québec, Canada</p>
            </div>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="border-t border-fn-gris-bordure/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-corps text-xs text-fn-gris-fonce">
            © {currentYear} Fruits Nordiques. Tous droits réservés.
          </p>
          <Link
            href="/politique-de-confidentialite"
            className="font-corps text-xs text-fn-gris-fonce hover:text-fn-orange transition-colors duration-200"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
