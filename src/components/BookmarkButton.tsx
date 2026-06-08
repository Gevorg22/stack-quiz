interface BookmarkButtonProps {
  isBookmarked: boolean;
  onToggle: () => void;
}

export function BookmarkButton({ isBookmarked, onToggle }: BookmarkButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xl transition-colors ${
        isBookmarked
          ? 'text-yellow-500 hover:text-yellow-600'
          : 'text-gray-300 hover:text-yellow-500 dark:text-slate-600 dark:hover:text-yellow-400'
      }`}
      aria-label={isBookmarked ? 'Убрать из закладок' : 'Добавить в закладки'}
    >
      {isBookmarked ? '★' : '☆'}
    </button>
  );
}
