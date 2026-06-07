export type Category =
  | 'javascript'
  | 'react'
  | 'html'
  | 'css'
  | 'typescript'
  | 'network'
  | 'all';

export interface Question {
  id: string;
  category: Exclude<Category, 'all'>;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizState {
  currentIndex: number;
  score: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  isFinished: boolean;
  showExplanation: boolean;
  isCorrect: boolean | null;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  icon: string;
  description: string;
  color: string;
  gradient: string;
}
