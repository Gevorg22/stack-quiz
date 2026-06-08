'use client';

import { QuizResult, HistoryEntry } from '@/types/quiz';
import { Confetti } from './Confetti';
import { DarkModeToggle } from './DarkModeToggle';

interface ResultScreenProps {
  result: QuizResult;
  history: HistoryEntry[];
  isDark: boolean;
  onToggleDark: () => void;
  onRetryWrong: (() => void) | undefined;
  onRestart: () => void;
  onHome: () => void;
  onClearHistory: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  javascript: 'JavaScript',
  react: 'React',
  html: 'HTML',
  css: 'CSS',
  typescript: 'TypeScript',
  network: 'Сети и Web',
  git: 'Git',
  all: 'Все темы',
};

const GRADE_CONFIG = [
  {
    min: 90,
    emoji: '🏆',
    title: 'Превосходно!',
    subtitle: 'Вы настоящий эксперт!',
    color: 'text-yellow-600 dark:text-yellow-400',
    ring: 'ring-yellow-400',
  },
  {
    min: 70,
    emoji: '🌟',
    title: 'Отлично!',
    subtitle: 'Высокий уровень знаний!',
    color: 'text-emerald-600 dark:text-emerald-400',
    ring: 'ring-emerald-400',
  },
  {
    min: 50,
    emoji: '👍',
    title: 'Неплохо!',
    subtitle: 'Есть куда расти.',
    color: 'text-blue-600 dark:text-blue-400',
    ring: 'ring-blue-400',
  },
  {
    min: 0,
    emoji: '📚',
    title: 'Нужна практика',
    subtitle: 'Изучите материал и попробуйте снова!',
    color: 'text-red-600 dark:text-red-400',
    ring: 'ring-red-400',
  },
];

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function ResultScreen({
  result,
  history,
  isDark,
  onToggleDark,
  onRetryWrong,
  onRestart,
  onHome,
  onClearHistory,
}: ResultScreenProps) {
  const { score, total, wrongQuestions, maxStreak } = result;
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade = GRADE_CONFIG.find((g) => percent >= g.min) ?? GRADE_CONFIG[3];
  const isPerfect = percent === 100;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-900">
      <Confetti active={isPerfect} />

      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <button
            onClick={onHome}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            ← На главную
          </button>
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} variant="light-bg" />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-8">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl dark:bg-slate-800 dark:shadow-slate-900/50">
          <div className="mb-4 text-6xl">{grade.emoji}</div>

          <div
            className={`mx-auto mb-6 inline-flex h-28 w-28 items-center justify-center rounded-full bg-white ring-4 ring-offset-4 dark:bg-slate-800 dark:ring-offset-slate-800 ${grade.ring}`}
          >
            <div>
              <div className={`text-4xl font-black ${grade.color}`}>
                {percent}%
              </div>
              <div className="text-xs text-gray-400 dark:text-slate-500">
                результат
              </div>
            </div>
          </div>

          <h2 className={`text-2xl font-bold ${grade.color}`}>{grade.title}</h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            {grade.subtitle}
          </p>

          <div className="mt-6 flex justify-center gap-8 border-y border-gray-100 py-4 dark:border-slate-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {score}
              </div>
              <div className="text-xs text-gray-400 dark:text-slate-500">
                правильных
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 dark:text-red-400">
                {total - score}
              </div>
              <div className="text-xs text-gray-400 dark:text-slate-500">
                ошибок
              </div>
            </div>
            {maxStreak >= 2 && (
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                  🔥 {maxStreak}
                </div>
                <div className="text-xs text-gray-400 dark:text-slate-500">
                  серия
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {onRetryWrong && wrongQuestions.length > 0 && (
              <button
                onClick={onRetryWrong}
                className="w-full rounded-xl bg-red-50 py-3.5 text-sm font-semibold text-red-700 transition-all hover:bg-red-100 active:scale-95 dark:bg-red-950/40 dark:text-red-300 dark:hover:bg-red-900/50"
              >
                Повторить ошибки ({wrongQuestions.length})
              </button>
            )}
            <button
              onClick={onRestart}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
            >
              Пройти ещё раз
            </button>
            <button
              onClick={onHome}
              className="w-full rounded-xl border-2 border-gray-200 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              Выбрать категорию
            </button>
          </div>
        </div>

        {history.length > 0 && (
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-slate-300">
                История
              </h3>
              <button
                onClick={onClearHistory}
                className="text-xs text-red-500 transition-colors hover:text-red-700 dark:text-red-400"
              >
                Очистить
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {history.slice(0, 5).map((entry) => {
                const p =
                  entry.total > 0
                    ? Math.round((entry.score / entry.total) * 100)
                    : 0;
                return (
                  <div
                    key={entry.id}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div>
                      <span className="text-sm font-medium text-gray-800 dark:text-slate-200">
                        {CATEGORY_LABELS[entry.category] ?? entry.category}
                      </span>
                      <p className="text-xs text-gray-400 dark:text-slate-500">
                        {formatDate(entry.date)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-sm font-bold ${p >= 70 ? 'text-emerald-600 dark:text-emerald-400' : p >= 50 ? 'text-blue-600 dark:text-blue-400' : 'text-red-500 dark:text-red-400'}`}
                      >
                        {p}%
                      </span>
                      <p className="text-xs text-gray-400 dark:text-slate-500">
                        {entry.score}/{entry.total}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
