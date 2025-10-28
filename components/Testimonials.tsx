import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Founder, TechStart Co.',
    content: 'Ocean Edge Media transformed our online presence. Their web design was exactly what we needed!',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO, Local Retail Business',
    content: 'Their social media campaigns doubled our engagement in just 3 months. Highly professional team!',
    avatar: '👨‍',
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Director, Startup',
    content: 'The logo design they created perfectly captures our brand identity. Outstanding work!',
    avatar: '👩‍💼',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Client Success Stories</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Trusted by businesses across Nova Scotia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-xl hover-glow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-200 mb-6 text-sm leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
