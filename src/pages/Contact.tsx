import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Rue de la Beauté, Paris 75008',
    link: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+33 1 23 45 67 89',
    link: 'tel:+33123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@lunebeauty.com',
    link: 'mailto:hello@lunebeauty.com',
  },
];

const hours = [
  { day: 'Tuesday - Friday', time: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
  { day: 'Sunday - Monday', time: 'Closed' },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-padding bg-cream-100">
        <div className="container-width">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 text-xs font-sans uppercase tracking-widest text-gold-600 bg-gold-100/50 rounded-full mb-6">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-charcoal/60 leading-relaxed">
              Have questions? We would love to hear from you. Reach out to us through any of the
              channels below, or visit our studio in the heart of Paris.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-8">Send a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-gold-600" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-charcoal/60 mb-6">
                    Thank you for reaching out. We will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-sm text-gold-600 hover:text-gold-500 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-8">Visit Our Studio</h2>

              {/* Map Placeholder */}
              <div className="bg-cream-100 rounded-lg overflow-hidden mb-8 h-64 flex items-center justify-center border border-cream-200">
                <div className="text-center p-8">
                  <MapPin size={32} className="mx-auto text-gold-600 mb-3" />
                  <p className="text-sm text-charcoal/60">
                    Map Integration
                  </p>
                  <p className="text-xs text-charcoal/40 mt-1">
                    123 Rue de la Beauté, Paris 75008
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} className="text-gold-600" />
                    </div>
                    <div>
                      <p className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-charcoal hover:text-gold-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-charcoal">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-10">
                <h3 className="font-serif text-lg text-charcoal mb-4">Opening Hours</h3>
                <div className="space-y-3">
                  {hours.map((item) => (
                    <div key={item.day} className="flex items-start space-x-3">
                      <Clock size={16} className="text-gold-600 mt-0.5 flex-shrink-0" />
                      <div className="flex justify-between w-full">
                        <span className="text-sm text-charcoal/70">{item.day}</span>
                        <span className="text-sm text-charcoal">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-serif text-lg text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-charcoal rounded-full hover:bg-gold-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-charcoal rounded-full hover:bg-gold-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-width max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How far in advance should I book?',
                answer:
                  'We recommend booking at least 1-2 weeks in advance, especially for weekend appointments. For special occasions or multiple services, 3-4 weeks is ideal.',
              },
              {
                question: 'What is your cancellation policy?',
                answer:
                  'We require 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee of 50% of the service price.',
              },
              {
                question: 'Do you offer consultations?',
                answer:
                  'Yes! We provide complimentary consultations before every treatment to discuss your goals and create a personalized plan.',
              },
              {
                question: 'Are your products cruelty-free?',
                answer:
                  'Absolutely. We are committed to using only cruelty-free and ethically sourced products throughout all our treatments.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-cream-200">
                <h3 className="font-serif text-lg text-charcoal mb-3">{faq.question}</h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
