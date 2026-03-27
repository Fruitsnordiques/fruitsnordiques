'use client'

import React, { useState } from 'react'
import Button from '@/components/ui/Button'

/**
 * Page Contact v4 — Style Kainon
 * Formulaire sur fond dark, sidebar info en carte accent
 */
export default function Contact() {
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse email valide'
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ nom: '', email: '', organisation: '', sujet: 'Information', message: '' })
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3 rounded-xl bg-fn-noir-carte border font-corps text-fn-blanc text-sm focus:outline-none focus:ring-1 focus:ring-fn-teal transition-all ${
      errors[fieldName]
        ? 'border-fn-rouge focus:ring-fn-rouge'
        : 'border-white/[0.06] focus:border-fn-teal/40'
    }`

  return (
    <>
      {/* Hero Banner */}
      <section
        className="w-full pt-32 pb-20 bg-fn-noir-profond"
        aria-label="En-tête de la page Contact"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <span className="label-kainon text-fn-teal block mb-5">Contact</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-titre font-bold text-fn-gris-clair mb-6 leading-[1.02]">
            Contactez-nous
          </h1>
          <p className="text-lg md:text-xl font-corps text-fn-gris leading-relaxed max-w-2xl">
            Nous sommes à l'écoute — parlez-nous de votre intérêt
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section
        className="w-full py-24 md:py-32 lg:py-40 bg-fn-noir"
        aria-label="Formulaire de contact et informations"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-titre font-bold text-fn-gris-clair mb-10 leading-tight">
                Envoyez-nous un message
              </h2>

              {isSuccess && (
                <div className="mb-8 p-6 rounded-xl bg-fn-teal/10 border border-fn-teal/20">
                  <p className="font-accent font-semibold text-fn-teal text-sm">
                    Merci ! Votre message a été envoyé avec succès.
                  </p>
                  <p className="font-corps text-fn-gris text-sm mt-1">
                    Nous vous répondrons dès que possible.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block label-kainon mb-3">
                    Nom <span className="text-fn-rouge">*</span>
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className={inputClasses('nom')}
                    placeholder="Votre nom complet"
                    aria-invalid={!!errors.nom}
                  />
                  {errors.nom && (
                    <p className="mt-2 text-xs font-corps text-fn-rouge">{errors.nom}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block label-kainon mb-3">
                    Email <span className="text-fn-rouge">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputClasses('email')}
                    placeholder="votre@email.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs font-corps text-fn-rouge">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="organisation" className="block label-kainon mb-3">
                    Organisation <span className="text-fn-gris-fonce text-[10px]">(optionnel)</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    className={inputClasses('organisation')}
                    placeholder="Votre organisation ou entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block label-kainon mb-3">
                    Sujet <span className="text-fn-rouge">*</span>
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className={`${inputClasses('sujet')} bg-fn-noir-carte`}
                  >
                    <option value="Information">Information générale</option>
                    <option value="Investissement">Investissement</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Formation">Formation</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block label-kainon mb-3">
                    Message <span className="text-fn-rouge">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`${inputClasses('message')} resize-none`}
                    placeholder="Parlez-nous de votre intérêt ou de votre question..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs font-corps text-fn-rouge">{errors.message}</p>
                  )}
                </div>

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
                  <p className="text-xs font-corps text-fn-gris-fonce mt-4">
                    Les champs marqués d'un <span className="text-fn-rouge">*</span> sont obligatoires.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-kainon-accent p-8 sticky top-28">
                <h3 className="font-accent font-semibold text-base text-fn-blanc mb-8 tracking-wide">
                  Informations
                </h3>

                <div className="mb-8">
                  <span className="label-kainon text-fn-teal block mb-2">Email</span>
                  <a
                    href="mailto:info@fruitsnordiques.com"
                    className="font-corps text-sm text-fn-gris-clair hover:text-fn-teal transition-colors"
                  >
                    info@fruitsnordiques.com
                  </a>
                </div>

                <div className="mb-8">
                  <span className="label-kainon text-fn-teal block mb-2">Localisation</span>
                  <p className="font-corps text-sm text-fn-gris-clair">
                    Québec, Canada
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-8">
                  <span className="label-kainon text-fn-teal block mb-3">Disponibilité</span>
                  <p className="font-corps text-sm text-fn-gris leading-relaxed">
                    Nous répondons aux messages du lundi au vendredi, de 9h à 17h (HE).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="w-full py-24 md:py-32 lg:py-40 bg-fn-noir-profond"
        aria-label="Questions fréquemment posées"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14">
          <h2 className="text-4xl md:text-5xl font-titre font-bold text-fn-gris-clair mb-12 leading-[1.02]">
            Questions <span className="text-fn-teal">fréquentes</span>
          </h2>

          <div className="space-y-4">
            {[
              { q: 'Comment puis-je investir dans Fruits Nordiques ?', a: "Contactez-nous via le formulaire ci-dessus en sélectionnant « Investissement » comme sujet. Nous vous fournirons des informations détaillées." },
              { q: 'Puis-je visiter la serre ?', a: "Nous organisons des visites guidées pour les partenaires, investisseurs et groupes intéressés. Contactez-nous pour organiser une visite." },
              { q: 'Comment accéder aux parcelles communautaires ?', a: "Les parcelles communautaires seront ouvertes au lancement de la serre (2027). Pour exprimer votre intérêt, veuillez nous contacter dès maintenant." },
              { q: 'Y a-t-il des formations disponibles ?', a: "Oui ! Notre programme de formation en agronomie et gestion de serre sera lancé en 2027. Des bourses sont disponibles pour les candidats admissibles." },
              { q: 'Où acheter les produits de Fruits Nordiques ?', a: "Nos produits seront disponibles dans les épiceries locales, marchés fermiers, restaurants partenaires et via notre point de vente directe à partir de 2027." },
            ].map((faq, i) => (
              <details key={i} className="card-kainon p-6 group">
                <summary className="font-accent font-semibold text-sm text-fn-blanc cursor-pointer tracking-wide">
                  {faq.q}
                </summary>
                <p className="font-corps text-sm text-fn-gris mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
