import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const services = [
  'Classic Lash Set',
  'Hybrid Lash Set',
  'Russian Volume',
  'Mega Volume',
  'Lash Lift',
  'Brow Shaping',
  'Brow Tinting',
  'Brow Lamination',
  'Complete Brow Design',
  'Hydrating Facial',
  'Anti-Aging Facial',
  'Brightening Facial',
  'Detox Facial',
  'Luxury Gold Facial',
];

const timeSlots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

export default function Booking() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-28">
        <section className="section-padding bg-white">
          <div className="container-width max-w-xl text-center">
            <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} className="text-gold-600" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Booking Request Received
            </h1>
            <p className="text-charcoal/60 mb-8">
              Thank you for choosing Luné Beauty. We will contact you within 24 hours to confirm
              your appointment.
            </p>
            <div className="p-6 bg-cream-100 rounded-lg text-left mb-8">
              <h3 className="font-serif text-lg mb-4">Your Request Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-charcoal/50">Service:</span> {formData.service}</p>
                <p><span className="text-charcoal/50">Date:</span> {formData.date}</p>
                <p><span className="text-charcoal/50">Time:</span> {formData.time}</p>
              </div>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-secondary"
            >
              Book Another Appointment
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="section-padding bg-cream-100">
        <div className="container-width">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 text-xs font-sans uppercase tracking-widest text-gold-600 bg-gold-100/50 rounded-full mb-6">
              Schedule Your Visit
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">
              Book an Appointment
            </h1>
            <p className="mt-6 text-lg text-charcoal/60 leading-relaxed">
              Please fill out the form below to request your appointment. We will contact you
              within 24 hours to confirm your booking.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="container-width max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    <User size={14} className="inline mr-2 text-gold-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    <Mail size={14} className="inline mr-2 text-gold-600" />
                    Email Address
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
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    <Phone size={14} className="inline mr-2 text-gold-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-6">Select Your Service</h2>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  <MessageSquare size={14} className="inline mr-2 text-gold-600" />
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="input-field appearance-none cursor-pointer"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date and Time */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-6">Preferred Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    <Calendar size={14} className="inline mr-2 text-gold-600" />
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="input-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    <Clock size={14} className="inline mr-2 text-gold-600" />
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-6">Additional Notes</h2>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                className="input-field resize-none"
                placeholder="Any allergies, special requests, or information we should know..."
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button type="submit" className="btn-primary w-full md:w-auto">
                Request Appointment
              </button>
              <p className="mt-4 text-sm text-charcoal/50">
                We will contact you to confirm your appointment within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={20} className="text-gold-600" />
              </div>
              <h3 className="font-serif text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-sm text-charcoal/60">
                Tuesday through Saturday, 9am to 6pm
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={20} className="text-gold-600" />
              </div>
              <h3 className="font-serif text-lg mb-2">24h Confirmation</h3>
              <p className="text-sm text-charcoal/60">
                Receive confirmation within one business day
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={20} className="text-gold-600" />
              </div>
              <h3 className="font-serif text-lg mb-2">Personal Consultation</h3>
              <p className="text-sm text-charcoal/60">
                Free consultation before every treatment
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
