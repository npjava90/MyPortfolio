import React from 'react';
import resumeData from '../data/resume.json';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-2xl font-bold text-white tracking-tighter mb-2">
            NP<span className="text-emerald-500">.</span>
          </div>
          <p className="text-white/40 text-sm font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Nisarg Pathak. All rights reserved.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {resumeData.basics.profiles.map((profile, i) => (
            <a
              key={i}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-white/40 hover:text-emerald-400 transition-colors uppercase tracking-widest"
            >
              {profile.network}
            </a>
          ))}
          <a
            href={`mailto:${resumeData.basics.email}`}
            className="text-sm font-mono text-white/40 hover:text-emerald-400 transition-colors uppercase tracking-widest"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
