import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert, Terminal as TermIcon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      const sections = ['hero', ...navLinks.map((link) => link.id)];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/85 backdrop-blur-md border-b border-cyber-cyan/20 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo / Terminal Prompt */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={(e) => handleLinkClick(e, 'hero')}>
            <ShieldAlert className="h-5 w-5 text-cyber-cyan animate-pulse-glow" />
            <div className="font-mono text-sm sm:text-base flex items-center font-bold text-slate-100">
              <span className="text-cyber-green mr-1">root@smagare:</span>
              <span className="text-cyber-cyan">~#</span>
              <span className="w-2 h-4 bg-cyber-cyan animate-caret ml-1"></span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-3 py-2 rounded-md font-mono text-xs lg:text-sm transition-all duration-200 border border-transparent ${
                  activeSection === link.id
                    ? 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/35 shadow-neon-cyan'
                    : 'text-slate-400 hover:text-cyber-cyan hover:bg-slate-900/40'
                }`}
              >
                ./{link.name}
              </a>
            ))}
          </div>

          {/* Secure Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-green/30 bg-cyber-green/5 text-cyber-green text-xs font-mono select-none">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping"></span>
            <span>SHIELD: ACTIVE</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-cyber-cyan hover:bg-slate-900/60 focus:outline-none focus:ring-1 focus:ring-cyber-cyan"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 ease-in-out border-b border-cyber-cyan/20 ${
          isOpen ? 'top-full opacity-100 visible' : 'top-[-500px] opacity-0 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-cyber-bg/95 backdrop-blur-lg shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block px-3 py-2.5 rounded-md text-base font-mono border ${
                activeSection === link.id
                  ? 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30'
                  : 'text-slate-400 border-transparent hover:text-cyber-cyan hover:bg-slate-900/60'
              }`}
            >
              ./{link.name}
            </a>
          ))}
          <div className="pt-4 px-3 flex items-center justify-between border-t border-slate-800 font-mono text-xs">
            <span className="text-slate-500">CONNECTION: SSL/TLS</span>
            <span className="text-cyber-green font-bold">SECURE ✔</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
