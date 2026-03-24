import { motion } from 'motion/react';
import { ShieldCheck, Clock, Trophy, Users } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Trophy className="w-6 h-6" aria-hidden="true" />,
      title: 'Proven Track Record',
      desc: 'Decades of combined experience resulting in landmark victories and successful settlements.',
    },
    {
      icon: <Users className="w-6 h-6" aria-hidden="true" />,
      title: 'Client-Centric Approach',
      desc: 'We prioritize your needs, offering personalized strategies and transparent communication.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
      title: 'Uncompromising Integrity',
      desc: 'Ethical practice and strict confidentiality are the cornerstones of our firm.',
    },
    {
      icon: <Clock className="w-6 h-6" aria-hidden="true" />,
      title: '24/7 Availability',
      desc: 'Legal emergencies do not wait. Our dedicated team is always ready to assist you.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-serif font-bold mb-6 leading-tight">
              Your Strategic Advantage in Complex Legal Matters.
            </h3>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              When the stakes are high, you need a law firm that combines deep legal knowledge with practical business acumen. M&ABM Consultancy and Law Firm is recognized as a leader in the legal community.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-amber-500">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-serif font-bold">{reason.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-amber-700 rounded-lg transform translate-x-4 translate-y-4 z-0" />
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000"
              alt="Close-up of a traditional brass scale of justice"
              className="relative z-10 rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
