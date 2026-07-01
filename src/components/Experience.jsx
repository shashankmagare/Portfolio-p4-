import React from 'react';
import { GitCommit, Calendar, Tag, ShieldCheck } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Technical Team Member',
      organization: 'Phoenix Cybersecurity Forum',
      duration: 'Ongoing',
      hash: '8f3c7e0',
      description: 'Active core technical member contributing to defensive infrastructure architectures, network designs, and technical planning for system configurations.'
    },
    {
      role: 'CTF Challenge Developer',
      organization: 'EncipherX',
      duration: 'Active',
      hash: '5a2d9c1',
      description: 'Designing and deploying forensics, cryptography, and OSINT challenge categories. Structuring web sandbox files and flag validation endpoints for capture-the-flag events.'
    },
    {
      role: 'Digital Forensics Domain Lead',
      organization: 'CSE Cybersecurity Department',
      duration: 'Ongoing',
      hash: 'cf7b4e2',
      description: 'Leading digital forensics research and tool audits (utilizing FTK Imager, Autopsy, ExifTool). Formulating practical guidelines for event logs, evidence indexing, and digital analysis.'
    },
    {
      role: 'CDC Student Coordinator',
      organization: 'CSE Cybersecurity Department',
      duration: 'Active Role',
      hash: '1e9a3f5',
      description: 'Orchestrating career preparation programs, coordination drives, industry interfaces, and organizing student skill alignment workshops.'
    },
    {
      role: 'Workshops & Events Organizer',
      organization: 'St. Vincent Pallotti College',
      duration: 'Various Events',
      hash: 'bd3e8a9',
      description: 'Led technical support, configured network setups, and organized multiple cybersecurity workshops and regional CTF challenge platforms in Vidarbha.'
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-950/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-cyber-purple font-mono text-xs mb-2">
            <span>[SECTION_04]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple animate-ping"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-slate-100 flex items-center gap-3">
            <span className="text-cyber-purple font-mono font-normal">&gt; </span>./experience_ledger
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-purple to-transparent mt-2"></div>
        </div>

        {/* Experience vertical timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Backbone Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-cyber-purple via-cyber-cyan to-cyber-green pointer-events-none transform -translate-x-1/2 hidden sm:block"></div>
          <div className="absolute left-4 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-cyber-purple via-cyber-cyan to-cyber-green pointer-events-none transform -translate-x-1/2 block sm:hidden"></div>

          {/* Timeline Cards mapping */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
                  
                  {/* Timeline Commit Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-slate-950 border border-cyber-cyan/50 text-cyber-cyan flex items-center justify-center transform -translate-x-1/2 z-10 shadow-neon-cyan transition-transform group-hover:scale-125">
                    <GitCommit className="h-4 w-4 text-cyber-cyan animate-pulse" />
                  </div>

                  {/* Left Side spacer/content block for desktop */}
                  <div className={`w-full sm:w-[45%] flex ${isEven ? 'sm:justify-end text-left sm:text-right' : 'sm:order-2 text-left'}`}>
                    <div className="pl-10 sm:pl-0 sm:pr-8 w-full block sm:hidden"></div> {/* Mobile padding */}
                    
                    {/* Even indexes appear on the Left for Desktop, Odd appear on the Right */}
                    {isEven && (
                      <div className="cyber-card p-5 rounded-lg border-l-2 border-l-cyber-cyan text-left w-full">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                          <span className="font-mono text-[10px] text-cyber-cyan">COMMIT {exp.hash}</span>
                          <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.duration}
                          </span>
                        </div>
                        <h3 className="font-sans text-base font-bold text-slate-200">{exp.role}</h3>
                        <span className="block font-mono text-xs text-cyber-purple font-medium mt-0.5">{exp.organization}</span>
                        <p className="text-slate-400 font-sans text-xs sm:text-sm mt-3 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Side spacer/content block for desktop */}
                  <div className={`w-full sm:w-[45%] flex ${!isEven ? 'sm:justify-start text-left' : 'text-left'}`}>
                    <div className="pl-10 sm:pl-0 sm:pr-8 w-full block sm:hidden"></div> {/* Mobile padding */}
                    
                    {!isEven && (
                      <div className="cyber-card-purple p-5 rounded-lg border-l-2 border-l-cyber-purple text-left w-full">
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                          <span className="font-mono text-[10px] text-cyber-purple">COMMIT {exp.hash}</span>
                          <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.duration}
                          </span>
                        </div>
                        <h3 className="font-sans text-base font-bold text-slate-200">{exp.role}</h3>
                        <span className="block font-mono text-xs text-cyber-cyan font-medium mt-0.5">{exp.organization}</span>
                        <p className="text-slate-400 font-sans text-xs sm:text-sm mt-3 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    )}

                    {/* Odd indexes spacing on desktop */}
                    {isEven && (
                      <div className="hidden sm:block pl-8 w-full"></div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
