import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StreakBadge } from './StreakBadge';

describe('StreakBadge', () => {
  it('не отображает ничего, если серия равна 0', () => {
    const { container } = render(<StreakBadge streak={0} />);
    expect(container.firstChild).toBeNull();
  });

  it('не отображает ничего, если серия равна 1', () => {
    const { container } = render(<StreakBadge streak={1} />);
    expect(container.firstChild).toBeNull();
  });

  it('отображает огонь и счётчик, если серия равна 2', () => {
    render(<StreakBadge streak={2} />);
    expect(screen.getByText('🔥 2')).toBeInTheDocument();
  });

  it('отображает огонь и счётчик, если серия равна 10', () => {
    render(<StreakBadge streak={10} />);
    expect(screen.getByText('🔥 10')).toBeInTheDocument();
  });
});
