import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WA_URL } from '../utils/contact';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Live Demos', href: '#demos' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].href.slice(1));
        if (el && el.getBoundingClientRect().top <= 130) {
          setActive(links[i].href.slice(1));
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-xl shadow-dark-950/50 py-2.5' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <img src="/images/karan-avatar.png" alt="Karan Singh logo" className="w-9 h-9 rounded-lg object-cover group-hover:shadow-lg group-hover:shadow-brand-500/30 transition-shadow" />
          <span className="text-lg font-heading font-bold text-white tracking-tight">
            Karan<span className="text-brand-400">Singh</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all ${active === l.href.slice(1) ? 'text-brand-400 bg-brand-500/10' : 'text-dark-400 hover:text-white hover:bg-white/5'}`}
            >
              {l.label}
            </a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="ml-2 px-4 py-2 bg-[#25d366] hover:bg-[#20bd5a] text-white text-[13px] font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-[#25d366]/20 flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
          <a href="#contact" className="ml-1.5 px-5 py-2.5 gradient-bg text-white text-[13px] font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5">
            Start a Project
          </a>
        </div>

        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu" className="lg:hidden p-2 text-dark-300 hover:text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[520px] mt-3' : 'max-h-0'}`}>
        <div className="mx-4 glass rounded-xl p-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${active === l.href.slice(1) ? 'text-brand-400 bg-brand-500/10' : 'text-dark-300 hover:text-white hover:bg-white/5'}`}
            >
              {l.label}
            </a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 mt-2 px-5 py-3 bg-[#25d366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-lg">
            <MessageCircle className="w-4 h-4" /> WhatsApp Me
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-center mt-1 px-5 py-3 gradient-bg text-white text-sm font-semibold rounded-lg">
            Start a Project
          </a>
        </div>
      </div>
    </nav>
  );
}
