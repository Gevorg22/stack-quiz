'use client';

import { Category } from '@/types/quiz';

interface ResultScreenProps {
  score: number;
  total: number;
  category: Category;
  onRestart: () => void;
  onHome: () => void;
}

const GRADE_CONFIG = [
  {
    min: 90,
    emoji: '🏆',
    title: 'Превосходно!',
    subtitle: 'Вы настоящий эксперт!',
    color: 'text-yellow-600',
    bg: 'from-yellow-50 to-amber-50',
    ring: 'ring-yellow-400',
  },
  {
    min: 70,
    emoji: '🌟',
    title: 'Отлично!',
    subtitle: 'Высокий уровень знаний!',
    color: 'text-emerald-600',
    bg: 'from-emerald-50 to-teal-50',
    ring: 'ring-emerald-400',
  },
  {
    min: 50,
    emoji: '👍',
    title: 'Неплохо!',
    subtitle: 'Есть куда расти.',
    color: 'text-blue-600',
    bg: 'from-blue-50 to-indigo-50',
    ring: 'ring-blue-400',
  },
  {
    min: 0,
    emoji: '📚',
    title: 'Нужна практика',
    subtitle: 'Изучите материал и попробуйте снова!',
    color: 'text-red-600',
    bg: 'from-red-50 to-rose-50',
    ring: 'ring-red-400',
  },
];

export function ResultScreen({
  score,
  total,
  onRestart,
  onHome,
}: ResultScreenProps) {
  const percent = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade = GRADE_CONFIG.find((g) => percent >= g.min) ?? GRADE_CONFIG[3];

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-br ${grade.bg} px-4 py-8`}
    >
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-xl text-center">
          <div className="text-6xl mb-4">{grade.emoji}</div>

          <div
            className={`inline-flex h-28 w-28 items-center justify-center rounded-full ring-4 ${grade.ring} ring-offset-4 bg-white mb-6`}
          >
            <div>
              <div className={`text-4xl font-black ${grade.color}`}>
                {percent}%
              </div>
              <div className="text-xs text-gray-400">результат</div>
            </div>
          </div>

          <h2 className={`text-2xl font-bold ${grade.color}`}>{grade.title}</h2>
          <p className="mt-1 text-gray-500 text-sm">{grade.subtitle}</p>

          <div className="mt-6 flex justify-center gap-8 py-4 border-y border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">{score}</div>
              <div className="text-xs text-gray-400">правильных</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">
                {total - score}
              </div>
              <div className="text-xs text-gray-400">ошибок</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">{total}</div>
              <div className="text-xs text-gray-400">всего</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={onRestart}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
            >
              Пройти ещё раз
            </button>
            <button
              onClick={onHome}
              className="w-full rounded-xl border-2 border-gray-200 py-3.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Выбрать категорию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
