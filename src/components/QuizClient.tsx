'use client';

import { useState } from 'react';
import { Category } from '@/types/quiz';
import { categories } from '@/data/questions';
import { useQuiz } from '@/hooks/useQuiz';
import { CategoryCard } from './CategoryCard';
import { QuizQuestion } from './QuizQuestion';
import { ResultScreen } from './ResultScreen';

export function QuizClient() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const { questions, currentQuestion, state, selectAnswer, closeExplanation, nextQuestion, restart } =
    useQuiz(selectedCategory ?? 'javascript');

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const handleHome = () => {
    setSelectedCategory(null);
    restart();
  };

  if (!selectedCategory) {
    return (
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-10 sm:py-16">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur-sm">
              <span>🎯</span>
              <span>Тренажёр для разработчиков</span>
            </div>
            <h1 className="text-4xl font-black text-white sm:text-5xl">
              Stack{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Quiz
              </span>
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:text-lg">
              Выбери технологию и проверь свои знания
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={handleSelectCategory}
              />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Вопросы перемешиваются при каждом запуске
          </p>
        </div>
      </div>
    );
  }

  if (state.isFinished) {
    return (
      <ResultScreen
        score={state.score}
        total={questions.length}
        category={selectedCategory}
        onRestart={restart}
        onHome={handleHome}
      />
    );
  }

  if (!currentQuestion) return null;

  return (
    <QuizQuestion
      question={currentQuestion}
      state={state}
      totalQuestions={questions.length}
      onSelectAnswer={selectAnswer}
      onCloseExplanation={closeExplanation}
      onNext={nextQuestion}
      onBack={handleBack}
    />
  );
}
