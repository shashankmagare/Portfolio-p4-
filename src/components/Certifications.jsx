import React, { useState } from 'react';
import { ShieldCheck, Server, Cloud, Globe, Cpu, Search, Lock, Unlock } from 'lucide-react';

export default function Certifications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [unlockedVault, setUnlockedVault] = useState({});

  // EDIT THE ARRAY BELOW TO ADD YOUR ACTUAL CERTIFICATIONS
  const certificationPlaceholder = [
    {
      id: 'cybersecurity',
      category: 'Cybersecurity',
      icon: ShieldCheck,
      color: 'text-cyber-green',
      cardClass: 'cyber-card-green',
      placeholderDesc: 'Hold for security credentials (e.g. CompTIA Security+, CEH, PJPT).',
      // To add a certificate, replace empty array with actual certification string names below
      activeCertificates: [
        'Ethical Hacking Workshop - Certified Participant',
        'Capture The Flag - Incident Assessment Certificate',
        /* 'CompTIA Security+ (Placeholder)', */
        /* 'eJPT Certified Penetration Tester (Placeholder)' */
      ]
    },
    {
      id: 'devops',
      category: 'DevOps / DevSecOps',
      icon: Server,
      color: 'text-cyber-purple',
      cardClass: 'cyber-card-purple',
      placeholderDesc: 'Hold for pipeline and deployment automation credentials (e.g. CKA, Jenkins, Docker).',
      activeCertificates: [
        'CI/CD Jenkins Automation Practitioner',
        'Docker & Containerized Infrastructure Fundamentals'
      ]
    },
    {
      id: 'cloud',
      category: 'Cloud Systems',
      icon: Cloud,
      color: 'text-cyber-cyan',
      cardClass: 'cyber-card',
      placeholderDesc: 'Hold for cloud architect and security credentials (e.g. AWS Security, Azure Security).',
      activeCertificates: [
        'AWS Cloud Architecture Core Essentials'
      ]
    },
    {
      id: 'networking',
      category: 'Networking',
      icon: Globe,
      color: 'text-cyber-cyan',
      cardClass: 'cyber-card',
      placeholderDesc: 'Hold for routing, switching, and protocol credentials (e.g. CCNA).',
      activeCertificates: [
        'Cisco Packet Tracer Network Topology Training Certificate'
      ]
    },
    {
      id: 'linux',
      category: 'Linux Admin',
      icon: Cpu,
      color: 'text-cyber-purple',
      cardClass: 'cyber-card-purple',
      placeholderDesc: 'Hold for system administration credentials (e.g. RHCSA, Linux Foundation).',
      activeCertificates: [
        'Linux System Administration & Bash Scripting Core'
      ]
    }
  ];

  const handleToggleVault = (id) => {
    setUnlockedVault((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredCerts = certificationPlaceholder.filter((cert) =>
    cert.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.activeCertificates.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="certifications" className="relative py-24 bg-slate-950/20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-2">
            <span>[SECTION_06]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-slate-100 flex items-center gap-3">
            <span className="text-cyber-cyan font-mono font-normal">&gt; </span>./certifications_vault
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-cyan to-transparent mt-2"></div>
        </div>

        {/* Filter / Search Bar */}
        <div className="max-w-md mb-12">
          <div className="relative font-mono text-xs">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="grep -i 'query' cert_database.db..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyber-cyan rounded-md pl-10 pr-4 py-3 text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyber-cyan placeholder-slate-600 transition-colors"
            />
          </div>
        </div>

        {/* Vault Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const Icon = cert.icon;
            const isUnlocked = unlockedVault[cert.id];
            return (
              <div
                key={cert.id}
                className={`${cert.cardClass} p-6 rounded-lg flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 select-none">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${cert.color}`} />
                      <h3 className="font-sans text-sm font-bold text-slate-200">{cert.category}</h3>
                    </div>

                    {/* Vault lock status */}
                    <button
                      onClick={() => handleToggleVault(cert.id)}
                      className={`p-1.5 rounded border border-slate-800 bg-slate-950 transition-colors ${
                        isUnlocked ? 'text-cyber-green hover:text-cyber-red' : 'text-slate-500 hover:text-cyber-cyan'
                      }`}
                      title={isUnlocked ? 'Lock Vault' : 'Decrypt Vault'}
                    >
                      {isUnlocked ? <Unlock className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5 animate-pulse" />}
                    </button>
                  </div>

                  {/* Cert list (only displays if unlocked, otherwise showing crypted interface) */}
                  {isUnlocked ? (
                    <div className="space-y-3 py-2 text-left font-mono">
                      {cert.activeCertificates.length > 0 ? (
                        cert.activeCertificates.map((active, cIdx) => (
                          <div key={cIdx} className="flex gap-2 items-start text-xs text-slate-300">
                            <span className="text-cyber-green font-bold">[✔]</span>
                            <span>{active}</span>
                          </div>
                        ))
                      ) : (
                        <div className="text-[11px] text-slate-500 leading-normal">
                          No active certificates loaded. Please edit the `/src/components/Certifications.jsx` file to populate.
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Encrypted placeholder state */
                    <div className="py-4 text-left font-mono select-none">
                      <div className="text-[10px] text-slate-600 leading-relaxed font-bold break-all">
                        SYSTEM_VAULT_HASH: 0x{cert.id.substring(0, 4)}A39EFB{cert.id.length}C
                      </div>
                      <div className="text-xs text-slate-400 font-sans mt-2 leading-relaxed">
                        {cert.placeholderDesc}
                      </div>
                      <div
                        onClick={() => handleToggleVault(cert.id)}
                        className="text-[10px] text-cyber-cyan mt-4 cursor-pointer hover:underline flex items-center gap-1.5"
                      >
                        <span>&gt; Click padlock to decrypt credential payload.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Vault status footer */}
                <div className="mt-6 border-t border-slate-900/60 pt-3 flex justify-between items-center text-[9px] text-slate-600 font-mono">
                  <span>VAULT: {cert.id.toUpperCase()}</span>
                  <span className={isUnlocked ? 'text-cyber-green' : 'text-cyber-amber'}>
                    {isUnlocked ? 'STATUS: DECRYPTED' : 'STATUS: ENCRYPTED'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
