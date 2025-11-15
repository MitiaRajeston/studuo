import { useEffect, useState } from 'react';

interface NavItem {
  label: string;
  target: string;
}

const navItems: NavItem[] = [
  { label: 'À propos', target: 'about' },
  { label: 'Services', target: 'services' },
  { label: 'Tarifs', target: 'pricing' },
  { label: 'Portfolio', target: 'portfolio' },
  { label: 'Contact', target: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#0A2472] shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20 text-white">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl md:text-2xl font-extrabold tracking-tight hover:text-[#FFBA08] transition-colors"
          aria-label="Retour en haut de la page"
        >
          InnoVision
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="hover:text-[#FFBA08] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-4 rounded-full bg-[#FFBA08] px-5 py-2 text-[#0A2472] font-semibold text-sm hover:bg-white hover:text-[#0A2472] transition-colors shadow-md"
          >
            Contact
          </button>
        </div>

        {/* Menu mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-[#FFBA08] focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setIsMobileOpen((o) => !o)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${isMobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
          </div>
        </button>
      </nav>

      {isMobileOpen && (
        <div className="md:hidden bg-[#0A2472] text-white shadow-lg">
          <div className="section-container flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="w-full text-left py-2 text-sm font-medium hover:bg-[#FFBA08] hover:text-[#0A2472] rounded-md px-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 w-full rounded-full bg-[#FFBA08] px-4 py-2 text-sm font-semibold text-[#0A2472] hover:bg-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
