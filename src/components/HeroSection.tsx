  import { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolio';

const TYPING_STRINGS = [
  'Software Developer',
  'Full Stack Software Engineer',
];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing animation
  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex === 0) {
          setIsDeleting(false);
          setStringIndex((i) => (i + 1) % TYPING_STRINGS.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.08 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative flex flex-col justify-between h-full min-h-[500px] overflow-hidden">
      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0,255,136,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-12">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="font-mono text-xs text-neon-green/70 tracking-widest uppercase">
            Available for work
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <p className="font-mono text-sm text-neon-green/60 tracking-widest mb-3 uppercase">
            &lt; Hello World /&gt;
          </p>
          <h1
            className="font-display text-5xl lg:text-7xl font-extrabold leading-none tracking-tight mb-2"
            style={{ color: '#f1f5f9' }}
          >
            I'm{' '}
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {personalInfo.name.split(' ').slice(-1)[0]}
            </span>
          </h1>
          <h1
            className="font-display text-5xl lg:text-7xl font-extrabold leading-none tracking-tight"
            style={{ color: '#f1f5f9' }}
          >
            {personalInfo.name.split(' ').slice(0, -1).join(' ')}
          </h1>
        </div>

        {/* Typing role */}
        <div
          className="flex items-center gap-2 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
        >
          <span className="font-mono text-lg lg:text-xl text-slate-400">~/</span>
          <span className="font-mono text-lg lg:text-xl text-neon-cyan">
            {displayText}
          </span>
          <span
            className="font-mono text-neon-green text-xl"
            style={{ animation: 'blink 1s step-end infinite' }}
          >
            _
          </span>
        </div>

        {/* Tagline */}
        <p
          className="font-body text-slate-400 text-base lg:text-lg leading-relaxed max-w-md mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-3 animate-fade-in-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
        >
          <a
            href="#projects"
            className="group relative px-6 py-3 font-mono text-sm font-medium text-bg-primary overflow-hidden rounded-sm transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
              boxShadow: '0 0 20px rgba(0,255,136,0.3)',
            }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          <a
            href="#skills"
            className="px-6 py-3 font-mono text-sm font-medium text-neon-green rounded-sm border border-neon-green/30 hover:border-neon-green/70 hover:bg-neon-green/5 transition-all duration-300"
          >
            My Skills
          </a>
        </div>

        {/* Location */}
        <div
          className="flex items-center gap-2 mt-8 animate-fade-in-up"
          style={{ animationDelay: '0.65s', animationFillMode: 'both' }}
        >
          <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="font-mono text-xs text-slate-500 tracking-wider">{personalInfo.location}</span>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-full border-r-2 border-b-2 border-neon-green/20" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-neon-green/40" />
      </div>
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full border-l-2 border-t-2 border-neon-green/20" />
      </div>
    </div>
  );
}
