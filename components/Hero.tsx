import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [bgImage, setBgImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => (prev + 1) % 2);
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const images = [
    '/images/marketing/cards.jpeg',
    '/images/marketing/billboard3.jpg',
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #F3F4F6 0%, #EAEAEA 100%)',
        backgroundAttachment: 'scroll',
      } as React.CSSProperties & { WebkitBackgroundAttachment?: string }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Mobile Image with Transition */}
            <motion.div 
              key={bgImage}
              className="md:hidden mb-8 w-full"
              style={{ height: '220px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img 
                src={images[bgImage]} 
                alt="Portfolio" 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Last Agency You&apos;ll <br></br><span style={{ color: '#879eb9ff' }}>Ever Need</span>
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
                <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-white hover-glow flex items-center justify-center gap-2"
                style={{ backgroundColor: '#192B39' }}
                >
                Get Started <ArrowRight size={20} />
                </motion.a>
                <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-lg font-semibold hover-glow text-center flex items-center justify-center gap-2"
                style={{ color: '#192B39' }}
                >
                Learn More
                </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-12 pt-8 border-t border-slate-700 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: '1K+', label: 'Clients' },
                { number: '99.9%', label: 'Satisfaction' },
                { number: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold" style={{ color: '#192B39' }}>{stat.number}</p>
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
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full h-17 md:h-full flex items-center justify-center">

              {/* Bottle Image */}
              <motion.img
                src="/images/marketing/bottle.jpg"
                alt="Product Mockup"
                whileHover={{ y: -10 }}
                className="relative z-10 w-[100%] h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
