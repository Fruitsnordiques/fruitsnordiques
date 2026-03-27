'use client';

import Link from 'next/link';

// Navigation links pour le pied de page
const footerNavLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Le Projet', href: '/projet' },
  { label: 'Impact', href: '/impact' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Pied de page avec structure à trois colonnes (bureau) et empilée (mobile)
 * Contient les informations de la marque, les liens de navigation et les coordonnées
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-fn-vert-profond text-fn-neige"
      aria-label="Pied de page"
    >
      {/* Contenu principal du pied de page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1: Marque et Mission */}
          <div className="flex flex-col gap-4">
            <h2 className="font-titre text-2xl text-fn-neige">
              Fruits Nordiques
            </h2>
            <p className="font-corps text-sm text-fn-neige/80 leading-relaxed">
              Cultiver un futur durable en explorant les richesses botaniques
              des terres nordiques.
            </p>
            <p className="font-accent text-xs text-fn-neige/70">
              Un projet propulsé par{' '}
              <span className="text-fn-soleil font-semibold">
                Kainon Technologies
              </span>
            </p>
          </div>

          {/* Colonne 2: Liens de Navigation */}
          <nav aria-label="Liens du pied de page">
            <h3 className="font-titre text-lg text-fn-neige mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-corps text-sm text-fn-neige/80 hover:text-fn-soleil transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne 3: Informations de Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-titre text-lg text-fn-neige">
              Nous contacter
            </h3>
            <div className="font-corps text-sm text-fn-neige/80 space-y-2">
              <p>
                <span className="text-fn-soleil font-semibold">Email:</span>
                <br />
                <a
                  href="mailto:info@fruitsnordiques.com"
                  className="hover:text-fn-soleil transition-colors duration-200"
                >
                  info@fruitsnordiques.com
                </a>
              </p>
              <p>
                <span className="text-fn-soleil font-semibold">Localisation:</span>
                <br />
                Québec, Canada
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-fn-neige/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-corps text-xs text-fn-neige/70">
            © {currentYear} Fruits Nordiques. Tous droits réservés.
          </p>

          {/* Lien Politique de Confidentialité */}
          <Link
            href="/politique-de-confidentialite"
            className="font-corps text-xs text-fn-neige/70 hover:text-fn-soleil transition-colors duration-200"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
