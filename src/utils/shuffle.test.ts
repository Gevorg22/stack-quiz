import { describe, it, expect, vi } from 'vitest';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('возвращает массив той же длины', () => {
    const input = [1, 2, 3, 4, 5];
    expect(shuffle(input)).toHaveLength(input.length);
  });

  it('содержит все исходные элементы', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result.sort()).toEqual([...input].sort());
  });

  it('не мутирует исходный массив', () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffle(input);
    expect(input).toEqual(copy);
  });

  it('возвращает пустой массив при передаче пустого массива', () => {
    expect(shuffle([])).toEqual([]);
  });

  it('возвращает массив с одним элементом без изменений', () => {
    expect(shuffle(['only'])).toEqual(['only']);
  });

  it('работает с массивами строк', () => {
    const input = ['a', 'b', 'c', 'd'];
    const result = shuffle(input);
    expect(result).toHaveLength(4);
    expect(result.sort()).toEqual([...input].sort());
  });

  it('создаёт разные порядки при множественных вызовах (вероятностный тест)', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const results = new Set(
      Array.from({ length: 20 }, () => shuffle(input).join(',')),
    );
    expect(results.size).toBeGreaterThan(1);
  });

  it('вызывает Math.random ровно n-1 раз для массива длины n (алгоритм Фишера-Йейтса)', () => {
    const spy = vi.spyOn(Math, 'random');
    shuffle([1, 2, 3, 4, 5]);
    expect(spy).toHaveBeenCalledTimes(4);
    spy.mockRestore();
  });
});
