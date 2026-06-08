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
  it('renders the category label', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('renders the category description', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(
      screen.getByText('150 вопросов о замыканиях и промисах'),
    ).toBeInTheDocument();
  });

  it('renders the category icon', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('calls onSelect with the category id when clicked', () => {
    const onSelect = vi.fn();
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={onSelect} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalledWith('javascript');
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('renders as a button element', () => {
    render(<CategoryCard category={MOCK_CATEGORY} onSelect={vi.fn()} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('works for the "all" category', () => {
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
