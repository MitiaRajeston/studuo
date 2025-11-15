interface ServiceItem {
  icon: string;
  title: string;
  prestations: string[];
  price: string;
}

const services: ServiceItem[] = [
  {
    icon: '🖥️',
    title: 'Technologie',
    prestations: [
      'Création de sites Web (portfolio, vitrines, e-commerce)',
      'Automatisation des tâches',
      'Création d\'applications mobiles',
      'Montage de systèmes d\'information',
      'Configuration réseau',
      'Vente de logiciels et activation',
    ],
    price: '5.000 Ar - 2.000.000 Ar',
  },
  {
    icon: '🏗️',
    title: 'BTP',
    prestations: [
      'Conception de plans complets (2D, 3D, ferraillage, coffrage)',
      'Installation électrique et plomberie',
      'Rénovation',
      'Étude, conception et réalisation',
    ],
    price: '100.000 Ar - 200.000 Ar',
  },
  {
    icon: '🎨',
    title: 'Conception Graphisme',
    prestations: [
      'Création de visuels (flyers, logos, affiches, cartes de visite)',
      'Personnalisation graphique',
    ],
    price: 'Sur demande',
  },
  {
    icon: '🎉',
    title: 'Organisation Événementiel',
    prestations: [
      'Décoration',
      'Service traiteur (à partir de 25.000 Ar / personne)',
      'Animation DJ (à partir de 100.000 Ar)',
      'Shooting (à partir de 150.000 Ar)',
    ],
    price: 'Selon prestation',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#CDCDCD] py-16 md:py-24">
      <div className="section-container">
        <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-[#0A2472] animate-fadeInUp">
          Nos Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md transition-transform transition-shadow duration-300 hover:scale-105 hover:border hover:border-[#FFBA08] hover:shadow-2xl"
            >
              <div className="mb-3 text-4xl" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A2472]">{service.title}</h3>
              <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-[#1a1a1a]">
                {service.prestations.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-auto pt-2 text-sm font-semibold text-[#0A2472]">{service.price}</div>
              <button
                className="mt-4 w-full rounded-full bg-[#FFBA08] px-4 py-2 text-sm font-semibold text-[#0A2472] hover:bg-[#0A2472] hover:text-white transition-colors"
              >
                Demander un devis
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
