import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LogoAnimationSplash() {
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldExit(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -1000 }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: '#06242d' }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 flex items-center justify-center"
          >
            <Image
              src="/images/logo_animation.gif"
              alt="Ocean Edge Media Logo Animation"
              width={256}
              height={256}
              priority
              unoptimized // Required for GIF
              className="w-full h-full pointer-events-none"
              style={{ animation: 'none' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
