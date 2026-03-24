import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'Moyez Uddin Sarkar',
      role: 'Advocate, Lalmonirhat Judge Court, Lalmonirhat',
      image: 'https://storage.googleapis.com/aistudio-janus-prod-us-central1-user-assets/01jqr0128be2j8d8f0j80104t4/image_1.jpg',
    },
    {
      name: 'A.B.M. Sabbir Hossain',
      role: 'Advocate, District and Sessions Judge Court, Dhaka',
      image: 'https://storage.googleapis.com/aistudio-janus-prod-us-central1-user-assets/01jqr0128be2j8d8f0j80104t4/image_2.jpg',
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Team</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Meet Our Legal Experts
          </h3>
          <p className="text-slate-600 text-lg">
            Dedicated professionals committed to providing exceptional legal representation and strategic counsel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/4] shadow-md">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Scale className="w-8 h-8 text-amber-500" />
                </div>
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">{member.name}</h4>
              <p className="text-amber-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
