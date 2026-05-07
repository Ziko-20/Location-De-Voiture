import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export default function AnimatedContainer({ children, className = '', delay = 0, stagger = true }) {
  return (
    <motion.div
      variants={stagger ? staggerContainer : fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
