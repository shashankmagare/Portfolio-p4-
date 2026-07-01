import React, { useState } from 'react';
import { Github, ExternalLink, Terminal, Shield, FolderGit2, Play, Eye } from 'lucide-react';

export default function Projects() {
  // Track active project mini-terminal simulation
  const [activeLogProject, setActiveLogProject] = useState(null);
  const [simulationLogs, setSimulationLogs] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const projectsData = [
    {
      id: 'risk-firewall',
      title: 'Risk Management Tool & Firewall GUI',
      status: 'FIREWALL ACTIVE',
      statusColor: 'text-cyber-green bg-cyber-green/5 border-cyber-green/30',
      description: 'A Windows-based network security tool designed to map active port statuses, perform risk analysis based on rule hierarchies, and print live event logs.',
      tech: ['Python', 'Tkinter GUI', 'Firewall APIs', 'Socket Prog', 'Risk-Audit'],
      github: '#',
      demo: '#',
      logs: [
        '[+] Launching Firewall GUI Wrapper...',
        '[+] Mapping local network sockets (Active Interface: 192.168.1.137)...',
        '[!] Threat Detected: Unmapped external connection attempt on Port 445.',
        '[+] Active Rule Match: Blocked inbound packets from 198.51.100.42.',
        '[+] Recalculating System Risk Score: 1.2/10 (Secure).'
      ]
    },
    {
      id: 'construction-db',
      title: 'Construction Management System',
      status: 'SECURE CLUSTER',
      statusColor: 'text-cyber-cyan bg-cyber-cyan/5 border-cyber-cyan/30',
      description: 'A comprehensive, role-based database application featuring specialized administrator/student views, optimized PostgreSQL backend tables, and React components.',
      tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
      github: '#',
      demo: '#',
      logs: [
        '[+] Handshaking database client...',
        '[+] Pool established: 10 active connections to PostgreSQL.',
        '[+] Authenticating Role: administrator (AuthToken verified).',
        '[+] QUERY SELECT * FROM projects_ledger WHERE status = \'ACTIVE\' (Time: 2.1ms).',
        '[+] Payload dispatched to Express route: /api/v1/ledger/ledger_dump.'
      ]
    },
    {
      id: 'deepfake-audio',
      title: 'Deepfake Audio Detection',
      status: 'INFERENCE ACTIVE',
      statusColor: 'text-cyber-purple bg-cyber-purple/5 border-cyber-purple/30',
      description: 'An advanced machine learning repository focused on converting raw speech signals to Mel-spectrograms and evaluating structural integrity via deep learning.',
      tech: ['Python', 'PyTorch', 'Machine Learning', 'Audio Processing', 'Mel-Spectrogram'],
      github: '#',
      demo: '#',
      logs: [
        '[+] Importing PyTorch libraries & CUDA kernels...',
        '[+] Loaded model coefficients (ResNet34 variant)...',
        '[+] Scanning payload: input_audio_sample_943.wav (16kHz PCM)...',
        '[+] Extracting Mel-spectrogram features (FFT size 2048)...',
        '[+] Output: FAKE (Confidence: 98.42% | Spectrogram Anomaly detected).'
      ]
    },
    {
      id: 'ctf-challenges',
      title: 'CTF Challenge Development',
      status: 'SANDBOX SECURE',
      statusColor: 'text-cyber-green bg-cyber-green/5 border-cyber-green/30',
      description: 'Engineered and deployed modular, custom challenges spanning digital forensics, cryptography vectors, OSINT maps, and web app vulnerabilities for major cyber events.',
      tech: ['Docker Containers', 'FTK Imager', 'OSINT', 'Linux Forensicing', 'Web Hacking'],
      github: '#',
      demo: '#',
      logs: [
        '[+] Preparing Docker Sandbox for CTF challenges...',
        '[+] Spawning challenge instance: web-injection-101...',
        '[+] Injecting hidden flag: ENCIPHERX{s3cur3_c0nt4in3r_is_up}...',
        '[+] Port forwarding container 8080 -> host 80...',
        '[+] Status check: Flag validation API active.'
      ]
    },
    {
      id: 'auto-transport',
      title: 'Auto Pickup & Drop System',
      status: 'STABLE CORE',
      statusColor: 'text-cyber-cyan bg-cyber-cyan/5 border-cyber-cyan/30',
      description: 'A smart transport tracking utility optimizing pick-up schedules, tracking auto-rickshaw availability, and rendering geo-location pathways for commuters.',
      tech: ['Java Swing/AWT', 'GPS Pathways', 'Multithreading', 'File DB', 'Network Routing'],
      github: '#',
      demo: '#',
      logs: [
        '[+] Instantiating geographic node arrays...',
        '[+] Loaded pickup hubs (Nagpur Region: 12 nodes)...',
        '[+] Dynamic Route Recalculation: Active drivers found in radius.',
        '[+] GPS Socket: Broadcasting driver_coordinates (UID: #8431)...',
        '[+] Success: Guidance payload computed (Shortest Path: RIP protocol).'
      ]
    }
  ];

  // Trigger terminal logs simulation
  const handleSimulateLogs = (project) => {
    if (isSimulating) return;
    setActiveLogProject(project.id);
    setSimulationLogs([]);
    setIsSimulating(true);

    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < project.logs.length) {
        setSimulationLogs((prev) => [...prev, project.logs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 450);
  };

  return (
    <section id="projects" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-2">
            <span>[SECTION_03]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-slate-100 flex items-center gap-3">
            <span className="text-cyber-cyan font-mono font-normal">&gt; </span>./projects_vault
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-cyan to-transparent mt-2"></div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="cyber-card p-6 rounded-lg flex flex-col justify-between h-full group"
            >
              {/* Card Contents */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="h-5 w-5 text-cyber-cyan group-hover:animate-bounce" />
                    <h3 className="font-sans text-lg font-bold text-slate-200">{project.title}</h3>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`font-mono text-[8px] sm:text-[10px] px-2 py-0.5 rounded border ${project.statusColor} select-none`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-400 font-sans text-sm text-left leading-relaxed">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-cyber-cyan"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Terminal simulator */}
              <div className="mt-6 pt-4 border-t border-slate-900/60 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 font-mono text-xs">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-800 hover:border-cyber-cyan/50 hover:bg-slate-900/40 text-slate-400 hover:text-cyber-cyan transition-all"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-800 hover:border-cyber-cyan/50 hover:bg-slate-900/40 text-slate-400 hover:text-cyber-cyan transition-all"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </div>

                  <button
                    onClick={() => handleSimulateLogs(project)}
                    disabled={isSimulating}
                    className="flex items-center gap-1 text-cyber-green bg-cyber-green/5 border border-cyber-green/30 px-3 py-1.5 rounded text-xs font-mono hover:bg-cyber-green hover:text-slate-950 transition-all active:scale-95 disabled:opacity-40 disabled:scale-100"
                  >
                    <Play className="h-3 w-3 fill-current" />
                    simulate_logs
                  </button>
                </div>

                {/* Live Console Output Box */}
                {activeLogProject === project.id && (
                  <div className="w-full rounded border border-slate-800 bg-slate-950 p-3 font-mono text-[10px] text-left space-y-1 overflow-hidden min-h-[90px] relative">
                    <div className="flex items-center justify-between text-slate-500 border-b border-slate-900 pb-1.5 mb-1.5">
                      <span>CONSOLE: {project.id}.sh</span>
                      <Terminal className="h-3 w-3" />
                    </div>
                    {simulationLogs.map((log, lIdx) => (
                      <div
                        key={lIdx}
                        className={`leading-relaxed break-all ${
                          log.startsWith('[!]')
                            ? 'text-cyber-red font-semibold'
                            : log.startsWith('[+')
                            ? 'text-cyber-cyan'
                            : 'text-slate-400'
                        }`}
                      >
                        {log}
                      </div>
                    ))}
                    {isSimulating && (
                      <div className="flex items-center gap-1 text-cyber-cyan">
                        <span>&gt; </span>
                        <span className="w-1.5 h-3 bg-cyber-cyan animate-caret"></span>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
