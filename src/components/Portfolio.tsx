const projects = [
  { title: 'Projet Web', image: '/images/teste.png' },
  { title: 'Application Mobile', image: '/images/teste.png' },
  { title: 'Projet BTP', image: '/images/teste.png' },
  { title: 'Identité visuelle', image: '/images/teste.png' },
  { title: 'Événement Corporate', image: '/images/teste.png' },
  { title: 'Projet sur mesure', image: '/images/teste.png' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#CDCDCD] py-16 md:py-24">
      <div className="section-container">
        <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-[#0A2472]">Réalisations & Projets</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group relative overflow-hidden rounded-xl bg-white shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#0A2472]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="px-4 text-center text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
