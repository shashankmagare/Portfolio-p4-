import React from 'react';
import { Cpu, Calendar, MapPin, GraduationCap, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const systemDiagnostics = [
    { label: 'Host Institution', value: 'St. Vincent Pallotti College of Engg & Tech, Nagpur', icon: GraduationCap, color: 'text-cyber-cyan' },
    { label: 'Degree / Specialization', value: 'B.Tech CSE (specialization in Cybersecurity)', icon: ShieldCheck, color: 'text-cyber-green' },
    { label: 'Location Base', value: 'Nagpur, Maharashtra, India', icon: MapPin, color: 'text-cyber-purple' },
    { label: 'Active Domains', value: 'Cybersecurity, DevOps, Automation, Networking', icon: Cpu, color: 'text-cyber-amber' },
  ];

  return (
    <section id="about" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-2">
            <span>[SECTION_01]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-slate-100 flex items-center gap-3">
            <span className="text-cyber-cyan font-mono font-normal">&gt; </span>./about_me
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-cyan to-transparent mt-2"></div>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Narrative description (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="cyber-card p-6 md:p-8 rounded-lg h-full flex flex-col justify-center space-y-6">
              
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-4 font-mono text-xs text-slate-500">
                <span>FILE: /etc/shashank/bio.md</span>
                <span>|</span>
                <span>PERMISSIONS: r--r--r--</span>
              </div>

              <div className="space-y-4 text-slate-300 font-sans leading-relaxed text-sm md:text-base">
                <p>
                  I am <strong className="text-slate-100 font-semibold">Shashank Magare</strong>, a cybersecurity and systems automation enthusiast based in Nagpur, India. Currently pursuing my <strong className="text-cyber-cyan font-medium">B.Tech in Computer Science Engineering with a specialization in Cybersecurity</strong> at St. Vincent Pallotti College of Engineering and Technology, Nagpur.
                </p>
                <p>
                  My technical core lies at the intersection of <strong className="text-cyber-green font-medium">cybersecurity, DevOps engineering, infrastructure automation, and networking</strong>. I am deeply passionate about creating secure, automated software pipelines (DevSecOps) and analyzing operational vulnerabilities.
                </p>
                <p>
                  I enjoy participating in Capture The Flag (CTF) events, testing web-app firewalls, conducting digital forensics investigations, and building modular scripts that automate infrastructure monitoring. I bring practical experience in analyzing system security, designing defensive infrastructures, and creating challenge architectures for cybersecurity forums.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-1.5 font-mono text-xs text-slate-500">
                <Heart className="h-3 w-3 text-cyber-red fill-cyber-red" />
                <span>Operational goal: Building resilient systems.</span>
              </div>

            </div>
          </div>

          {/* System info panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="cyber-card-purple p-6 rounded-lg h-full flex flex-col justify-between font-mono relative overflow-hidden">
              
              {/* Terminal Frame Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                <span className="text-xs text-cyber-purple font-bold">SYSTEM DIAGNOSTICS</span>
                <span className="text-[10px] text-slate-500">SYSTEM: Ubuntu 22.04 LTS</span>
              </div>

              {/* List of Diagnostics */}
              <div className="space-y-6 flex-grow flex flex-col justify-center">
                {systemDiagnostics.map((diag, index) => {
                  const Icon = diag.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className={`p-2 rounded bg-slate-900 border border-slate-800 ${diag.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="text-left">
                        <span className="block text-slate-500 text-[10px] uppercase tracking-wider">{diag.label}</span>
                        <span className="text-slate-200 text-xs sm:text-sm font-medium">{diag.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Decorative System Matrix */}
              <div className="mt-8 border-t border-slate-800/60 pt-4 flex justify-between items-center text-[10px] text-slate-500">
                <span>INTEGRITY CHECK: PASSED</span>
                <span className="animate-pulse text-cyber-purple">● AUTOMATION ACTIVE</span>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
