'use client'
import { motion } from 'framer-motion';

export default function SectionTitle({ children, id }) {
  return (
    <motion.h2 
      id={id} 
      className="text-3xl font-bold my-8 relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-600 rounded-full"
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      />
      
      {/* Background Glow */}
      <motion.div
        className="absolute -left-2 top-1/2 w-20 h-8 bg-gradient-to-r from-sky-400/20 to-transparent rounded-full blur-lg transform -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      />
      
      {/* Title Text */}
      <motion.span 
        className="pl-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent relative z-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.span>
      
      {/* Decorative Line */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center gap-1"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full" />
        <motion.div
          className="w-2 h-2 bg-sky-500 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.h2>
  );
}
