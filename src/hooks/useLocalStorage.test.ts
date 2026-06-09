import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

const KEY = 'test-key';

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe('useLocalStorage', () => {
  it('возвращает начальное значение, если хранилище пустое', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 42));
    expect(result.current[0]).toBe(42);
  });

  it('читает существующее значение из хранилища', () => {
    localStorage.setItem(KEY, JSON.stringify('hello'));
    const { result } = renderHook(() => useLocalStorage(KEY, 'default'));
    expect(result.current[0]).toBe('hello');
  });

  it('обновляет значение и сохраняет в хранилище', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 0));
    act(() => result.current[1](99));
    expect(result.current[0]).toBe(99);
    expect(JSON.parse(localStorage.getItem(KEY)!)).toBe(99);
  });

  it('поддерживает функциональные обновления', () => {
    const { result } = renderHook(() => useLocalStorage(KEY, 10));
    act(() => result.current[1]((prev) => prev + 5));
    expect(result.current[0]).toBe(15);
  });

  it('работает с массивами', () => {
    const { result } = renderHook(() => useLocalStorage<string[]>(KEY, []));
    act(() => result.current[1](['a', 'b']));
    expect(result.current[0]).toEqual(['a', 'b']);
    expect(JSON.parse(localStorage.getItem(KEY)!)).toEqual(['a', 'b']);
  });

  it('работает с объектами', () => {
    const { result } = renderHook(() =>
      useLocalStorage<{ name: string }>(KEY, { name: '' }),
    );
    act(() => result.current[1]({ name: 'Stack Quiz' }));
    expect(result.current[0]).toEqual({ name: 'Stack Quiz' });
  });

  it('возвращает начальное значение при невалидном JSON в хранилище', () => {
    localStorage.setItem(KEY, 'not-valid-json{{{');
    const { result } = renderHook(() => useLocalStorage(KEY, 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });

  it('не выбрасывает исключение, если localStorage недоступен', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    const { result } = renderHook(() => useLocalStorage(KEY, 'safe'));
    expect(() => act(() => result.current[1]('value'))).not.toThrow();
  });
});
