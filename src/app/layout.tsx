import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/* Chargement des polices Google */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

/* Métadonnées SEO globales */
export const metadata: Metadata = {
  title: {
    default: 'Fruits Nordiques — Nourrir le Nord. Ensemble.',
    template: '%s | Fruits Nordiques',
  },
  description:
    'Fruits Nordiques : une serre de production d\'un hectare à vocation sociale, éducative et alimentaire. Agriculture locale, résiliente et inclusive au Québec.',
  keywords: [
    'fruits nordiques',
    'serre québec',
    'agriculture locale',
    'sécurité alimentaire',
    'agriculture communautaire',
    'formation agricole',
    'Kainon Technologies',
  ],
  authors: [{ name: 'Fruits Nordiques' }],
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://fruitsnordiques.com',
    siteName: 'Fruits Nordiques',
    title: 'Fruits Nordiques — Nourrir le Nord. Ensemble.',
    description:
      'Une serre de production d\'un hectare à vocation sociale, éducative et alimentaire.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fruits Nordiques — Nourrir le Nord. Ensemble.',
    description:
      'Agriculture locale, résiliente et inclusive au Québec.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr-CA"
      className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}
    >
      <body className="bg-fn-cream text-fn-noir font-corps">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
