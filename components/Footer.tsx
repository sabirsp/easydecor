import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo from 'figma:asset/aaa4d89a5e909c4e20dd929e667939eb1d3b4ae7.png';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Interior Design', href: '#services' },
    { name: 'Space Planning', href: '#services' },
    { name: 'Furniture & Décor', href: '#services' },
    { name: 'Renovation Support', href: '#services' },
    { name: '3D Visualization', href: '#services' },
    { name: 'Consultation', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="EasyDecor Studio" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming homes across Kolkata with elegant, affordable design solutions 
              that blend contemporary style with traditional charm.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-deep-green hover:bg-muted-gold rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-muted-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-muted-gold transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Unit No - 324, PS Abacus</div>
                  <div>Diplomatic Enclave</div>
                  <div>Action Area -IIE, Newtown</div>
                  <div>Kolkata - 700161</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-gold flex-shrink-0" />
                <a
                  href="tel:+918777654651"
                  className="text-gray-300 hover:text-muted-gold transition-colors duration-200"
                >
                  +91 8777 654 651
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-gold flex-shrink-0" />
                <a
                  href="mailto:hello@easydecorstudio.com"
                  className="text-gray-300 hover:text-muted-gold transition-colors duration-200"
                >
                  hello@easydecorstudio.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <ExternalLink className="h-5 w-5 text-muted-gold flex-shrink-0" />
                <a
                  href="https://easydecorstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-muted-gold transition-colors duration-200"
                >
                  easydecorstudio.com
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-deep-green/20 rounded-lg">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <div className="text-sm text-gray-300">
                <div>Monday - Saturday</div>
                <div>10:00 AM - 7:00 PM</div>
                <div className="mt-1 text-muted-gold">Sunday: By Appointment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="container-max section-padding py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get design tips and project updates delivered to your inbox</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-muted-gold flex-1 md:w-64"
              />
              <button className="px-6 py-3 bg-muted-gold text-charcoal font-medium rounded-r-lg hover:bg-opacity-90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in Kolkata</span>
            </div>
            
            <div className="text-gray-300 text-sm">
              © 2025 EasyDecor Studio. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-muted-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-muted-gold transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}