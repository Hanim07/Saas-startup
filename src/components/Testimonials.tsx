import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Openlayer has transformed how we operate. Our efficiency increased by 40% within the first quarter. The automation features are game-changing.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director", 
      company: "GrowthCorp",
      content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that actually move the needle.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "InnovateLab",
      content: "Simple, powerful, and effective. Openlayer helped us scale from 10 to 100+ employees while maintaining operational excellence.",
      rating: 5,
    },
   
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text">Growing Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how companies like yours are transforming their operations and achieving remarkable results with Openlayer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="testimonial-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-accent mb-4" />
              
              <p className="text-lg leading-relaxed mb-6 text-card-foreground">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center">
                
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;