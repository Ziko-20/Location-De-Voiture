import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_URL } from '../../utils/constants';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping" />
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl transition-colors duration-200"
        aria-label="Contact WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
}
