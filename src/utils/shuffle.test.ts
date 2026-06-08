import { describe, it, expect, vi } from 'vitest';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('returns an array of the same length', () => {
    const input = [1, 2, 3, 4, 5];
    expect(shuffle(input)).toHaveLength(input.length);
  });

  it('contains all original elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result.sort()).toEqual([...input].sort());
  });

  it('does not mutate the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffle(input);
    expect(input).toEqual(copy);
  });

  it('returns an empty array when given an empty array', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('returns a single-element array unchanged', () => {
    expect(shuffle(['only'])).toEqual(['only']);
  });

  it('works with string arrays', () => {
    const input = ['a', 'b', 'c', 'd'];
    const result = shuffle(input);
    expect(result).toHaveLength(4);
    expect(result.sort()).toEqual([...input].sort());
  });

  it('produces different orderings over multiple runs (probabilistic)', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set(
      Array.from({ length: 20 }, () => shuffle(input).join(',')),
    );
    expect(results.size).toBeGreaterThan(1);
  });

  it('calls Math.random exactly n-1 times for array of length n (Fisher-Yates)', () => {
    const spy = vi.spyOn(Math, 'random');
    shuffle([1, 2, 3, 4, 5]);
    expect(spy).toHaveBeenCalledTimes(4);
    spy.mockRestore();
  });
});
