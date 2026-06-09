import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBookmarks } from './useBookmarks';

beforeEach(() => localStorage.clear());

describe('useBookmarks', () => {
  it('начинает с пустым списком закладок', () => {
    const { result } = renderHook(() => useBookmarks());
    expect(result.current.bookmarks).toEqual([]);
  });

  it('toggle добавляет id, которого ещё нет в закладках', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q1'));
    expect(result.current.bookmarks).toContain('q1');
  });

  it('toggle удаляет id, который уже в закладках', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q1'));
    act(() => result.current.toggle('q1'));
    expect(result.current.bookmarks).not.toContain('q1');
  });

  it('isBookmarked возвращает true для сохранённого id', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q2'));
    expect(result.current.isBookmarked('q2')).toBe(true);
  });

  it('isBookmarked возвращает false для неизвестного id', () => {
    const { result } = renderHook(() => useBookmarks());
    expect(result.current.isBookmarked('unknown')).toBe(false);
  });

  it('clearAll удаляет все закладки', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q1'));
    act(() => result.current.toggle('q2'));
    act(() => result.current.clearAll());
    expect(result.current.bookmarks).toEqual([]);
  });

  it('сохраняет закладки в localStorage', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q3'));
    expect(JSON.parse(localStorage.getItem('sq-bookmarks')!)).toContain('q3');
  });

  it('читает существующие закладки из localStorage при монтировании', () => {
    localStorage.setItem('sq-bookmarks', JSON.stringify(['q10', 'q11']));
    const { result } = renderHook(() => useBookmarks());
    expect(result.current.bookmarks).toEqual(['q10', 'q11']);
  });

  it('поддерживает несколько независимых закладок', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('a'));
    act(() => result.current.toggle('b'));
    act(() => result.current.toggle('c'));
    expect(result.current.bookmarks).toHaveLength(3);
    expect(result.current.isBookmarked('a')).toBe(true);
    expect(result.current.isBookmarked('b')).toBe(true);
    expect(result.current.isBookmarked('c')).toBe(true);
  });
});
