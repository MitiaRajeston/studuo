const values = [
  {
    icon: '🏆',
    title: 'Professionnalisme',
    description: 'Rigueur et qualité dans chaque réalisation',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Des solutions créatives et adaptées à vos besoins',
  },
  {
    icon: '⭐',
    title: 'Excellence',
    description: 'Une exigence élevée à chaque étape de nos projets',
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2472] mb-6 animate-fadeInUp">
          À Propos d&apos;InnoVision
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-[#1a1a1a] mb-12 animate-fadeInUp">
          InnoVision est une entreprise multisectorielle basée à Madagascar, dédiée à l&apos;innovation, au
          professionnalisme et à l&apos;excellence dans tous ses domaines d&apos;intervention.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-xl border border-transparent bg-white p-6 shadow-md transition-transform transition-shadow duration-300 hover:scale-105 hover:border-[#FFBA08] hover:shadow-2xl"
            >
              <div className="mb-3 text-4xl" aria-hidden="true">
                {value.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0A2472]">{value.title}</h3>
              <p className="text-sm text-[#1a1a1a] opacity-90">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
