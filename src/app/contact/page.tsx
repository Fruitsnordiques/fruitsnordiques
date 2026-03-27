'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

/**
 * Page Contact — Formulaire de contact avec sidebar d'informations
 * Note: Client component, donc metadata n'est pas disponible ici.
 * Pour ajouter metadata, créer un layout.tsx parent.
 */
export default function Contact() {
  // États du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    organisation: '',
    sujet: 'Information',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Gestion du changement des champs du formulaire
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Effacer l'erreur du champ en cours de modification
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Validation du formulaire
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Validation du nom
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis'
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide'
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simuler un délai d'envoi (pas de backend pour l'instant)
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Réinitialiser le formulaire et afficher le message de succès
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      nom: '',
      email: '',
      organisation: '',
      sujet: 'Information',
      message: '',
    })

    // Cacher le message de succès après 5 secondes
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  return (
    <>
      {/* Hero Banner — Petit, distinct de la page d'accueil */}
      <section
        className="w-full py-20 bg-fn-vert-profond text-fn-neige"
        aria-label="En-tête de la page Contact"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-titre font-bold mb-4 leading-tight">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-bleu-glace leading-relaxed">
            Nous sommes à l'écoute — parlez-nous de votre intérêt pour Fruits Nordiques
          </p>
        </div>
      </section>

      {/* Section Contact Principal */}
      <section
        className="w-full py-20 md:py-28 lg:py-32 bg-fn-neige"
        aria-label="Formulaire de contact et informations"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Colonne Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-titre font-bold text-fn-vert-profond mb-8 leading-tight">
                Envoyez-nous un message
              </h2>

              {/* Message de succès */}
              {isSuccess && (
                <div className="mb-8 p-6 bg-fn-vert-vif bg-opacity-10 border-l-4 border-fn-vert-vif rounded-lg">
                  <p className="font-corps text-fn-vert-profond font-semibold">
                    ✓ Merci ! Votre message a été envoyé avec succès.
                  </p>
                  <p className="font-corps text-fn-gris-moyen text-sm mt-2">
                    Nous vous répondrons dès que possible.
                  </p>
                </div>
              )}

              {/* Formulaire */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ Nom */}
                <div>
                  <label htmlFor="nom" className="block font-accent font-semibold text-fn-vert-profond mb-2">
                    Nom <span className="text-fn-rouge-baie">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-corps text-fn-gris-fonce focus:outline-none focus:ring-2 focus:ring-fn-vert-vif transition-all ${
                      errors.nom
                        ? 'border-fn-rouge-baie focus:ring-fn-rouge-baie'
                        : 'border-fn-gris-moyen focus:border-fn-vert-vif'
                    }`}
                    placeholder="Votre nom complet"
                    aria-invalid={!!errors.nom}
                  />
                  {errors.nom && (
                    <p className="mt-2 text-sm font-corps text-fn-rouge-baie">
                      {errors.nom}
                    </p>
                  )}
                </div>

                {/* Champ Email */}
                <div>
                  <label htmlFor="email" className="block font-accent font-semibold text-fn-vert-profond mb-2">
                    Email <span className="text-fn-rouge-baie">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-corps text-fn-gris-fonce focus:outline-none focus:ring-2 focus:ring-fn-vert-vif transition-all ${
                      errors.email
                        ? 'border-fn-rouge-baie focus:ring-fn-rouge-baie'
                        : 'border-fn-gris-moyen focus:border-fn-vert-vif'
                    }`}
                    placeholder="votre@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm font-corps text-fn-rouge-baie">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Champ Organisation (optionnel) */}
                <div>
                  <label htmlFor="organisation" className="block font-accent font-semibold text-fn-vert-profond mb-2">
                    Organisation <span className="text-fn-gris-moyen text-sm">(optionnel)</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-fn-gris-moyen font-corps text-fn-gris-fonce focus:outline-none focus:ring-2 focus:ring-fn-vert-vif focus:border-fn-vert-vif transition-all"
                    placeholder="Votre organisation ou entreprise"
                  />
                </div>

                {/* Champ Sujet */}
                <div>
                  <label htmlFor="sujet" className="block font-accent font-semibold text-fn-vert-profond mb-2">
                    Sujet <span className="text-fn-rouge-baie">*</span>
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-fn-gris-moyen font-corps text-fn-gris-fonce focus:outline-none focus:ring-2 focus:ring-fn-vert-vif focus:border-fn-vert-vif transition-all bg-fn-neige"
                  >
                    <option value="Information">Information générale</option>
                    <option value="Investissement">Investissement</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Formation">Formation</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                {/* Champ Message */}
                <div>
                  <label htmlFor="message" className="block font-accent font-semibold text-fn-vert-profond mb-2">
                    Message <span className="text-fn-rouge-baie">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border-2 font-corps text-fn-gris-fonce focus:outline-none focus:ring-2 focus:ring-fn-vert-vif transition-all resize-none ${
                      errors.message
                        ? 'border-fn-rouge-baie focus:ring-fn-rouge-baie'
                        : 'border-fn-gris-moyen focus:border-fn-vert-vif'
                    }`}
                    placeholder="Parlez-nous de votre intérêt ou de votre question..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm font-corps text-fn-rouge-baie">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Bouton Soumettre */}
                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                  <p className="text-sm font-corps text-fn-gris-moyen mt-4">
                    Les champs marqués d'un <span className="text-fn-rouge-baie">*</span> sont obligatoires.
                  </p>
                </div>
              </form>
            </div>

            {/* Colonne Informations de Contact */}
            <div className="lg:col-span-1">
              <div className="bg-fn-vert-profond text-fn-neige rounded-lg p-8 sticky top-8">
                <h3 className="text-2xl font-accent font-bold mb-8">
                  Informations de Contact
                </h3>

                {/* Email */}
                <div className="mb-8">
                  <p className="font-accent font-semibold mb-2 text-fn-bleu-glace">
                    Email
                  </p>
                  <a
                    href="mailto:info@fruitsnordiques.com"
                    className="font-corps text-fn-neige hover:text-fn-vert-clair transition-colors underline"
                  >
                    info@fruitsnordiques.com
                  </a>
                </div>

                {/* Localisation */}
                <div className="mb-8">
                  <p className="font-accent font-semibold mb-2 text-fn-bleu-glace">
                    Localisation
                  </p>
                  <p className="font-corps text-fn-neige leading-relaxed">
                    Québec, Canada
                  </p>
                </div>

                {/* Heures de disponibilité */}
                <div className="pt-8 border-t border-fn-vert-vif border-opacity-30">
                  <p className="font-accent font-semibold mb-3 text-fn-bleu-glace">
                    Disponibilité
                  </p>
                  <p className="font-corps text-fn-neige text-sm leading-relaxed">
                    Nous répondons aux messages du lundi au vendredi, de 9h à 17h (HE).
                  </p>
                </div>

                {/* Appel à l'action secondaire */}
                <div className="pt-8 border-t border-fn-vert-vif border-opacity-30 mt-8">
                  <p className="font-corps text-fn-bleu-glace text-sm mb-4">
                    Rejoignez notre communauté et restez informé de nos avancées.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full border-fn-neige text-fn-neige hover:bg-fn-neige hover:text-fn-vert-profond"
                  >
                    S'inscrire à la newsletter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Questions Fréquemment Posées */}
      <section
        className="w-full py-20 md:py-28 lg:py-32 bg-fn-vert-clair bg-opacity-5"
        aria-label="Questions fréquemment posées"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-titre font-bold text-fn-vert-profond mb-12 text-center leading-tight">
            Questions Fréquemment Posées
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <details className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-accent font-semibold text-fn-vert-profond cursor-pointer">
                Comment puis-je investir dans Fruits Nordiques ?
              </summary>
              <p className="font-corps text-fn-gris-moyen mt-4 leading-relaxed">
                Contactez-nous via le formulaire ci-dessus en sélectionnant « Investissement »
                comme sujet. Nous vous fournirons des informations détaillées sur les
                opportunités d'investissement, les structures de financement et les retours
                attendus.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-accent font-semibold text-fn-vert-profond cursor-pointer">
                Puis-je visiter la serre ?
              </summary>
              <p className="font-corps text-fn-gris-moyen mt-4 leading-relaxed">
                Nous organisons des visites guidées pour les partenaires, investisseurs et
                groupes intéressés. Contactez-nous pour organiser une visite.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-accent font-semibold text-fn-vert-profond cursor-pointer">
                Comment accéder aux parcelles communautaires ?
              </summary>
              <p className="font-corps text-fn-gris-moyen mt-4 leading-relaxed">
                Les parcelles communautaires seront ouvertes au lancement de la serre (2027).
                Pour exprimer votre intérêt, veuillez nous contacter dès maintenant.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-accent font-semibold text-fn-vert-profond cursor-pointer">
                Y a-t-il des formations disponibles ?
              </summary>
              <p className="font-corps text-fn-gris-moyen mt-4 leading-relaxed">
                Oui ! Notre programme de formation en agronomie et gestion de serre sera lancé
                en 2027. Des bourses sont disponibles pour les candidats admissibles. Contactez
                notre équipe pour plus d'informations.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-accent font-semibold text-fn-vert-profond cursor-pointer">
                Où acheter les produits de Fruits Nordiques ?
              </summary>
              <p className="font-corps text-fn-gris-moyen mt-4 leading-relaxed">
                Nos produits seront disponibles dans les épiceries locales, marchés fermiers,
                restaurants partenaires et via notre point de vente directe à partir de 2027.
                Restez à l'affût pour plus de détails.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
