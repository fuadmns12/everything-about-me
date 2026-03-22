'use client';

import { useEffect } from 'react';

export default function ButtonClickSound() {
  useEffect(() => {
    const clickSound = new Audio('/suzuki-demon-slayer.mp3');
    clickSound.preload = 'auto';
    clickSound.volume = 0.7;

    const selector = [
      'button',
      'a.btn-neon',
      'a.btn-outline',
      'a.project-link',
      'a.contact-icon-btn',
      'a.nav-link',
      '.sound-gate-btn',
      '.bg-sound-toggle',
    ].join(', ');

    const handleClick = () => {
      clickSound.currentTime = 0;
      void clickSound.play().catch(() => {});
    };

    const bindTargets = () => {
      const targets = document.querySelectorAll<HTMLElement>(selector);
      targets.forEach((el) => el.addEventListener('click', handleClick));
      return targets;
    };

    let targets = bindTargets();

    const observer = new MutationObserver(() => {
      targets.forEach((el) => el.removeEventListener('click', handleClick));
      targets = bindTargets();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      targets.forEach((el) => el.removeEventListener('click', handleClick));
    };
  }, []);

  return null;
}
