import React, { useState } from 'react';
import { Terminal, Trophy, Sparkles, Activity } from 'lucide-react';

export default function Achievements() {
  const [clickCount, setClickCount] = useState(0);
  const [activeAlert, setActiveAlert] = useState(null);

  // List of achievements styled like SIEM alert logs
  const achievements = [
    {
      time: '2026.04.12',
      severity: 'CRITICAL',
      color: 'text-cyber-green bg-cyber-green/5 border-cyber-green/30',
      tag: 'CTF_WIN',
      description: 'Secured 2nd Position in "Hackers Heist" Capture The Flag (CTF) tournament.',
      details: 'Competed in jeopardy-style security challenges covering cryptanalysis, binary exploitation, and reverse engineering.'
    },
    {
      time: '2025.11.18',
      severity: 'CRITICAL',
      color: 'text-cyber-green bg-cyber-green/5 border-cyber-green/30',
      tag: 'CTF_WIN',
      description: 'Secured 2nd Position in "Hicathon" CTF hosted at Symbiosis Pune.',
      details: 'Participated in a 24-hour hackathon-CTF framework solving advanced digital forensics, steganography, and Linux privilege escalation vectors.'
    },
    {
      time: '2025.09.05',
      severity: 'HIGH',
      color: 'text-cyber-cyan bg-cyber-cyan/5 border-cyber-cyan/30',
      tag: 'CTF_DEV',
      description: 'Served as Core Technical Team Member for EncipherX CTF.',
      details: 'Handled challenge deployment pipelines, designed OSINT frameworks, and analyzed user logs for rule auditing.'
    },
    {
      time: '2025.03.22',
      severity: 'HIGH',
      color: 'text-cyber-cyan bg-cyber-cyan/5 border-cyber-cyan/30',
      tag: 'REGIONAL_IMPACT',
      description: 'Contributed to launching one of the first major CTF platforms in the Vidarbha region.',
      details: 'Pioneered regional cyber challenges to encourage B.Tech and technical students to learn ethical hacking systems.'
    },
    {
      time: '2025.02.10',
      severity: 'INFO',
      color: 'text-cyber-purple bg-cyber-purple/5 border-cyber-purple/30',
      tag: 'ATHLETICS',
      description: 'Earned 3rd place in RTMNU University Table Tennis Tournament.',
      details: 'Represented St. Vincent Pallotti college in regional tournaments, showcasing focus, agility, and team leadership.'
    },
    {
      time: '2024.12.15',
      severity: 'INFO',
      color: 'text-cyber-purple bg-cyber-purple/5 border-cyber-purple/30',
      tag: 'ATHLETICS',
      description: 'Won 1st place in Insight Open Sports Table Tennis Championship.',
      details: 'Commanded the championship bracket, demonstrating high reflexes, endurance, and precise coordination.'
    }
  ];

  const handleRowClick = (index) => {
    setActiveAlert(index);
    setClickCount((prev) => prev + 1);

    // Simple temporary particle animation overlay on trigger
    const rowEl = document.getElementById(`ach-row-${index}`);
    if (rowEl) {
      // Emit short terminal-like log notification
      console.log(`[SECURE_MONITOR] Auditing Incident Log #${index}... Integrity Approved.`);
    }
  };

  return (
    <section id="achievements" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-cyber-green font-mono text-xs mb-2">
            <span>[SECTION_05]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-slate-100 flex items-center gap-3">
            <span className="text-cyber-green font-mono font-normal">&gt; </span>./siem_alerts_ledger
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-green to-transparent mt-2"></div>
        </div>

        {/* SOC Board Container */}
        <div className="cyber-card rounded-lg overflow-hidden flex flex-col border border-slate-800">
          
          {/* SOC Header Console */}
          <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800 flex flex-wrap gap-4 items-center justify-between font-mono text-xs text-left">
            <div className="flex items-center gap-2.5">
              <Activity className="h-4 w-4 text-cyber-green animate-pulse" />
              <span className="font-bold text-slate-200">SIEM LOG CONSOLE v1.2</span>
            </div>
            <div className="flex gap-4 text-slate-500 text-[10px] sm:text-xs">
              <span>STATUS: MONITORING</span>
              <span>|</span>
              <span>FILTER: HIGH_PRIORITY</span>
              <span>|</span>
              <span>ALERTS: {clickCount} CHECKED</span>
            </div>
          </div>

          {/* SOC Table Rows */}
          <div className="divide-y divide-slate-900/60 overflow-x-auto w-full">
            <table className="w-full text-left font-mono text-xs min-w-[700px]">
              <thead>
                <tr className="bg-slate-950/40 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-900 select-none">
                  <th className="py-3 px-6">Timestamp</th>
                  <th className="py-3 px-6">Severity</th>
                  <th className="py-3 px-6">Domain</th>
                  <th className="py-3 px-6">Incident Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60">
                {achievements.map((ach, idx) => (
                  <React.Fragment key={idx}>
                    <tr
                      id={`ach-row-${idx}`}
                      onClick={() => handleRowClick(idx)}
                      className={`hover:bg-slate-900/30 cursor-pointer transition-colors duration-150 ${
                        activeAlert === idx ? 'bg-slate-900/40' : ''
                      }`}
                    >
                      <td className="py-4 px-6 text-slate-400 font-bold whitespace-nowrap">{ach.time}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-0.5 rounded border text-[10px] font-bold select-none ${ach.color}`}>
                          {ach.severity}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-cyber-cyan whitespace-nowrap">{ach.tag}</td>
                      <td className="py-4 px-6 text-slate-300 font-sans text-sm pr-12 flex justify-between items-center">
                        <span>{ach.description}</span>
                        <Trophy className="h-4 w-4 text-cyber-amber flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity ml-4" />
                      </td>
                    </tr>
                    
                    {/* Expandable incident detail log */}
                    {activeAlert === idx && (
                      <tr className="bg-slate-950/80">
                        <td colSpan="4" className="py-3 px-8 text-left border-l-2 border-l-cyber-cyan animate-fadeIn text-[10px] text-slate-400">
                          <div className="flex gap-2 items-center text-cyber-cyan font-bold mb-1 border-b border-slate-900 pb-1.5">
                            <Terminal className="h-3 w-3" />
                            <span>INCIDENT REPORT SUMMARY - ID #{idx}</span>
                          </div>
                          <div className="font-sans text-xs text-slate-300 mt-1 pl-4">
                            {ach.details}
                          </div>
                          <div className="font-mono text-[9px] text-slate-500 mt-2 pl-4">
                            HASH_INTEGRITY: SHA256 APPROVED | RESPONSE_PLAN: PERSIST_ON_PORTFOLIO
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
