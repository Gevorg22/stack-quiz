interface AnswerOptionProps {
  index: number;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isAnswered: boolean;
  correctAnswer: number;
  onSelect: (index: number) => void;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export function AnswerOption({
  index,
  text,
  isSelected,
  isCorrect,
  isAnswered,
  correctAnswer,
  onSelect,
}: AnswerOptionProps) {
  const isCorrectAnswer = index === correctAnswer;

  const getVariant = () => {
    if (!isAnswered) return 'default';
    if (isCorrectAnswer) return 'correct';
    if (isSelected && !isCorrect) return 'wrong';
    return 'disabled';
  };

  const variant = getVariant();

  const variantStyles = {
    default:
      'border-gray-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer active:scale-[0.98] dark:border-slate-600 dark:bg-slate-800 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/50',
    correct:
      'border-emerald-400 bg-emerald-50 cursor-default dark:border-emerald-500 dark:bg-emerald-950/40',
    wrong: 'border-red-400 bg-red-50 cursor-default dark:border-red-500 dark:bg-red-950/40',
    disabled:
      'border-gray-200 bg-gray-50 opacity-60 cursor-default dark:border-slate-700 dark:bg-slate-800/60',
  };

  const letterStyles = {
    default:
      'border-gray-300 text-gray-600 bg-white dark:border-slate-500 dark:text-slate-400 dark:bg-slate-700',
    correct:
      'border-emerald-500 text-emerald-700 bg-emerald-100 dark:border-emerald-400 dark:text-emerald-300 dark:bg-emerald-900/50',
    wrong: 'border-red-500 text-red-700 bg-red-100 dark:border-red-400 dark:text-red-300 dark:bg-red-900/50',
    disabled:
      'border-gray-200 text-gray-400 bg-gray-100 dark:border-slate-600 dark:text-slate-500 dark:bg-slate-700',
  };

  const textStyles = {
    default: 'text-gray-800 dark:text-slate-200',
    correct: 'text-emerald-800 font-medium dark:text-emerald-200',
    wrong: 'text-red-800 font-medium dark:text-red-200',
    disabled: 'text-gray-500 dark:text-slate-500',
  };

  return (
    <button
      onClick={() => !isAnswered && onSelect(index)}
      disabled={isAnswered}
      className={`flex w-full items-start gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200 ${variantStyles[variant]}`}
    >
      <span
        className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border-2 text-sm font-bold ${letterStyles[variant]}`}
      >
        {LETTERS[index]}
      </span>
      <span className={`pt-0.5 text-sm leading-relaxed ${textStyles[variant]}`}>
        {text}
      </span>
      {variant === 'correct' && (
        <span className="ml-auto flex-shrink-0 text-emerald-600 dark:text-emerald-400">
          ✓
        </span>
      )}
      {variant === 'wrong' && (
        <span className="ml-auto flex-shrink-0 text-red-600 dark:text-red-400">
          ✗
        </span>
      )}
    </button>
  );
}
