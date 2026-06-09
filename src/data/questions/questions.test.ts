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

describe('банк вопросов', () => {
  it('allQuestions не пустой', () => {
    expect(allQuestions.length).toBeGreaterThan(0);
  });

  it('allQuestions содержит не менее 700 вопросов', () => {
    expect(allQuestions.length).toBeGreaterThanOrEqual(700);
  });

  it('каждый вопрос имеет все обязательные поля', () => {
    for (const q of allQuestions) {
      for (const key of REQUIRED_KEYS) {
        expect(q[key], `Вопрос ${q.id} не имеет поля "${key}"`).toBeDefined();
      }
    }
  });

  it('каждый вопрос имеет ровно 4 варианта ответа', () => {
    for (const q of allQuestions) {
      expect(q.options, `Вопрос ${q.id} должен иметь 4 варианта`).toHaveLength(4);
    }
  });

  it('каждый индекс correctAnswer валиден (0-3)', () => {
    for (const q of allQuestions) {
      expect(
        q.correctAnswer,
        `Вопрос ${q.id} имеет невалидный correctAnswer`,
      ).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThan(q.options.length);
    }
  });

  it('все id вопросов уникальны', () => {
    const ids = allQuestions.map((q) => q.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('каждый вопрос имеет непустое пояснение', () => {
    for (const q of allQuestions) {
      expect(
        q.explanation.trim().length,
        `Вопрос ${q.id} имеет пустое пояснение`,
      ).toBeGreaterThan(0);
    }
  });

  it('каждый вопрос имеет непустой текст вопроса', () => {
    for (const q of allQuestions) {
      expect(
        q.question.trim().length,
        `Вопрос ${q.id} имеет пустой текст`,
      ).toBeGreaterThan(0);
    }
  });

  it('все категории вопросов валидны', () => {
    for (const q of allQuestions) {
      expect(
        VALID_CATEGORIES,
        `Вопрос ${q.id} имеет невалидную категорию "${q.category}"`,
      ).toContain(q.category);
    }
  });

  it('все уровни сложности вопросов валидны', () => {
    for (const q of allQuestions) {
      expect(
        VALID_DIFFICULTIES,
        `Вопрос ${q.id} имеет невалидный уровень сложности "${q.difficulty}"`,
      ).toContain(q.difficulty);
    }
  });

  it('каждый уровень сложности представлен среди всех вопросов', () => {
    const difficulties = new Set(allQuestions.map((q) => q.difficulty));
    for (const d of VALID_DIFFICULTIES) {
      expect(difficulties).toContain(d);
    }
  });

  it('все варианты ответа являются непустыми строками', () => {
    for (const q of allQuestions) {
      for (const opt of q.options) {
        expect(
          opt.trim().length,
          `Вопрос ${q.id} имеет пустой вариант ответа`,
        ).toBeGreaterThan(0);
      }
    }
  });
});

describe('questionsByCategory', () => {
  for (const cat of VALID_CATEGORIES) {
    it(`категория "${cat}" содержит вопросы`, () => {
      expect(questionsByCategory[cat].length).toBeGreaterThan(0);
    });

    it(`все вопросы в категории "${cat}" имеют правильное поле category`, () => {
      for (const q of questionsByCategory[cat]) {
        expect(q.category).toBe(cat);
      }
    });
  }

  it('сумма вопросов по всем категориям равна длине allQuestions', () => {
    const total = VALID_CATEGORIES.reduce(
      (acc, cat) => acc + questionsByCategory[cat].length,
      0,
    );
    expect(total).toBe(allQuestions.length);
  });
});

describe('getQuestions', () => {
  it('возвращает перемешанные вопросы для указанной категории', () => {
    const result = getQuestions('javascript');
    expect(result.length).toBe(questionsByCategory['javascript'].length);
    expect(result.every((q) => q.category === 'javascript')).toBe(true);
  });

  it('возвращает все вопросы, если категория "all"', () => {
    const result = getQuestions('all');
    expect(result.length).toBe(allQuestions.length);
  });

  it('не возвращает ссылку на исходный массив', () => {
    const result = getQuestions('react');
    expect(result).not.toBe(questionsByCategory['react']);
  });

  it('фильтрует по сложности, если передан аргумент difficulty', () => {
    const result = getQuestions('javascript', 'beginner');
    expect(result.every((q) => q.difficulty === 'beginner')).toBe(true);
  });

  it('возвращает меньше вопросов при применении фильтра сложности', () => {
    const all = getQuestions('javascript');
    const filtered = getQuestions('javascript', 'advanced');
    expect(filtered.length).toBeLessThan(all.length);
  });

  it('создаёт разный порядок при разных вызовах (вероятностный тест)', () => {
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
  it('возвращает правильное количество вопросов по категории', () => {
    for (const cat of VALID_CATEGORIES) {
      expect(getQuestionCount(cat)).toBe(questionsByCategory[cat].length);
    }
  });

  it('возвращает allQuestions.length для категории "all"', () => {
    expect(getQuestionCount('all')).toBe(allQuestions.length);
  });

  it('возвращает отфильтрованное количество при указании сложности', () => {
    const beginnerCount = getQuestionCount('javascript', 'beginner');
    const total = getQuestionCount('javascript');
    expect(beginnerCount).toBeGreaterThan(0);
    expect(beginnerCount).toBeLessThan(total);
  });

  it('суммы по уровням сложности равны итогу по каждой категории', () => {
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

describe('список категорий', () => {
  it('содержит запись для каждой валидной категории и "all"', () => {
    const ids = categories.map((c) => c.id);
    for (const cat of VALID_CATEGORIES) {
      expect(ids).toContain(cat);
    }
    expect(ids).toContain('all');
  });

  it('каждая категория имеет непустые label и icon', () => {
    for (const cat of categories) {
      expect(cat.label.trim().length).toBeGreaterThan(0);
      expect(cat.icon.trim().length).toBeGreaterThan(0);
    }
  });
});
