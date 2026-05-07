import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-gold-500 hover:bg-gold-600 text-white shadow-gold hover:shadow-gold-lg',
  secondary: 'border-2 border-gold-500 text-gold-600 dark:text-gold-400 hover:bg-gold-500 hover:text-white',
  dark: 'bg-dark-800 dark:bg-white text-white dark:text-dark-900 hover:bg-dark-700',
  ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600',
  danger: 'bg-crimson-500 hover:bg-crimson-600 text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconRight,
  disabled,
  loading,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : icon}
      {children}
      {iconRight}
    </motion.button>
  );
}
