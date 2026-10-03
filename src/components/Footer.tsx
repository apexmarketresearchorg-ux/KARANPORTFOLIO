import { Heart, ArrowUp, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <img src="/images/karan-avatar.png" alt="KS" className="w-9 h-9 rounded-lg object-cover" />
              <span className="text-lg font-heading font-bold text-white tracking-tight">
                Karan<span className="text-brand-400">Singh</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              Full stack developer and AI solutions builder. Websites, apps and automations that help businesses grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <div className="space-y-2.5">
              {[['About','about'], ['Services','services'], ['Work','portfolio'], ['Live Demos','demos'], ['Contact','contact']].map(([l, id]) => (
                <a key={l} href={`#${id}`} className="block text-dark-400 hover:text-brand-400 text-sm transition-colors">{l}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm">Services</h4>
            <div className="space-y-2.5">
              {['Website Development', 'Local Business Websites', 'Mobile & Web Apps', 'E-Commerce Solutions', 'AI Agents & Voice Agents', 'AI Workflow Automation'].map((s) => (
                <a key={s} href="#services" className="block text-dark-400 hover:text-brand-400 text-sm transition-colors">{s}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm">Reach Me</h4>
            <div className="space-y-3">
              <a href="https://wa.me/918887244823" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25d366] hover:text-[#20bd5a] text-sm font-medium transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="tel:+918887244823" className="flex items-center gap-2 text-dark-400 hover:text-brand-400 text-sm transition-colors">
                <Phone className="w-3.5 h-3.5" /> +91 888-724-4823
              </a>
              <a href="mailto:k8887244823@gmail.com" className="flex items-center gap-2 text-dark-400 hover:text-brand-400 text-sm transition-colors">
                <Mail className="w-3.5 h-3.5" /> k8887244823@gmail.com
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="text-lg" title="United States">🇺🇸</span>
              <span className="text-lg" title="United Kingdom">🇬🇧</span>
              <span className="text-lg" title="Canada">🇨🇦</span>
              <span className="text-lg" title="Australia">🇦🇺</span>
                            <span className="text-lg" title="Germany">🇩🇪</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Karan Singh. Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for clients worldwide.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="w-10 h-10 rounded-lg border border-dark-700 hover:border-brand-500 flex items-center justify-center text-dark-400 hover:text-brand-400 transition-all hover:bg-brand-500/10">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
