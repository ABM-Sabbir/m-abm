import { motion } from 'motion/react';
import { Users, Award, Briefcase, Scale } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: '25+', label: 'Years Experience' },
    { icon: <Users className="w-8 h-8" />, value: '1,500+', label: 'Happy Clients' },
    { icon: <Scale className="w-8 h-8" />, value: '98%', label: 'Success Rate' },
    { icon: <Award className="w-8 h-8" />, value: 'Top 10', label: 'Law Firms in Dhaka' },
  ];

  return (
    <section className="bg-slate-900 py-16 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 text-amber-500 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-serif font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
