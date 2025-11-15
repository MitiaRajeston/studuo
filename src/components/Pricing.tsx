const rows = [
  {
    service: 'Création de site Web vitrine',
    delay: '5 - 10 jours',
    price: '300.000 Ar - 800.000 Ar',
  },
  {
    service: 'Application mobile simple',
    delay: '10 - 20 jours',
    price: '1.000.000 Ar - 2.000.000 Ar',
  },
  {
    service: 'Étude et conception BTP',
    delay: 'Selon projet',
    price: '100.000 Ar - 200.000 Ar',
  },
  {
    service: 'Pack événementiel complet',
    delay: 'Selon date',
    price: 'Sur devis',
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="mb-8 text-center text-3xl md:text-4xl font-bold text-[#0A2472]">
          Tarifs indicatifs
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#0A2472] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Service</th>
                <th className="px-4 py-3 font-semibold">Délai</th>
                <th className="px-4 py-3 font-semibold">Fourchette de prix</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.service}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#FFBA08]/10 transition-colors`}
                >
                  <td className="px-4 py-3">{row.service}</td>
                  <td className="px-4 py-3">{row.delay}</td>
                  <td className="px-4 py-3 font-semibold text-[#0A2472]">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
