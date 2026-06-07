interface ProgressBarProps {
  current: number;
  total: number;
  score: number;
}

export function ProgressBar({ current, total, score }: ProgressBarProps) {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm font-medium">
        <span className="text-gray-600">
          Вопрос {current} из {total}
        </span>
        <span className="text-emerald-600">Очки: {score}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
