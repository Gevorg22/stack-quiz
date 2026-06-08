'use client';

import { Question, QuizState } from '@/types/quiz';
import { AnswerOption } from './AnswerOption';
import { ExplanationModal } from './ExplanationModal';
import { ProgressBar } from './ProgressBar';

interface QuizQuestionProps {
  question: Question;
  state: QuizState;
  totalQuestions: number;
  onSelectAnswer: (index: number) => void;
  onCloseExplanation: () => void;
  onNext: () => void;
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

export function QuizQuestion({
  question,
  state,
  totalQuestions,
  onSelectAnswer,
  onCloseExplanation,
  onNext,
  onBack,
}: QuizQuestionProps) {
  const isLast = state.currentIndex >= totalQuestions - 1;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 to-indigo-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto flex max-w-2xl items-center gap-4 px-4 py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 transition-colors"
          >
            ← Назад
          </button>
          <div className="flex-1">
            <ProgressBar
              current={state.currentIndex + 1}
              total={totalQuestions}
              score={state.score}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              {CATEGORY_LABELS[question.category] ?? question.category}
            </span>
            <span className="text-xs text-gray-400">
              #{state.currentIndex + 1}
            </span>
          </div>
          <h2 className="text-base font-semibold leading-relaxed text-gray-900 sm:text-lg">
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

        {state.isAnswered && !state.showExplanation && (
          <button
            onClick={onNext}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl active:scale-95"
          >
            {isLast ? 'Завершить квиз →' : 'Следующий вопрос →'}
          </button>
        )}
      </main>

      {state.showExplanation && state.isCorrect !== null && (
        <ExplanationModal
          isCorrect={state.isCorrect}
          explanation={question.explanation}
          onClose={onCloseExplanation}
          onNext={onNext}
          isLast={isLast}
        />
      )}
    </div>
  );
}
