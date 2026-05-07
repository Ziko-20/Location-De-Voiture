// Framer Motion animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  hover: { y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', transition: { duration: 0.3, ease: 'easeOut' } },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};
