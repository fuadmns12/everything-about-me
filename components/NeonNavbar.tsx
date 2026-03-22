'use client';

import { useEffect, useRef, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Profile' },
  { id: 'about', label: 'Story' },
  { id: 'focus', label: 'Focus' },
  { id: 'skills', label: 'Craft' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Connect' },
] as const;

export default function NeonNavbar() {
  const [active, setActive] = useState<string>('hero');
  const [navVisible, setNavVisible] = useState(true);
  const activeRef = useRef<string>('hero');
  const glitchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const triggerSectionGlitch = (sectionId: string) => {
      if (typeof window === 'undefined') return;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

      const section = document.getElementById(sectionId);
      if (!section) return;

      // Ensure only one section is glitching at a time.
      document
        .querySelectorAll<HTMLElement>('.section.is-glitching')
        .forEach((el) => el.classList.remove('is-glitching'));

      section.classList.remove('is-glitching');
      // Force reflow so the animation can restart when re-applying the class.
      void section.offsetWidth;
      section.classList.add('is-glitching');

      if (glitchTimeoutRef.current) window.clearTimeout(glitchTimeoutRef.current);
      glitchTimeoutRef.current = window.setTimeout(() => {
        section.classList.remove('is-glitching');
      }, 720);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          const nextId = visible.target.id;
          if (nextId !== activeRef.current) {
            activeRef.current = nextId;
            setActive(nextId);
            triggerSectionGlitch(nextId);
          }
        }
      },
      {
        // Bottom margin can't be too negative, otherwise the last section can't enter the "active" band
        // on tall viewports (you can't scroll past the page end).
        rootMargin: '-40% 0px -30% 0px',
        threshold: [0.2, 0.5, 0.75],
      },
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
      if (glitchTimeoutRef.current) window.clearTimeout(glitchTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 24) {
        setNavVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      const isScrollingDown = currentScrollY > lastScrollY + 6;
      const isScrollingUp = currentScrollY < lastScrollY - 6;

      if (isScrollingDown && currentScrollY > 140) {
        setNavVisible(false);
      } else if (isScrollingUp) {
        setNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`nav-wrap ${navVisible ? 'is-visible' : 'is-hidden'}`}
      aria-label="Main Navigation"
    >
      <div className="nav-shell">
        <div className="nav-ring nav-ring-outer" aria-hidden="true" />
        <div className="nav-ring nav-ring-inner" aria-hidden="true" />

        <a href="#hero" className="brand-tag" aria-label="Back to top">
          EAM
        </a>

        <nav className="nav-links open">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link slot-${index} ${active === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
