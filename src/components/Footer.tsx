import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 lg:px-12 mt-8"
      style={{ borderTop: '1px solid rgba(0,255,136,0.08)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #00ff88, #00d4ff)', color: '#050810' }}
          >
            {personalInfo.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <span className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React + Vite + Tailwind
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
          <span className="font-mono text-xs text-slate-600">All systems operational</span>
        </div>
      </div>
    </footer>
  );
}
