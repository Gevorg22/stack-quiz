'use client';

import { useState } from 'react';
import { Difficulty, QuizCount } from '@/types/quiz';

interface QuizSetupProps {
  categoryLabel: string;
  totalCount: number;
  countByDifficulty: Record<Difficulty, number>;
  isDark: boolean;
  onToggleDark: () => void;
  onStart: (count: QuizCount, difficulty?: Difficulty) => void;
  onBack: () => void;
}

const COUNT_OPTIONS: { value: QuizCount; label: string }[] = [
  { value: 10, label: '10 вопросов' },
  { value: 25, label: '25 вопросов' },
  { value: 50, label: '50 вопросов' },
  { value: 'all', label: 'Все вопросы' },
];

const DIFFICULTY_OPTIONS: { value: Difficulty | 'any'; label: string; emoji: string; color: string }[] = [
  { value: 'any',          label: 'Любая',        emoji: '🎯', color: 'border-indigo-400 bg-indigo-500/20 text-white' },
  { value: 'beginner',     label: 'Базовый',      emoji: '🟢', color: 'border-emerald-400 bg-emerald-500/20 text-emerald-200' },
  { value: 'intermediate', label: 'Средний',      emoji: '🟡', color: 'border-yellow-400 bg-yellow-500/20 text-yellow-200' },
  { value: 'advanced',     label: 'Продвинутый',  emoji: '🔴', color: 'border-red-400 bg-red-500/20 text-red-200' },
];

export function QuizSetup({
  categoryLabel,
  totalCount,
  countByDifficulty,
  isDark,
  onToggleDark,
  onStart,
  onBack,
}: QuizSetupProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'any'>('any');

  const availableCount =
    selectedDifficulty === 'any'
      ? totalCount
      : countByDifficulty[selectedDifficulty];

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
        <p className="mb-6 text-sm text-indigo-300">{totalCount} вопросов доступно</p>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Сложность
        </p>
        <div className="mb-8 grid grid-cols-2 gap-2">
          {DIFFICULTY_OPTIONS.map((opt) => {
            const count =
              opt.value === 'any' ? totalCount : countByDifficulty[opt.value as Difficulty];
            const active = selectedDifficulty === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setSelectedDifficulty(opt.value)}
                className={`flex flex-col items-start rounded-2xl border-2 px-4 py-3 text-left transition-all active:scale-[0.98] ${
                  active
                    ? opt.color
                    : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white/80'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold">
                  <span>{opt.emoji}</span>
                  <span className="text-sm">{opt.label}</span>
                </div>
                <span className="mt-0.5 text-xs opacity-70">{count} вопросов</span>
              </button>
            );
          })}
        </div>

        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Количество
        </p>
        <div className="flex flex-col gap-3">
          {COUNT_OPTIONS.map((opt) => {
            const disabled =
              typeof opt.value === 'number' && opt.value > availableCount;
            return (
              <button
                key={String(opt.value)}
                onClick={() =>
                  !disabled &&
                  onStart(
                    opt.value,
                    selectedDifficulty === 'any' ? undefined : selectedDifficulty,
                  )
                }
                disabled={disabled}
                className={`rounded-2xl border-2 px-6 py-3.5 text-left transition-all ${
                  disabled
                    ? 'cursor-not-allowed border-white/10 text-white/30'
                    : 'border-white/20 text-white hover:border-indigo-400 hover:bg-white/10 active:scale-[0.98]'
                }`}
              >
                <div className="font-semibold">{opt.label}</div>
                <div className="mt-0.5 text-xs text-indigo-300">
                  {opt.value === 'all'
                    ? `Все ${availableCount} в случайном порядке`
                    : !disabled
                      ? `Случайные ${opt.value} из ${availableCount}`
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
