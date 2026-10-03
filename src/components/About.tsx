import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Users, Briefcase, Globe, Clock, MessageSquareText } from 'lucide-react';
import TiltCard from './TiltCard';
import { WA_URL } from '../utils/contact';

const stats = [
  { icon: Briefcase, value: '8+', label: 'Projects delivered' },
  { icon: Users, value: '15+', label: 'Clients served' },
  { icon: Globe, value: '5', label: 'Countries' },
  { icon: Clock, value: '24h', label: 'Reply time' },
];

const trustFlags = [
  { flag: '🇺🇸', country: 'United States' },
  { flag: '🇬🇧', country: 'United Kingdom' },
  { flag: '🇨🇦', country: 'Canada' },
  { flag: '🇦🇺', country: 'Australia' },
  { flag: '🇩🇪', country: 'Germany' },
];

const code = [
  [['k', 'const '], ['w', 'project'], ['p', ' = '], ['p', '{']],
  [['p', '  '], ['w', 'goal'], ['p', ': '], ['s', '"more customers"'], ['p', ',']],
  [['p', '  '], ['w', 'design'], ['p', ': '], ['s', '"mobile-first"'], ['p', ',']],
  [['p', '  '], ['w', 'speed'], ['p', ': '], ['s', '"< 1s load"'], ['p', ',']],
  [['p', '  '], ['w', 'ai'], ['p', ': '], ['k', 'true'], ['p', ',']],
  [['p', '};']],
  [['p', '']],
  [['k', 'await '], ['f', 'ship'], ['p', '(project);'], ['c', ' // ✓ live']],
];
const tone: Record<string, string> = { k: 'text-accent-300', w: 'text-brand-300', s: 'text-emerald-400', f: 'text-yellow-300', p: 'text-dark-300', c: 'text-dark-500' };

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  const v = (cls: string) => (isVisible ? cls : 'opacity-0');

  return (
    <section id="about" className="sp relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-600/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${v('anim-up')}`}>
          <span className="text-brand-400 font-semibold text-xs uppercase tracking-[.2em]">About Me</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            Your Dedicated <span className="gradient-text">Tech Partner</span>
          </h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* 3D visual */}
          <div className={`relative ${v('anim-left')} [perspective:1200px]`} style={{ animationDelay: '.2s' }}>
            <TiltCard max={10} className="max-w-md mx-auto rounded-2xl">
              <div className="relative rounded-2xl overflow-hidden border border-brand-500/20 bg-dark-900 shadow-2xl shadow-brand-900/30">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-dark-800 bg-dark-900/80">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-dark-500 text-xs font-mono">your-project.ts</span>
                </div>
                <pre className="p-5 sm:p-6 text-[13px] sm:text-sm leading-7 font-mono overflow-x-auto">
                  {code.map((line, i) => (
                    <div key={i} className="flex">
                      <span className="w-7 text-dark-600 select-none">{i + 1}</span>
                      <span>{line.map(([t, s], j) => <span key={j} className={tone[t]}>{s}</span>)}</span>
                    </div>
                  ))}
                </pre>
                <img src="/images/karan-avatar.png" alt="" className="absolute -right-10 -bottom-10 w-44 h-44 opacity-25 rounded-full blur-[1px]" />
              </div>
              {/* floating layers */}
              <div className="absolute -bottom-6 -right-3 sm:-right-8 glass rounded-xl p-4 shadow-xl [transform:translateZ(60px)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg gradient-bg flex items-center justify-center"><Globe className="w-5 h-5 text-white" /></div>
                  <div>
                    <p className="text-white font-bold leading-tight">Remote, worldwide</p>
                    <p className="text-dark-400 text-xs">Works in your timezone</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-3 sm:-left-8 glass rounded-xl p-3.5 shadow-xl [transform:translateZ(80px)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center"><MessageSquareText className="w-5 h-5 text-emerald-400" /></div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Weekly updates</p>
                    <p className="text-dark-400 text-[11px]">Preview links at every step</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className={v('anim-right')} style={{ animationDelay: '.3s' }}>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-5 text-white leading-snug">
              I help businesses build digital products that bring in customers
            </h3>

            <div className="space-y-4 text-dark-400 leading-relaxed text-[15px]">
              <p>
                {"I'm "}<span className="text-white font-medium">Karan Singh</span>, a full stack developer and AI solutions builder based in India, working with clients in the{' '}
                <span className="text-white font-medium">US, UK, Canada, Australia and Germany</span>.
              </p>
              <p>
                I build websites, web apps and AI automation systems for businesses of every size, from local service companies and salons to SaaS startups. Each project is built around one goal: helping you win more customers.
              </p>
              <p>
                I work in <span className="text-white font-medium">your timezone</span>, communicate clearly, share progress every week and deliver what I promise. Think of me as a remote tech team of one: designer, developer and consultant.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Clear English communication', 'Works in your timezone', 'Weekly progress updates', 'You own 100% of the code', 'Post-launch support included', 'NDA & IP protection'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                  <span className="text-dark-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'Python', 'AI / LLMs', 'Tailwind CSS', 'Three.js'].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-brand-500/10 text-brand-300 text-xs font-medium border border-brand-500/20">{t}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-6 py-3 gradient-bg text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5">Start a Project</a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 ${v('anim-up')}`} style={{ animationDelay: '.5s' }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <TiltCard key={label} className="rounded-xl">
              <div className="glass-card rounded-xl p-6 text-center hover:border-brand-500/25 transition-all group h-full">
                <Icon className="w-7 h-7 text-brand-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">{value}</p>
                <p className="text-dark-400 text-sm">{label}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className={`mt-14 text-center ${v('anim-up')}`} style={{ animationDelay: '.6s' }}>
          <p className="text-dark-500 text-xs uppercase tracking-wider mb-5">Clients in</p>
          <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-5">
            {trustFlags.map(({ flag, country }) => (
              <div key={country} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-brand-500/20 transition-all">
                <span className="text-2xl">{flag}</span>
                <span className="text-dark-300 text-sm font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
