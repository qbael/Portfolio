import { useState, useRef, useEffect } from 'react';
import { projects } from '../data/portfolio';
import type { Project } from '../types';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const statusConfig = {
  completed: { label: 'Completed', color: '#00ff88', bg: 'rgba(0,255,136,0.1)' },
  'in-progress': { label: 'In Progress', color: '#00d4ff', bg: 'rgba(0,212,255,0.1)' },
  archived: { label: 'Archived', color: '#94a3b8', bg: 'rgba(148,163,184,0.1)' },
};

function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];

  return (
    <div
      className="h-full flex flex-col rounded-2xl overflow-hidden relative group"
      style={{
        background: 'linear-gradient(135deg, rgba(13,20,40,0.95) 0%, rgba(10,15,30,0.95) 100%)',
        border: '1px solid rgba(0,255,136,0.12)',
        boxShadow: '0 4px 40px rgba(0,0,0,0.4)',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, #00ff88, #00d4ff, #a855f7)',
        }}
      />

      <div className="flex flex-col flex-1 p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-mono text-xs px-2 py-0.5 rounded-full"
                style={{ color: status.color, background: status.bg, border: `1px solid ${status.color}30` }}
              >
                {status.label}
              </span>
              <span className="font-mono text-xs text-slate-600">{project.year}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-100 group-hover:text-neon-green transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Project number */}
          <div
            className="font-display text-5xl font-extrabold opacity-5 select-none"
            style={{ color: '#00ff88', lineHeight: 1 }}
          >
            {String(project.id).padStart(2, '0')}
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>
        <p className="font-body text-xs text-slate-500 leading-relaxed mb-5">{project.longDescription}</p>

        {/* Highlight */}
        {project.highlight && (
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-lg mb-5"
            style={{
              background: 'rgba(0,255,136,0.05)',
              border: '1px solid rgba(0,255,136,0.15)',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="font-mono text-xs text-neon-green/80">{project.highlight}</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-md text-slate-400"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs text-slate-300 hover:text-neon-green transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <GithubIcon />
            Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs font-medium transition-all duration-200"
              style={{
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.25)',
                color: '#00ff88',
              }}
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: 'inset 0 0 40px rgba(0,255,136,0.03)',
          border: '1px solid rgba(0,255,136,0.25)',
        }}
      />
    </div>
  );
}

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = projects.length;

  const goTo = (index: number) => {
    setCurrent(Math.max(0, Math.min(index, total - 1)));
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging) setCurrent((c) => (c + 1) % total);
    }, 10000);
    return () => clearInterval(timer);
  }, [isDragging, total]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo((current + 1) % total);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, total]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    if (delta < -50) goTo((current + 1) % total);
    else if (delta > 50) goTo(current - 1);
    setIsDragging(false);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 lg:px-12 relative">
      {/* Section header */}
      <div className="mb-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.5))' }} />
          <span className="font-mono text-xs text-neon-green/60 tracking-widest uppercase">02 / Projects</span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(0,255,136,0.5), transparent)' }} />
        </div>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-100 leading-none">
              Selected{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Work
              </span>
            </h2>
            <p className="font-body text-slate-500 mt-2 text-sm">
              {current + 1} / {total} projects
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-mono text-slate-400 disabled:opacity-25 transition-all duration-200 hover:text-neon-green"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              ←
            </button>
            <button
              onClick={() => goTo((current + 1) % total)}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-mono text-slate-400 transition-all duration-200 hover:text-neon-green"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Carousel container */}
      <div
        className="overflow-hidden max-w-7xl mx-auto"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 px-2">
              <div className="max-w-3xl mx-auto" style={{ height: '520px' }}>
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2.5 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === current ? '#00ff88' : 'rgba(255,255,255,0.15)',
              boxShadow: i === current ? '0 0 10px rgba(0,255,136,0.6)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Project thumbnails */}
      <div className="flex justify-center gap-3 mt-8 max-w-7xl mx-auto flex-wrap">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            className="px-3 py-1.5 rounded-md font-mono text-xs transition-all duration-200"
            style={{
              background: i === current ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${i === current ? 'rgba(0,255,136,0.4)' : 'rgba(255,255,255,0.06)'}`,
              color: i === current ? '#00ff88' : '#64748b',
            }}
          >
            {p.title}
          </button>
        ))}
      </div>
    </section>
  );
}
