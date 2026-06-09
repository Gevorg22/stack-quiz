import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryCard } from './CategoryCard';
import { CategoryInfo } from '@/types/quiz';

const MOCK_CATEGORY: CategoryInfo = {
  id: 'javascript',
  label: 'JavaScript',
  icon: 'JS',
  description: '150 вопросов о замыканиях и промисах',
  color: 'text-yellow-700',
  gradient: 'from-yellow-400 to-yellow-600',
};

describe('CategoryCard', () => {
  it('отображает название категории', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('отображает описание категории', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(
      screen.getByText('150 вопросов о замыканиях и промисах'),
    ).toBeInTheDocument();
  });

  it('отображает иконку категории', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('вызывает onSelect с id категории при клике', () => {
    const onSelect = vi.fn();
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalledWith('javascript');
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('отображается как кнопка', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('работает для категории "all"', () => {
    const allCategory: CategoryInfo = {
      ...MOCK_CATEGORY,
      id: 'all',
      label: 'Все темы',
      icon: '★',
    };
    const onSelect = vi.fn();
    render(<CategoryCard category={allCategory} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalledWith('all');
  });
});
