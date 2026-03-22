'use client';

import { useEffect, useRef, useState } from 'react';
import { Music2 } from 'lucide-react';

export default function BackgroundSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGate, setShowGate] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;

    let pausedByVisibility = false;

    const resumeIfNeeded = async () => {
      if (!shouldPlayRef.current || document.hidden) return;
      if (!audio.paused) return;
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (!audio.paused && shouldPlayRef.current) {
          pausedByVisibility = true;
          audio.pause();
          setIsPlaying(false);
        }
        return;
      }

      if (pausedByVisibility) {
        pausedByVisibility = false;
        void resumeIfNeeded();
      }
    };

    const onPageShow = () => {
      void resumeIfNeeded();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pageshow', onPageShow);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, []);

  const startExperience = async () => {
    const audio = audioRef.current;
    if (audio) {
      try {
        await audio.play();
        shouldPlayRef.current = true;
        setIsPlaying(true);
      } catch {
        shouldPlayRef.current = false;
        setIsPlaying(false);
      }
    }

    // Ensure first view starts from the top section after dismissing the gate.
    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });

    setShowGate(false);
  };

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        shouldPlayRef.current = true;
        setIsPlaying(true);
      } catch {
        shouldPlayRef.current = false;
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    shouldPlayRef.current = false;
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/BackgroundSound.mp3" loop preload="auto" />
      {showGate ? (
        <div
          className="sound-gate"
          role="dialog"
          aria-modal="true"
          aria-label="Start background sound"
        >
          <div className="sound-gate-panel">
            <button type="button" className="sound-gate-btn" onClick={startExperience}>
              Click Me
            </button>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        className={`bg-sound-toggle ${isPlaying ? 'is-playing' : ''}`}
        onClick={toggleSound}
        aria-label={isPlaying ? 'Pause background sound' : 'Play background sound'}
        title={isPlaying ? 'Pause background sound' : 'Play background sound'}
      >
        <Music2 size={16} />
      </button>
    </>
  );
}
