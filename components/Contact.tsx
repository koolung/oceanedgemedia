import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      setStatus({ type: 'error', message: 'reCAPTCHA not ready. Please try again.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending...' });

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('contact_form');

      // Submit form
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.message || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again.' 
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="glass-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="glass-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="glass-sm w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="glass-sm w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white/5 resize-none"
          />

          {status.message && (
            <div
              className={`px-4 py-3 rounded-lg text-center ${
                status.type === 'success'
                  ? 'bg-green-500/20'
                  : status.type === 'error'
                  ? 'bg-red-500/20 text-red-300'
                  : 'bg-blue-500/20 text-blue-300'
              }`}
              style={status.type === 'success' ? { color: 'rgb(73 73 73)' } : undefined}
            >
              {status.message}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full px-6 py-3 rounded-lg font-semibold hover-glow text-white disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#192B39' }}
          >
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
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
