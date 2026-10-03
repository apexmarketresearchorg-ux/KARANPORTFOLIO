import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, MessageSquare } from 'lucide-react';
import TiltCard from './TiltCard';
import { goToContact } from '../utils/contact';

const categories = ['All', 'Websites', 'Web Apps', 'AI / SaaS'];

const projects = [
  {
    title: 'Horizon Market Research',
    category: 'Websites',
    client: 'B2B Market Research Firm',
    desc: 'Professional B2B company website with service showcases, industry coverage, client testimonials, and lead gen — serving 850+ global businesses across 100+ countries.',
    image: 'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Next.js', 'Tailwind', 'SEO'],
    url: 'https://www.horizonmarketresearch.com/',
    live: true,
  },
  {
    title: 'ResumeGenie Pro',
    category: 'AI / SaaS',
    client: 'SaaS Startup',
    desc: 'AI-powered resume builder — create ATS-optimized resumes in 30 seconds. AI writing, 100+ templates, cover letters, job-matching, and Stripe billing.',
    image: 'https://images.pexels.com/photos/590044/pexels-photo-590044.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['React', 'AI / LLM', 'Stripe', 'Node.js'],
    url: 'https://resumegenie-pro.vercel.app/',
    live: true,
  },
  {
    title: 'Apex Fitness',
    category: 'Websites',
    client: 'Fitness Brand',
    desc: 'High-energy fitness brand website with bold animations, membership tiers, trainer profiles, class scheduling, and lead capture — built to convert gym visitors.',
    image: 'https://images.pexels.com/photos/3838705/pexels-photo-3838705.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['React', 'Tailwind', 'Animations'],
    url: 'https://apex-fitness-orpin.vercel.app/',
    live: true,
  },
  {
    title: 'GlowUp Salon & Spa',
    category: 'Websites',
    client: 'Luxury Beauty Business',
    desc: 'Premium salon website with online appointment booking, service catalog, stylist profiles, photo gallery, reviews, and Google Maps — tripled appointment requests.',
    image: 'https://images.pexels.com/photos/7195814/pexels-photo-7195814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Next.js', 'Booking API', 'Tailwind'],
    url: '#',
    live: false,
  },
  {
    title: 'Flavour Street',
    category: 'Websites',
    client: 'Restaurant Chain',
    desc: 'Modern restaurant platform with digital menu, table reservations, food gallery, customer reviews, and WhatsApp ordering — boosted online orders by 60%.',
    image: 'https://images.pexels.com/photos/19032681/pexels-photo-19032681.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['React', 'Firebase', 'WhatsApp API'],
    url: '#',
    live: false,
  },
  {
    title: 'UrbanNest Properties',
    category: 'Web Apps',
    client: 'Real Estate Agency',
    desc: 'Property listing web app with advanced filters, interactive maps, virtual tour integration, agent dashboards, and inquiry management system.',
    image: 'https://images.pexels.com/photos/30094324/pexels-photo-30094324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Next.js', 'PostgreSQL', 'Mapbox'],
    url: '#',
    live: false,
  },
  {
    title: 'SmileCare Dental',
    category: 'Websites',
    client: 'Healthcare Clinic',
    desc: 'Trust-building dental clinic website with services, doctor profiles, patient testimonials, online appointment scheduling, and insurance information.',
    image: 'https://images.pexels.com/photos/6812453/pexels-photo-6812453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['React', 'Tailwind', 'Calendly'],
    url: '#',
    live: false,
  },
  {
    title: 'ShopVibe Commerce',
    category: 'Web Apps',
    client: 'Fashion E-Commerce',
    desc: 'Full-featured fashion store with product catalog, cart, checkout, payment integration, order tracking, and admin inventory dashboard — handling 500+ daily orders.',
    image: 'https://images.pexels.com/photos/7318906/pexels-photo-7318906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    url: '#',
    live: false,
  },
];

export default function Portfolio() {
  const { ref, isVisible } = useScrollAnimation();
  const [cat, setCat] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = cat === 'All' ? projects : projects.filter((p) => p.category === cat);

  return (
    <section id="portfolio" className="sp relative">
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-accent-500/5 rounded-full blur-[120px]" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'anim-up' : 'opacity-0'}`}>
          <span className="text-brand-400 font-semibold text-xs uppercase tracking-[.2em]">Portfolio</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Selected work, built with performance, UX and business impact in mind.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-2.5 mb-12 ${isVisible ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: '.12s' }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${cat === c ? 'gradient-bg text-white shadow-lg shadow-brand-500/20' : 'bg-dark-800/50 text-dark-400 hover:text-white hover:bg-dark-700/50 border border-dark-700'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <TiltCard key={p.title} className={`rounded-2xl ${isVisible ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: `${.06 * (i + 1)}s` }}>
            <div
              className="group glass-card rounded-2xl overflow-hidden hover:border-brand-500/25 transition-colors duration-500 h-full"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
                <div className={`absolute inset-0 bg-dark-950/80 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${hovered === i ? 'opacity-100' : 'opacity-0'}`}>
                  {p.live ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg bg-brand-500 text-white text-sm font-semibold hover:bg-brand-400 transition-colors flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" /> View Live
                    </a>
                  ) : (
                    <button type="button" onClick={() => goToContact(p.category === 'Web Apps' ? 'Web Application' : 'Business Website', `I saw ${p.title} in your portfolio.`)} className="px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors">
                      <MessageSquare className="w-4 h-4" /> Ask about this project
                    </button>
                  )}
                </div>
                {p.live && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> Live
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-brand-400 text-[10px] font-semibold uppercase tracking-wider">{p.category}</span>
                  <span className="text-dark-500 text-[10px]">{p.client}</span>
                </div>
                <h3 className="font-heading text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-dark-400 text-xs leading-relaxed mb-3 line-clamp-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-dark-800 text-dark-300 text-[10px] font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
