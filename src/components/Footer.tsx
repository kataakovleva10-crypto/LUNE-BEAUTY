import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/booking', label: 'Booking' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-width py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-3xl font-medium text-white tracking-tight">
              Luné
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Enhancing your natural beauty with precision and care. A luxury beauty studio
              dedicated to the art of refinement.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 rounded-sm hover:bg-white/10 hover:border-gold-500 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 rounded-sm hover:bg-white/10 hover:border-gold-500 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gold-500" />
                <span className="text-sm">123 Rue de la Beauté, Paris 75008</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0 text-gold-500" />
                <a href="tel:+33123456789" className="text-sm hover:text-gold-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0 text-gold-500" />
                <a
                  href="mailto:hello@lunebeauty.com"
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  hello@lunebeauty.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/40">
            {currentYear} Luné Beauty. All rights reserved.
          </p>
          <p className="text-xs text-white/40 mt-2 md:mt-0">
            Crafted with care in Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
