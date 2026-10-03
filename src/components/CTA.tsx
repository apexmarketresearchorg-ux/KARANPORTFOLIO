import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WA_URL } from '../utils/contact';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div ref={ref} className={`max-w-5xl mx-auto relative rounded-3xl overflow-hidden ${isVisible ? 'anim-scale' : 'opacity-0'}`}>
        <div className="absolute inset-0 gradient-bg opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,white 1px,transparent 0)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-14 sm:py-20 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Ready to launch your project?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10">
            {"From websites to AI voice agents, let's build something that brings you customers. The first consultation is free."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="group w-full sm:w-auto justify-center px-8 py-4 bg-white text-brand-700 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto justify-center px-8 py-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
