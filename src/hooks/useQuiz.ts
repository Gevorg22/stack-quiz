'use client';

import { useCallback, useState } from 'react';
import { Question, QuizState } from '@/types/quiz';

export function useQuiz(questions: Question[]) {
  const [state, setState] = useState<QuizState>({
    currentIndex: 0,
    score: 0,
    selectedAnswer: null,
    isAnswered: false,
    isFinished: false,
    showExplanation: false,
    isCorrect: null,
  });
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);

  const currentQuestion: Question | undefined = questions[state.currentIndex];

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      if (state.isAnswered || !currentQuestion) return;

      const isCorrect = answerIndex === currentQuestion.correctAnswer;

      if (isCorrect) {
        setStreak((prev) => {
          const next = prev + 1;
          setMaxStreak((m) => Math.max(m, next));
          return next;
        });
      } else {
        setStreak(0);
        setWrongQuestions((prev) => [...prev, currentQuestion]);
      }

      setState((prev) => ({
        ...prev,
        selectedAnswer: answerIndex,
        isAnswered: true,
        isCorrect,
        showExplanation: true,
        score: isCorrect ? prev.score + 1 : prev.score,
      }));
    },
    [state.isAnswered, currentQuestion],
  );

  const closeExplanation = useCallback(() => {
    setState((prev) => ({ ...prev, showExplanation: false }));
  }, []);

  const nextQuestion = useCallback(() => {
    const isLast = state.currentIndex >= questions.length - 1;

    setState((prev) => ({
      ...prev,
      currentIndex: isLast ? prev.currentIndex : prev.currentIndex + 1,
      selectedAnswer: null,
      isAnswered: false,
      isCorrect: null,
      showExplanation: false,
      isFinished: isLast,
    }));
  }, [state.currentIndex, questions.length]);

  return {
    questions,
    currentQuestion,
    state,
    streak,
    maxStreak,
    wrongQuestions,
    selectAnswer,
    closeExplanation,
    nextQuestion,
  };
}
