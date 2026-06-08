'use client';

import { useEffect, useRef, useState } from 'react';

interface StreakBadgeProps {
  streak: number;
}

export function StreakBadge({ streak }: StreakBadgeProps) {
  const [animating, setAnimating] = useState(false);
  const prevStreak = useRef(streak);

  useEffect(() => {
    if (streak > prevStreak.current && streak >= 2) {
      setAnimating(true);
      const t = setTimeout(() => setAnimating(false), 400);
      prevStreak.current = streak;
      return () => clearTimeout(t);
    }
    prevStreak.current = streak;
  }, [streak]);

  if (streak < 2) return null;

  return (
    <div
      className={`flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 ${
        animating ? 'animate-streak-pop' : ''
      }`}
    >
      🔥 {streak}
    </div>
  );
}
