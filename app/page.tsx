import NeonNavbar from '@/components/NeonNavbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeachingFocusSection from '@/components/TeachingFocusSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import BackgroundSound from '@/components/BackgroundSound';
import ButtonClickSound from '@/components/ButtonClickSound';
import { profileData } from '@/data/profileData';

export default function HomePage() {
  return (
    <div className="page-root">
      <div className="bg-cinema-vignette" aria-hidden="true" />
      <div className="bg-cinema-spotlight" aria-hidden="true" />
      <div className="bg-cinema-rimlight" aria-hidden="true" />
      <div className="bg-film-grain" aria-hidden="true" />
      <ButtonClickSound />
      <BackgroundSound />

      <NeonNavbar />

      <main className="main-shell">
        <HeroSection profile={profileData} />
        <AboutSection profile={profileData} />
        <TeachingFocusSection profile={profileData} />
        <SkillsSection profile={profileData} />
        <ProjectsSection profile={profileData} />
        <ContactSection profile={profileData} />
      </main>
    </div>
  );
}
