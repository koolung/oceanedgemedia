import { motion } from 'framer-motion';
import { Globe, Palette, Share2 } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  includes: string[];
}

const features: Feature[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Stunning, responsive websites that convert visitors into customers.',
    image: '/images/portfolio/web1.jpg',
    includes: [
      'Fully responsive mobile-first design that works flawlessly across all devices',
      'Advanced performance optimization for lightning-fast loading speeds',
      'Complete SEO implementation including meta tags, schema markup & sitemap',
      'Professional UX/UI testing to ensure exceptional user experience',
      'Google Analytics & conversion tracking integration',
      'Enterprise-grade security features and SSL encryption',
    ],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Memorable brand identities that stand out in the market.',
    image: '/images/portfolio/product1.jpg',
    includes: [
      'Unlimited design revisions until you are completely satisfied',
      'Multiple original design concepts tailored to your brand vision',
      'Comprehensive brand guidelines document for consistent application',
      'All file formats provided (PNG, PDF, SVG, AI, EPS) for any use case',
      'High-resolution transparent files ready for print and digital media',
      'Full copyright ownership transfer with commercial usage rights',
    ],
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media & Digital Marketing',
    description: 'Engaging campaigns that grow your audience and strategic marketing solutions to elevate your online presence.',
    image: '/images/portfolio/insta1.jpg',
    includes: [
      'Strategic content calendar planning aligned with your business goals',
      'Daily professional social media management across all platforms',
      'Targeted paid advertising campaigns on Facebook, Instagram & TikTok',
      'Detailed monthly analytics reports with actionable insights',
      'Active community engagement and responsive audience management',
      'Comprehensive growth strategy consultation and optimization',
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Comprehensive digital solutions to elevate your brand
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl hover-glow group overflow-hidden shadow-lg"
            >
              {/* Feature Image */}
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  style={{ color: '#192B39' }}
                  className="group-hover:text-cyan-300 transition-colors flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-slate-400 text-sm mb-6">{feature.description}</p>

              {/* What's Included */}
              <div className="border-t border-slate-300/30 pt-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 text-center">What's included:</h4>
                <ul className="space-y-2">
                  {feature.includes.map((item, i) => (
                    <li key={i} className="flex items-center justify-center gap-3 text-sm text-slate-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: '#192B39' }}>
                        {i + 1}
                      </span>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
