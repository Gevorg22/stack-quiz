import type { Category, CategoryInfo, Question } from '@/types/quiz';
import { shuffle } from '@/utils/shuffle';
import { javascriptQuestions } from './javascript';
import { reactQuestions } from './react';
import { htmlQuestions } from './html';
import { cssQuestions } from './css';
import { typescriptQuestions } from './typescript';
import { networkQuestions } from './network';
import { gitQuestions } from './git';

export const allQuestions: Question[] = [
  ...javascriptQuestions,
  ...reactQuestions,
  ...htmlQuestions,
  ...cssQuestions,
  ...typescriptQuestions,
  ...networkQuestions,
  ...gitQuestions,
];

export const questionsByCategory: Record<Exclude<Category, 'all'>, Question[]> =
  {
    javascript: javascriptQuestions,
    react: reactQuestions,
    html: htmlQuestions,
    css: cssQuestions,
    typescript: typescriptQuestions,
    network: networkQuestions,
    git: gitQuestions,
  };

export function getQuestions(category: Category): Question[] {
  if (category === 'all') {
    return shuffle(allQuestions);
  }
  return shuffle(questionsByCategory[category]);
}

export function getQuestionCount(category: Category): number {
  if (category === 'all') return allQuestions.length;
  return questionsByCategory[category].length;
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
    id: 'typescript',
    label: 'TypeScript',
    icon: 'TS',
    description: `${typescriptQuestions.length} вопросов о типах, дженериках, утилитах и паттернах`,
    color: 'text-blue-700',
    gradient: 'from-blue-500 to-blue-700',
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
    color: 'text-purple-700',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    id: 'network',
    label: 'Сети и Web',
    icon: '🌐',
    description: `${networkQuestions.length} вопросов о HTTP, CORS, REST, WebSocket, безопасности`,
    color: 'text-teal-700',
    gradient: 'from-teal-400 to-teal-600',
  },
  {
    id: 'git',
    label: 'Git',
    icon: 'G',
    description: `${gitQuestions.length} вопросов о базовых командах, ветвлении, внутреннем устройстве и CI/CD`,
    color: 'text-red-700',
    gradient: 'from-red-400 to-orange-600',
  },
  {
    id: 'all',
    label: 'Все темы',
    icon: '★',
    description: `${allQuestions.length} вопросов по всем технологиям вперемешку`,
    color: 'text-rose-700',
    gradient: 'from-rose-400 to-pink-500',
  },
];
