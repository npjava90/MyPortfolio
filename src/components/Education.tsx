import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">04. Foundation</h2>
              <h3 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <GraduationCap className="text-emerald-500" /> Education
              </h3>
            </motion.div>

            <div className="space-y-8">
              {resumeData.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-6 border-l border-white/10"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="text-xs font-mono text-white/40 mb-1">{edu.startDate} — {edu.endDate}</div>
                  <h4 className="text-lg font-bold text-white mb-1">{edu.institution}</h4>
                  <p className="text-white/60 text-sm">{edu.studyType}</p>
                  <p className="text-white/40 text-xs mt-1">{edu.area}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">05. Continuous Learning</h2>
              <h3 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <Award className="text-emerald-500" /> Certifications
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 gap-4">
              {resumeData.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/20 transition-colors flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Award size={16} className="text-emerald-500" />
                  </div>
                  <span className="text-sm text-white/70 font-medium leading-tight">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
