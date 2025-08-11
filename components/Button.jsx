'use client'
import { motion } from 'framer-motion';

export default function Button({ children, variant='solid', as='button', ...props }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden';
  const solid = 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white hover:from-sky-700 hover:to-indigo-700 shadow-lg hover:shadow-xl';
  const ghost = 'bg-transparent border-2 border-sky-600 text-sky-600 hover:bg-sky-50 hover:border-sky-700';
  const cls = [base, variant === 'solid' ? solid : ghost].join(' ');
  const Component = motion[as] || motion.button;
  
  return (
    <Component 
      className={cls}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'solid' 
          ? '0 10px 25px rgba(14, 165, 233, 0.3)' 
          : '0 5px 15px rgba(14, 165, 233, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
      
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8 }}
      />
    </Component>
  );
}
