import { describe, it, expect } from 'vitest';
import { allQuestions, questionsByCategory, getQuestions, getQuestionCount, categories } from './index';
import { Question, Category, Difficulty } from '@/types/quiz';

const REQUIRED_KEYS: (keyof Question)[] = [
  'id',
  'category',
  'difficulty',
  'question',
  'options',
  'correctAnswer',
  'explanation',
];

const VALID_DIFFICULTIES: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

const VALID_CATEGORIES: Exclude<Category, 'all'>[] = [
  'javascript',
  'react',
  'html',
  'css',
  'typescript',
  'network',
  'git',
];

describe('question banks', () => {
  it('allQuestions is not empty', () => {
    expect(allQuestions.length).toBeGreaterThan(0);
  });

  it('allQuestions contains at least 700 questions', () => {
    expect(allQuestions.length).toBeGreaterThanOrEqual(700);
  });

  it('every question has all required fields', () => {
    for (const q of allQuestions) {
      for (const key of REQUIRED_KEYS) {
        expect(q[key], `Question ${q.id} missing "${key}"`).toBeDefined();
      }
    }
  });

  it('every question has exactly 4 options', () => {
    for (const q of allQuestions) {
      expect(q.options, `Question ${q.id} should have 4 options`).toHaveLength(4);
    }
  });

  it('every correctAnswer index is valid (0-3)', () => {
    for (const q of allQuestions) {
      expect(
        q.correctAnswer,
        `Question ${q.id} has invalid correctAnswer`,
      ).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThan(q.options.length);
    }
  });

  it('all question IDs are unique', () => {
    const ids = allQuestions.map((q) => q.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('every question has a non-empty explanation', () => {
    for (const q of allQuestions) {
      expect(
        q.explanation.trim().length,
        `Question ${q.id} has empty explanation`,
      ).toBeGreaterThan(0);
    }
  });

  it('every question has a non-empty question text', () => {
    for (const q of allQuestions) {
      expect(
        q.question.trim().length,
        `Question ${q.id} has empty question`,
      ).toBeGreaterThan(0);
    }
  });

  it('all question categories are valid', () => {
    for (const q of allQuestions) {
      expect(
        VALID_CATEGORIES,
        `Question ${q.id} has invalid category "${q.category}"`,
      ).toContain(q.category);
    }
  });

  it('all question difficulties are valid', () => {
    for (const q of allQuestions) {
      expect(
        VALID_DIFFICULTIES,
        `Question ${q.id} has invalid difficulty "${q.difficulty}"`,
      ).toContain(q.difficulty);
    }
  });

  it('every difficulty level is represented across all questions', () => {
    const difficulties = new Set(allQuestions.map((q) => q.difficulty));
    for (const d of VALID_DIFFICULTIES) {
      expect(difficulties).toContain(d);
    }
  });

  it('all options are non-empty strings', () => {
    for (const q of allQuestions) {
      for (const opt of q.options) {
        expect(
          opt.trim().length,
          `Question ${q.id} has empty option`,
        ).toBeGreaterThan(0);
      }
    }
  });
});

describe('questionsByCategory', () => {
  for (const cat of VALID_CATEGORIES) {
    it(`"${cat}" category has questions`, () => {
      expect(questionsByCategory[cat].length).toBeGreaterThan(0);
    });

    it(`all questions in "${cat}" have correct category field`, () => {
      for (const q of questionsByCategory[cat]) {
        expect(q.category).toBe(cat);
      }
    });
  }

  it('sum of all category counts equals allQuestions length', () => {
    const total = VALID_CATEGORIES.reduce(
      (acc, cat) => acc + questionsByCategory[cat].length,
      0,
    );
    expect(total).toBe(allQuestions.length);
  });
});

describe('getQuestions', () => {
  it('returns shuffled questions for a specific category', () => {
    const result = getQuestions('javascript');
    expect(result.length).toBe(questionsByCategory['javascript'].length);
    expect(result.every((q) => q.category === 'javascript')).toBe(true);
  });

  it('returns all questions when category is "all"', () => {
    const result = getQuestions('all');
    expect(result.length).toBe(allQuestions.length);
  });

  it('does not return the same array reference as the original', () => {
    const result = getQuestions('react');
    expect(result).not.toBe(questionsByCategory['react']);
  });

  it('filters by difficulty when difficulty arg is provided', () => {
    const result = getQuestions('javascript', 'beginner');
    expect(result.every((q) => q.difficulty === 'beginner')).toBe(true);
  });

  it('returns fewer questions when a difficulty filter is applied', () => {
    const all = getQuestions('javascript');
    const filtered = getQuestions('javascript', 'advanced');
    expect(filtered.length).toBeLessThan(all.length);
  });

  it('produces different orderings across calls (probabilistic)', () => {
    const orders = new Set(
      Array.from({ length: 10 }, () =>
        getQuestions('javascript')
          .slice(0, 5)
          .map((q) => q.id)
          .join(','),
      ),
    );
    expect(orders.size).toBeGreaterThan(1);
  });
});

describe('getQuestionCount', () => {
  it('returns the correct count per category', () => {
    for (const cat of VALID_CATEGORIES) {
      expect(getQuestionCount(cat)).toBe(questionsByCategory[cat].length);
    }
  });

  it('returns allQuestions.length for "all"', () => {
    expect(getQuestionCount('all')).toBe(allQuestions.length);
  });

  it('returns a filtered count when difficulty is provided', () => {
    const beginnerCount = getQuestionCount('javascript', 'beginner');
    const total = getQuestionCount('javascript');
    expect(beginnerCount).toBeGreaterThan(0);
    expect(beginnerCount).toBeLessThan(total);
  });

  it('difficulty counts sum to total for each category', () => {
    for (const cat of VALID_CATEGORIES) {
      const total = getQuestionCount(cat);
      const sum = VALID_DIFFICULTIES.reduce(
        (acc, d) => acc + getQuestionCount(cat, d),
        0,
      );
      expect(sum).toBe(total);
    }
  });
});

describe('categories list', () => {
  it('contains an entry for every valid category plus "all"', () => {
    const ids = categories.map((c) => c.id);
    for (const cat of VALID_CATEGORIES) {
      expect(ids).toContain(cat);
    }
    expect(ids).toContain('all');
  });

  it('every category has a non-empty label and icon', () => {
    for (const cat of categories) {
      expect(cat.label.trim().length).toBeGreaterThan(0);
      expect(cat.icon.trim().length).toBeGreaterThan(0);
    }
  });
});
