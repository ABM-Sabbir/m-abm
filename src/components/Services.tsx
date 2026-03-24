import { motion } from 'motion/react';
import { Building2, Scale, ShieldAlert, Landmark, Briefcase, FileText, Anchor, Handshake } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Corporate & Company Law',
      desc: 'Comprehensive legal support for businesses, including incorporation, compliance, M&A, and corporate governance.',
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: 'Banking & Finance',
      desc: 'Expert advice on financial regulations, loan syndication, debt recovery, and banking litigation.',
    },
    {
      icon: <Anchor className="w-8 h-8" />,
      title: 'Admiralty & Maritime',
      desc: 'Specialized legal services for the shipping industry, including cargo claims, ship arrests, and maritime disputes.',
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Dispute Resolution & ADR',
      desc: 'Strategic representation in arbitration, mediation, and complex commercial litigation.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Labour & Employment',
      desc: 'Guidance on employment contracts, workplace disputes, compliance, and labor rights.',
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: 'Criminal Defence',
      desc: 'Robust defense strategies for white-collar crimes, corporate fraud, and general criminal litigation.',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Intellectual Property',
      desc: 'Protection of trademarks, patents, copyrights, and handling of IP infringement cases.',
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'VAT, Tax & Customs',
      desc: 'Navigating complex tax laws, customs disputes, and providing strategic tax planning.',
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Comprehensive Legal Solutions
          </h3>
          <p className="text-slate-600 text-lg">
            We offer a wide range of legal services tailored to meet the unique needs of our clients, ensuring the highest standards of professionalism and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
