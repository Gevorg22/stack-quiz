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
  it('инициализируется с индексом вопроса 0 и счётом 0', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    expect(result.current.state.currentIndex).toBe(0);
    expect(result.current.state.score).toBe(0);
    expect(result.current.state.isFinished).toBe(false);
    expect(result.current.currentQuestion).toEqual(THREE_QUESTIONS[0]);
  });

  it('selectAnswer помечает вопрос как отвеченный', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    expect(result.current.state.isAnswered).toBe(true);
    expect(result.current.state.selectedAnswer).toBe(0);
  });

  it('правильный ответ увеличивает счёт и устанавливает isCorrect=true', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    expect(result.current.state.isCorrect).toBe(true);
    expect(result.current.state.score).toBe(1);
  });

  it('неправильный ответ не увеличивает счёт и устанавливает isCorrect=false', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(3));
    expect(result.current.state.isCorrect).toBe(false);
    expect(result.current.state.score).toBe(0);
  });

  it('неправильный ответ добавляет вопрос в wrongQuestions', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(3));
    expect(result.current.wrongQuestions).toHaveLength(1);
    expect(result.current.wrongQuestions[0].id).toBe('q1');
  });

  it('правильный ответ не добавляет вопрос в wrongQuestions', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    expect(result.current.wrongQuestions).toHaveLength(0);
  });

  it('игнорирует повторный вызов selectAnswer для того же вопроса', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    act(() => result.current.selectAnswer(1));
    expect(result.current.state.selectedAnswer).toBe(0);
  });

  it('пояснение отображается после выбора ответа', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    expect(result.current.state.showExplanation).toBe(true);
  });

  it('closeExplanation скрывает пояснение', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    act(() => result.current.closeExplanation());
    expect(result.current.state.showExplanation).toBe(false);
  });

  it('nextQuestion переходит к следующему вопросу', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));
    act(() => result.current.selectAnswer(0));
    act(() => result.current.nextQuestion());
    expect(result.current.state.currentIndex).toBe(1);
    expect(result.current.currentQuestion).toEqual(THREE_QUESTIONS[1]);
    expect(result.current.state.isAnswered).toBe(false);
  });

  it('после последнего вопроса устанавливается isFinished=true', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    for (let i = 0; i < THREE_QUESTIONS.length; i++) {
      act(() => result.current.selectAnswer(THREE_QUESTIONS[i].correctAnswer));
      act(() => result.current.nextQuestion());
    }

    expect(result.current.state.isFinished).toBe(true);
  });

  it('серия увеличивается при последовательных правильных ответах', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    expect(result.current.streak).toBe(1);

    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(THREE_QUESTIONS[1].correctAnswer));
    expect(result.current.streak).toBe(2);
  });

  it('серия сбрасывается до 0 при неправильном ответе', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(99));

    expect(result.current.streak).toBe(0);
  });

  it('maxStreak отслеживает максимальную серию', () => {
    const { result } = renderHook(() => useQuiz(THREE_QUESTIONS));

    act(() => result.current.selectAnswer(THREE_QUESTIONS[0].correctAnswer));
    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(THREE_QUESTIONS[1].correctAnswer));
    act(() => result.current.nextQuestion());
    act(() => result.current.selectAnswer(99));

    expect(result.current.maxStreak).toBe(2);
    expect(result.current.streak).toBe(0);
  });

  it('корректно работает с одним вопросом', () => {
    const single = [makeQuestion('only', 2)];
    const { result } = renderHook(() => useQuiz(single));
    act(() => result.current.selectAnswer(2));
    act(() => result.current.nextQuestion());
    expect(result.current.state.isFinished).toBe(true);
    expect(result.current.state.score).toBe(1);
  });
});
