import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import lashes from "../assets/images/lashes.jpg";
import brows from "../assets/images/brows.jpg";
import facial from "../assets/images/facial.jpg";
import before from "../assets/images/before.jpg";
import after from "../assets/images/after.jpg";
import homescreen from "../assets/images/homescreen.jpg";

const services = [
  {
    title: 'Lash Extensions',
    description: 'Custom-designed lash sets for a natural, elegant lift',
    image: lashes,
  },
  {
    title: 'Brow Shaping',
    description: 'Precision sculpting to frame your unique features',
    image: brows,
  },
  {
    title: 'Skin Treatments',
    description: 'Luxury facials with premium skincare formulations',
    image: facial,
  },
];

const testimonials = [
  {
    name: 'Sophie Laurent',
    role: 'Fashion Editor, Vogue Paris',
    quote:
      'Luné transformed my approach to beauty. The attention to detail and luxurious atmosphere made every visit feel like a retreat.',
  },
  {
    name: 'Camille Dubois',
    role: 'Model, Elite Paris',
    quote:
      'The lash extensions are flawless. I have never felt more confident without makeup. This studio understands elegance.',
  },
  {
    name: 'Amélie Moreau',
    role: 'Entrepreneur',
    quote:
      'A hidden gem in the heart of Paris. The skin treatments left my complexion glowing for weeks. Truly exceptional.',
  },
];

const beforeAfter = [
  {
    before: before,
    after: after,
    label: 'Lash Extension Transformation',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-beige-100" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${homescreen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content */}
        <div className="relative container-width text-center section-padding pt-32">
          <div className="animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 text-xs font-sans uppercase tracking-widest text-gold-600 bg-gold-100/50 rounded-full mb-8">
              <Sparkles size={14} className="mr-2" />
              Luxury Beauty Studio
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight max-w-4xl mx-auto animate-slide-up">
            Enhancing your natural beauty with precision and care
          </h1>

          <p className="mt-6 text-lg md:text-xl text-charcoal/60 font-light max-w-2xl mx-auto animate-fade-in">
            Experience the art of refinement. Where elegance meets expertise in the heart of Paris.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link to="/booking" className="btn-primary">
              Book Appointment
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-px h-12 bg-charcoal/20" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
              Our Signature Services
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              Each treatment is meticulously crafted to enhance your unique beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white">{service.title}</h3>
                  </div>
                </div>
                <p className="text-charcoal/60 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-4 text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Learn More
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-cream-100">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
              Transformation Gallery
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              Real results from our studio, showcasing the artistry of our specialists
            </p>
          </div>

          {beforeAfter.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center gap-8"
            >
              <div className="flex-1 max-w-md">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.before}
                    alt="Before treatment"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-sm font-sans text-xs uppercase tracking-wide text-charcoal">
                    Before
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="w-px h-24 lg:w-24 lg:h-px bg-gold-300" />
                <div className="absolute lg:relative px-4 text-gold-500 font-serif text-lg">
                  to
                </div>
              </div>

              <div className="flex-1 max-w-md">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.after}
                    alt="After treatment"
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 rounded-sm font-sans text-xs uppercase tracking-wide text-white">
                    After
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-charcoal/60 italic">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
              Client Stories
            </h2>
            <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
              Hear from those who have experienced the Luné difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card bg-cream-50 border border-cream-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold-500 fill-gold-500"
                    />
                  ))}
                </div>
                <blockquote className="text-charcoal/80 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-serif text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-charcoal text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-charcoal/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Let us craft a personalized beauty experience tailored just for you
          </p>
          <Link to="/booking" className="btn-primary mt-8 bg-gold-500 hover:bg-gold-400 text-charcoal">
            Schedule Your Consultation
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
