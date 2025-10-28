import { motion } from 'framer-motion';
import { Globe, Palette, Share2, TrendingUp } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Stunning, responsive websites that convert visitors into customers.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Memorable brand identities that stand out in the market.',
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media',
    description: 'Engaging campaigns that grow your audience and boost engagement.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to elevate your online presence.',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl hover-glow group"
            >
              <motion.div
                className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
