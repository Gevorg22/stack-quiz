'use client';

import { QuizCount } from '@/types/quiz';

interface QuizSetupProps {
  categoryLabel: string;
  maxQuestions: number;
  isDark: boolean;
  onToggleDark: () => void;
  onStart: (count: QuizCount) => void;
  onBack: () => void;
}

const COUNT_OPTIONS: { value: QuizCount; label: string }[] = [
  { value: 10, label: '10 вопросов' },
  { value: 25, label: '25 вопросов' },
  { value: 50, label: '50 вопросов' },
  { value: 'all', label: 'Все вопросы' },
];

export function QuizSetup({
  categoryLabel,
  maxQuestions,
  isDark,
  onToggleDark,
  onStart,
  onBack,
}: QuizSetupProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-sm text-indigo-300 transition-colors hover:text-white"
          >
            ← Назад
          </button>
          <button
            onClick={onToggleDark}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
            aria-label={isDark ? 'Светлая тема' : 'Тёмная тема'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        <h2 className="mb-1 text-2xl font-black text-white">{categoryLabel}</h2>
        <p className="mb-8 text-sm text-indigo-300">
          {maxQuestions} вопросов доступно
        </p>

        <div className="flex flex-col gap-3">
          {COUNT_OPTIONS.map((opt) => {
            const disabled =
              typeof opt.value === 'number' && opt.value > maxQuestions;
            return (
              <button
                key={String(opt.value)}
                onClick={() => !disabled && onStart(opt.value)}
                disabled={disabled}
                className={`rounded-2xl border-2 px-6 py-4 text-left transition-all ${
                  disabled
                    ? 'cursor-not-allowed border-white/10 text-white/30'
                    : 'border-white/20 text-white hover:border-indigo-400 hover:bg-white/10 active:scale-[0.98]'
                }`}
              >
                <div className="font-semibold">{opt.label}</div>
                <div className="mt-0.5 text-xs text-indigo-300">
                  {opt.value === 'all'
                    ? `Все ${maxQuestions} в случайном порядке`
                    : !disabled
                      ? `Случайные ${opt.value} из ${maxQuestions}`
                      : 'Недостаточно вопросов'}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
