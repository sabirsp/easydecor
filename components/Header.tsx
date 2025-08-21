import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-md"
      style={{ 
        backgroundColor: 'rgba(254, 254, 249, 0.85)' // Explicit background with opacity
      }}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/easy-decor-logo-update.png" 
              alt="EasyDecor Studio" 
              className="h-12 w-auto"
              onError={(e) => {
                // Fallback to text logo if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            {/* Fallback text logo - hidden by default */}
            <div className="hidden flex-col">
              <span className="text-2xl font-serif font-semibold text-charcoal leading-none tracking-tight">
                easydecor
              </span>
              <span className="text-xs text-muted-gold font-medium tracking-widest uppercase">
                STUDIO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-muted-gold transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-muted-gold text-primary-foreground text-sm font-medium rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-muted-gold focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div 
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border"
              style={{ backgroundColor: 'rgba(254, 254, 249, 0.95)' }}
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-muted-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block mt-4 px-3 py-2 bg-muted-gold text-primary-foreground text-center font-medium rounded-lg hover:bg-opacity-90 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
