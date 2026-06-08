import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

const KEY = 'test-key';

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('useLocalStorage', () => {
  it('returns initial value when storage is empty', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 42));
    expect(result.current[0]).toBe(42);
  });

  it('reads existing value from storage', () => {
    localStorage.setItem(KEY, JSON.stringify('hello'));
    const { result } = renderHook(() => useLocalStorage(KEY, 'default'));
    expect(result.current[0]).toBe('hello');
  });

  it('updates the value and persists to storage', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 0));
    act(() => result.current[1](99));
    expect(result.current[0]).toBe(99);
    expect(JSON.parse(localStorage.getItem(KEY)!)).toBe(99);
  });

  it('supports functional updates', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 10));
    act(() => result.current[1]((prev) => prev + 5));
    expect(result.current[0]).toBe(15);
  });

  it('works with array values', () => {
    const { result } = renderHook(() => useLocalStorage<string[]>(KEY, []));
    act(() => result.current[1](['a', 'b']));
    expect(result.current[0]).toEqual(['a', 'b']);
    expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual(['a', 'b']);
  });

  it('works with object values', () => {
    const { result } = renderHook(() =>
      useLocalStorage<{ name: string }>(KEY, { name: '' }),
    );
    act(() => result.current[1]({ name: 'Stack Quiz' }));
    expect(result.current[0]).toEqual({ name: 'Stack Quiz' });
  });

  it('falls back to initial value if storage contains invalid JSON', () => {
    localStorage.setItem(KEY, 'not-valid-json{{{');
    const { result } = renderHook(() => useLocalStorage(KEY, 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });

  it('does not throw when localStorage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    const { result } = renderHook(() => useLocalStorage(KEY, 'safe'));
    expect(() => act(() => result.current[1]('value'))).not.toThrow();
  });
});
