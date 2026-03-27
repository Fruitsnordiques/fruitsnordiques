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
 * Pied de page — surface vert forêt mate
 * Typographie éditoriale douce, accents orange
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-fn-vert-profond text-white overflow-hidden"
      aria-label="Pied de page"
    >
      {/* Prop décoratif subtil */}
      <div className="absolute top-8 right-12 w-16 h-10 bg-fn-orange/6 prop-capsule" style={{ borderRadius: '50%' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Colonne 1 : Marque */}
          <div className="flex flex-col gap-5">
            <span className="font-titre text-3xl text-white tracking-tight">
              Fruits Nordiques
            </span>
            <p className="font-corps text-sm text-white/55 leading-relaxed max-w-xs">
              Cultiver un futur durable en explorant les richesses botaniques
              des terres nordiques.
            </p>
            <p className="font-accent text-xs text-white/40">
              Un projet propulsé par{' '}
              <span className="text-fn-orange font-semibold">
                Kainon Technologies
              </span>
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <nav aria-label="Liens du pied de page">
            <h3 className="font-accent font-semibold text-sm text-white/35 tracking-wider mb-5">
              navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-corps text-sm text-white/55 hover:text-fn-orange transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colonne 3 : Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="font-accent font-semibold text-sm text-white/35 tracking-wider">
              nous contacter
            </h3>
            <div className="font-corps text-sm text-white/55 space-y-3">
              <p>
                <a
                  href="mailto:info@fruitsnordiques.com"
                  className="hover:text-fn-orange transition-colors duration-300"
                >
                  info@fruitsnordiques.com
                </a>
              </p>
              <p>Québec, Canada</p>
            </div>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-corps text-xs text-white/35">
            © {currentYear} Fruits Nordiques. Tous droits réservés.
          </p>
          <Link
            href="/politique-de-confidentialite"
            className="font-corps text-xs text-white/35 hover:text-fn-orange transition-colors duration-300"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
