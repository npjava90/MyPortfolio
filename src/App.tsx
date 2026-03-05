import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashIntro } from './components/SplashIntro';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashIntro key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <main key="main" className="relative">
            <AnimatedBackground />
            <Navigation />
            <Hero />
            <Achievements />
            <Experience />
            <Skills />
            <Education />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
