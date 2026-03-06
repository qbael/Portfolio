import { personalInfo } from '../data/portfolio';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.017 4.388 11.003 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.076 24 18.09 24 12.073z"/>
    </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function ProfileCard() {
  const initials = personalInfo.name.split(' ').map((n) => n[0]).join('');

  return (
    <div className="h-full flex flex-col gap-5 p-6 lg:p-8">
      {/* Avatar + Name */}
      <div className="flex items-center gap-4">
        <div
          className="relative shrink-0 animate-float"
          style={{ animationDelay: '0.5s' }}
        >
          <div
            className="w-40 h-40 rounded-2xl overflow-hidden relative"
            style={{
              border: '2px solid rgba(0,255,136,0.4)',
              boxShadow: '0 0 30px rgba(0,255,136,0.2), 0 0 60px rgba(0,255,136,0.05)',
            }}
          >
              {personalInfo.avatarUrl ? (
                  <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="absolute inset-0 w-full h-full object-cover scale-200 object-center"
                  />
              ) : (
                  <div
                      className="w-full h-full flex items-center justify-center font-display text-2xl font-bold"
                      style={{
                          background: 'linear-gradient(135deg, #0a1628, #0d2040)',
                          color: '#00ff88',
                      }}
                  >
                      {initials}
                  </div>
              )}
            {/* Scan line effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(transparent 40%, rgba(0,255,136,0.06) 50%, transparent 60%)',
                animation: 'scanLine 3s linear infinite',
              }}
            />
          </div>
          {/* Online indicator */}
          <div
            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2"
            style={{
              background: '#00ff88',
              borderColor: '#050810',
              boxShadow: '0 0 8px rgba(0,255,136,0.8)',
            }}
          />
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-slate-100">{personalInfo.name}</h2>
          <p className="font-mono text-sm" style={{ color: '#00d4ff' }}>{personalInfo.role}</p>
        </div>
      </div>

      {/* Bio */}
      <div
        className="p-4 rounded-lg relative overflow-hidden"
        style={{
          background: 'rgba(0, 255, 136, 0.03)',
          border: '1px solid rgba(0, 255, 136, 0.1)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
          <span className="font-mono text-xs text-neon-green/60 uppercase tracking-widest">About Me</span>
        </div>
        <p className="font-body text-sm text-slate-400 leading-relaxed">{personalInfo.bio}</p>
      </div>

      {/* Philosophy */}
      <div
        className="p-4 rounded-lg relative"
        style={{
          background: 'rgba(168, 85, 247, 0.04)',
          border: '1px solid rgba(168, 85, 247, 0.15)',
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          <span className="font-mono text-xs text-purple-400/70 uppercase tracking-widest">Philosophy</span>
        </div>
        <p className="font-mono text-xs text-slate-400 leading-relaxed italic">{personalInfo.philosophy}</p>
      </div>

      {/* Social Links */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="font-mono text-xs text-cyan-400/60 uppercase tracking-widest">Connect</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {/* GitHub */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-md font-mono text-xs text-slate-400 hover:text-neon-green transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>

          {/*/!* LinkedIn *!/*/}
          {/*<a*/}
          {/*  href={personalInfo.linkedinUrl}*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  className="group flex items-center gap-2 px-3 py-2 rounded-md font-mono text-xs text-slate-400 hover:text-cyan-400 transition-all duration-200"*/}
          {/*  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}*/}
          {/*>*/}
          {/*  <LinkedInIcon />*/}
          {/*  <span>LinkedIn</span>*/}
          {/*</a>*/}

          {/* Twitter */}
          <a
            href={personalInfo.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-md font-mono text-xs text-slate-400 hover:text-sky-400 transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <FacebookIcon />
            <span>Facebook</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-2 px-3 py-2 rounded-md font-mono text-xs text-slate-400 hover:text-pink-400 transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <EmailIcon />
            <span>{personalInfo.email}</span>
          </a>
        </div>
      </div>

      {/* Resume CTA */}
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-2 py-3 rounded-lg font-mono text-sm font-medium transition-all duration-300 mt-auto"
        style={{
          background: 'rgba(0,255,136,0.05)',
          border: '1px solid rgba(0,255,136,0.3)',
          color: '#00ff88',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,255,136,0.1)';
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,255,136,0.6)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(0,255,136,0.15)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,255,136,0.05)';
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,255,136,0.3)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
        }}
      >
        <DownloadIcon />
        Download Resume
      </a>
    </div>
  );
}
