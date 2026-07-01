import React, { useEffect, useState } from 'react';
import { Terminal, Shield, Cpu, ChevronRight, FileText, Send, Eye } from 'lucide-react';

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Aspiring DevSecOps Engineer',
    'Cybersecurity Enthusiast',
    'CTF Challenge Developer',
    'Automation & Scripting Fan'
  ];

  // Typing effect for the animated subtitle
  useEffect(() => {
    let timer;
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedTitle(currentTitle.substring(0, typedTitle.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedTitle(currentTitle.substring(0, typedTitle.length + 1));
      }, 100);
    }

    if (!isDeleting && typedTitle === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before delete
    } else if (isDeleting && typedTitle === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, titleIndex]);

  // Terminal log commands & lines state
  const [terminalLines, setTerminalLines] = useState([]);
  const terminalSequence = [
    { text: '$ nmap -sC -sV -O -p- shashank-magare.dev', delay: 800 },
    { text: 'Starting Nmap 7.93 ( https://nmap.org ) at 2026-05-31 22:00', delay: 100 },
    { text: 'Nmap scan report for shashank-magare.dev (192.168.1.137)', delay: 150 },
    { text: 'Host is up (0.00041s latency).', delay: 100 },
    { text: 'PORT      STATE SERVICE  VERSION', delay: 100 },
    { text: '22/tcp    open  ssh      OpenSSH 8.9p1 (Secured)', delay: 150 },
    { text: '80/tcp    open  http     React/Vite Core (Port 3000)', delay: 100 },
    { text: '443/tcp   open  ssl/http Express.js Core Engine', delay: 100 },
    { text: '5432/tcp  open  db       PostgreSQL Database Server', delay: 100 },
    { text: 'OS details: Linux Kernel 5.15 - Ubuntu LTS Grid', delay: 200 },
    { text: 'Security Scan: 0 vulnerabilities detected. FIREWALL [ON]', delay: 200 },
    { text: '$ whoami', delay: 600 },
    { text: 'shashank_magare (Cybersecurity Student & Aspiring DevSecOps)', delay: 150 },
    { text: '$ fetch --status stats', delay: 800 },
    { text: '⚡ SYSTEMS OPERATIONAL | AUTOMATION IN PROGRESS...', delay: 100 }
  ];

  useEffect(() => {
    let lineIdx = 0;
    let sequenceTimer;

    const addNextLine = () => {
      if (lineIdx < terminalSequence.length) {
        setTerminalLines((prev) => [...prev, terminalSequence[lineIdx]]);
        sequenceTimer = setTimeout(() => {
          lineIdx++;
          addNextLine();
        }, terminalSequence[lineIdx]?.delay || 300);
      } else {
        // Loop terminal logs after a 5s delay
        sequenceTimer = setTimeout(() => {
          setTerminalLines([]);
          lineIdx = 0;
          addNextLine();
        }, 6000);
      }
    };

    addNextLine();
    return () => clearTimeout(sequenceTimer);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Typographic Hero Text Block */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Faint high-tech alert badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-md border border-cyber-cyan/35 bg-cyber-cyan/5 text-cyber-cyan font-mono text-xs shadow-neon-cyan animate-pulse">
            <Shield className="h-4 w-4 text-cyber-cyan" />
            <span>AUTHENTICATED SECURE SESSION</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-sans tracking-tight leading-none text-slate-100">
              Shashank <span className="bg-gradient-to-r from-cyber-cyan via-cyber-green to-cyber-purple bg-clip-text text-transparent">Magare</span>
            </h1>
            <div className="font-mono text-base sm:text-xl md:text-2xl text-cyber-cyan flex items-center h-8">
              <span>&gt; </span>
              <span className="ml-2 font-bold text-slate-200">{typedTitle}</span>
              <span className="w-1.5 h-5 bg-cyber-cyan animate-caret ml-1"></span>
            </div>
          </div>

          <p className="text-slate-400 text-sm sm:text-lg max-w-xl font-sans font-light leading-relaxed">
            "Building secure, scalable, and automated systems." Specializing in integrating security tooling into continuous deployment pipelines and threat vector mitigations.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 pt-2 pb-4 font-mono text-xs max-w-md">
            <div className="p-3 border border-slate-800 rounded bg-slate-950/40">
              <span className="block text-cyber-cyan text-base font-bold">B.Tech CSE</span>
              <span className="text-slate-500">Cybersecurity</span>
            </div>
            <div className="p-3 border border-slate-800 rounded bg-slate-950/40">
              <span className="block text-cyber-green text-base font-bold">2026</span>
              <span className="text-slate-500">Graduation</span>
            </div>
            <div className="p-3 border border-slate-800 rounded bg-slate-950/40">
              <span className="block text-cyber-purple text-base font-bold">2+ Major</span>
              <span className="text-slate-500">CTF Podium Wins</span>
            </div>
          </div>

          {/* Call To Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3 font-mono text-sm font-bold text-slate-950 bg-cyber-cyan rounded-md border border-cyber-cyan-neon hover:bg-cyber-bg hover:text-cyber-cyan transition-all duration-300 shadow-neon-cyan active:scale-95"
            >
              <Eye className="h-4 w-4" />
              ./view_projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 font-mono text-sm font-bold text-cyber-green rounded-md border border-cyber-green/55 bg-cyber-green/5 hover:bg-cyber-green hover:text-slate-950 hover:shadow-neon-green transition-all duration-300 active:scale-95"
            >
              <FileText className="h-4 w-4" />
              ./download_resume.sh
            </a>
            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center gap-2 px-6 py-3 font-mono text-sm font-bold text-slate-400 rounded-md border border-slate-800 bg-slate-900/20 hover:text-cyber-purple hover:border-cyber-purple/55 hover:shadow-neon-purple transition-all duration-300 active:scale-95"
            >
              <Send className="h-4 w-4" />
              ./contact_me
            </button>
          </div>
        </div>

        {/* Real-time Interactive Terminal Window */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-lg rounded-lg border border-slate-800 bg-slate-950/80 shadow-2xl relative overflow-hidden font-mono text-xs text-left h-[340px] flex flex-col backdrop-blur-md">
            
            {/* Terminal Header */}
            <div className="h-8 bg-slate-900/80 border-b border-slate-800 flex items-center px-4 justify-between select-none">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-cyber-red border border-red-700/30"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-amber border border-amber-700/30"></div>
                <div className="w-3 h-3 rounded-full bg-cyber-green border border-green-700/30"></div>
              </div>
              <span className="text-slate-500 font-mono text-[10px] sm:text-xs">bash - shashank@magare-sec-box:~</span>
              <Terminal className="h-3 w-3 text-slate-500" />
            </div>

            {/* Terminal Content Lines */}
            <div className="p-4 flex-grow overflow-y-auto space-y-2 h-[calc(100%-2rem)]">
              {terminalLines.map((line, idx) => {
                const isCommand = line.text.startsWith('$');
                return (
                  <div
                    key={idx}
                    className={`leading-relaxed break-all ${
                      isCommand
                        ? 'text-cyber-cyan font-bold'
                        : line.text.includes('vulnerabilities')
                        ? 'text-cyber-green'
                        : line.text.includes('vulnerability')
                        ? 'text-cyber-red'
                        : line.text.includes('SYSTEMS OPERATIONAL')
                        ? 'text-cyber-green font-bold text-glow-green'
                        : 'text-slate-400'
                    }`}
                  >
                    {line.text}
                  </div>
                );
              })}
              {/* Blinking trailing caret */}
              <div className="flex items-center gap-1.5 text-cyber-cyan font-bold">
                <span>$ </span>
                <span className="w-2 h-4 bg-cyber-cyan animate-caret"></span>
              </div>
            </div>
            
            {/* Subtle overlay grid glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
