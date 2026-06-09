import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AnswerOption } from './AnswerOption';

const DEFAULT_PROPS = {
  index: 0,
  text: 'Option A text',
  isSelected: false,
  isCorrect: false,
  isAnswered: false,
  correctAnswer: 0,
  onSelect: vi.fn(),
};

describe('AnswerOption', () => {
  it('отображает текст варианта ответа', () => {
    render(<AnswerOption {...DEFAULT_PROPS} />);
    expect(screen.getByText('Option A text')).toBeInTheDocument();
  });

  it('отображает буквенный бейдж (A для индекса 0)', () => {
    render(<AnswerOption {...DEFAULT_PROPS} />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('вызывает onSelect с правильным индексом при клике', () => {
    const onSelect = vi.fn();
    render(<AnswerOption {...DEFAULT_PROPS} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalledWith(0);
  });

  it('не вызывает onSelect, если ответ уже дан', () => {
    const onSelect = vi.fn();
    render(
      <AnswerOption {...DEFAULT_PROPS} isAnswered onSelect={onSelect} />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('показывает галочку для правильного ответа после выбора', () => {
    render(
      <AnswerOption
        {...DEFAULT_PROPS}
        isAnswered
        isCorrect
        isSelected
        correctAnswer={0}
        index={0}
      />,
    );
    expect(screen.getByText('✓')).toBeInTheDocument();
  });

  it('показывает крестик, если выбранный ответ неверный', () => {
    render(
      <AnswerOption
        {...DEFAULT_PROPS}
        index={1}
        isAnswered
        isCorrect={false}
        isSelected
        correctAnswer={0}
      />,
    );
    expect(screen.getByText('✗')).toBeInTheDocument();
  });

  it('отображает букву B для индекса 1', () => {
    render(<AnswerOption {...DEFAULT_PROPS} index={1} />);
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('заблокирован, если isAnswered равен true', () => {
    render(<AnswerOption {...DEFAULT_PROPS} isAnswered />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('не заблокирован, если isAnswered равен false', () => {
    render(<AnswerOption {...DEFAULT_PROPS} />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
