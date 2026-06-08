import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('shows current and total question numbers', () => {
    render(<ProgressBar current={3} total={10} score={2} streak={0} />);
    expect(screen.getByText('3 / 10')).toBeInTheDocument();
  });

  it('shows the current score with checkmark', () => {
    render(<ProgressBar current={1} total={5} score={4} streak={0} />);
    expect(screen.getByText('4 ✓')).toBeInTheDocument();
  });

  it('does not render StreakBadge when streak is less than 2', () => {
    const { container } = render(
      <ProgressBar current={1} total={5} score={0} streak={1} />,
    );
    expect(container.querySelector('.animate-streak-pop')).toBeNull();
    expect(container.textContent).not.toContain('🔥');
  });

  it('renders StreakBadge with fire emoji when streak >= 2', () => {
    render(<ProgressBar current={3} total={10} score={3} streak={3} />);
    expect(screen.getByText('🔥 3')).toBeInTheDocument();
  });

  it('renders the progress bar element', () => {
    const { container } = render(
      <ProgressBar current={5} total={10} score={3} streak={0} />,
    );
    const bar = container.querySelector('[style*="width"]');
    expect(bar).toBeInTheDocument();
    expect((bar as HTMLElement).style.width).toBe('50%');
  });

  it('shows 0% progress at the start', () => {
    const { container } = render(
      <ProgressBar current={0} total={10} score={0} streak={0} />,
    );
    const bar = container.querySelector('[style*="width"]');
    expect((bar as HTMLElement).style.width).toBe('0%');
  });

  it('shows 100% progress at the end', () => {
    const { container } = render(
      <ProgressBar current={10} total={10} score={10} streak={0} />,
    );
    const bar = container.querySelector('[style*="width"]');
    expect((bar as HTMLElement).style.width).toBe('100%');
  });
});
