'use client'
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.article 
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-sky-100 relative overflow-hidden group"
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 40px rgba(14, 165, 233, 0.15)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      
      {/* Corner Accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sky-400/10 to-transparent rounded-bl-3xl"
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
      
      <div className="relative z-10">
        <motion.h3 
          className="font-bold text-xl text-slate-800 mb-3 group-hover:text-sky-700 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-slate-600 leading-relaxed mb-4 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {project.desc}
        </motion.p>
        
        <motion.div 
          className="pt-2 border-t border-sky-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href={project.repo} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 font-medium transition-colors group/link"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.span
              className="text-lg"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔗
            </motion.span>
            <span>View on GitHub</span>
            <motion.span
              className="ml-1 transition-transform group-hover/link:translate-x-1"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-xl opacity-0 blur-lg"
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
}
