import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ChevronDown, MapPin, Calendar, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">01. Professional Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Experience</h3>
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative border rounded-2xl transition-all duration-500",
                expandedIndex === index 
                  ? "bg-white/5 border-white/20 shadow-2xl shadow-emerald-500/5" 
                  : "border-white/5 hover:border-white/10"
              )}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                    <h4 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h4>
                    {exp.duration && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                        {exp.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-white/60 font-medium mb-4">{exp.position}</p>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-white/40 font-mono">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.startDate} — {exp.endDate}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                  </div>
                </div>
                
                <div className={cn(
                  "mt-2 p-2 rounded-full bg-white/5 text-white/40 transition-transform duration-300",
                  expandedIndex === index && "rotate-180 text-emerald-500"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2">
                      <div className="h-[1px] w-full bg-white/10 mb-6" />
                      <ul className="space-y-4">
                        {exp.highlights.map((item, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-3 text-white/70 leading-relaxed"
                          >
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      
                      {exp.highlights.length === 0 && (
                        <p className="text-white/40 italic text-sm">Role details from resume focus on overall impact in {exp.company}.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
