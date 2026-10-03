import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Send, Mail, MapPin, Phone, Clock, CheckCircle, MessageCircle, Shield, Loader2, AlertCircle } from 'lucide-react';
import { SERVICE_OPTIONS, WA_URL, onContactPrefill } from '../utils/contact';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [flash, setFlash] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => onContactPrefill(({ service, note }) => {
    setForm((f) => ({
      ...f,
      service: service && SERVICE_OPTIONS.includes(service) ? service : f.service,
      message: note && !f.message ? note + ' ' : f.message,
    }));
    setFlash(true);
    setTimeout(() => setFlash(false), 1600);
    setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 700);
  }), []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // ⚠️ IMPORTANT: Replace this with your Web3Forms Access Key
          // Get your free key at: https://web3forms.com (takes 30 seconds)
          access_key: 'b2308835-abfb-4749-a90a-4d204db2bb5b',
          
          // Form data
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          
          // Email customization
          subject: `New project inquiry from ${form.name}${form.service ? ` (${form.service})` : ''}`,
          from_name: 'Portfolio Contact Form',
          
          // Additional info
          source: 'Portfolio Website',
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const ic = "w-full px-4 py-3.5 rounded-xl bg-dark-800/60 border border-dark-600 text-white placeholder:text-dark-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 outline-none transition-all text-sm";

  return (
    <section id="contact" className="sp relative bg-dark-900/40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-600/5 rounded-full blur-[120px]" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'anim-up' : 'opacity-0'}`}>
          <span className="text-brand-400 font-semibold text-xs uppercase tracking-[.2em]">Contact</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            {"Let's Start Your "}
            <span className="gradient-text">Project</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Send a message, email, or WhatsApp — I respond within a few hours during business hours.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info side */}
          <div className={`lg:col-span-2 ${isVisible ? 'anim-left' : 'opacity-0'}`} style={{ animationDelay: '.2s' }}>
            <h3 className="font-heading text-2xl font-bold text-white mb-5">Get in Touch</h3>
            <p className="text-dark-400 leading-relaxed mb-7 text-[15px]">
              Whether you need a website, mobile app, AI voice agent, or full tech partnership — I am here to help. First consultation is always free.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  label: 'WhatsApp (Fastest)',
                  value: '+91 888-724-4823',
                  href: WA_URL,
                  highlight: true,
                },
                { icon: Phone, label: 'Phone', value: '+91 888-724-4823', href: 'tel:+918887244823' },
                { icon: Mail, label: 'Email', value: 'k8887244823@gmail.com', href: 'mailto:k8887244823@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'India — Serving Clients Worldwide' },
                { icon: Clock, label: 'Working Hours', value: 'Flexible — I work in YOUR timezone' },
              ].map(({ icon: Icon, label, value, href, highlight }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${highlight ? 'bg-[#25d366]/15 border border-[#25d366]/25' : 'bg-brand-500/10 border border-brand-500/15'}`}>
                    <Icon className={`w-[18px] h-[18px] ${highlight ? 'text-[#25d366]' : 'text-brand-400'}`} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`text-sm transition-colors ${highlight ? 'text-[#25d366] hover:text-[#20bd5a] font-medium' : 'text-dark-400 hover:text-brand-400'}`}>{value}</a>
                    ) : (
                      <p className="text-dark-400 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25d366]/25"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Trust signals */}
            <div className="mt-7 glass-card rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Shield className="w-4 h-4 text-brand-400" />
                Client Guarantees
              </div>
              <div className="space-y-2">
                {[
                  'Free consultation & project scoping',
                  'Source code ownership — 100% yours',
                  '30-day post-launch support included',
                  'NDA & IP protection available',
                  'Milestone-based payments for safety',
                                  ].map((g) => (
                  <div key={g} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span className="text-dark-400 text-xs">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 ${isVisible ? 'anim-right' : 'opacity-0'}`} style={{ animationDelay: '.3s' }}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8">
              {/* Status messages */}
              {status === 'success' && (
                <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Message sent. Thank you!</p>
                    <p className="text-xs mt-0.5 text-emerald-400/80">{"I'll get back to you within 24 hours."}</p>
                  </div>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Something went wrong</p>
                    <p className="text-xs mt-0.5 text-red-400/80">Please try WhatsApp or email directly.</p>
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-name" className="block text-sm font-medium text-dark-200 mb-1.5">Your Name *</label>
                  <input ref={nameRef} id="cf-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Smith" className={ic} disabled={status === 'loading'} />
                </div>
                <div>
                  <label htmlFor="cf-email" className="block text-sm font-medium text-dark-200 mb-1.5">Email Address *</label>
                  <input id="cf-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@company.com" className={ic} disabled={status === 'loading'} />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="cf-service" className="block text-sm font-medium text-dark-200 mb-1.5">What do you need? *</label>
                <select id="cf-service" required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={`${ic} ${flash ? 'ring-2 ring-brand-400 border-brand-400' : ''}`} disabled={status === 'loading'}>
                  <option value="" className="bg-dark-800">Select a service</option>
                  {SERVICE_OPTIONS.map((o) => <option key={o} value={o} className="bg-dark-800">{o}</option>)}
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="cf-msg" className="block text-sm font-medium text-dark-200 mb-1.5">Project Details *</label>
                <textarea id="cf-msg" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project — what you need, your goals, timeline, and any specific requirements..." className={`${ic} resize-none`} disabled={status === 'loading'} />
              </div>

              <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="flex-1 sm:flex-none px-8 py-4 gradient-bg text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
                <span className="text-dark-500 text-xs text-center sm:text-left">or WhatsApp for instant response →</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
