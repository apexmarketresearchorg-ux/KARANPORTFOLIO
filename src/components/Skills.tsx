import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillGroups = [
  {
    title: 'Frontend',
    accent: 'brand',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript / JavaScript', level: 90 },
      { name: 'Tailwind CSS / CSS3', level: 95 },
      { name: 'React Native (Mobile)', level: 82 },
      { name: 'Framer Motion / GSAP', level: 80 },
    ],
  },
  {
    title: 'Backend & Database',
    accent: 'accent',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / FastAPI', level: 78 },
      { name: 'MongoDB / PostgreSQL', level: 85 },
      { name: 'REST & GraphQL APIs', level: 87 },
      { name: 'Firebase / Supabase', level: 83 },
    ],
  },
  {
    title: 'AI & DevOps',
    accent: 'emerald',
    skills: [
      { name: 'OpenAI / Claude APIs', level: 86 },
      { name: 'AI Agents / RAG / LangChain', level: 80 },
      { name: 'Git / GitHub / CI-CD', level: 90 },
      { name: 'Docker / Cloud Deploy', level: 74 },
      { name: 'Vercel / AWS / DigitalOcean', level: 80 },
    ],
  },
];

const techCloud = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
  'Tailwind CSS', 'React Native', 'MongoDB', 'PostgreSQL', 'Firebase',
  'Supabase', 'Docker', 'Git', 'Vercel', 'AWS', 'OpenAI', 'LangChain',
  'Figma', 'Stripe', 'Razorpay', 'GraphQL',
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const barGradient = (a: string) => {
    if (a === 'accent') return 'from-accent-500 to-accent-300';
    if (a === 'emerald') return 'from-emerald-500 to-emerald-400';
    return 'from-brand-500 to-brand-300';
  };

  const dotCol = (a: string) => {
    if (a === 'accent') return 'bg-accent-400';
    if (a === 'emerald') return 'bg-emerald-400';
    return 'bg-brand-400';
  };

  return (
    <section className="sp relative bg-dark-900/40">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'anim-up' : 'opacity-0'}`}>
          <span className="text-brand-400 font-semibold text-xs uppercase tracking-[.2em]">Skills</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            The tools and technologies I use daily to ship fast, scalable, and intelligent products.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {skillGroups.map((g, gi) => (
            <div
              key={g.title}
              className={`glass-card rounded-2xl p-6 sm:p-7 ${isVisible ? 'anim-up' : 'opacity-0'}`}
              style={{ animationDelay: `${.12 * (gi + 1)}s` }}
            >
              <h3 className="font-heading text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${dotCol(g.accent)}`} />
                {g.title}
              </h3>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-dark-200 text-sm font-medium">{s.name}</span>
                      <span className="text-dark-500 text-xs tabular-nums">{s.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${barGradient(g.accent)} transition-all duration-[1.2s] ease-out`}
                        style={{ width: isVisible ? `${s.level}%` : '0%', transitionDelay: '.4s' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className={`${isVisible ? 'anim-up' : 'opacity-0'}`} style={{ animationDelay: '.5s' }}>
          <p className="text-center text-dark-500 text-xs uppercase tracking-wider mb-6">Full technology ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {techCloud.map((t) => (
              <span key={t} className="px-4 py-2.5 rounded-xl bg-dark-800/50 border border-dark-700/60 text-dark-300 text-sm font-medium hover:border-brand-500/30 hover:text-brand-300 hover:bg-brand-500/5 transition-all duration-300 cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
