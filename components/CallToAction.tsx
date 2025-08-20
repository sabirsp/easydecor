import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp: string;
}

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create lead data with timestamp
    const leadData: FormData = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    // Store in localStorage for the CRM
    const existingLeads = JSON.parse(localStorage.getItem('easydecor_leads') || '[]');
    existingLeads.unshift(leadData);
    localStorage.setItem('easydecor_leads', JSON.stringify(existingLeads));

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form and show success
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: ''
    });
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);

    // Send to parent window if in iframe (for external integration)
    if (window.parent !== window) {
      window.parent.postMessage({
        type: 'EASYDECOR_LEAD',
        data: leadData
      }, '*');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-warm-beige">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Let's Create Something{' '}
              <span className="text-muted-gold">Beautiful</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your space? Book a free consultation with our design experts 
              and let's discuss how we can bring your vision to life.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-deep-green rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-charcoal">Call Us</div>
                  <a href="tel:+918777654651" className="text-muted-foreground hover:text-deep-green transition-colors">
                    +91 8777 654 651
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted-gold rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-charcoal">Email Us</div>
                  <a href="mailto:hello@easydecorstudio.com" className="text-muted-foreground hover:text-deep-green transition-colors">
                    hello@easydecorstudio.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-deep-green rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-charcoal">Visit Our Studio</div>
                  <div className="text-muted-foreground">
                    <div>Unit No - 324, PS Abacus</div>
                    <div>Diplomatic Enclave, Action Area -IIE</div>
                    <div>Newtown, Kolkata - 700161</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted-gold rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-charcoal">Business Hours</div>
                  <div className="text-muted-foreground">Mon - Sat: 10AM - 7PM</div>
                </div>
              </div>

              {/* Website Link */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-deep-green rounded-xl flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-charcoal">Website</div>
                  <a href="https://easydecorstudio.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-deep-green transition-colors">
                    easydecorstudio.com
                  </a>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-medium text-charcoal mb-4">Why Choose EasyDecor Studio?</h3>
              <ul className="space-y-3">
                {[
                  "Free initial consultation",
                  "3D visualization included",
                  "Local Kolkata expertise",
                  "Transparent pricing",
                  "On-time project delivery"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-deep-green" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-serif text-charcoal mb-6">Book Your Free Consultation</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-medium text-charcoal mb-2">Thank You!</h4>
                <p className="text-muted-foreground mb-4">
                  Your consultation request has been received. We'll get back to you within 24 hours.
                </p>
                <p className="text-sm text-muted-gold">
                  Reference: ED-{Date.now().toString().slice(-6)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-light-grey border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-gold focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-light-grey border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-gold focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-light-grey border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-gold focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-light-grey border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-gold focus:border-transparent"
                    >
                      <option value="">Select Project Type</option>
                      <option value="complete-home">Complete Home Design</option>
                      <option value="living-room">Living Room</option>
                      <option value="bedroom">Bedroom</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="bathroom">Bathroom</option>
                      <option value="office">Office</option>
                      <option value="renovation">Renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light-grey border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-gold focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-5">Under ₹5 Lakhs</option>
                    <option value="5-10">₹5 - 10 Lakhs</option>
                    <option value="10-20">₹10 - 20 Lakhs</option>
                    <option value="20-50">₹20 - 50 Lakhs</option>
                    <option value="above-50">Above ₹50 Lakhs</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-light-grey border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-muted-gold focus:border-transparent resize-none"
                    placeholder="Describe your vision, requirements, or any specific ideas you have in mind..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-deep-green text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. We'll only use your information to contact you about your project.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}