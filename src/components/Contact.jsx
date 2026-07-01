import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, ShieldCheck, Send, Terminal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sshLogs, setSshLogs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || isSending) return;

    setIsSending(true);
    setSshLogs(['$ ssh magareshashank@gmail.com -p 465', 'Establishing secure SSH connection tunnel...']);

    // Log simulation steps
    setTimeout(() => {
      setSshLogs((prev) => [...prev, 'Connection established. Handshaking TLS keys...']);
    }, 500);

    setTimeout(() => {
      setSshLogs((prev) => [...prev, 'Encoding SMTP payload (RSA-2048 Cipher Suite)...']);
    }, 1100);

    setTimeout(() => {
      setSshLogs((prev) => [...prev, `Encrypted package dispatched from: ${formData.email}`]);
    }, 1800);

    setTimeout(() => {
      setSshLogs((prev) => [...prev, 'SUCCESS: Encrypted message delivered successfully!']);
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-cyber-purple font-mono text-xs mb-2">
            <span>[SECTION_07]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple animate-ping"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-slate-100 flex items-center gap-3">
            <span className="text-cyber-purple font-mono font-normal">&gt; </span>./establish_connection
          </h2>
          <div className="h-0.5 w-20 bg-gradient-to-r from-cyber-purple to-transparent mt-2"></div>
        </div>

        {/* Contact panel grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Info & links (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="cyber-card-purple p-6 md:p-8 rounded-lg h-full flex flex-col justify-between text-left">
              
              <div className="space-y-6">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6 select-none font-mono text-[10px] text-slate-500">
                  <span>ADDRESS_RESOLVER: ESTABLISHED</span>
                </div>

                <h3 className="font-sans text-xl font-bold text-slate-100">
                  Secure Communication Hub
                </h3>
                
                <p className="text-slate-400 font-sans text-sm leading-relaxed">
                  Have a vulnerability audit, infrastructure automation pipeline, or development project? Reach out through this encrypted terminal link.
                </p>

                {/* Info Items */}
                <div className="space-y-4 pt-4 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-cyber-purple">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500">EMAIL LINK</span>
                      <a href="mailto:magareshashank@gmail.com" className="hover:text-cyber-purple hover:underline">
                        magareshashank@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-cyber-cyan">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500">LINKEDIN PROFILE</span>
                      <a href="https://www.linkedin.com/in/shashank-magare" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-cyan hover:underline break-all">
                        linkedin.com/in/shashank-magare
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      <Github className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500">GITHUB REPOSITORY</span>
                      <a href="#" className="hover:text-slate-200 hover:underline">
                        github.com/shashank-magare
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800 text-cyber-green">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500">LOCATION COORDINATES</span>
                      <span className="text-slate-400">Nagpur, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrity status footer */}
              <div className="mt-8 border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-600 font-mono">
                <span>DNS: magareshashank.gmail</span>
                <span>STATE: LISTENING</span>
              </div>

            </div>
          </div>

          {/* Right panel: SSH contact form UI (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="cyber-card p-6 md:p-8 rounded-lg h-full flex flex-col justify-between border border-slate-800 relative">
              
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Form header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 select-none font-mono text-[10px] text-slate-500">
                  <span>DISPATCH_SHELL: ACTIVE</span>
                  <ShieldCheck className="h-4.5 w-4.5 text-cyber-cyan" />
                </div>

                {/* Name */}
                <div className="space-y-1 font-mono text-xs">
                  <label htmlFor="name" className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    $ Enter Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSending}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyber-cyan rounded p-2.5 text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyber-cyan placeholder-slate-700 transition-colors font-sans"
                    placeholder="E.g. Hacker Recruiter"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1 font-mono text-xs">
                  <label htmlFor="email" className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    $ Enter SMTP Sender Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSending}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyber-cyan rounded p-2.5 text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyber-cyan placeholder-slate-700 transition-colors font-sans"
                    placeholder="recruiter@cyber-corps.com"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1 font-mono text-xs">
                  <label htmlFor="message" className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    $ Enter Payload Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSending}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyber-cyan rounded p-2.5 text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyber-cyan placeholder-slate-700 transition-colors font-sans resize-none"
                    placeholder="Type encrypted transmission payload..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm font-bold text-slate-950 bg-cyber-cyan rounded-md border border-cyber-cyan-neon hover:bg-cyber-bg hover:text-cyber-cyan transition-all duration-300 shadow-neon-cyan active:scale-95 disabled:opacity-50 disabled:scale-100"
                  >
                    <Send className="h-4 w-4" />
                    {isSending ? './sending_payload...' : './dispatch_transmission.sh'}
                  </button>
                </div>
              </form>

              {/* SSH connection logs block */}
              {sshLogs.length > 0 && (
                <div className="w-full rounded border border-slate-800 bg-slate-950/95 p-3.5 mt-4 font-mono text-[9px] sm:text-[10px] text-left space-y-1 overflow-hidden min-h-[90px]">
                  <div className="flex items-center justify-between text-slate-500 border-b border-slate-900 pb-1.5 mb-1.5 select-none">
                    <span>SSH SHELL: dispatcher@smtp_relay</span>
                    <Terminal className="h-3 w-3" />
                  </div>
                  {sshLogs.map((log, logIdx) => (
                    <div
                      key={logIdx}
                      className={`leading-relaxed break-all ${
                        log.startsWith('SUCCESS')
                          ? 'text-cyber-green font-bold text-glow-green animate-pulse'
                          : log.startsWith('$')
                          ? 'text-cyber-cyan font-bold'
                          : 'text-slate-400'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                  {isSending && (
                    <div className="flex items-center gap-1.5 text-cyber-cyan">
                      <span>&gt; </span>
                      <span className="w-1.5 h-3 bg-cyber-cyan animate-caret"></span>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
