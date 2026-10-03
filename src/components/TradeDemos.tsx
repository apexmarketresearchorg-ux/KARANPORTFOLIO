import { useEffect, useRef, useState } from 'react';
import { Home, Droplets, Fan, Leaf, Sparkles, Car, ExternalLink, ArrowRight, Phone, FileText, Smartphone, LayoutGrid, MapPin, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { goToContact } from '../utils/contact';

const trades = [
  { key: 'roofing', label: 'Roofing', name: 'Northpine Roofing', icon: Home, color: '#c8642b' },
  { key: 'plumbing', label: 'Plumbing', name: 'Clearline Plumbing', icon: Droplets, color: '#1f7fb8' },
  { key: 'hvac', label: 'HVAC', name: 'Coolpoint Heating & Air', icon: Fan, color: '#2b8a7e' },
  { key: 'landscaping', label: 'Landscaping', name: 'Greenway Lawn & Landscape', icon: Leaf, color: '#4a8a2e' },
  { key: 'cleaning', label: 'Cleaning', name: 'Brightside Home Cleaning', icon: Sparkles, color: '#8a4fb0' },
  { key: 'detailing', label: 'Detailing', name: 'Gloss Mobile Detailing', icon: Car, color: '#b8862b' },
];

const features = [
  { icon: LayoutGrid, text: '6 pages: Home, Services, About, Areas, Reviews, Contact' },
  { icon: Phone, text: 'Tap-to-call header and sticky call bar on phones' },
  { icon: FileText, text: 'Quote request forms on every key page' },
  { icon: MapPin, text: 'Service-area page for local search' },
  { icon: Smartphone, text: 'Built mobile-first, fast on any phone' },
  { icon: Zap, text: 'Live in days, not months' },
];

const DESK_W = 1280, DESK_H = 800, PHONE_W = 390, PHONE_H = 844;

function ScaledFrame({ src, w, h, title, active }: { src: string; w: number; h: number; title: string; active: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / w));
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={box} className="relative w-full overflow-hidden bg-white" style={{ aspectRatio: `${w} / ${h}` }}>
      {active ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="absolute top-0 left-0 border-0 origin-top-left"
          style={{ width: w, height: h, transform: `scale(${scale})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-dark-800 animate-pulse" />
      )}
    </div>
  );
}

export default function TradeDemos() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [trade, setTrade] = useState(trades[0]);
  const stage = useRef<HTMLDivElement>(null);
  const src = `/demos/index.html#${trade.key}`;

  // gentle 3D follow on the stage
  useEffect(() => {
    const el = stage.current;
    if (!el || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--ry', `${-14 + x * 10}deg`);
        el.style.setProperty('--rx', `${6 - y * 6}deg`);
      });
    };
    const leave = () => { el.style.setProperty('--ry', '-14deg'); el.style.setProperty('--rx', '6deg'); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="demos" className="sp relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full blur-[160px] opacity-20 transition-colors duration-700" style={{ background: trade.color }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-12 ${isVisible ? 'anim-up' : 'opacity-0'}`}>
          <span className="text-brand-400 font-semibold text-xs uppercase tracking-[.2em]">Live Demos</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            Websites for <span className="gradient-text">Local Businesses</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Six fully working, multi-page demo sites. Pick a trade, scroll and click around inside the screens, or open the full site.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Trade picker */}
        <div role="tablist" aria-label="Choose a trade" className={`flex flex-wrap justify-center gap-2.5 mb-12 ${isVisible ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: '.1s' }}>
          {trades.map((t) => {
            const Icon = t.icon;
            const on = t.key === trade.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={on}
                onClick={() => setTrade(t)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${on ? 'text-white shadow-lg -translate-y-0.5' : 'bg-dark-800/50 text-dark-300 border-dark-700 hover:text-white hover:border-dark-500'}`}
                style={on ? { background: t.color, borderColor: t.color, boxShadow: `0 10px 30px -10px ${t.color}` } : undefined}
              >
                <Icon className="w-4 h-4" /> {t.label}
              </button>
            );
          })}
        </div>

        {/* 3D stage */}
        <div
          ref={stage}
          className={`relative mx-auto max-w-5xl [perspective:1800px] ${isVisible ? 'anim-scale' : 'opacity-0'}`}
          style={{ animationDelay: '.2s', ['--ry' as string]: '-14deg', ['--rx' as string]: '6deg' }}
        >
          {/* Laptop */}
          <div
            className="hidden md:block relative w-[86%] transition-transform duration-500 ease-out [transform-style:preserve-3d]"
            style={{ transform: 'rotateY(var(--ry)) rotateX(var(--rx))' }}
          >
            <div className="rounded-t-2xl bg-gradient-to-b from-dark-700 to-dark-800 p-2.5 pb-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,.8)] border border-dark-600">
              <div className="flex items-center gap-1.5 px-2 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 flex-1 max-w-sm truncate rounded-md bg-dark-900/80 px-3 py-0.5 text-[11px] text-dark-400 font-mono">your-{trade.key}-business.com</span>
              </div>
              <div className="rounded-md overflow-hidden">
                <ScaledFrame src={src} w={DESK_W} h={DESK_H} title={`${trade.name} demo, desktop view`} active={isVisible} />
              </div>
            </div>
            <div className="h-4 mx-[-3%] rounded-b-2xl bg-gradient-to-b from-dark-600 to-dark-800 border-x border-b border-dark-600" />
            <div className="h-1.5 mx-auto w-1/4 rounded-b-lg bg-dark-700" />
          </div>

          {/* Phone */}
          <div
            className="relative mx-auto w-[260px] sm:w-[280px] md:absolute md:mx-0 md:right-0 md:bottom-[-6%] md:w-[24%] transition-transform duration-500 ease-out"
            style={{ transform: 'translateZ(120px) rotateY(calc(var(--ry) * -0.6)) rotateX(var(--rx))' }}
          >
            <div className="rounded-[2.2rem] bg-dark-900 p-2.5 border-2 border-dark-600 shadow-[0_30px_70px_-15px_rgba(0,0,0,.9)]">
              <div className="relative rounded-[1.7rem] overflow-hidden bg-dark-950">
                <div className="h-6 flex items-center justify-center"><span className="w-1/3 h-3.5 rounded-full bg-black" /></div>
                <ScaledFrame src={src} w={PHONE_W} h={PHONE_H} title={`${trade.name} demo, phone view`} active={isVisible} />
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={src} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center px-7 py-4 border border-dark-600 hover:border-brand-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-brand-500/10 hover:-translate-y-0.5 flex items-center gap-2">
            <ExternalLink className="w-4 h-4" /> Open the {trade.label} demo
          </a>
          <button
            type="button"
            onClick={() => goToContact('Local Business Website (Trades & Services)', `I'm interested in a ${trade.label.toLowerCase()} website like your demo.`)}
            className="group w-full sm:w-auto justify-center px-7 py-4 gradient-bg text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/25 hover:-translate-y-0.5 flex items-center gap-2"
          >
            I want a site like this <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <p className="mt-4 text-center text-dark-500 text-xs">Demo businesses are fictional. Your site uses your name, services, photos and real reviews.</p>

        {/* What's inside */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="glass-card rounded-xl p-4 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-brand-400" /></div>
              <p className="text-dark-300 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
