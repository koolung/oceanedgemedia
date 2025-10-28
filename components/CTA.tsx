import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-2xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Grow Your Brand?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let Ocean Edge Media handle your digital marketing and design needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover-glow inline-flex items-center gap-2"
          >
            Start Now <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
