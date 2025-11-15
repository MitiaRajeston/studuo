const Hero = () => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-[#0A2472] via-[#0A2472] to-[#FFBA08] flex flex-col items-center justify-center text-white px-4 pt-24"
    >
      <div className="section-container flex flex-col items-center text-center gap-6 animate-fadeInUp">
        <div className="mb-4">
          <img
            src="/logo.svg"
            alt="Logo InnoVision"
            className="mx-auto h-24 w-24 md:h-32 md:w-32 object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Innovons – Créons - Construisons
        </h1>

        <p className="max-w-3xl text-sm md:text-lg opacity-90">
          Nous sommes une entreprise dynamique, présente dans plusieurs secteurs d&apos;activité, qui se distingue par
          son professionnalisme, son engagement envers l&apos;innovation et sa volonté constante de répondre aux
          besoins de ses clients avec efficacité et excellence.
        </p>

        <button
          onClick={scrollToServices}
          className="mt-4 rounded-full bg-[#FFBA08] px-8 py-3 text-sm md:text-base font-semibold text-[#0A2472] shadow-lg transition-transform transition-colors duration-300 hover:scale-105 hover:bg-white"
        >
          Découvrir nos services
        </button>
      </div>
    </section>
  );
};

export default Hero;
