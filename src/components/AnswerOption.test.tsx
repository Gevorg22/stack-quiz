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
  it('renders the option text', () => {
    render(<AnswerOption {...DEFAULT_PROPS} />);
    expect(screen.getByText('Option A text')).toBeInTheDocument();
  });

  it('renders the letter badge (A for index 0)', () => {
    render(<AnswerOption {...DEFAULT_PROPS} />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('calls onSelect with the correct index when clicked', () => {
    const onSelect = vi.fn();
    render(<AnswerOption {...DEFAULT_PROPS} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalledWith(0);
  });

  it('does not call onSelect when already answered', () => {
    const onSelect = vi.fn();
    render(
      <AnswerOption {...DEFAULT_PROPS} isAnswered onSelect={onSelect} />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('shows checkmark when it is the correct answer after answering', () => {
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

  it('shows cross when selected answer is wrong', () => {
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

  it('renders letter B for index 1', () => {
    render(<AnswerOption {...DEFAULT_PROPS} index={1} />);
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('is disabled when isAnswered is true', () => {
    render(<AnswerOption {...DEFAULT_PROPS} isAnswered />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is not disabled when isAnswered is false', () => {
    render(<AnswerOption {...DEFAULT_PROPS} />);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
