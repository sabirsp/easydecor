import { Home, Layout, Sofa, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Interior Design",
      description: "Complete interior design solutions from concept to completion, tailored to your lifestyle and preferences.",
      features: ["Concept Development", "Material Selection", "Color Schemes", "Lighting Design"],
      color: "bg-deep-green"
    },
    {
      icon: Layout,
      title: "Space Planning",
      description: "Optimize your space with intelligent layouts that maximize functionality while maintaining aesthetic appeal.",
      features: ["Floor Plan Design", "Traffic Flow", "Storage Solutions", "Zoning"],
      color: "bg-muted-gold"
    },
    {
      icon: Sofa,
      title: "Furniture & Décor",
      description: "Curated furniture and décor pieces that perfectly complement your design vision and budget.",
      features: ["Custom Furniture", "Décor Selection", "Art Curation", "Textile Coordination"],
      color: "bg-deep-green"
    },
    {
      icon: Wrench,
      title: "Renovation Support",
      description: "End-to-end renovation management ensuring your project runs smoothly from start to finish.",
      features: ["Project Management", "Vendor Coordination", "Timeline Planning", "Quality Control"],
      color: "bg-muted-gold"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Our{' '}
            <span className="text-muted-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From initial concept to final installation, we provide comprehensive design services 
            that transform your vision into a beautiful reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-charcoal mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-muted-gold rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t border-light-grey">
                <a
                  href="#contact"
                  className="text-sm font-medium text-deep-green hover:text-muted-gold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="mt-20 bg-warm-beige rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-charcoal mb-4">Our Design Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A seamless journey from consultation to completion, designed around your needs and timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating detailed plans and 3D visualizations" },
              { step: "03", title: "Execution", desc: "Managing the implementation process" },
              { step: "04", title: "Completion", desc: "Final styling and handover" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted-gold text-white rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-medium text-charcoal mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}