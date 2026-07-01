import React from 'react';
import Navbar from './components/Navbar';
import CyberGrid from './components/CyberGrid';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen text-cyber-text bg-cyber-bg antialiased selection:bg-cyber-cyan/30 selection:text-cyber-cyan-neon">
      
      {/* Immersive CRT raster scanline overlay filter */}
      <div className="scanline-overlay"></div>

      {/* Dynamic drifting network-nodes backdrop */}
      <CyberGrid />

      {/* Floating high-tech navigation */}
      <Navbar />

      {/* Main dashboard contents container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <Hero />
        
        {/* Subtle glowing section boundary separator line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* ABOUT ME SECTION */}
        <About />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* SKILLS SECTION */}
        <Skills />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* PROJECTS VAULT SECTION */}
        <Projects />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* EXPERIENCE TIMELINE LEDGER */}
        <Experience />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* SIEM LOGS / ACHIEVEMENTS */}
        <Achievements />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* CERTIFICATIONS VAULT */}
        <Certifications />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* SECURE PAYLOAD DOWNLOAD RETRIEVER */}
        <Resume />

        <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* SSH-CONNECTION CONTACT FORM */}
        <Contact />

      </main>

      {/* Secured global footer */}
      <Footer />

    </div>
  );
}
