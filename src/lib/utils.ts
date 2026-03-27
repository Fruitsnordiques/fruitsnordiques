// Fonctions utilitaires pour le projet Fruits Nordiques

/**
 * Fusionne les noms de classe et filtre les valeurs falsy
 * Utile pour combiner les classes CSS conditionnellement
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formate un numéro de téléphone canadien au format (XXX) XXX-XXXX
 * @param phone - Numéro de téléphone à formater (seulement chiffres)
 * @returns Numéro formaté ou chaîne vide si invalide
 */
export function formatPhoneNumber(phone: string): string {
  // Supprime tous les caractères non numériques
  const cleaned = phone.replace(/\D/g, '');

  // Vérifie que nous avons 10 chiffres
  if (cleaned.length !== 10) {
    return '';
  }

  // Formate au format (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : '';
}

/**
 * Effectue un défilement fluide vers une section spécifique de la page
 * @param id - L'ID de l'élément vers lequel défiler
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Valide une adresse courriel avec une expression régulière simple
 * @param email - Adresse courriel à valider
 * @returns true si l'email est valide, false sinon
 */
export function isValidEmail(email: string): boolean {
  // Expression régulière simple pour la validation d'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
