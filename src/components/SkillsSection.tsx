import { useState, useEffect, useRef } from 'react';
import { skillCategories } from '../data/portfolio';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const currentCategory = skillCategories.find((c) => c.key === activeCategory)!;

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-12" style={{ background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.5))' }} />
            <span className="font-mono text-xs text-purple-400/60 tracking-widest uppercase">03 / Skills</span>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.5), transparent)' }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-slate-100 leading-none">
            Tech{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ff006e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Stack
            </span>
          </h2>
          <p className="font-body text-slate-500 mt-3 text-sm max-w-lg">
            Technologies and Tools I work with regularly. I enjoy exploring new technologies and continuously expanding my skill set to stay at the forefront of the industry.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="relative px-5 py-2.5 rounded-lg font-mono text-xs font-medium transition-all duration-300"
              style={{
                background: activeCategory === cat.key ? `${cat.color}15` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeCategory === cat.key ? cat.color + '50' : 'rgba(255,255,255,0.07)'}`,
                color: activeCategory === cat.key ? cat.color : '#64748b',
                boxShadow: activeCategory === cat.key ? `0 0 15px ${cat.color}20` : 'none',
              }}
            >
              {cat.label}
              {activeCategory === cat.key && (
                <span
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {currentCategory.skills.map((skill, i) => (
            <SkillPill
              key={skill}
              skill={skill}
              color={currentCategory.color}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
          {[
            { value: '10+', label: 'Technologies', color: '#a855f7' },
            { value: '4+', label: 'Open Source Repos', color: '#ff006e' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`p-5 rounded-xl text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${i * 0.1 + 0.5}s`,
                background: `${stat.color}08`,
                border: `1px solid ${stat.color}20`,
              }}
            >
              <div
                className="font-display text-3xl font-extrabold mb-1"
                style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}
              >
                {stat.value}
              </div>
              <div className="font-mono text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Terminal block */}
        <div
          className="mt-12 p-6 rounded-xl font-mono text-xs overflow-hidden relative"
          style={{
            background: 'rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-slate-600">terminal</span>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-neon-green">~</span>
              <span className="text-slate-500"> $ </span>
              <span className="text-slate-300">whoami</span>
            </p>
            <p className="text-slate-400 pl-4">A passionate developer who loves crafting elegant solutions.</p>
            <p className="mt-3">
              <span className="text-neon-green">~</span>
              <span className="text-slate-500"> $ </span>
              <span className="text-slate-300">cat skills.txt | grep favorite</span>
            </p>
            <p className="text-cyan-400 pl-4">
              React · TypeScript · Spring Boot · PostgreSQL · Docker
            </p>
            <p className="mt-3 flex items-center gap-1">
              <span className="text-neon-green">~</span>
              <span className="text-slate-500"> $ </span>
              <span className="w-2 h-4 bg-neon-green inline-block animate-blink" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillPill({
  skill,
  color,
  index,
  visible,
}: {
  skill: string;
  color: string;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className="group relative flex items-center gap-3 px-4 py-3 rounded-xl cursor-default transition-all duration-500"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transitionDelay: `${index * 0.06}s`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = `${color}0a`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${color}30`;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${color}10`;
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.03)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Dot */}
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{
          background: color,
          boxShadow: `0 0 6px ${color}`,
        }}
      />
      <span className="font-mono text-xs text-slate-400 group-hover:text-slate-200 transition-colors duration-200">
        {skill}
      </span>
    </div>
  );
}
