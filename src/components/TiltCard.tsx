import { useRef, type ReactNode, type CSSProperties } from 'react';

/** Card that tilts in 3D toward the pointer, with a soft glare that follows it. */
export default function TiltCard({
  children, className = '', max = 8, style,
}: { children: ReactNode; className?: string; max?: number; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const glare = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !fine || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      ref.current.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(0)`;
      if (glare.current) {
        glare.current.style.opacity = '1';
        glare.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,.10), transparent 55%)`;
      }
    });
  };
  const onLeave = () => {
    cancelAnimationFrame(frame.current);
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    if (glare.current) glare.current.style.opacity = '0';
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative [transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={style}
    >
      {children}
      <div ref={glare} className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300" />
    </div>
  );
}
