import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const modalContent = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h3 class="font-semibold mb-3">Privacy Policy</h3>
        <p class="mb-3">Ocean Edge Media is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
        
        <h4 class="font-semibold mt-4 mb-2">Information We Collect</h4>
        <p class="mb-3">We collect information you provide directly, such as contact details submitted through our contact form, website usage data through analytics, and cookies for site functionality.</p>
        
        <h4 class="font-semibold mt-4 mb-2">How We Use Your Information</h4>
        <p class="mb-3">Your information is used to respond to inquiries, improve our services, send marketing communications (with your consent), and comply with legal obligations.</p>
        
        <h4 class="font-semibold mt-4 mb-2">Data Protection</h4>
        <p class="mb-3">We implement appropriate security measures to protect your information from unauthorized access and misuse.</p>
        
        <h4 class="font-semibold mt-4 mb-2">Contact Us</h4>
        <p>For privacy concerns, contact us at oceanedgemedia@hotmail.com</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      content: `
        <h3 class="font-semibold mb-3">Terms of Service</h3>
        <p class="mb-3">Welcome to Ocean Edge Media. By accessing and using our website, you agree to be bound by these Terms of Service.</p>
        
        <h4 class="font-semibold mt-4 mb-2">Use License</h4>
        <p class="mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        
        <h4 class="font-semibold mt-4 mb-2">Disclaimer</h4>
        <p class="mb-3">The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        
        <h4 class="font-semibold mt-4 mb-2">Limitations</h4>
        <p class="mb-3">In no event shall Ocean Edge Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
        
        <h4 class="font-semibold mt-4 mb-2">Modifications</h4>
        <p>We may revise these terms at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
      `
    },
    contact: {
      title: 'Contact Information',
      content: `
        <h3 class="font-semibold mb-3">Get In Touch</h3>
        <p class="mb-4">We'd love to hear from you. Reach out to us through any of these channels:</p>
        
        <h4 class="font-semibold mt-4 mb-2">Email</h4>
        <p class="mb-3">oceanedgemedia@hotmail.com</p>
        
        <h4 class="font-semibold mt-4 mb-2">Social Media</h4>
        <ul class="mb-3 space-y-1">
          <li><a href="https://www.instagram.com/oceanedge_media/" class="text-cyan-400 hover:text-cyan-300">Instagram</a></li>
          <li><a href="https://www.facebook.com/profile.php?id=61574627555191" class="text-cyan-400 hover:text-cyan-300">Facebook</a></li>
          <li><a href="https://www.linkedin.com/in/ocean-pratt-3695b825a/" class="text-cyan-400 hover:text-cyan-300">LinkedIn</a></li>
        </ul>
        
        <h4 class="font-semibold mt-4 mb-2">Hours</h4>
        <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
      `
    }
  };

  const openModal = (type: string) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

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
              <li><button onClick={() => openModal('privacy')} className="hover:text-cyan-400 transition-colors text-left">Privacy</button></li>
              <li><button onClick={() => openModal('terms')} className="hover:text-cyan-400 transition-colors text-left">Terms</button></li>
              <li><button onClick={() => openModal('contact')} className="hover:text-cyan-400 transition-colors text-left">Contact</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Ocean Edge Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <button onClick={() => openModal('privacy')} className="hover:text-cyan-400 transition-colors">Privacy</button>
            <button onClick={() => openModal('terms')} className="hover:text-cyan-400 transition-colors">Terms</button>
            <button onClick={() => openModal('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
          </div>
        </div>

        {/* Modal */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold gradient-text">
                  {modalContent[activeModal as keyof typeof modalContent]?.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-600" />
                </button>
              </div>
              <div 
                className="p-6 text-slate-700 space-y-4"
                dangerouslySetInnerHTML={{
                  __html: modalContent[activeModal as keyof typeof modalContent]?.content || ''
                }}
              />
            </motion.div>
          </div>
        )}
      </div>
    </motion.footer>
  );
}
