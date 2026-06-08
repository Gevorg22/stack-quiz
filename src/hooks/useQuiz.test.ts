import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useQuiz } from './useQuiz';
import { Question } from '@/types/quiz';

const makeQuestion = (id: string, correctAnswer = 0): Question => ({
  id,
  category: 'javascript',
  question: `Question ${id}`,
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer,
  explanation: `Explanation for ${id}`,
});

const THREE_QUESTIONS = [
  makeQuestion('q1', 0),
  makeQuestion('q2', 1),
  makeQuestion('q3', 2),
];

describe('useQuiz', () => {
  it('initialises at question index 0 with score 0', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    expect(result.current.state.currentIndex).toBe(0);
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.isFinished).toBe(false);
    expect(result.current.currentQuestion).toEqual(THREE_QUESTIONS[0]);
  });

  it('selectAnswer marks the question as answered', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    expect(result.current.state.isAnswered).toBe(true);
    expect(result.current.state.selectedAnswer).toBe(0);
  });

  it('correct answer increments score and marks isCorrect=true', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    expect(result.current.state.isCorrect).toBe(true);
    expect(result.current.state.score).toBe(1);
  });

  it('wrong answer does not increment score and marks isCorrect=false', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(3));
    expect(result.current.state.isCorrect).toBe(false);
    expect(result.current.state.score).toBe(0);
  });

  it('wrong answer adds question to wrongQuestions', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(3));
    expect(result.current.wrongQuestions).toHaveLength(1);
    expect(result.current.wrongQuestions[0].id).toBe('q1');
  });

  it('correct answer does not add to wrongQuestions', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    expect(result.current.wrongQuestions).toHaveLength(0);
  });

  it('ignores a second selectAnswer call on the same question', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    act(() => result.current.selectAnswer(1));
    expect(result.current.state.selectedAnswer).toBe(0);
  });

  it('openExplanation is shown after selectAnswer', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    expect(result.current.state.showExplanation).toBe(true);
  });

  it('closeExplanation hides the explanation', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    act(() => result.current.closeExplanation());
    expect(result.current.state.showExplanation).toBe(false);
  });

  it('nextQuestion advances to the next question', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    act(() => result.current.nextQuestion());
    expect(result.current.state.currentIndex).toBe(1);
    expect(result.current.currentQuestion).toEqual(THREE_QUESTIONS[1]);
    expect(result.current.state.isAnswered).toBe(false);
  });

  it('finishing the last question sets isFinished=true', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    for (let i = 0; i < THREE_QUESTIONS.length; i++) {
      act(() => result.current.selectAnswer(THREE_QUESTIONS[i].correctAnswer));
      act(() => result.current.nextQuestion());
    }

    expect(result.current.state.isFinished).toBe(true);
  });

  it('streak increments with consecutive correct answers', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    expect(result.current.streak).toBe(1);

    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(THREE_QUESTIONS[1].correctAnswer));
    expect(result.current.streak).toBe(2);
  });

  it('streak resets to 0 on a wrong answer', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(99));

    expect(result.current.streak).toBe(0);
  });

  it('maxStreak tracks the highest streak seen', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(THREE_QUESTIONS[1].correctAnswer));
    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(99));

    expect(result.current.maxStreak).toBe(2);
    expect(result.current.streak).toBe(0);
  });

  it('works correctly with a single question', () => {
    const single = [makeQuestion('only', 2)];
    const { result } = renderHook(() => useQuiz(single));
    act(() => result.current.selectAnswer(2));
    act(() => result.current.nextQuestion());
    expect(result.current.state.isFinished).toBe(true);
    expect(result.current.state.score).toBe(1);
  });
});
