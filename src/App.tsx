import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import HeroBox from './components/HeroBox'; 
import Footer from './components/footerm'; 


function App() {
  const [showHero, setShowHero] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showHero && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showHero]);

  return (
    <div className="bg-black text-white font-poppins">
      <Navbar onSeeProjects={() => setShowHero(false)} />

      {showHero && (
        <>
          <Hero onSeeProjects={() => setShowHero(false)} />
        </>
      )}

      <div ref={contentRef} className="pt-16">
        <Projects />
        <Team />
        <Contact onSeeProjects={() => setShowHero(false)} />
        <FAQ />
        <HeroBox /> {/* ✅ أضف المربع الجميل هنا */}
        <Footer /> {/* ✅ أضف المربع الجميل هنا */}

      </div>
    </div>
  );
}

export default App;
