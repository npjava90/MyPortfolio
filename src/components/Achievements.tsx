import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Award, Zap } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "12+ Years Experience",
      description: "Extensive background in banking technology and distributed systems.",
      icon: <Star className="text-emerald-500" />,
      metric: "12+"
    },
    {
      title: "Best Financial IT Team",
      description: "Recognized for excellence in financial technology solutions.",
      icon: <Trophy className="text-emerald-500" />,
      metric: "Award"
    },
    {
      title: "Immediate Joiner",
      description: "Ready to contribute and lead from day one.",
      icon: <Zap className="text-emerald-500" />,
      metric: "Ready"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">02. Impact & Recognition</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                {item.icon}
              </div>
              
              <div className="mb-6 w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                {item.icon}
              </div>
              
              <div className="text-4xl font-bold text-white mb-2 tracking-tighter">
                {item.metric}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-white/50 leading-relaxed">{item.description}</p>
              
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  <Award size={14} /> Verified Achievement
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl border border-white/5 bg-gradient-to-r from-emerald-500/5 to-transparent flex flex-wrap items-center justify-center gap-8"
        >
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Core Focus:</span>
          {resumeData.focusAreas.slice(0, 3).map((area, i) => (
            <div key={i} className="flex items-center gap-2 text-white/80 font-medium">
              <div className="w-1 h-1 rounded-full bg-emerald-500" />
              {area}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
