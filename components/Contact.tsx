import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let&apos;s Work Together</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Ready to elevate your digital presence? Get in touch with our team today!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="glass-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="glass-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="glass-sm w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="glass-sm w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5 resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-3 rounded-lg font-semibold hover-glow text-white"
            style={{ backgroundColor: '#192B39' }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6 mt-12"
        >
          {[
            { icon: Mail, href: 'mailto:oceanedgemedia@hotmail.com' },
            { icon: Instagram, href: 'https://www.instagram.com/oceanedge_media/' },
            { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61574627555191' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ocean-pratt-3695b825a/' },
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="p-3 glass rounded-full hover-glow text-cyan-400 hover:text-cyan-300"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
