import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Office',
      desc: 'North Bengal Mor, Lalmonirhat Sadar, Lalmonirhat, Rangpur, Bangladesh',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Direct Line',
      desc: '01511305046',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Confidential Email',
      desc: 'abmatwork@gmail.com',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      desc: 'Sun - Thu: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-3">Contact Us</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Get a Free Consultation
          </h3>
          <p className="text-slate-600 text-lg">
            Fill out the form below and our legal experts will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-slate-900 mb-1">{info.title}</h4>
                  <p className="text-slate-600">{info.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-slate-50 p-8 md:p-12 rounded-lg shadow-sm border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Legal Service Required</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow bg-white"
                >
                  <option>Corporate & Company Law</option>
                  <option>Banking & Finance</option>
                  <option>Admiralty & Maritime</option>
                  <option>Dispute Resolution & ADR</option>
                  <option>Criminal Defence</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Case Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-shadow bg-white resize-none"
                  placeholder="Briefly describe your legal issue..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
