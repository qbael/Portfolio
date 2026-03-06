import HeroSection from './components/HeroSection';
import ProfileCard from './components/ProfileCard';
import ProjectCarousel from './components/ProjectCarousel';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: '#050810' }}
    >
      {/* Global ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 10% 20%, rgba(0, 255, 136, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(168, 85, 247, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.02) 0%, transparent 70%)
          `,
        }}
      />

      {/* Section 1: Hero + Profile Grid */}
      <section
        id="about"
        className="pt-4 min-h-screen relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-5rem)] rounded-2xl overflow-hidden relative">
            {/* Col 1: Hero */}
            <div
              className="relative"
              style={{
                background: 'linear-gradient(135deg, rgba(5,8,16,0.95) 0%, rgba(10,15,30,0.95) 100%)',
                borderRight: '1px solid rgba(0,255,136,0.08)',
              }}
            >
              <HeroSection />
            </div>

            {/* Col 2: Profile */}
            <div
              className="relative overflow-y-auto"
              style={{
                background: 'rgba(10,15,30,0.8)',
                borderLeft: '1px solid rgba(0,255,136,0.06)',
              }}
            >
              {/* Dot matrix bg */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(rgba(0,255,136,0.06) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                  opacity: 0.5,
                }}
              />
              <div className="relative z-10">
                <ProfileCard />
              </div>
            </div>

            {/* Outer border */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ border: '1px solid rgba(0,255,136,0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-12">
        <div
          className="h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.2), rgba(0,212,255,0.2), transparent)',
          }}
        />
      </div>

      {/* Section 2: Projects */}
      <ProjectCarousel />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-12">
        <div
          className="h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.2), rgba(255,0,110,0.2), transparent)',
          }}
        />
      </div>

      {/* Section 3: Skills */}
      <SkillsSection />

      <Footer />
    </div>
  );
}
