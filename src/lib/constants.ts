// Configuration et constantes du site Fruits Nordiques

// Configuration générale du site
export const SITE_CONFIG = {
  name: 'Fruits Nordiques',
  url: 'https://fruitsnordiques.com',
  description: 'Une serre communautaire innovante au Québec dédiée à la production alimentaire, l\'agriculture communautaire, la cuisine et la formation',
  locale: 'fr-CA',
} as const;

// Liens de navigation principaux
export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Le Projet', href: '/projet' },
  { label: 'Impact', href: '/impact' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Contact', href: '/contact' },
] as const;

// Statistiques clés du projet
export const STATS = [
  {
    value: '1 hectare',
    label: 'Surface de production',
    description: 'Superficie totale dédiée à la production agricole',
  },
  {
    value: '4 vocations',
    label: 'Production, communauté, cuisine, formation',
    description: 'Quatre piliers fondamentaux du projet',
  },
  {
    value: '12 mois',
    label: 'Production à l\'année',
    description: 'Capacité de production continue toute l\'année',
  },
  {
    value: '100+',
    label: 'Emplois directs visés',
    description: 'Objectif d\'emplois directs à créer',
  },
] as const;

// Phases de développement du projet
export const ROADMAP_PHASES = [
  {
    phase: 0,
    title: 'Fondation',
    period: '2025-2026',
    description: 'Mise en place des structures, acquisition des terrains, construction de la serre et planification des opérations initiales.',
  },
  {
    phase: 1,
    title: 'Lancement opérationnel',
    period: '2026-2027',
    description: 'Démarrage de la production, mise en œuvre des programmes de formation et création des premiers emplois directs.',
  },
  {
    phase: 2,
    title: 'Expansion et consolidation',
    period: '2027-2029',
    description: 'Augmentation de la capacité de production, élargissement des programmes communautaires et renforcement des partenariats.',
  },
  {
    phase: 3,
    title: 'Intégration cuisinière',
    period: '2029-2030',
    description: 'Mise en place complète des cuisines de transformation, développement des marques propriétaires et élargissement du marché de distribution.',
  },
  {
    phase: 4,
    title: 'Réplication',
    period: '2030+',
    description: 'Modèle proven, potentiel de réplication dans d\'autres régions du Québec et du Canada.',
  },
] as const;

// Données d\'impact du projet
export const IMPACT_DATA = {
  economique: [
    'Création de 100+ emplois directs',
    'Augmentation de la productivité agricole locale',
    'Développement d\'une économie verte durable',
    'Réduction des coûts de transport et de distribution',
    'Diversification des revenus agricoles',
  ],
  ecologique: [
    'Réduction des émissions de carbone liées aux transports',
    'Production agroécologique et durable',
    'Préservation des terres agricoles',
    'Amélioration de la biodiversité locale',
    'Efficacité énergétique en serre',
  ],
  social: [
    'Renforcement de la cohésion communautaire',
    'Accès amélioré aux aliments frais et nutritifs',
    'Programmes de formation et d\'insertion professionnelle',
    'Engagement des jeunes dans l\'agriculture',
    'Promotion de l\'agriculture urbaine et périurbaine',
  ],
} as const;

// Les quatre vocations du projet
export const VOCATIONS = [
  {
    title: 'Production alimentaire',
    description: 'Cultiver des fruits, légumes et herbes aromatiques frais toute l\'année dans un environnement contrôlé et optimisé.',
    icon: '🥬',
  },
  {
    title: 'Agriculture communautaire',
    description: 'Impliquer les résidents locaux dans les activités agricoles et créer un lien direct entre producteurs et consommateurs.',
    icon: '👥',
  },
  {
    title: 'Cuisine et transformation',
    description: 'Transformer les produits frais en mets cuisinés, conserves et produits à valeur ajoutée pour la vente au détail.',
    icon: '👨‍🍳',
  },
  {
    title: 'Formation et insertion',
    description: 'Offrir des programmes de formation en agriculture, entrepreneuriat et compétences professionnelles pour l\'insertion emploi.',
    icon: '📚',
  },
] as const;
