import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Free Discovery Call',
    desc: 'We hop on a quick call or WhatsApp chat to understand your business, goals, and project scope. No commitments — just a friendly conversation.',
    time: '24 hrs',
  },
  {
    icon: PenTool,
    num: '02',
    title: 'Proposal & Design',
    desc: "You get a clear proposal with scope and timeline. Once approved, I create designs you sign off on before any code is written.",
    time: '2–4 days',
  },
  {
    icon: Code,
    num: '03',
    title: 'Build & Review',
    desc: 'Clean, fast code with regular progress updates and preview links at every milestone. You stay in the loop with weekly reports — zero surprises.',
    time: '1–4 weeks',
  },
  {
    icon: Rocket,
    num: '04',
    title: 'Launch & Support',
    desc: 'Thorough testing, deployment, and full handover with documentation. Plus 30 days of free post-launch support to ensure everything runs smoothly.',
    time: 'Ongoing',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="sp relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'anim-up' : 'opacity-0'}`}>
          <span className="text-brand-400 font-semibold text-xs uppercase tracking-[.2em]">Process</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
            How We <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Simple, transparent, and efficient — from first message to final launch.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ icon: Icon, num, title, desc, time }, i) => (
            <div
              key={num}
              className={`relative ${isVisible ? 'anim-up' : 'opacity-0'}`}
              style={{ animationDelay: `${.12 * (i + 1)}s` }}
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-brand-500/40 to-brand-500/5" />
              )}
              <div className="glass-card rounded-2xl p-7 text-center hover:border-brand-500/20 transition-all duration-500 hover:-translate-y-1 group h-full flex flex-col">
                <div className="relative inline-flex mb-5 mx-auto">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-bg text-white text-[10px] font-bold flex items-center justify-center">{num}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2.5">{title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed flex-grow">{desc}</p>
                <div className="mt-4 pt-3 border-t border-dark-700/40">
                  <span className="text-brand-400 text-xs font-semibold">⏱ {time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
