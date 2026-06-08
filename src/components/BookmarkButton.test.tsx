import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookmarkButton } from './BookmarkButton';

describe('BookmarkButton', () => {
  it('renders filled star when bookmarked', () => {
    render(<BookmarkButton isBookmarked onToggle={vi.fn()} />);
    expect(screen.getByText('★')).toBeInTheDocument();
  });

  it('renders hollow star when not bookmarked', () => {
    render(<BookmarkButton isBookmarked={false} onToggle={vi.fn()} />);
    expect(screen.getByText('☆')).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const onToggle = vi.fn();
    render(<BookmarkButton isBookmarked={false} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('has correct aria-label when not bookmarked', () => {
    render(<BookmarkButton isBookmarked={false} onToggle={vi.fn()} />);
    expect(
      screen.getByLabelText('Добавить в закладки'),
    ).toBeInTheDocument();
  });

  it('has correct aria-label when bookmarked', () => {
    render(<BookmarkButton isBookmarked onToggle={vi.fn()} />);
    expect(screen.getByLabelText('Убрать из закладок')).toBeInTheDocument();
  });
});
