'use client';

import { useCallback, useMemo, useState } from 'react';
import { Category, Question, QuizState } from '@/types/quiz';
import { getQuestions } from '@/data/questions';

export function useQuiz(category: Category) {
  const questions = useMemo(() => getQuestions(category), [category]);

  const [state, setState] = useState<QuizState>({
    currentIndex: 0,
    score: 0,
    selectedAnswer: null,
    isAnswered: false,
    isFinished: false,
    showExplanation: false,
    isCorrect: null,
  });

  const currentQuestion: Question | undefined = questions[state.currentIndex];

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      if (state.isAnswered || !currentQuestion) return;

      const isCorrect = answerIndex === currentQuestion.correctAnswer;

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

  const restart = useCallback(() => {
    setState({
      currentIndex: 0,
      score: 0,
      selectedAnswer: null,
      isAnswered: false,
      isFinished: false,
      showExplanation: false,
      isCorrect: null,
    });
  }, []);

  return {
    questions,
    currentQuestion,
    state,
    selectAnswer,
    closeExplanation,
    nextQuestion,
    restart,
  };
}
