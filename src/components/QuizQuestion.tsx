'use client';

import { useEffect } from 'react';
import { Question, QuizState } from '@/types/quiz';
import { AnswerOption } from './AnswerOption';
import { ExplanationModal } from './ExplanationModal';
import { ProgressBar } from './ProgressBar';
import { BookmarkButton } from './BookmarkButton';
import { DarkModeToggle } from './DarkModeToggle';

interface QuizQuestionProps {
  question: Question;
  state: QuizState;
  totalQuestions: number;
  streak: number;
  isDark: boolean;
  isBookmarked: boolean;
  onBookmark: () => void;
  onSelectAnswer: (index: number) => void;
  onCloseExplanation: () => void;
  onNext: () => void;
  onToggleDark: () => void;
  onBack: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  javascript: 'JavaScript',
  react: 'React',
  html: 'HTML',
  css: 'CSS',
  typescript: 'TypeScript',
  network: 'Сети и Web',
  git: 'Git',
};

const DIFFICULTY_CONFIG = {
  beginner:     { label: 'Базовый',     className: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', dot: '🟢' },
  intermediate: { label: 'Средний',     className: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',   dot: '🟡' },
  advanced:     { label: 'Продвинутый', className: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',               dot: '🔴' },
};

export function QuizQuestion({
  question,
  state,
  totalQuestions,
  streak,
  isDark,
  isBookmarked,
  onBookmark,
  onSelectAnswer,
  onCloseExplanation,
  onNext,
  onToggleDark,
  onBack,
}: QuizQuestionProps) {
  const isLast = state.currentIndex >= totalQuestions - 1;

  useEffect(() => {
    if (state.showExplanation) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (state.isAnswered) {
        if (e.key === 'Enter') onNext();
        return;
      }
      const keyMap: Record<string, number> = {
        '1': 0,
        a: 0,
        A: 0,
        '2': 1,
        b: 1,
        B: 1,
        '3': 2,
        c: 2,
        C: 2,
        '4': 3,
        d: 3,
        D: 3,
      };
      const idx = keyMap[e.key];
      if (idx !== undefined && idx < question.options.length) {
        onSelectAnswer(idx);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [state.isAnswered, state.showExplanation, question.options.length, onSelectAnswer, onNext]);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-900">
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            ← Назад
          </button>
          <div className="flex-1">
            <ProgressBar
              current={state.currentIndex + 1}
              total={totalQuestions}
              score={state.score}
              streak={streak}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800 dark:shadow-slate-900/50">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                {CATEGORY_LABELS[question.category] ?? question.category}
              </span>
              {DIFFICULTY_CONFIG[question.difficulty] && (
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${DIFFICULTY_CONFIG[question.difficulty].className}`}>
                  {DIFFICULTY_CONFIG[question.difficulty].dot} {DIFFICULTY_CONFIG[question.difficulty].label}
                </span>
              )}
              <span className="text-xs text-gray-400 dark:text-slate-500">
                #{state.currentIndex + 1}
              </span>
            </div>
            <BookmarkButton isBookmarked={isBookmarked} onToggle={onBookmark} />
          </div>
          <h2 className="text-base font-semibold leading-relaxed text-gray-900 dark:text-white sm:text-lg">
            {question.question}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <AnswerOption
              key={index}
              index={index}
              text={option}
              isSelected={state.selectedAnswer === index}
              isCorrect={state.isCorrect === true}
              isAnswered={state.isAnswered}
              correctAnswer={question.correctAnswer}
              onSelect={onSelectAnswer}
            />
          ))}
        </div>

        {!state.showExplanation && (
          <div className="flex items-center justify-between gap-3">
            {state.isAnswered ? (
              <button
                onClick={onNext}
                className="flex-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl active:scale-95"
              >
                {isLast ? 'Завершить квиз →' : 'Следующий вопрос →'}
              </button>
            ) : (
              <p className="flex-1 text-center text-xs text-gray-400 dark:text-slate-500">
                Клавиши 1–4 или A–D для выбора
              </p>
            )}
            <DarkModeToggle isDark={isDark} onToggle={onToggleDark} variant="light-bg" />
          </div>
        )}
      </main>

      {state.showExplanation && state.isCorrect !== null && (
        <ExplanationModal
          isCorrect={state.isCorrect}
          explanation={question.explanation}
          isBookmarked={isBookmarked}
          onToggleBookmark={onBookmark}
          onClose={onCloseExplanation}
          onNext={onNext}
          isLast={isLast}
        />
      )}
    </div>
  );
}
