import React, { useState } from 'react';
import { Section } from './components/Section';
import { TerminalBlock } from './components/TerminalBlock';
import { CrtOverlay } from './components/CrtOverlay';
import { ArrowRight, Terminal, Cpu, CheckCircle2 } from './components/Icons';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    intent: '',
    failure: '',
    reality: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('sent');
      console.log('Form Submitted:', formData);
    }, 1500);
  };

  // Safe smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const systems = [
    { 
      category: "CORE COGNITION", 
      items: [
        { name: "DREAMFORGE SPINE", desc: "Core recursive reasoning & identity-binding engine. Persists state across environments.", load: 5 },
        { name: "H.E.R. SOVEREIGN CORE", desc: "Self-evolving AI OS. Handles memory, orchestration, and controlled mutation.", load: 5 },
        { name: "NEURAL RELAY", desc: "Inter-system signal routing. Decouples intelligent components for observable flow.", load: 3 },
        { name: "DO U BUDDY", desc: "Persistent AI companion layer. Designed for long-term interaction cycles.", load: 2 }
      ]
    },
    { 
      category: "OBSERVABILITY", 
      items: [
        { name: "VISUAL TELEMETRY LAYER", desc: "Event visualization & state inspection for monitoring autonomous systems.", load: 4 },
        { name: "LOCUS CONTROL", desc: "Governance logic. Determines authority, overrides, and synchronization.", load: 2 },
        { name: "NYX CONTROL NODE", desc: "Anonymity and visibility boundary monitoring infrastructure.", load: 1 }
      ]
    },
    { 
      category: "FINANCIAL EXECUTION", 
      items: [
        { name: "RED QUEEN AI", desc: "Vision-based trading analysis and control interface.", load: 4 },
        { name: "GOLD TERMINAL", desc: "Execution cockpit for monitoring and managing live trading.", load: 3 },
        { name: "OMNI-ASSET SCALPER", desc: "Automated execution system for speed and multi-asset strategy testing.", load: 3 }
      ]
    },
    { 
      category: "INFRASTRUCTURE", 
      items: [
        { name: "PING INFRASTRUCTURE", desc: "Backend routing & reliability backbone for SMS-based communication.", load: 4 },
        { name: "SMS MONEY PROTOCOL", desc: "Low-bandwidth financial rails with governance tooling.", load: 3 }
      ]
    },
    { 
      category: "CIVICS AND CHAIN", 
      items: [
        { name: "PIXELVAULT DREAMFORGE", desc: "Gamified civic engagement & contribution systems layered on infrastructure.", load: 4 },
        { name: "PVX CHAIN", desc: "Economic physics, progression systems, and persistent state modeling.", load: 3 }
      ]
    }
  ];

  const renderLoadBar = (load: number) => {
    const total = 5;
    const filled = '█'.repeat(load);
    const empty = '░'.repeat(total - load);
    // Color coding based on load
    const colorClass = load >= 4 ? 'text-sys-red' : load >= 3 ? 'text-sys-white' : 'text-sys-green';
    return <span className={`font-mono tracking-tighter ${colorClass}`}>[{filled}{empty}]</span>;
  };

  return (
    <main className="min-h-screen bg-sys-black text-sys-white font-sans selection:bg-sys-green selection:text-black overflow-x-hidden">
      <CrtOverlay />
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-40 bg-sys-black/90 backdrop-blur-sm border-b border-sys-gray/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-sys-green rounded-full"></div>
            <span>EDDIE</span>
          </div>
          <nav className="hidden md:flex gap-6 font-mono text-xs tracking-widest uppercase opacity-70">
             <a href="#what-i-do" onClick={(e) => scrollToSection(e, 'what-i-do')} className="hover:text-sys-green transition-colors cursor-pointer">What I Do</a>
             <a href="#how-i-work" onClick={(e) => scrollToSection(e, 'how-i-work')} className="hover:text-sys-green transition-colors cursor-pointer">How I Work</a>
             <a href="#systems" onClick={(e) => scrollToSection(e, 'systems')} className="hover:text-sys-green transition-colors cursor-pointer text-sys-green">Systems</a>
             <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-sys-green transition-colors cursor-pointer">Get In Touch</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[85vh] flex flex-col justify-center border-l border-sys-gray/30 border-r border-sys-gray/30 relative">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 uppercase select-none">
          {['E','D','D','I','E'].map((char, i) => (
            <span 
              key={i} 
              className="loading-bar-char" 
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <h2 className="text-2xl md:text-4xl font-mono text-sys-gray mb-8">
          Autonomous Systems Builder
        </h2>
        
        <div className="max-w-3xl space-y-8 text-lg md:text-xl font-light text-sys-white/90">
          <p className="border-l-4 border-sys-green pl-6 py-2">
            From half-formed idea to functioning infrastructure.
          </p>
          <div className="space-y-4">
            <p>
              I build real systems across software, hardware, AI, and physical space.
            </p>
            <p className="text-sys-red font-bold">
              No mock data. No theater. No permission cycles.
            </p>
          </div>
          <div className="font-mono text-sm md:text-base text-sys-white/70 pt-4 space-y-2">
             <p>If it boots, routes, and survives misuse, it ships.</p>
             <p>If it doesn’t, it gets cut until it does.</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="inline-block bg-sys-white text-sys-black px-8 py-4 font-mono font-bold hover:bg-sys-green transition-all uppercase tracking-wider cursor-pointer">
            Build the thing
          </a>
        </div>
      </div>

      {/* WHAT I DO */}
      <Section title="What I Do" id="what-i-do">
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-light mb-8">
            I turn ambiguous intent into operational reality.
          </p>
          <p className="font-mono text-sys-gray mb-6 uppercase tracking-widest text-sm">That includes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
             {[
               "Full-stack software systems",
               "AI pipelines and control layers",
               "Hardware and physical installations",
               "Trading and financial systems",
               "Governance and permission logic",
               "Documentation that reflects truth, not hope"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-3 border-b border-sys-gray/30 pb-4 pt-2 group">
                 <span className="text-sys-green font-mono mt-1 group-hover:translate-x-1 transition-transform">{`>`}</span>
                 <span className="font-mono text-sm md:text-base leading-relaxed">{item}</span>
               </div>
             ))}
          </div>
        </div>
        <div className="bg-sys-gray/10 p-8 border border-sys-gray/30">
          <p className="text-xl md:text-2xl font-light">
            I don’t hand off diagrams. <br/>
            <strong className="text-sys-white font-bold">I deliver systems that work.</strong>
          </p>
        </div>
      </Section>

      {/* HOW I WORK */}
      <Section title="How I Work" id="how-i-work">
        <div className="space-y-20">
          {/* 0. Priority Constraint */}
          <div className="group border-l-2 border-sys-green pl-6 py-2">
             <h3 className="text-2xl font-bold font-mono mb-4 text-sys-white group-hover:text-sys-green transition-colors">0. Priority Constraint</h3>
             <p className="text-xl mb-3 text-sys-white/90">Dad first. Builder always.</p>
             <div className="font-mono text-sm text-sys-gray uppercase tracking-wider space-y-1">
                <p>Time is finite. Attention is finite.</p>
                <p>Work fits inside real life, not the other way around.</p>
             </div>
          </div>

          {/* 1. Scope to Essence */}
          <div className="group">
             <h3 className="text-2xl font-bold font-mono mb-4 text-sys-white group-hover:text-sys-green transition-colors">1. Scope to Essence</h3>
             <p className="text-xl mb-3 text-sys-white/90">Anything non-essential is removed. Ruthlessly.</p>
             <p className="font-mono text-sm text-sys-gray uppercase tracking-wider">Complexity earns its place or dies.</p>
          </div>

          {/* 2. Build for Failure */}
          <div className="group">
             <h3 className="text-2xl font-bold font-mono mb-4 text-sys-white group-hover:text-sys-green transition-colors">2. Build for Failure</h3>
             <div className="text-xl mb-3 text-sys-white/90 space-y-2">
               <p>Systems are designed assuming:</p>
               <ul className="pl-6 space-y-1 font-mono text-base text-sys-red/80">
                 <li>- Scale</li>
                 <li>- Misuse</li>
                 <li>- Operator error</li>
                 <li>- Real-world mess</li>
               </ul>
             </div>
             <p className="font-mono text-sm text-sys-gray uppercase tracking-wider mt-4">If it can’t survive that, it’s not done.</p>
          </div>

          {/* 3. Integrate the Whole Stack */}
          <div className="group">
             <h3 className="text-2xl font-bold font-mono mb-4 text-sys-white group-hover:text-sys-green transition-colors">3. Integrate the Whole Stack</h3>
             <p className="text-xl mb-3 text-sys-white/90">UI, backend, logic, hardware, permissions.</p>
             <p className="font-mono text-sm text-sys-gray uppercase tracking-wider">Nothing ships half-wired.</p>
          </div>

          {/* 4. Ship Reality */}
          <div className="group">
             <h3 className="text-2xl font-bold font-mono mb-4 text-sys-white group-hover:text-sys-green transition-colors">4. Ship Reality</h3>
             <p className="text-xl mb-3 text-sys-white/90">Code that runs. Hardware that responds.</p>
             <p className="font-mono text-sm text-sys-gray uppercase tracking-wider">Docs that describe what actually exists.</p>
          </div>
        </div>
      </Section>

      {/* SYSTEMS INDEX */}
      <Section title="Systems Index" id="systems">
        <div className="space-y-12">
          <p className="text-xl font-light text-sys-white/80">
            Live index of systems. <span className="text-sys-green">All entries backed by executable code.</span>
          </p>
          
          <div className="grid grid-cols-1 gap-12">
            {systems.map((cat, i) => (
              <div key={i} className="border-t border-sys-gray/30 pt-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sys-green mb-6">{cat.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="bg-sys-gray/5 p-4 border-l border-sys-gray/20 hover:border-sys-green transition-colors group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold font-mono text-sm">{item.name}</span>
                        {renderLoadBar(item.load)}
                      </div>
                      <p className="text-xs text-sys-white/60 font-mono leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 border border-sys-red/20 bg-sys-red/5 text-xs font-mono text-sys-red/80">
            <div className="flex gap-2">
              <span className="text-lg leading-none">⚠️</span>
              <div className="space-y-1">
                <span className="font-bold block">WARNING:</span>
                <span>Concurrent system load exceeds recommended safety limits. Hibernate non-essential processes.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT I DON'T DO */}
      <Section title="What I Don't Do">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xl mb-6 font-bold text-sys-white">This matters more than what I do.</p>
            <p className="mb-4 font-mono text-sm text-sys-gray">I don't:</p>
            <div className="border-l-2 border-sys-red pl-6 py-2 my-4 bg-sys-red/5">
              <ul className="space-y-3">
                {[
                  "Build pitchware",
                  "Simulate credibility",
                  "Ship placeholder logic",
                  "Run 'exploration' workshops",
                  "Design MVPs for investors instead of users"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start font-mono text-sm md:text-base text-sys-red">
                    <span className="mr-3 opacity-50">x</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="p-8 border border-sys-white/10 bg-sys-gray/5">
              <p className="text-lg leading-relaxed">
                If you want reassurance, hire a consultant.
                <br/><br/>
                <span className="text-sys-white font-bold text-xl border-b-2 border-sys-green pb-1">If you want a working system, keep reading.</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* WHO THIS IS FOR */}
      <Section title="Who This Is For">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-6 font-mono text-sm">
              {[
                "Founders who need the thing built, not explained",
                "Teams stuck in planning mode",
                "Installations that cannot fail live",
                "Systems with real consequences",
                "People who value truth over polish"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-sys-green font-bold text-lg leading-none">+</span> 
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-sys-gray/30 pt-8 md:pt-0 md:pl-12 opacity-60 hover:opacity-100 transition-opacity">
            <h3 className="font-bold uppercase tracking-widest text-sys-red mb-6">Who This Is Not For</h3>
            <ul className="space-y-4 font-mono text-sm text-sys-white">
              {[
                "Vibe-based ideation",
                "Endless discovery phases",
                "Fake momentum",
                "Consensus worship",
                "Anyone allergic to clarity"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-sys-red">x</span> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-sys-white/50 border border-sys-gray/50 inline-block px-6 py-3">
            This page is the filter. If it puts you off, it’s working.
          </p>
        </div>
      </Section>

      {/* DELIVERABLE */}
      <Section title="Deliverable">
        <p className="text-xl mb-8 font-light">You get:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Cpu className="w-8 h-8" />, label: "A booted, routed, resilient system" },
            { icon: <Terminal className="w-8 h-8" />, label: "Wired end-to-end" },
            { icon: <CheckCircle2 className="w-8 h-8" />, label: "Documentation that matches reality" }
          ].map((card, i) => (
            <div key={i} className="bg-sys-gray/10 p-8 border border-sys-gray/30 flex flex-col justify-between h-full gap-4 hover:border-sys-green transition-colors">
              <div className="text-sys-green">{card.icon}</div>
              <p className="font-bold text-lg leading-tight">{card.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 border-l-4 border-sys-green pl-8">
          <p className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight">
            Not a promise. <br/>
            Not a deck. <br/>
            <span className="text-sys-green">A thing that works.</span>
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section id="contact" borderTop={true} className="pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none mb-8 tracking-tighter">
              Build the thing.<br/>
              <span className="text-sys-gray/50">Kill the lie.</span>
            </h2>
            <p className="text-xl mb-8 font-light max-w-md">
              If you’re ready to replace explanation with execution, get in touch.
            </p>
          </div>

          <div className="bg-sys-gray/5 p-8 border border-sys-gray/30">
            {formStatus === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
                <div className="text-sys-green font-mono text-xl animate-pulse">
                  {`> TRANSMISSION RECEIVED`}
                </div>
                <p className="text-sys-white/60">I will analyze the signal.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-xs font-mono underline hover:text-sys-green"
                >
                  [RESET]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest mb-2 text-sys-green">
                    Ambiguous Intent (The Project)
                  </label>
                  <textarea 
                    name="intent"
                    required
                    value={formData.intent}
                    onChange={handleInputChange}
                    className="w-full bg-sys-black border border-sys-gray p-4 focus:border-sys-green focus:outline-none focus:ring-1 focus:ring-sys-green transition-all h-24 font-mono text-sm rounded-none placeholder-sys-gray/50"
                    placeholder="Describe the system..."
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest mb-2 text-sys-red">
                    Failure State (The Stakes)
                  </label>
                  <textarea 
                    name="failure"
                    required
                    value={formData.failure}
                    onChange={handleInputChange}
                    className="w-full bg-sys-black border border-sys-gray p-4 focus:border-sys-red focus:outline-none focus:ring-1 focus:ring-sys-red transition-all h-20 font-mono text-sm rounded-none placeholder-sys-gray/50"
                    placeholder="What happens if it fails?"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest mb-2 text-sys-white/60">
                    Constraints (Time and Budget)
                  </label>
                  <textarea 
                    name="reality"
                    required
                    value={formData.reality}
                    onChange={handleInputChange}
                    className="w-full bg-sys-black border border-sys-gray p-4 focus:border-sys-white focus:outline-none focus:ring-1 focus:ring-sys-white transition-all h-16 font-mono text-sm rounded-none placeholder-sys-gray/50"
                    placeholder="Deadlines / Hard limits"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-sys-white text-sys-black font-bold py-4 hover:bg-sys-green hover:text-sys-black transition-colors uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-none"
                >
                  {formStatus === 'sending' ? (
                    <span className="font-mono animate-pulse">TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>BUILD THE THING</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      <footer className="py-8 border-t border-sys-gray/20 text-center font-mono text-xs text-sys-white/30">
        <p>EDDIE // SYSTEMS // 2026</p>
      </footer>
    </main>
  );
};

export default App;