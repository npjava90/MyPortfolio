import React from 'react';
import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(resumeData.skills.map(s => s.category)));

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">03. Technical Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Skills & Expertise</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <h4 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-6">{cat}</h4>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills
                  .filter(s => s.category === cat)
                  .map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
