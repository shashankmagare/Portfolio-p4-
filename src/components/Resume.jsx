import React, { useState } from 'react';
import { FileText, ShieldAlert, Cpu, Download } from 'lucide-react';

export default function Resume() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanLogs, setScanLogs] = useState([]);

  const handleDownload = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanProgress(0);
    setScanLogs(['[+] Establishing secure download tunnel...', '[+] Verifying file signature (resume.pdf)...']);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setScanProgress(progress);

      if (progress === 40) {
        setScanLogs((prev) => [...prev, '[+] Checking SHA-256 integrity hash... APPROVED.']);
      } else if (progress === 80) {
        setScanLogs((prev) => [...prev, '[+] Bypass sandbox filters... ALLOWED.']);
      } else if (progress === 100) {
        setScanLogs((prev) => [...prev, '[+] Download channel established. Dispatched payload!']);
        clearInterval(interval);
        
        // Trigger actual download trigger after brief pause
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '/resume.pdf';
          link.download = 'Shashank_Magare_Resume.pdf';
          link.click();
          
          setIsScanning(false);
        }, 600);
      }
    }, 300);
  };

  return (
    <section id="resume" className="relative py-24 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="cyber-card p-8 rounded-lg flex flex-col md:flex-row items-center gap-8 border border-slate-800 text-left relative overflow-hidden">
          
          {/* Faint high-tech side watermark */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none select-none">
            <Cpu className="w-64 h-64 text-cyber-cyan" />
          </div>

          {/* Left panel: Info */}
          <div className="md:w-3/5 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyber-green/5 border border-cyber-green/30 text-cyber-green font-mono text-[10px] select-none">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>SECURE PAYLOAD ACCESS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-slate-100">
              Review My Credentials
            </h2>
            
            <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
              Download my complete professional CV detailing my academic milestones, CTF track record, digital forensics methodologies, and security tools configurations.
            </p>

            <div className="pt-2">
              <button
                onClick={handleDownload}
                disabled={isScanning}
                className="flex items-center gap-2 px-6 py-3.5 font-mono text-sm font-bold text-slate-950 bg-cyber-green rounded-md border border-cyber-green-neon hover:bg-cyber-bg hover:text-cyber-green transition-all duration-300 shadow-neon-green active:scale-95 disabled:opacity-50 disabled:scale-100"
              >
                <Download className="h-4.5 w-4.5" />
                {isScanning ? './fetching_payload...' : './get_resume.sh'}
              </button>
            </div>
          </div>

          {/* Right panel: Live payload download scan log emulator */}
          <div className="w-full md:w-2/5 flex flex-col">
            <div className="w-full rounded border border-slate-800 bg-slate-950/90 p-4 font-mono text-[10px] h-[155px] flex flex-col justify-between">
              
              {/* Box header */}
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-900 pb-2 mb-2 select-none">
                <span>PAYLOAD RETRIEVAL LOG</span>
                <Cpu className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* Progress and Logs container */}
              {isScanning ? (
                <div className="flex-grow flex flex-col justify-between text-left">
                  <div className="space-y-1 overflow-y-auto max-h-[85px]">
                    {scanLogs.map((log, idx) => (
                      <div key={idx} className="text-cyber-cyan leading-tight break-all">
                        {log}
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress bar container */}
                  <div className="space-y-1 pt-2">
                    <div className="flex justify-between text-[8px] text-slate-500 select-none">
                      <span>RETRIEVING...</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyber-green transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Static idle state */
                <div className="flex-grow flex flex-col justify-center text-center text-slate-500 space-y-1 select-none">
                  <FileText className="h-8 w-8 mx-auto text-slate-700" />
                  <span className="text-[9px] uppercase tracking-wider">Vault channel: IDLE</span>
                  <span className="text-[8px] text-slate-600">Awaiting secure request credentials...</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
