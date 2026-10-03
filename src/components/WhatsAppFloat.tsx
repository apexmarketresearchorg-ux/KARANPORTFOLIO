import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WA_URL } from '../utils/contact';

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setTooltip(true), 9000);
    return () => clearTimeout(t);
  }, [show]);

  if (!show) return null;

  const waUrl = WA_URL;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 anim-up">
      {/* Tooltip bubble */}
      {tooltip && (
        <div className="relative hidden sm:block bg-white rounded-2xl shadow-2xl shadow-black/20 p-4 max-w-[260px] anim-scale">
          <button
            onClick={() => setTooltip(false)}
            aria-label="Close"
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
          <p className="text-gray-800 text-sm font-medium leading-snug pr-5">
            👋 Hey! Need a website, app, or AI solution?
          </p>
          <p className="text-gray-500 text-xs mt-1.5">
            Chat with me on WhatsApp. I usually reply within a few hours.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full text-center px-4 py-2.5 bg-[#25d366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Start Chat →
          </a>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 shadow-lg" />
        </div>
      )}

      {/* FAB */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[60px] h-[60px] bg-[#25d366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-xl shadow-[#25d366]/30 hover:shadow-[#25d366]/50 transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25d366] animate-ping opacity-30" />
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
