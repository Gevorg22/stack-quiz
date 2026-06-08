'use client';

import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('sq-bookmarks', []);

  const toggle = useCallback(
    (id: string) => {
      setBookmarks((prev) =>
        prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
      );
    },
    [setBookmarks],
  );

  const isBookmarked = useCallback(
    (id: string) => bookmarks.includes(id),
    [bookmarks],
  );

  const clearAll = useCallback(() => setBookmarks([]), [setBookmarks]);

  return { bookmarks, toggle, isBookmarked, clearAll };
}
