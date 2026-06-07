import { Category, CategoryInfo, Question } from '@/types/quiz';
import { shuffle } from '@/utils/shuffle';
import { javascriptQuestions } from './javascript';
import { reactQuestions } from './react';
import { htmlQuestions } from './html';
import { cssQuestions } from './css';

export const allQuestions: Question[] = [
  ...javascriptQuestions,
  ...reactQuestions,
  ...htmlQuestions,
  ...cssQuestions,
];

export const questionsByCategory: Record<Exclude<Category, 'all'>, Question[]> =
  {
    javascript: javascriptQuestions,
    react: reactQuestions,
    html: htmlQuestions,
    css: cssQuestions,
  };

export function getQuestions(category: Category): Question[] {
  if (category === 'all') {
    return shuffle(allQuestions);
  }
  return shuffle(questionsByCategory[category]);
}

export const categories: CategoryInfo[] = [
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: 'JS',
    description: `${javascriptQuestions.length} вопросов о замыканиях, промисах, ES6+ и многом другом`,
    color: 'text-yellow-700',
    gradient: 'from-yellow-400 to-yellow-600',
  },
  {
    id: 'react',
    label: 'React',
    icon: '⚛',
    description: `${reactQuestions.length} вопросов о хуках, Virtual DOM, компонентах и паттернах`,
    color: 'text-cyan-700',
    gradient: 'from-cyan-400 to-cyan-600',
  },
  {
    id: 'html',
    label: 'HTML',
    icon: 'H',
    description: `${htmlQuestions.length} вопросов о семантике, доступности, атрибутах`,
    color: 'text-orange-700',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    id: 'css',
    label: 'CSS',
    icon: 'C',
    description: `${cssQuestions.length} вопросов о каскаде, Flexbox, Grid, анимациях`,
    color: 'text-blue-700',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    id: 'all',
    label: 'Все темы',
    icon: '★',
    description: `${allQuestions.length} вопросов по всем технологиям вперемешку`,
    color: 'text-purple-700',
    gradient: 'from-purple-400 to-pink-500',
  },
];
