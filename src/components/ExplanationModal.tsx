'use client';

import { useEffect } from 'react';

interface ExplanationModalProps {
  isCorrect: boolean;
  explanation: string;
  onClose: () => void;
  onNext: () => void;
  isLast: boolean;
}

export function ExplanationModal({
  isCorrect,
  explanation,
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
      <div className="relative w-full max-w-lg animate-slide-up rounded-2xl bg-white shadow-2xl">
        <div
          className={`flex items-center gap-3 rounded-t-2xl p-5 ${
            isCorrect
              ? 'bg-emerald-50 border-b border-emerald-100'
              : 'bg-red-50 border-b border-red-100'
          }`}
        >
          <div
            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl ${
              isCorrect ? 'bg-emerald-100' : 'bg-red-100'
            }`}
          >
            {isCorrect ? '✓' : '✗'}
          </div>
          <div>
            <h3
              className={`font-bold text-lg ${isCorrect ? 'text-emerald-800' : 'text-red-800'}`}
            >
              {isCorrect ? 'Правильно!' : 'Неправильно'}
            </h3>
            <p className="text-xs text-gray-500">
              {isCorrect ? 'Отличная работа!' : 'Не расстраивайтесь, изучите пояснение'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <h4 className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Пояснение
          </h4>
          <p className="text-sm leading-relaxed text-gray-700">{explanation}</p>
        </div>

        <div className="flex gap-3 p-5 pt-0">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border-2 border-gray-200 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
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
            {isLast ? 'Завершить квиз' : 'Следующий →'}
          </button>
        </div>
      </div>
    </div>
  );
}
