'use client';

import { useEffect } from 'react';
import { BookmarkButton } from './BookmarkButton';

interface ExplanationModalProps {
  isCorrect: boolean;
  explanation: string;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onClose: () => void;
  onNext: () => void;
  isLast: boolean;
}

export function ExplanationModal({
  isCorrect,
  explanation,
  isBookmarked,
  onToggleBookmark,
  onClose,
  onNext,
  isLast,
}: ExplanationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter') {
        onClose();
        onNext();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg animate-slide-up rounded-2xl bg-white shadow-2xl dark:bg-slate-800">
        <div
          className={`flex items-center gap-3 rounded-t-2xl p-5 ${
            isCorrect
              ? 'border-b border-emerald-100 bg-emerald-50 dark:border-emerald-900/50 dark:bg-emerald-950/40'
              : 'border-b border-red-100 bg-red-50 dark:border-red-900/50 dark:bg-red-950/40'
          }`}
        >
          <div
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl ${
              isCorrect
                ? 'bg-emerald-100 dark:bg-emerald-900/50'
                : 'bg-red-100 dark:bg-red-900/50'
            }`}
          >
            {isCorrect ? '✓' : '✗'}
          </div>
          <div>
            <h3
              className={`text-lg font-bold ${isCorrect ? 'text-emerald-800 dark:text-emerald-300' : 'text-red-800 dark:text-red-300'}`}
            >
              {isCorrect ? 'Правильно!' : 'Неправильно'}
            </h3>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              {isCorrect
                ? 'Отличная работа!'
                : 'Не расстраивайтесь, изучите пояснение'}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <BookmarkButton
              isBookmarked={isBookmarked}
              onToggle={onToggleBookmark}
            />
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center text-gray-400 transition-colors hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300"
              aria-label="Закрыть"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-5">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400">
            Пояснение
          </h4>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-slate-300">
            {explanation}
          </p>
        </div>

        <div className="flex gap-3 p-5 pt-0">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border-2 border-gray-200 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            Посмотреть ответы
          </button>
          <button
            onClick={() => {
              onClose();
              onNext();
            }}
            className="flex-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-sm font-medium text-white transition-all hover:shadow-lg active:scale-95"
          >
            {isLast ? 'Завершить' : 'Следующий →'}
          </button>
        </div>
      </div>
    </div>
  );
}
