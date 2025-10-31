import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity for background and border (0 at top, 1 when scrolled)
  const scrollProgress = Math.min(scrollY / 100, 1);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrollProgress > 0.1 ? 'rgb(58 66 108 / 27%)' : 'transparent',
        backdropFilter: scrollProgress > 0.1 ? 'blur(12px)' : 'none',
        borderBottom: scrollProgress > 0.1 ? 'transparent' : 'none',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo with smooth transition */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-32 h-16 flex items-center"
          style={{ borderTopLeftRadius: '0%', borderTopRightRadius: '0%' }}
        >
          {/* White logo - visible at top */}
          <Image
            src="/images/logo/dark.png"
            alt="OceanEdge Logo"
            width={120}
            height={60}
            className="absolute"
            style={{ opacity: 1 - scrollProgress }}
            priority
          />
          {/* Dark logo - appears as user scrolls */}
          <Image
            src="/images/logo/white.png"
            alt="OceanEdge Logo"
            width={120}
            height={60}
            className="absolute"
            style={{ opacity: scrollProgress }}
            priority
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.1, color: '#06b6d4' }}
              className="transition-colors"
              style={{
                color: scrollProgress > 0.1 ? '#1e293b' : '#cbd5e1',
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-lg font-semibold hover-glow text-white"
          style={{ backgroundColor: '#192B39' }}
        >
          Get Started
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden transition-colors"
          style={{
            color: scrollProgress > 0.1 ? '#f1f5f9' : '#1e293b',
          }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass m-4 p-4 space-y-4"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10 }}
              className="block hover:text-cyan-400 transition-colors"
              style={{
                color: scrollProgress > 0.1 ? '#112036ff' : '#1e293b',
              }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full px-4 py-2 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#192B39' }}
          >
            Get Started
          </motion.button>
        </motion.div>
      )}
    </motion.header>
  );
}
