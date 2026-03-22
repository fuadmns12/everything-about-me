import { ExternalLink } from 'lucide-react';
import type { ProfileData } from '@/types/profile';
import HudFrame from '@/components/HudFrame';

interface ProjectsSectionProps {
  profile: ProfileData;
}

export default function ProjectsSection({ profile }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <HudFrame>
        <h2 className="section-title">Selected Work</h2>
        <div className="project-grid">
          {profile.projects.map((project) => (
            <article
              key={project.title}
              className={
                project.title === 'Learning English Geuwat'
                  ? 'project-card project-card-deck'
                  : 'project-card'
              }
            >
              <div className="project-head">
                {project.title === 'Learning English Geuwat' ? (
                  <h3 className="project-title">
                    <span className="status-chip status-live project-title-chip">
                      Learning English GEUWAT
                    </span>
                  </h3>
                ) : (
                  <h3>{project.title}</h3>
                )}
              </div>
              <p>{project.description}</p>
              {project.link ? (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  Lihat Website
                  <ExternalLink size={14} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </HudFrame>
    </section>
  );
}
