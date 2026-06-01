import { Link } from 'react-router-dom';
import { Heart, Award, Leaf, ArrowRight } from 'lucide-react';
import heromain from "../assets/images/heromain.jpg";
import eleonore from "../assets/images/eleonore.jpg";
import specialist1 from "../assets/images/specialist1.jpg";
import specialist2 from "../assets/images/specialist2.jpg";
import specialist3 from "../assets/images/specialist3.jpg";

const values = [
  {
    icon: Heart,
    title: 'Precision',
    description:
      'Every stroke, every treatment is executed with meticulous attention to detail. We believe beauty lives in the details.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We source eco-conscious products and prioritize sustainable practices throughout our studio operations.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'Our specialists are internationally certified and continuously trained in the latest techniques.',
  },
];

const team = [
  {
    name: 'Eléonore Rousseau',
    role: 'Founder & Master Lash Artist',
    bio: 'With over 12 years of experience, Eléonore trained in Tokyo and Seoul before bringing her expertise to Paris.',
    image: specialist1,
  },
  {
    name: 'Marie Fontaine',
    role: 'Head Esthetician',
    bio: 'Certified in advanced skincare techniques from Switzerland, Marie specializes in luxury facial treatments.',
    image: specialist2,
  },
  {
    name: 'Claire Beaumont',
    role: 'Brow Specialist',
    bio: 'Claire has redefined brow artistry in Paris with her signature mapping technique and attention to facial harmony.',
    image: specialist3,
  },
];

const milestones = [
  { year: '2018', event: 'Luné Beauty founded in Le Marais, Paris' },
  { year: '2019', event: 'Named Best New Beauty Studio by Elle France' },
  { year: '2021', event: 'Expanded to a larger studio in the 8th arrondissement' },
  { year: '2023', event: 'Featured in Vogue Paris Top 10 Beauty Destinations' },
];

export default function About() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-padding bg-cream-100">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center px-3 py-1 text-xs font-sans uppercase tracking-widest text-gold-600 bg-gold-100/50 rounded-full mb-6">
                Our Story
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">
                The Art of Refined Beauty
              </h1>
              <p className="mt-6 text-lg text-charcoal/60 leading-relaxed">
                Luné Beauty was born from a vision to create a sanctuary where beauty meets
                artistry. In the heart of Paris, we have cultivated a space dedicated to
                enhancing natural elegance through precision, care, and expertise.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src={heromain}
                  alt="Luné Beauty Studio"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-100 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-40 h-40 border border-gold-300 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Our Philosophy
            </h2>
            <blockquote className="mt-8 text-xl md:text-2xl text-charcoal/80 leading-relaxed italic font-serif">
              "True beauty is not about transformation, but about illumination. We simply help
              your natural radiance shine through."
            </blockquote>
            <p className="mt-4 text-sm text-charcoal/50">— Eléonore Rousseau, Founder</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Our Values</h2>
            <p className="mt-4 text-charcoal/60">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card text-center">
                <div className="w-14 h-14 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={24} className="text-gold-600" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-flex items-center px-3 py-1 text-xs font-sans uppercase tracking-widest text-gold-600 bg-gold-100/50 rounded-full mb-6">
                Meet the Founder
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                Eléonore Rousseau
              </h2>
              <div className="mt-6 space-y-4 text-charcoal/60 leading-relaxed">
                <p>
                  After training under master lash artists in Tokyo and Seoul, Eléonore
                  returned to Paris with a vision: to create a beauty studio that combined
                  Asian precision techniques with Parisian elegance.
                </p>
                <p>
                  Having worked in the fashion industry for over a decade, she understood
                  the transformative power of subtle, refined beauty enhancements.
                </p>
                <p>
                  "I wanted Luné to be more than a beauty studio. It is a place where women
                  can discover their most confident selves, where the focus is always on
                  enhancing what makes each person unique."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img
                  src={eleonore}
                  alt="Eléonore Rousseau"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold-500 text-white p-6 rounded-lg">
                <p className="font-serif text-3xl">12+</p>
                <p className="text-xs uppercase tracking-wide mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-cream-100">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Our Specialists</h2>
            <p className="mt-4 text-charcoal/60">
              A dedicated team of certified beauty experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </div>
                <h3 className="font-serif text-xl text-charcoal">{member.name}</h3>
                <p className="text-sm text-gold-600 mt-1">{member.role}</p>
                <p className="text-sm text-charcoal/60 mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Our Journey</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gold-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    }`}
                  >
                    <p className="font-serif text-2xl text-gold-600">{milestone.year}</p>
                    <p className="text-sm text-charcoal/60 mt-1">{milestone.event}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Experience Luné Beauty
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Visit our studio and discover the art of refined beauty
          </p>
          <Link to="/booking" className="btn-primary mt-8 bg-gold-500 hover:bg-gold-400 text-charcoal">
            Book Your Visit
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
