'use client';

import { useEffect, useRef } from 'react';
import { Question, QuizResult } from '@/types/quiz';
import { useQuiz } from '@/hooks/useQuiz';
import { QuizQuestion } from './QuizQuestion';

interface QuizRunnerProps {
  questions: Question[];
  category: import('@/types/quiz').Category;
  bookmarks: string[];
  isDark: boolean;
  onBookmark: (id: string) => void;
  onToggleDark: () => void;
  onBack: () => void;
  onComplete: (result: QuizResult) => void;
}

export function QuizRunner({
  questions,
  category,
  bookmarks,
  isDark,
  onBookmark,
  onToggleDark,
  onBack,
  onComplete,
}: QuizRunnerProps) {
  const {
    currentQuestion,
    state,
    streak,
    maxStreak,
    wrongQuestions,
    selectAnswer,
    closeExplanation,
    nextQuestion,
  } = useQuiz(questions);

  const completedRef = useRef(false);

  useEffect(() => {
    if (state.isFinished && !completedRef.current) {
      completedRef.current = true;
      onComplete({
        score: state.score,
        total: questions.length,
        wrongQuestions,
        maxStreak,
        category,
      });
    }
  }, [
    state.isFinished,
    state.score,
    questions.length,
    wrongQuestions,
    maxStreak,
    category,
    onComplete,
  ]);

  if (state.isFinished || !currentQuestion) return null;

  return (
    <QuizQuestion
      question={currentQuestion}
      state={state}
      totalQuestions={questions.length}
      streak={streak}
      isDark={isDark}
      isBookmarked={bookmarks.includes(currentQuestion.id)}
      onBookmark={() => onBookmark(currentQuestion.id)}
      onSelectAnswer={selectAnswer}
      onCloseExplanation={closeExplanation}
      onNext={nextQuestion}
      onToggleDark={onToggleDark}
      onBack={onBack}
    />
  );
}
