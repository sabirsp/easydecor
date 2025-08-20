import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Salt Lake, Kolkata",
      rating: 5,
      text: "EasyDecor transformed our 2BHK apartment into a beautiful modern home while respecting our traditional values. The team understood our needs perfectly and delivered beyond our expectations.",
      image: "https://images.unsplash.com/photo-1661436170168-7ce82d649532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTY4NDczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      project: "Complete Home Interior"
    },
    {
      id: 2,
      name: "Rajesh Chatterjee",
      location: "Park Street, Kolkata",
      rating: 5,
      text: "The attention to detail and quality of work is exceptional. They managed to create a luxurious feel within our budget. Highly recommend EasyDecor for anyone looking to renovate their home.",
      image: "https://images.unsplash.com/photo-1671450960874-0903baf942c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTcyNTU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      project: "Living Room Renovation"
    },
    {
      id: 3,
      name: "Ananya Banerjee",
      location: "Ballygunge, Kolkata",
      rating: 5,
      text: "From concept to completion, the entire process was smooth and professional. They turned our outdated kitchen into a modern, functional space that we absolutely love cooking in.",
      image: "https://images.unsplash.com/photo-1672075270227-ddf5cb181a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHNtaWxpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1NzI1NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      project: "Kitchen Redesign"
    },
    {
      id: 4,
      name: "Amit Kumar",
      location: "New Town, Kolkata",
      rating: 5,
      text: "EasyDecor helped us design our new apartment with a perfect blend of contemporary and traditional elements. The team was responsive, creative, and delivered on time.",
      image: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYWxlJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NzI1NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      project: "Full Apartment Design"
    },
    {
      id: 5,
      name: "Shreya Das",
      location: "Alipore, Kolkata",
      rating: 5,
      text: "Working with EasyDecor was a delightful experience. They listened to our ideas and created a beautiful home office space that's both functional and inspiring. Excellent work!",
      image: "https://images.unsplash.com/photo-1548597180-23cc88a9a6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHRyYWRpdGlvbmFsJTIwbW9kZXJuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU1NzI1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      project: "Home Office Setup"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-muted-gold fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-24 bg-deep-green">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            What Our{' '}
            <span className="text-muted-gold">Clients Say</span>
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the families across Kolkata 
            who have transformed their homes with EasyDecor.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-light-grey rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-deep-green" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-charcoal mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <ImageWithFallback
                    src={testimonials[currentIndex].image}
                    alt={`${testimonials[currentIndex].name} - EasyDecor Client`}
                    className="w-16 h-16 rounded-full object-cover border-4 border-light-grey"
                  />
                  {/* Backup in case ImageWithFallback doesn't work */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-muted-gold flex items-center justify-center text-white font-medium text-sm opacity-0 hover:opacity-100 transition-opacity">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-medium text-charcoal">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                  <div className="text-xs text-muted-gold font-medium">{testimonials[currentIndex].project}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-light-grey hover:bg-muted-gold text-deep-green hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-light-grey hover:bg-muted-gold text-deep-green hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex ? 'bg-muted-gold' : 'bg-light-grey hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-serif text-muted-gold mb-2">98%</div>
            <div className="text-green-100">Client Satisfaction Rate</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-serif text-muted-gold mb-2">150+</div>
            <div className="text-green-100">Happy Families</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl md:text-5xl font-serif text-muted-gold mb-2">4.9</div>
            <div className="text-green-100">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}