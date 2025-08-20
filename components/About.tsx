import { Heart, Award, Users, Palette } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Passionate Design",
      description: "Every project is crafted with love and attention to detail, ensuring your space reflects your personality."
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized for excellence in interior design across Kolkata and West Bengal."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We believe in collaborative design, working closely with you throughout the journey."
    },
    {
      icon: Palette,
      title: "Unique Aesthetics",
      description: "Blending modern trends with traditional Bengali elements for truly distinctive spaces."
    }
  ];

  return (
    <section id="about" className="py-24 bg-warm-beige">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Crafting Dreams into{' '}
              <span className="text-deep-green">Reality</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in the cultural heart of India, EasyDecor brings together the rich heritage 
              of Kolkata with contemporary design sensibilities. We understand that your home is 
              more than just a space – it's where memories are made, stories unfold, and life happens.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of passionate designers specializes in creating spaces that are not only 
              beautiful but also functional and affordable. From traditional Bengali homes to 
              modern apartments, we transform every space into a personalized sanctuary.
            </p>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-serif text-deep-green mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years in Kolkata</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-serif text-deep-green mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Homes Transformed</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-serif text-deep-green mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-light-grey rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-serif text-charcoal italic">
            "We believe that great design should be accessible to everyone. 
            Our mission is to make luxury affordable and dreams achievable."
          </blockquote>
          <cite className="block mt-6 text-muted-gold font-medium">— The EasyDecor Team</cite>
        </div>
      </div>
    </section>
  );
}