import type { ProfileData } from '@/types/profile';
import HudFrame from '@/components/HudFrame';

interface AboutSectionProps {
  profile: ProfileData;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="section" aria-label="About">
      <HudFrame>
        <h2 className="section-title">Story</h2>
        <div className="about-copy">
          {profile.summary.map((paragraph, idx) => (
            <p key={`${paragraph}-${idx}`}>{paragraph}</p>
          ))}
        </div>
      </HudFrame>
    </section>
  );
}
