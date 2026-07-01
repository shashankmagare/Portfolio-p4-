import React from 'react';
import { Code2, ShieldAlert, GitBranch, Share2, Wrench, Globe } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      status: 'ACTIVE',
      icon: Code2,
      colorClass: 'cyber-card',
      borderColorClass: 'border-cyber-cyan/20',
      glowColor: 'text-cyber-cyan',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Cybersecurity',
      status: 'SHIELDED',
      icon: ShieldAlert,
      colorClass: 'cyber-card-green',
      borderColorClass: 'border-cyber-green/20',
      glowColor: 'text-cyber-green',
      skills: ['Digital Forensics', 'CTF Challenge Dev', 'Web Security', 'Network Security', 'Vulnerability Assessment', 'Linux Security']
    },
    {
      title: 'DevOps / DevSecOps',
      status: 'COMPILED',
      icon: GitBranch,
      colorClass: 'cyber-card-purple',
      borderColorClass: 'border-cyber-purple/20',
      glowColor: 'text-cyber-purple',
      skills: ['Linux', 'Git & GitHub', 'Docker', 'CI/CD Pipelines', 'Jenkins', 'GitHub Actions', 'Cloud Basics', 'Automation', 'Monitoring', 'Security Scanning']
    },
    {
      title: 'Networking',
      status: 'ROUTING',
      icon: Share2,
      colorClass: 'cyber-card',
      borderColorClass: 'border-cyber-cyan/20',
      glowColor: 'text-cyber-cyan',
      skills: ['TCP/IP Suite', 'VLAN Config', 'OSPF & RIP', 'ACL Rules', 'VPN Tunnels', 'Cisco Packet Tracer', 'Routing & Switching']
    },
    {
      title: 'Security Tools',
      status: 'EQUIPPED',
      icon: Wrench,
      colorClass: 'cyber-card-green',
      borderColorClass: 'border-cyber-green/20',
      glowColor: 'text-cyber-green',
      skills: ['Kali Linux', 'Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'FTK Imager', 'Autopsy', 'ExifTool', 'Snort IDS', 'VS Code']
    },
    {
      title: 'Web Development',
      status: 'ONLINE',
      icon: Globe,
      colorClass: 'cyber-card-purple',
      borderColorClass: 'border-cyber-purple/20',
      glowColor: 'text-cyber-purple',
      skills: ['React', 'Vite', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-950/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-cyber-green font-mono text-xs mb-2">
            <span>[SECTION_02]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-slate-100 flex items-center gap-3">
            <span className="text-cyber-green font-mono font-normal">&gt; </span>./skills_matrices
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-green to-transparent mt-2"></div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`${category.colorClass} p-6 rounded-lg flex flex-col justify-between`}
              >
                {/* Header info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${category.glowColor}`} />
                      <h3 className="font-mono text-sm font-bold text-slate-200">{category.title}</h3>
                    </div>
                    
                    {/* Status Badge */}
                    <span className={`font-mono text-[9px] px-2 py-0.5 rounded border border-slate-800/60 flex items-center gap-1.5 select-none ${
                      category.status === 'ACTIVE' || category.status === 'ONLINE' || category.status === 'SHIELDED'
                        ? 'text-cyber-green bg-cyber-green/5'
                        : 'text-cyber-cyan bg-cyber-cyan/5'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                        category.status === 'ACTIVE' || category.status === 'ONLINE' || category.status === 'SHIELDED'
                          ? 'bg-cyber-green animate-pulse'
                          : 'bg-cyber-cyan animate-pulse'
                      }`}></span>
                      {category.status}
                    </span>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`font-mono text-xs px-2.5 py-1 rounded bg-slate-950/60 border border-slate-800/60 text-slate-400 hover:text-slate-200 hover:border-slate-700/80 transition-all duration-150`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative diagnostics line */}
                <div className="mt-6 border-t border-slate-900/60 pt-3 flex justify-between items-center text-[9px] text-slate-600 font-mono">
                  <span>INTEGRITY_CHECK OK</span>
                  <span>VER_2026.0</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
