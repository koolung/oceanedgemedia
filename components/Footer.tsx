import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-700 glass py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Ocean Edge Media</h3>
            <p className="text-slate-400 text-sm">
              Your trusted digital partner for web design, logo design, and social media marketing.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Logo Design</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Social Media</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Ocean Edge Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
