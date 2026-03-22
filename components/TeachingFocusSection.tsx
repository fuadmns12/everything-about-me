import type { ProfileData } from '@/types/profile';
import HudFrame from '@/components/HudFrame';

interface TeachingFocusSectionProps {
  profile: ProfileData;
}

export default function TeachingFocusSection({ profile }: TeachingFocusSectionProps) {
  return (
    <section id="focus" className="section" aria-label="Teaching Focus">
      <HudFrame>
        <h2 className="section-title">Teaching Focus</h2>
        <div className="focus-grid">
          <article className="focus-card">
            <h3>Subject</h3>
            <div className="subject-card-grid">
              {profile.teachingFocus.methods.map((item) => (
                <div key={`subject-${item}`} className="subject-item-card">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </HudFrame>
    </section>
  );
}
