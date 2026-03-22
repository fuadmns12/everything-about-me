import type { ProfileData } from '@/types/profile';
import HudFrame from '@/components/HudFrame';

interface HeroSectionProps {
  profile: ProfileData;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="hero" className="section section-hero" aria-label="Hero">
      <HudFrame className="hero-panel">
        <div className="hero-bg-image" aria-hidden="true" />

        <span className="hero-katakana-slot hero-katakana-left" aria-hidden="true">
          <span className="hero-katakana">フ</span>
        </span>
        <span className="hero-katakana-slot hero-katakana-right" aria-hidden="true">
          <span className="hero-katakana">ア</span>
        </span>
        <span className="hero-katakana-slot hero-katakana-bottom" aria-hidden="true">
          <span className="hero-katakana">ド</span>
        </span>
        <h1 className="hero-title">SAMPURASUN</h1>
        <p className="hero-name">{profile.name}</p>
        <p className="hero-headline">{profile.headline}</p>

        <div className="hero-actions">
          <a className="btn-neon" href="#projects">
            View Projects
          </a>
          <a
            className="btn-outline"
            href="https://www.instagram.com/fuadmuslym/"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me
          </a>
        </div>
      </HudFrame>
    </section>
  );
}
