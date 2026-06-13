'use client';

import { CodingChallenge } from '@/types/challenge';
import { DarkModeToggle } from './DarkModeToggle';

interface ChallengesViewProps {
  challenges: CodingChallenge[];
  solvedIds: string[];
  isDark: boolean;
  onToggleDark: () => void;
  onSelect: (challenge: CodingChallenge) => void;
  onPlayground: () => void;
  onBack: () => void;
}

const difficultyLabel: Record<string, string> = {
  beginner: 'Начальный',
  intermediate: 'Средний',
  advanced: 'Продвинутый',
};

const difficultyColor: Record<string, string> = {
  beginner: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  intermediate: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  advanced: 'text-red-400 bg-red-400/10 border-red-400/20',
};

export function ChallengesView({
  challenges,
  solvedIds,
  isDark,
  onToggleDark,
  onSelect,
  onPlayground,
  onBack,
}: ChallengesViewProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-10 sm:py-16">
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              ← Назад
            </button>
            <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
          </div>

          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur-sm">
              <span>💻</span>
              <span>Практические задачи</span>
            </div>
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              Код{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                редактор
              </span>
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Решено: {solvedIds.length} / {challenges.length}
            </p>
          </div>
        </div>

        <button
          onClick={onPlayground}
          className="mb-3 flex w-full items-center gap-4 rounded-2xl border border-indigo-400/30 bg-indigo-400/10 p-5 text-left transition-all duration-200 hover:border-indigo-400/60 hover:bg-indigo-400/15 active:scale-[0.99]"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/20 text-2xl">
            🛝
          </div>
          <div>
            <p className="font-bold text-white">Playground</p>
            <p className="text-sm text-slate-400">Пустой редактор — пиши любой JS код</p>
          </div>
          <span className="ml-auto text-slate-600">→</span>
        </button>

        <div className="flex flex-col gap-3">
          {challenges.map((challenge) => {
            const solved = solvedIds.includes(challenge.id);
            return (
              <button
                key={challenge.id}
                onClick={() => onSelect(challenge)}
                className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm transition-all duration-200 hover:border-indigo-400/40 hover:bg-white/10 active:scale-[0.99]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {solved && (
                        <span className="text-emerald-400 text-base">✓</span>
                      )}
                      <h3 className="font-bold text-white text-base truncate">
                        {challenge.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400 line-clamp-1">
                      {challenge.description.split('\n')[0]}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {challenge.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${difficultyColor[challenge.difficulty]}`}
                  >
                    {difficultyLabel[challenge.difficulty]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
