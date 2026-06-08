import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBookmarks } from './useBookmarks';

beforeEach(() => localStorage.clear());

describe('useBookmarks', () => {
  it('starts with an empty bookmarks list', () => {
    const { result } = renderHook(() => useBookmarks());
    expect(result.current.bookmarks).toEqual([]);
  });

  it('toggle adds an id that is not yet bookmarked', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q1'));
    expect(result.current.bookmarks).toContain('q1');
  });

  it('toggle removes an id that is already bookmarked', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q1'));
    act(() => result.current.toggle('q1'));
    expect(result.current.bookmarks).not.toContain('q1');
  });

  it('isBookmarked returns true for a saved id', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q2'));
    expect(result.current.isBookmarked('q2')).toBe(true);
  });

  it('isBookmarked returns false for an unknown id', () => {
    const { result } = renderHook(() => useBookmarks());
    expect(result.current.isBookmarked('unknown')).toBe(false);
  });

  it('clearAll removes all bookmarks', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q1'));
    act(() => result.current.toggle('q2'));
    act(() => result.current.clearAll());
    expect(result.current.bookmarks).toEqual([]);
  });

  it('persists bookmarks to localStorage', () => {
    const { result } = renderHook(() => useBookmarks());
    act(() => result.current.toggle('q3'));
    expect(JSON.parse(localStorage.getItem('sq-bookmarks')!)).toContain('q3');
  });

  it('reads existing bookmarks from localStorage on mount', () => {
    localStorage.setItem('sq-bookmarks', JSON.stringify(['q10', 'q11']));
    const { result } = renderHook(() => useBookmarks());
    expect(result.current.bookmarks).toEqual(['q10', 'q11']);
  });

  it('supports multiple independent bookmarks', () => {
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
