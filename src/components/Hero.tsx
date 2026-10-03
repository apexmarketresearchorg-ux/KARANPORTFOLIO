import { ArrowDown, Phone, Mail, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import HeroScene from './HeroScene';
import { WA_URL } from '../utils/contact';

const roles = [
  'Full Stack Developer',
  'AI Solutions Builder',
  'Web App Specialist',
  'Your Next Tech Partner',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = isDeleting ? 35 : 70;

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-24">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(8,145,178,.16),transparent_60%),radial-gradient(ellipse_at_10%_80%,rgba(124,58,237,.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse at center,black 30%,transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center,black 30%,transparent 75%)' }} />
      </div>
      <HeroScene />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <div className="anim-up inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-7 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          <h1 className="anim-up font-heading text-[2.9rem] sm:text-6xl lg:text-[5.2rem] font-extrabold tracking-tight leading-[1.04] mb-5 text-white" style={{ animationDelay: '.1s' }}>
            {"I'm "}
            <span className="gradient-text">Karan Singh</span>
          </h1>

          <div className="anim-up h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-5" style={{ animationDelay: '.2s' }}>
            <span className="text-xl sm:text-2xl md:text-3xl text-dark-200 font-light">{displayed}</span>
            <span className="inline-block w-[3px] h-6 sm:h-8 bg-brand-400 ml-1 animate-pulse" />
          </div>

          <p className="anim-up text-base sm:text-lg md:text-xl text-dark-400 max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed" style={{ animationDelay: '.3s' }}>
            I build <span className="text-white font-medium">fast, conversion-focused websites</span>,{' '}
            <span className="text-white font-medium">web & mobile apps</span> and{' '}
            <span className="text-white font-medium">AI automations</span> that help businesses win more customers.
          </p>

          <p className="anim-up text-dark-500 text-sm md:text-base mb-9" style={{ animationDelay: '.38s' }}>
            15+ clients · 8+ projects · Clients in 🇺🇸 US · 🇬🇧 UK · 🇨🇦 Canada · 🇦🇺 Australia · 🇩🇪 Germany
          </p>

          <div className="anim-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-9" style={{ animationDelay: '.46s' }}>
            <a href="#portfolio" className="group w-full sm:w-auto justify-center px-7 py-4 gradient-bg text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/25 hover:-translate-y-0.5 flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#demos" className="w-full sm:w-auto text-center px-7 py-4 border border-dark-600 hover:border-brand-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-brand-500/10 hover:-translate-y-0.5 backdrop-blur-sm">
              See Live Demos
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center px-7 py-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25d366]/25 hover:-translate-y-0.5 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <div className="anim-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 text-sm" style={{ animationDelay: '.56s' }}>
            <a href="mailto:k8887244823@gmail.com" className="flex items-center gap-2 text-dark-400 hover:text-brand-400 transition-colors">
              <Mail className="w-4 h-4" /> k8887244823@gmail.com
            </a>
            <a href="tel:+918887244823" className="flex items-center gap-2 text-dark-400 hover:text-brand-400 transition-colors">
              <Phone className="w-4 h-4" /> +91 888-724-4823
            </a>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-1.5 animate-bounce">
          <div className="w-1.5 h-3 bg-brand-500 rounded-full" />
        </div>
      </a>
    </section>
  );
}
