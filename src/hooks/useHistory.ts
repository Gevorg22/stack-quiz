'use client';

import { useCallback } from 'react';
import { HistoryEntry } from '@/types/quiz';
import { useLocalStorage } from './useLocalStorage';

export function useHistory() {
  const [history, setHistory] = useLocalStorage<HistoryEntry[]>(
    'sq-history',
    [],
  );

  const addEntry = useCallback(
    (entry: Omit<HistoryEntry, 'id' | 'date'>) => {
      const newEntry: HistoryEntry = {
        ...entry,
        id: Date.now().toString(),
        date: new Date().toISOString(),
      };
      setHistory((prev) => [newEntry, ...prev].slice(0, 50));
    },
    [setHistory],
  );

  const clearHistory = useCallback(() => setHistory([]), [setHistory]);

  return { history, addEntry, clearHistory };
}
