import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Dining', 'Bathroom', 'Office'];

  const projects = [
    {
      id: 1,
      title: "Modern Living Space",
      category: "Living Room",
      image: "https://images.unsplash.com/photo-1705321963943-de94bb3f0dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU1NjI2MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A contemporary living room blending comfort with elegance"
    },
    {
      id: 2,
      title: "Elegant Bedroom Suite",
      category: "Bedroom",
      image: "https://images.unsplash.com/photo-1704428382616-d8c65fdd76f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc1NTcyMzA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Serene bedroom design with luxurious finishes"
    },
    {
      id: 3,
      title: "Minimalist Kitchen",
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1669046222569-a7672da06e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwa2l0Y2hlbiUyMGRlc2lnbnxlbnwxfHx8fDE3NTU3MjMwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Clean lines and functional design for modern cooking"
    },
    {
      id: 4,
      title: "Luxury Dining Room",
      category: "Dining",
      image: "https://images.unsplash.com/photo-1704383014609-747c5afc2bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU1NzIzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sophisticated dining space for memorable gatherings"
    },
    {
      id: 5,
      title: "Executive Office",
      category: "Office",
      image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU1NzIzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Professional workspace designed for productivity"
    },
    {
      id: 6,
      title: "Contemporary Bathroom",
      category: "Bathroom",
      image: "https://images.unsplash.com/photo-1704428381342-ea9df943619e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1NTcyMzA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Spa-like bathroom retreat with modern amenities"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-light-grey">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Our{' '}
            <span className="text-deep-green">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our collection of beautifully designed spaces that showcase our expertise 
            in creating functional and elegant interiors.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-deep-green text-white shadow-lg'
                  : 'bg-white text-muted-foreground hover:bg-warm-beige hover:text-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-muted-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-charcoal mb-2 group-hover:text-deep-green transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-deep-green hover:text-muted-gold transition-colors duration-200"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a space that perfectly reflects your style and needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-muted-gold text-primary font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}