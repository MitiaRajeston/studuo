import React, { useState } from 'react';
import { contactInfo } from '../contactInfo';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Nom requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!formData.service) newErrors.service = 'Veuillez choisir un service';
    if (!formData.message.trim() || formData.message.trim().length < 10)
      newErrors.message = 'Message d\'au moins 10 caractères';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert('Message envoyé !');
    setFormData(initialForm);
  };

  const isInvalid = Object.keys(errors).length > 0;

  return (
    <section id="contact" className="bg-[#0A2472] py-16 md:py-24 text-white">
      <div className="section-container grid gap-10 md:grid-cols-2">
        {/* Formulaire */}
        <div>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">Contactez-nous</h2>
          <p className="mb-6 text-sm md:text-base opacity-90">
            Parlez-nous de votre projet, notre équipe vous répondra dans les meilleurs délais.
          </p>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="name">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent px-3 py-2 text-black focus:border-[#FFBA08] focus:outline-none"
              />
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-transparent px-3 py-2 text-black focus:border-[#FFBA08] focus:outline-none"
                />
                {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="phone">
                  Téléphone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-transparent px-3 py-2 text-black focus:border-[#FFBA08] focus:outline-none"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="service">
                Service demandé
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent px-3 py-2 text-black focus:border-[#FFBA08] focus:outline-none"
              >
                <option value="">Sélectionnez un service</option>
                <option value="technologie">Technologie</option>
                <option value="btp">BTP</option>
                <option value="graphisme">Conception Graphisme</option>
                <option value="evenementiel">Organisation Événementiel</option>
              </select>
              {errors.service && <p className="mt-1 text-xs text-red-300">{errors.service}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-transparent px-3 py-2 text-black focus:border-[#FFBA08] focus:outline-none resize-none"
              />
              {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isInvalid}
              className="mt-2 rounded-full bg-[#FFBA08] px-8 py-3 text-sm font-semibold text-[#0A2472] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Coordonnées */}
        <aside className="space-y-4">
          <h3 className="text-2xl font-semibold">Nos coordonnées</h3>
          <p className="text-sm md:text-base opacity-90">Vous pouvez aussi nous contacter directement :</p>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-semibold">Téléphone :</span>{' '}
              {contactInfo.phones.join(' / ')}
            </div>
            <div>
              <span className="font-semibold">Email :</span>{' '}
              <a href={`mailto:${contactInfo.email}`} className="underline">
                {contactInfo.email}
              </a>
            </div>
            <div>
              <span className="font-semibold">Localisation :</span> {contactInfo.location}
            </div>
          </div>
          <div className="pt-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide">Réseaux sociaux</h4>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-[#FFBA08] hover:text-[#0A2472] transition-colors"
              >
                Facebook
              </a>
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-[#FFBA08] hover:text-[#0A2472] transition-colors"
              >
                Instagram
              </a>
              <a
                href={contactInfo.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-[#FFBA08] hover:text-[#0A2472] transition-colors"
              >
                TikTok
              </a>
              <a
                href={contactInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 hover:bg-[#FFBA08] hover:text-[#0A2472] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
