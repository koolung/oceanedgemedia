import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Magical Memories Rentals',
    role: 'Business Owner',
    content: 'Working with Ocean Edge Media has been an absolute game-changer for our business! Her expertise, dedication and attention to detail have been invaluable. She goes above and beyond to ensure our content is engaging, on-trend, and aligned with our goals. More importantly, she is an absolute pleasure to work with - professional, responsible, and truly invested in our success! We highly recommend Ocean and Maritime Social Solutions to anyone looking to elevate their digital presence. She is a true asset, and we are beyond grateful for all her hard work!',
    logo: '/images/partners/mmr.jpg',
  },
  {
    name: 'Rachelle Uveges',
    role: 'Business Owner',
    content: 'Ocean Edge Media did a wonderful job of creating content that is specific to my business and connects with my target audience. They took the time to understand my brand, message and goals and quickly delivered quality content that makes a real impact (and makes my job much easier!). Quick to respond, attentive to detail and lovely to work with!',
    logo: '/images/partners/ru.jpg',
  },
  {
    name: 'Henman Properties',
    role: 'Property Management',
    content: 'Working with Ocean on our property management website was a game-changer. She\'s incredibly knowledgeable in website design, fast, efficient, and-most importantly-patient with all my indecisiveness. She made the process smooth and stress-free. On top of that, her services are very affordable. Highly recommend her for anyone looking to build a professional site without the headache!',
    logo: '/images/partners/henman.jpg',
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
              className="bg-white p-8 rounded-xl hover-glow shadow-lg"
            >
              {/* Logo */}
              <div className="relative w-16 h-16 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 text-sm leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-slate-400 text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
