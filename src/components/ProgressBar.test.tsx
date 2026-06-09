import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('показывает текущий и общий номера вопросов', () => {
    render(<ProgressBar current={3} total={10} score={2} streak={0} />);
    expect(screen.getByText('3 / 10')).toBeInTheDocument();
  });

  it('показывает текущий счёт с галочкой', () => {
    render(<ProgressBar current={1} total={5} score={4} streak={0} />);
    expect(screen.getByText('4 ✓')).toBeInTheDocument();
  });

  it('не отображает StreakBadge, если серия меньше 2', () => {
    const { container } = render(
      <ProgressBar current={1} total={5} score={0} streak={1} />,
    );
    expect(container.querySelector('.animate-streak-pop')).toBeNull();
    expect(container.textContent).not.toContain('🔥');
  });

  it('отображает StreakBadge с огнём, если серия >= 2', () => {
    render(<ProgressBar current={3} total={10} score={3} streak={3} />);
    expect(screen.getByText('🔥 3')).toBeInTheDocument();
  });

  it('отображает элемент прогресс-бара', () => {
    const { container } = render(
      <ProgressBar current={5} total={10} score={3} streak={0} />,
    );
    const bar = container.querySelector('[style*="width"]');
    expect(bar).toBeInTheDocument();
    expect((bar as HTMLElement).style.width).toBe('50%');
  });

  it('показывает 0% прогресса в начале', () => {
    const { container } = render(
      <ProgressBar current={0} total={10} score={0} streak={0} />,
    );
    const bar = container.querySelector('[style*="width"]');
    expect((bar as HTMLElement).style.width).toBe('0%');
  });

  it('показывает 100% прогресса в конце', () => {
    const { container } = render(
      <ProgressBar current={10} total={10} score={10} streak={0} />,
    );
    const bar = container.querySelector('[style*="width"]');
    expect((bar as HTMLElement).style.width).toBe('100%');
  });
});
