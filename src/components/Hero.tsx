import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-widest uppercase mb-6">
            Available for Opportunities
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight mb-6 leading-[0.9]">
            {basics.name.split(' ')[0]} <br />
            <span className="text-white/40">{basics.name.split(' ')[1]}</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mb-10 leading-relaxed">
            {basics.label}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-emerald-400 transition-colors"
            >
              View Experience <ArrowDown size={18} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Download Resume <Download size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
      </motion.div>
    </section>
  );
};
