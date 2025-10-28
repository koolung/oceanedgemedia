import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Last Agency You'll <br></br><span className="gradient-text">Ever Need</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your trusted digital partner in Nova Scotia. We craft stunning websites, memorable logos, and powerful social media campaigns that help your business thrive in the digital landscape.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover-glow flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-lg font-semibold text-slate-100 hover-glow"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-slate-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: '10K+', label: 'Users' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 md:h-full">
              {/* Gradient Orbs */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative glass p-8 rounded-2xl backdrop-blur-xl"
              >
                <div className="space-y-4">
                  <div className="h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded w-1/3" />
                  <div className="h-2 bg-slate-600 rounded w-2/3" />
                  <div className="h-2 bg-slate-600 rounded w-1/2" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
