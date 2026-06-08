interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  variant?: 'dark-bg' | 'light-bg';
}

export function DarkModeToggle({
  isDark,
  onToggle,
  variant = 'dark-bg',
}: DarkModeToggleProps) {
  const baseClass =
    'flex h-9 w-9 items-center justify-center rounded-xl text-lg transition-colors';

  const variantClass =
    variant === 'dark-bg'
      ? 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
      : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600';

  return (
    <button
      onClick={onToggle}
      className={`${baseClass} ${variantClass}`}
      aria-label={isDark ? 'Светлая тема' : 'Тёмная тема'}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
