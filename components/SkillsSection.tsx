import type { ProfileData } from '@/types/profile';
import HudFrame from '@/components/HudFrame';

interface SkillsSectionProps {
  profile: ProfileData;
}

const levelClass: Record<string, string> = {
  Beginner: 'badge-level beginner',
  Intermediate: 'badge-level intermediate',
  Advanced: 'badge-level advanced',
};

export default function SkillsSection({ profile }: SkillsSectionProps) {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <HudFrame>
        <h2 className="section-title">Core Craft</h2>
        <div className="skill-grid">
          {profile.skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className={`skill-glow ${skill.badgeColor}`} aria-hidden="true" />
              <h3>{skill.name}</h3>
              <span className={levelClass[skill.level] || 'badge-level'}>{skill.level}</span>
            </article>
          ))}
        </div>
      </HudFrame>
    </section>
  );
}
