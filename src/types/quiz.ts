export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Category =
  | 'javascript'
  | 'react'
  | 'html'
  | 'css'
  | 'typescript'
  | 'network'
  | 'git'
  | 'all';

export type QuizCount = 10 | 25 | 50 | 'all';

export interface Question {
  id: string;
  category: Exclude<Category, 'all'>;
  difficulty: Difficulty;
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

export interface HistoryEntry {
  id: string;
  category: Category;
  score: number;
  total: number;
  date: string;
}

export interface QuizResult {
  score: number;
  total: number;
  wrongQuestions: Question[];
  maxStreak: number;
  category: Category;
}
