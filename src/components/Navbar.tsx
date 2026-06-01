import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/booking', label: 'Booking' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-width flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl font-medium text-charcoal tracking-tight"
        >
          Luné
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative font-sans text-sm tracking-wide transition-colors duration-200 pb-1 ${
                  isActive(link.path)
                    ? 'text-gold-600'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:text-gold-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block font-sans text-sm tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-gold-600'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
