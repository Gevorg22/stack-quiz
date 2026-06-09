import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookmarkButton } from './BookmarkButton';

describe('BookmarkButton', () => {
  it('отображает закрашенную звезду, если в закладках', () => {
    render(<BookmarkButton isBookmarked onToggle={vi.fn()} />);
    expect(screen.getByText('★')).toBeInTheDocument();
  });

  it('отображает пустую звезду, если не в закладках', () => {
    render(<BookmarkButton isBookmarked={false} onToggle={vi.fn()} />);
    expect(screen.getByText('☆')).toBeInTheDocument();
  });

  it('вызывает onToggle при клике', () => {
    const onToggle = vi.fn();
    render(<BookmarkButton isBookmarked={false} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('имеет правильный aria-label, если не в закладках', () => {
    render(<BookmarkButton isBookmarked={false} onToggle={vi.fn()} />);
    expect(
      screen.getByLabelText('Добавить в закладки'),
    ).toBeInTheDocument();
  });

  it('имеет правильный aria-label, если в закладках', () => {
    render(<BookmarkButton isBookmarked onToggle={vi.fn()} />);
    expect(screen.getByLabelText('Убрать из закладок')).toBeInTheDocument();
  });
});
