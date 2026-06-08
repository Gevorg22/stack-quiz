import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useHistory } from './useHistory';

beforeEach(() => localStorage.clear());

describe('useHistory', () => {
  it('starts with empty history', () => {
    const { result } = renderHook(() => useHistory());
    expect(result.current.history).toEqual([]);
  });

  it('addEntry adds a new record to the beginning', () => {
    const { result } = renderHook(() => useHistory());
    act(() =>
      result.current.addEntry({ category: 'javascript', score: 8, total: 10 }),
    );
    expect(result.current.history).toHaveLength(1);
    expect(result.current.history[0].category).toBe('javascript');
    expect(result.current.history[0].score).toBe(8);
    expect(result.current.history[0].total).toBe(10);
  });

  it('newer entries appear first', () => {
    const { result } = renderHook(() => useHistory());
    act(() =>
      result.current.addEntry({ category: 'react', score: 5, total: 10 }),
    );
    act(() =>
      result.current.addEntry({ category: 'html', score: 9, total: 10 }),
    );
    expect(result.current.history[0].category).toBe('html');
    expect(result.current.history[1].category).toBe('react');
  });

  it('addEntry assigns a unique id and an ISO date', () => {
    const { result } = renderHook(() => useHistory());
    act(() =>
      result.current.addEntry({ category: 'css', score: 3, total: 5 }),
    );
    const entry = result.current.history[0];
    expect(entry.id).toBeTruthy();
    expect(new Date(entry.date).toISOString()).toBe(entry.date);
  });

  it('clearHistory removes all entries', () => {
    const { result } = renderHook(() => useHistory());
    act(() =>
      result.current.addEntry({ category: 'git', score: 10, total: 10 }),
    );
    act(() => result.current.clearHistory());
    expect(result.current.history).toEqual([]);
  });

  it('persists history to localStorage', () => {
    const { result } = renderHook(() => useHistory());
    act(() =>
      result.current.addEntry({
        category: 'typescript',
        score: 7,
        total: 10,
      }),
    );
    const stored = JSON.parse(localStorage.getItem('sq-history')!);
    expect(stored).toHaveLength(1);
    expect(stored[0].category).toBe('typescript');
  });

  it('reads existing history from localStorage on mount', () => {
    const fakeHistory = [
      {
        id: '1',
        category: 'network',
        score: 4,
        total: 10,
        date: new Date().toISOString(),
      },
    ];
    localStorage.setItem('sq-history', JSON.stringify(fakeHistory));
    const { result } = renderHook(() => useHistory());
    expect(result.current.history).toHaveLength(1);
    expect(result.current.history[0].category).toBe('network');
  });

  it('caps history at 50 entries', () => {
    const { result } = renderHook(() => useHistory());
    for (let i = 0; i < 55; i++) {
      act(() =>
        result.current.addEntry({ category: 'javascript', score: i, total: 10 }),
      );
    }
    expect(result.current.history).toHaveLength(50);
  });
});
