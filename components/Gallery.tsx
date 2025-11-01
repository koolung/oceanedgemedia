import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        title: 'Product Logo Design',
        category: 'Logo Design',
        image: '/images/portfolio/product1.jpg',
        description: 'Professional product mockup and branding',
    },
    {
        id: 2,
        title: 'Brand Product Display',
        category: 'Logo Design',
        image: '/images/portfolio/product2.jpg',
        description: 'Premium packaging and product design',
    },
    {
        id: 3,
        title: 'Instagram Content Creation',
        category: 'Social Media',
        image: '/images/portfolio/insta1.jpg',
        description: 'Engaging social media content strategy',
    },
    {
        id: 4,
        title: 'Instagram Campaign',
        category: 'Social Media',
        image: '/images/portfolio/insta2.jpg',
        description: 'Creative visual storytelling for social platforms',
    },
    {
        id: 5,
        title: 'Instagram Content Management',
        category: 'Social Media',
        image: '/images/portfolio/insta3.jpg',
        description: 'Dynamic and interactive social content',
    },
    {
        id: 6,
        title: 'Modern Web Design',
        category: 'Web Design',
        image: '/images/portfolio/web1.jpg',
        description: 'Responsive and user-friendly website design',
    },
    {
        id: 7,
        title: 'E-Commerce Site',
        category: 'Web Design',
        image: '/images/portfolio/web2.jpg',
        description: 'Professional e-commerce platform development',
    },
    {
        id: 8,
        title: 'Business Website',
        category: 'Web Design',
        image: '/images/portfolio/web3.jpg',
        description: 'Corporate site with modern aesthetics',
    },
    {
        id: 9,
        title: 'Portfolio Website',
        category: 'Web Design',
        image: '/images/portfolio/web4.jpg',
        description: 'Creative portfolio showcase design',
    },
    {
        id: 10,
        title: 'Service Website',
        category: 'Web Design',
        image: '/images/portfolio/web5.jpg',
        description: 'Service-based business website',
    },
    {
        id: 11,
        title: 'Digital Marketing Site',
        category: 'Web Design',
        image: '/images/portfolio/web6.jpg',
        description: 'Conversion-optimized marketing website',
    },
    {
        id: 12,
        title: 'Social Media Marketing',
        category: 'Social Media',
        image: '/images/portfolio/fb1.jpg',
        description: 'Multi-platform social media campaign',
    },
    {
        id: 13,
        title: 'Business Branding',
        category: 'Branding',
        image: '/images/portfolio/truck1.jpg',
        description: 'Professional custom business branding ',
    },
    {
        id: 14,
        title: 'Business Branding2',
        category: 'Branding',
        image: '/images/marketing/bottle.jpg',
        description: 'Professional custom business branding ',
    },
];

const categories = ['All', 'Web Design', 'Logo Design', 'Branding', 'Social Media'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Work</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Explore our portfolio of successful projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'text-white hover-glow'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-700'
              }`}
              style={activeCategory === category ? { backgroundColor: '#192B39' } : {}}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl glass p-1">
                <div className="relative h-64 overflow-hidden rounded-lg bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300 z-10" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="text-cyan-400 text-sm font-semibold mb-2 uppercase">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl glass p-1">
                    <div className="relative h-64 md:h-80 overflow-hidden rounded-lg bg-slate-800">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300 z-10" />
                      <Image
                        src={filteredItems[currentIndex].image}
                        alt={filteredItems[currentIndex].title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-cyan-400 text-sm font-semibold mb-2 uppercase">
                        {filteredItems[currentIndex].category}
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {filteredItems[currentIndex].title}
                      </h3>
                      <p className="text-slate-400 text-sm">{filteredItems[currentIndex].description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-8 z-20 p-2 rounded-full text-white hover-glow"
              style={{ backgroundColor: '#192B39' }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-8 z-20 p-2 rounded-full text-white hover-glow"
              style={{ backgroundColor: '#192B39' }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {filteredItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full transition-all duration-300 w-3 h-3 ${
                  index === currentIndex
                    ? 'w-3 h-3'
                    : 'bg-slate-600 w-2 h-2 hover:bg-slate-500'
                }`}
                style={index === currentIndex ? { backgroundColor: '#192B39' } : {}}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-slate-400 text-sm">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      </div>
    </section>
  );
}
