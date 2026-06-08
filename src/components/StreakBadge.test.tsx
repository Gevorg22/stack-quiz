import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StreakBadge } from './StreakBadge';

describe('StreakBadge', () => {
  it('renders nothing when streak is 0', () => {
    const { container } = render(<StreakBadge streak={0} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders nothing when streak is 1', () => {
    const { container } = render(<StreakBadge streak={1} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders fire emoji and count when streak is 2', () => {
    render(<StreakBadge streak={2} />);
    expect(screen.getByText('🔥 2')).toBeInTheDocument();
  });

  it('renders fire emoji and count when streak is 10', () => {
    render(<StreakBadge streak={10} />);
    expect(screen.getByText('🔥 10')).toBeInTheDocument();
  });
});
