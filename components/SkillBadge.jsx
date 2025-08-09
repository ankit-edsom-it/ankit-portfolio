'use client'
import { motion } from 'framer-motion';

export default function SkillBadge({ text }) {
  return (
    <motion.span 
      className="px-4 py-2 bg-gradient-to-r from-white to-sky-50 rounded-full shadow-md text-sm font-medium border border-sky-100 relative overflow-hidden group cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 8px 25px rgba(14, 165, 233, 0.2)',
        borderColor: 'rgb(14, 165, 233)'
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-indigo-500/10 rounded-full opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Text */}
      <span className="relative z-10 text-slate-700 group-hover:text-sky-700 transition-colors">
        {text}
      </span>
      
      {/* Floating Particles Effect */}
      <motion.div
        className="absolute top-1 right-1 w-1 h-1 bg-sky-400 rounded-full opacity-0"
        whileHover={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          y: [-10, -20, -30]
        }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-2 right-3 w-0.5 h-0.5 bg-indigo-400 rounded-full opacity-0"
        whileHover={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          y: [-5, -15, -25]
        }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
      />
    </motion.span>
  );
}
