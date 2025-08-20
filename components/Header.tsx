import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/aaa4d89a5e909c4e20dd929e667939eb1d3b4ae7.png';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Increased size */}
          <div className="flex items-center">
            <img 
              src="/easy-decor-logo-update.png" 
              alt="EasyDecor Studio" 
              className="h-12 w-auto"
            />
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
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
