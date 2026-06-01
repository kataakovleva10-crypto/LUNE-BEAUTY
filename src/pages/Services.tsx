import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Check } from 'lucide-react';
import lashes from "../assets/images/lashes.jpg";
import brows from "../assets/images/brows.jpg";
import facial from "../assets/images/facial.jpg";

const serviceCategories = [
  {
    category: 'Lash Extensions',
    image: lashes,
    description: 'Hand-applied lash extensions designed to complement your eye shape and lifestyle',
    services: [
      {
        name: 'Classic Set',
        description: 'One extension per natural lash for a subtle, natural enhancement',
        duration: '90 min',
        price: '120',
      },
      {
        name: 'Hybrid Set',
        description: 'Mix of classic and volume techniques for textured dimension',
        duration: '120 min',
        price: '150',
      },
      {
        name: 'Russian Volume',
        description: 'Handmade fans of 3-6 lashes for full, dramatic lashes',
        duration: '150 min',
        price: '180',
      },
      {
        name: 'Mega Volume',
        description: 'Ultra-lightweight fans for maximum fullness and drama',
        duration: '180 min',
        price: '220',
      },
      {
        name: 'Lash Lift',
        description: 'Natural lash perming treatment for lifted, curled effect',
        duration: '60 min',
        price: '85',
      },
    ],
  },
  {
    category: 'Brow Shaping',
    image: brows,
    description: 'Precision brow design to frame your features and define your look',
    services: [
      {
        name: 'Brow Shaping',
        description: 'Custom mapping and shaping with wax, tweezing, or threading',
        duration: '30 min',
        price: '45',
      },
      {
        name: 'Brow Tinting',
        description: 'Semi-permanent color to enhance and define brows',
        duration: '20 min',
        price: '25',
      },
      {
        name: 'Brow Lamination',
        description: 'Lifting and setting treatment for full, brushed-up brows',
        duration: '45 min',
        price: '75',
      },
      {
        name: 'Complete Brow Design',
        description: 'Full shaping, tinting, and lamination package',
        duration: '60 min',
        price: '120',
      },
      {
        name: 'Brow Henna',
        description: 'Natural henna tint for longer-lasting color and definition',
        duration: '45 min',
        price: '55',
      },
    ],
  },
  {
    category: 'Facial Treatments',
    image: facial,
    description: 'Luxury skincare treatments featuring premium formulations and techniques',
    services: [
      {
        name: 'Hydrating Facial',
        description: 'Deep hydration treatment with premium serums and masks',
        duration: '60 min',
        price: '110',
      },
      {
        name: 'Anti-Aging Facial',
        description: 'Collagen-boosting treatment to reduce fine lines and firm skin',
        duration: '75 min',
        price: '145',
      },
      {
        name: 'Brightening Facial',
        description: 'Vitamin C infused treatment for radiant, even-toned skin',
        duration: '60 min',
        price: '125',
      },
      {
        name: 'Detox Facial',
        description: 'Deep cleansing with extractions and purifying masks',
        duration: '75 min',
        price: '130',
      },
      {
        name: 'Luxury Gold Facial',
        description: '24K gold-infused treatment for ultimate radiance and luxury',
        duration: '90 min',
        price: '250',
      },
    ],
  },
];

const addOns = [
  { name: 'Collagen Eye Mask', price: '25' },
  { name: 'LED Light Therapy', price: '35' },
  { name: 'Gua Sha Massage', price: '30' },
  { name: 'Lash Tint', price: '20' },
  { name: 'Brow Tint', price: '25' },
];

export default function Services() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-padding bg-cream-100">
        <div className="container-width">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 text-xs font-sans uppercase tracking-widest text-gold-600 bg-gold-100/50 rounded-full mb-6">
              Our Expertise
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">
              Beauty Services
            </h1>
            <p className="mt-6 text-lg text-charcoal/60 leading-relaxed">
              Each treatment at Luné is thoughtfully designed to enhance your natural beauty.
              We combine traditional techniques with modern innovation for results that speak
              for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-cream-50'}`}
        >
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Image */}
              <div
                className={`relative ${
                  categoryIndex % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="sticky top-32">
                  <div className="overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={category.image}
                      alt={category.category}
                      className="w-full aspect-[4/5] object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm text-charcoal/50 italic">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Service List */}
              <div className={categoryIndex % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">
                  {category.category}
                </h2>

                <div className="space-y-6">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="group p-6 bg-white rounded-lg border border-cream-200 hover:border-gold-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl text-charcoal group-hover:text-gold-600 transition-colors">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <span className="font-serif text-2xl text-gold-600">
                            {service.price}
                          </span>
                          <span className="text-charcoal/40 ml-1">EUR</span>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal/60 mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center text-xs text-charcoal/40">
                        <Clock size={14} className="mr-1.5" />
                        {service.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-Ons Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl">Enhance Your Experience</h2>
            <p className="mt-4 text-white/60">
              Add any of these premium enhancements to your treatment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-gold-500 transition-all duration-200 text-center"
              >
                <Check size={18} className="mx-auto mb-3 text-gold-500" />
                <p className="text-sm font-medium mb-1">{addon.name}</p>
                <p className="text-lg font-serif text-gold-400">{addon.price} EUR</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-100">
        <div className="container-width text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Begin Your Transformation
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
            Schedule your consultation and let us create a personalized beauty plan for you
          </p>
          <Link to="/booking" className="btn-primary mt-8">
            Book Your Appointment
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
