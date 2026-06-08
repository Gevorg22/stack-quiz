'use client';

import { Question } from '@/types/quiz';
import { DarkModeToggle } from './DarkModeToggle';

const CATEGORY_LABELS: Record<string, string> = {
  javascript: 'JS',
  react: 'React',
  html: 'HTML',
  css: 'CSS',
  typescript: 'TS',
  network: 'Web',
  git: 'Git',
};

const CATEGORY_COLORS: Record<string, string> = {
  javascript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  react: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300',
  html: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
  css: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
  typescript: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  network: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
  git: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
};

interface BookmarksViewProps {
  bookmarkedQuestions: Question[];
  isDark: boolean;
  onToggleDark: () => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
  onStartQuiz: () => void;
  onBack: () => void;
}

export function BookmarksView({
  bookmarkedQuestions,
  isDark,
  onToggleDark,
  onRemoveBookmark,
  onClearAll,
  onStartQuiz,
  onBack,
}: BookmarksViewProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-900">
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/80">
        <div className="mx-auto flex max-w-2xl items-center gap-4 px-4 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            ← Назад
          </button>
          <h1 className="flex-1 text-center text-base font-bold text-gray-900 dark:text-white">
            Закладки
          </h1>
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} variant="light-bg" />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-6">
        {bookmarkedQuestions.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="text-5xl">☆</div>
            <p className="text-gray-500 dark:text-slate-400">
              Нет сохранённых вопросов
            </p>
            <p className="text-sm text-gray-400 dark:text-slate-500">
              Нажимай ★ во время квиза, чтобы сохранить вопрос
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-slate-400">
                {bookmarkedQuestions.length} вопросов сохранено
              </span>
              <div className="flex gap-2">
                <button
                  onClick={onClearAll}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  Очистить все
                </button>
                <button
                  onClick={onStartQuiz}
                  className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  Начать квиз
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {bookmarkedQuestions.map((q) => (
                <div
                  key={q.id}
                  className="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span
                      className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                        CATEGORY_COLORS[q.category] ?? 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {CATEGORY_LABELS[q.category] ?? q.category}
                    </span>
                    <button
                      onClick={() => onRemoveBookmark(q.id)}
                      className="flex-shrink-0 text-lg text-yellow-500 hover:text-gray-400"
                      aria-label="Убрать из закладок"
                    >
                      ★
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-800 dark:text-slate-200">
                    {q.question}
                  </p>
                  <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">
                    Ответ: {q.options[q.correctAnswer]}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
