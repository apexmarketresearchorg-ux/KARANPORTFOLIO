import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Globe, Smartphone, Bot, Workflow, ShoppingCart, Gauge, Mic, Sparkles, ArrowRight, Store } from 'lucide-react';
import TiltCard from './TiltCard';
import { goToContact, WA_URL } from '../utils/contact';

const services = [
  { icon: Globe, title: 'Custom Website Development', service: 'Business Website',
    desc: 'Fast, responsive websites built with modern frameworks. Business sites, landing pages and portfolios designed to turn visitors into customers and rank on Google.',
    features: ['React / Next.js', 'Mobile-first design', 'SEO & Core Web Vitals'] },
  { icon: Store, title: 'Local Business Websites', service: 'Local Business Website (Trades & Services)', isNew: true,
    desc: 'Multi-page sites for roofers, plumbers, HVAC, landscapers, cleaners and detailers. Tap-to-call, quote forms and service-area pages, live in days.',
    features: ['Tap-to-call & quote forms', 'Service & area pages', 'Hosting setup included'] },
  { icon: Smartphone, title: 'Mobile & Web Apps', service: 'Web Application', popular: true,
    desc: 'Cross-platform mobile apps and web applications with native-like performance. From MVP to a full product, shipped fast.',
    features: ['React Native (iOS & Android)', 'Real-time features', 'App store deployment'] },
  { icon: ShoppingCart, title: 'E-Commerce Solutions', service: 'E-Commerce Store',
    desc: 'Online stores with secure payments, product management, inventory tracking and a smooth checkout built for conversions.',
    features: ['Stripe / PayPal', 'Admin dashboard', 'Order & inventory management'] },
  { icon: Bot, title: 'AI Agent Development', service: 'AI Agent / Chatbot',
    desc: 'Custom AI agents and chatbots that handle support, lead qualification and data tasks 24/7, trained on your business.',
    features: ['GPT / Claude integration', 'Custom knowledge base', 'Website, WhatsApp & more'] },
  { icon: Mic, title: 'AI Voice Agents', service: 'AI Voice Agent', popular: true,
    desc: 'Voice agents that answer calls, book appointments and qualify leads around the clock, so no customer reaches voicemail.',
    features: ['Natural-sounding voice', 'Call routing', 'CRM & SMS alerts'] },
  { icon: Workflow, title: 'AI Workflow Automation', service: 'AI Workflow Automation',
    desc: 'Automate repetitive work: follow-up emails, scheduling, data entry and AI-generated content pipelines.',
    features: ['Process automation', 'API integrations', 'Hours saved every week'] },
  { icon: Gauge, title: 'Ongoing Tech Partnership', service: 'Ongoing Tech Partnership',
    desc: 'Continuous development, maintenance, security updates, hosting and analytics from one reliable long-term partner.',
    features: ['Priority support', 'Monthly updates', 'Performance monitoring'] },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="sp relative bg-dark-900/40">
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,white 1px,transparent 0)', backgroundSize: '40px 40px' }} />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'anim-up' : 'opacity-0'}`}>
          <span className="text-brand-400 font-semibold text-xs uppercase tracking-[.2em]">Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            What I <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Every project is scoped to your goals. Tap any service to tell me about yours.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc, features, popular, isNew, service }, i) => (
            <TiltCard key={title} className={`rounded-2xl ${isVisible ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${0.06 * (i + 1)}s` }}>
              <button
                type="button"
                onClick={() => goToContact(service)}
                className={`group text-left w-full h-full glass-card rounded-2xl p-6 hover:border-brand-500/30 transition-colors duration-300 flex flex-col cursor-pointer ${popular ? 'border-brand-500/30 ring-1 ring-brand-500/20' : ''}`}
              >
                <div className="absolute -top-3 left-4 flex gap-2">
                  {popular && <span className="px-3 py-1 rounded-full bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider">Popular</span>}
                  {isNew && <span className="px-3 py-1 rounded-full bg-accent-500 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Sparkles className="w-3 h-3" /> New</span>}
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-4 mt-1 group-hover:bg-brand-500/20 transition-colors [transform:translateZ(30px)]">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-grow">{desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-dark-300">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <span className="pt-4 border-t border-dark-700/40 flex items-center justify-between text-sm font-semibold text-brand-400">
                  Get details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </TiltCard>
          ))}
        </div>

        <div className={`mt-14 ${isVisible ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: '.6s' }}>
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">Not sure what you need?</h3>
              <p className="text-dark-400 text-sm max-w-lg">
                Tell me about your business and goals. I'll suggest the simplest setup that gets results. The first consultation is free.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button type="button" onClick={() => goToContact('Other / Not sure yet')} className="px-8 py-4 gradient-bg text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/25 hover:-translate-y-0.5 whitespace-nowrap">
                Book a Free Consultation
              </button>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
