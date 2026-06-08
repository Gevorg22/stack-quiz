'use client';

import { useMemo } from 'react';

interface ConfettiProps {
  active: boolean;
}

const COLORS = [
  '#6366f1',
  '#8b5cf6',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#3b82f6',
  '#f43f5e',
];

export function Confetti({ active }: ConfettiProps) {
  const particles = useMemo(() => {
    if (!active) return [];
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      color: COLORS[i % COLORS.length],
      left: `${(i * 137.5) % 100}%`,
      delay: `${(i * 0.6) / 70}s`,
      duration: `${1.5 + (i % 4) * 0.3}s`,
      size: `${8 + (i % 4) * 2}px`,
    }));
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-sm"
          style={{
            backgroundColor: p.color,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `confetti-fall ${p.duration} ${p.delay} ease-in forwards`,
          }}
        />
      ))}
    </div>
  );
}
