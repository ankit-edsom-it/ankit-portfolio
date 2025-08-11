'use client'
import { motion } from 'framer-motion';

export default function ExperienceCard({ exp }) {
  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-l-4 border-l-sky-500 relative overflow-hidden group"
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 15px 30px rgba(14, 165, 233, 0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Background Accent */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-600"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      />
      
      {/* Content */}
      <motion.div 
        className="flex items-baseline justify-between flex-wrap gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.div 
            className="font-bold text-lg text-slate-800 group-hover:text-sky-700 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {exp.role}
          </motion.div>
          <motion.div 
            className="font-semibold text-sky-600 mt-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {exp.company}
          </motion.div>
          <motion.div 
            className="text-sm text-slate-500 flex items-center gap-1 mt-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📍
            </motion.span>
            {exp.location}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-sm text-slate-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {exp.duration}
        </motion.div>
      </motion.div>
      
      <motion.ul 
        className="space-y-3 text-sm text-slate-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {exp.bullets.map((bullet, index) => (
          <motion.li 
            key={index}
            className="flex items-start gap-3 group/bullet"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <motion.span
              className="text-sky-500 mt-1 flex-shrink-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.2 * (index + 1),
                type: 'spring',
                stiffness: 400
              }}
              viewport={{ once: true }}
            >
              •
            </motion.span>
            <span className="leading-relaxed group-hover/bullet:text-slate-900 transition-colors">
              {bullet}
            </span>
          </motion.li>
        ))}
      </motion.ul>
      
      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-sky-400/5 to-indigo-500/5 rounded-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
