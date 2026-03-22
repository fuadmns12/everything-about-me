import type { ReactNode } from 'react';

interface HudFrameProps {
  children: ReactNode;
  className?: string;
}

export default function HudFrame({ children, className = '' }: HudFrameProps) {
  return <div className={`hud-frame ${className}`.trim()}>{children}</div>;
}
