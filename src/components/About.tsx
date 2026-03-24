import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    'Full-service International Law Firm',
    'Trusted by thousands of individuals & companies',
    'Expertise in Corporate, Civil & Criminal Law',
    'Dedicated & Experienced Legal Team',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-100 rounded-lg transform -rotate-3 z-0" />
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
              alt="Diverse team of legal professionals discussing a case"
              className="relative z-10 rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-slate-900 text-white p-8 rounded-lg shadow-2xl z-20 hidden md:block">
              <p className="text-5xl font-serif font-bold text-amber-500 mb-2">25+</p>
              <p className="text-sm uppercase tracking-wider font-medium">Years of Legal<br/>Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              A Legacy of Trust, Integrity, and Legal Excellence.
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At <strong className="text-slate-900">M&ABM Consultancy and Law Firm</strong>, we are committed to providing unparalleled legal services to our clients. Based in Dhaka, Bangladesh, we are a full-service international law firm handling complex legal matters with precision and dedication.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Whether you are a multinational corporation navigating complex regulations or an individual seeking justice, our team of seasoned attorneys is your trusted partner in every legal frontier.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#expertise"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              Explore Our Expertise
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
