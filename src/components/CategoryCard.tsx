'use client';

import { CategoryInfo } from '@/types/quiz';

interface CategoryCardProps {
  category: CategoryInfo;
  onSelect: (id: CategoryInfo['id']) => void;
}

export function CategoryCard({ category, onSelect }: CategoryCardProps) {
  return (
    <button
      onClick={() => onSelect(category.id)}
      className="group relative w-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
      />
      <div className="flex flex-col items-center gap-4 p-6 sm:p-8">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-2xl font-black text-white shadow-lg`}
        >
          {category.icon}
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">{category.label}</h3>
          <p className="mt-1 text-sm text-gray-500">{category.description}</p>
        </div>
      </div>
    </button>
  );
}
