'use client';

import { useCallback, useState } from 'react';
import { Category, Difficulty, QuizCount, QuizResult, Question } from '@/types/quiz';
import { CodingChallenge } from '@/types/challenge';
import { categories, getQuestions, getQuestionCount } from '@/data/questions';
import { allQuestions } from '@/data/questions';
import { challenges } from '@/data/challenges';
import { shuffle } from '@/utils/shuffle';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useHistory } from '@/hooks/useHistory';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CategoryCard } from './CategoryCard';
import { QuizSetup } from './QuizSetup';
import { QuizRunner } from './QuizRunner';
import { ResultScreen } from './ResultScreen';
import { BookmarksView } from './BookmarksView';
import { ChallengesView } from './ChallengesView';
import { ChallengeRunner } from './ChallengeRunner';
import { DarkModeToggle } from './DarkModeToggle';

type View = 'home' | 'setup' | 'quiz' | 'result' | 'bookmarks' | 'challenges' | 'challenge';

export function QuizClient() {
  const { isDark, toggle: toggleDark } = useDarkMode();
  const { bookmarks, toggle: toggleBookmark, clearAll: clearBookmarks } = useBookmarks();
  const { history, addEntry, clearHistory } = useHistory();

  const [view, setView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('javascript');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [quizKey, setQuizKey] = useState(0);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [activeChallenge, setActiveChallenge] = useState<CodingChallenge | null>(null);
  const [solvedChallenges, setSolvedChallenges] = useLocalStorage<string[]>('solved-challenges', []);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setView('setup');
  };

  const handleStartQuiz = useCallback(
    (count: QuizCount, difficulty?: Difficulty) => {
      const questions = getQuestions(selectedCategory, difficulty);
      const sliced = count === 'all' ? questions : questions.slice(0, count);
      setActiveQuestions(sliced);
      setQuizKey((k) => k + 1);
      setView('quiz');
    },
    [selectedCategory],
  );

  const handleQuizComplete = useCallback(
    (result: QuizResult) => {
      addEntry({
        category: result.category,
        score: result.score,
        total: result.total,
      });
      setQuizResult(result);
      setView('result');
    },
    [addEntry],
  );

  const handleRetryWrong = useCallback(() => {
    if (!quizResult?.wrongQuestions.length) return;
    setActiveQuestions(shuffle(quizResult.wrongQuestions));
    setQuizKey((k) => k + 1);
    setView('quiz');
  }, [quizResult]);

  const handleRestart = useCallback(() => {
    setActiveQuestions(shuffle(activeQuestions));
    setQuizKey((k) => k + 1);
    setView('quiz');
  }, [activeQuestions]);

  const handleHome = useCallback(() => {
    setView('home');
    setQuizResult(null);
  }, []);

  const handleSelectChallenge = useCallback((challenge: CodingChallenge) => {
    setActiveChallenge(challenge);
    setView('challenge');
  }, []);

  const handleChallengeSolved = useCallback((id: string) => {
    setSolvedChallenges((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, [setSolvedChallenges]);

  const bookmarkedQuestions = allQuestions.filter((q) =>
    bookmarks.includes(q.id),
  );

  const handleStartFromBookmarks = useCallback(() => {
    if (!bookmarkedQuestions.length) return;
    setSelectedCategory('all');
    setActiveQuestions(shuffle(bookmarkedQuestions));
    setQuizKey((k) => k + 1);
    setView('quiz');
  }, [bookmarkedQuestions]);

  if (view === 'challenges') {
    return (
      <ChallengesView
        challenges={challenges}
        solvedIds={solvedChallenges}
        isDark={isDark}
        onToggleDark={toggleDark}
        onSelect={handleSelectChallenge}
        onBack={handleHome}
      />
    );
  }

  if (view === 'challenge' && activeChallenge) {
    return (
      <ChallengeRunner
        challenge={activeChallenge}
        isDark={isDark}
        onToggleDark={toggleDark}
        onSolved={handleChallengeSolved}
        onBack={() => setView('challenges')}
      />
    );
  }

  if (view === 'bookmarks') {
    return (
      <BookmarksView
        bookmarkedQuestions={bookmarkedQuestions}
        isDark={isDark}
        onToggleDark={toggleDark}
        onRemoveBookmark={toggleBookmark}
        onClearAll={clearBookmarks}
        onStartQuiz={handleStartFromBookmarks}
        onBack={handleHome}
      />
    );
  }

  if (view === 'setup') {
    return (
      <QuizSetup
        categoryLabel={
          categories.find((c) => c.id === selectedCategory)?.label ??
          selectedCategory
        }
        totalCount={getQuestionCount(selectedCategory)}
        countByDifficulty={{
          beginner:     getQuestionCount(selectedCategory, 'beginner'),
          intermediate: getQuestionCount(selectedCategory, 'intermediate'),
          advanced:     getQuestionCount(selectedCategory, 'advanced'),
        }}
        isDark={isDark}
        onToggleDark={toggleDark}
        onStart={handleStartQuiz}
        onBack={() => setView('home')}
      />
    );
  }

  if (view === 'quiz') {
    return (
      <QuizRunner
        key={quizKey}
        questions={activeQuestions}
        category={selectedCategory}
        bookmarks={bookmarks}
        isDark={isDark}
        onBookmark={toggleBookmark}
        onToggleDark={toggleDark}
        onBack={() => setView('setup')}
        onComplete={handleQuizComplete}
      />
    );
  }

  if (view === 'result' && quizResult) {
    return (
      <ResultScreen
        result={quizResult}
        history={history}
        isDark={isDark}
        onToggleDark={toggleDark}
        onRetryWrong={
          quizResult.wrongQuestions.length > 0 ? handleRetryWrong : undefined
        }
        onRestart={handleRestart}
        onHome={handleHome}
        onClearHistory={clearHistory}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-4 py-10 sm:py-16">
        <div className="mb-10 text-center">
          <div className="mb-2 flex items-center justify-end">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView('challenges')}
                className="flex h-9 items-center gap-1.5 rounded-xl border border-indigo-400/30 bg-indigo-400/10 px-3 text-sm text-indigo-300 backdrop-blur-sm transition-colors hover:bg-indigo-400/20"
                aria-label="Код-редактор"
              >
                💻
                {solvedChallenges.length > 0 && (
                  <span className="rounded-full bg-indigo-400 px-1.5 py-0.5 text-xs font-bold text-slate-900">
                    {solvedChallenges.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setView('bookmarks')}
                className="flex h-9 items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                aria-label="Закладки"
              >
                ★
                {bookmarks.length > 0 && (
                  <span className="rounded-full bg-yellow-400 px-1.5 py-0.5 text-xs font-bold text-slate-900">
                    {bookmarks.length}
                  </span>
                )}
              </button>
              <DarkModeToggle isDark={isDark} onToggle={toggleDark} />
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-indigo-200 backdrop-blur-sm">
            <span>🎯</span>
            <span>Тренажёр для разработчиков</span>
          </div>
          <h1 className="text-4xl font-black text-white sm:text-5xl">
            Stack{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Quiz
            </span>
          </h1>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">
            Выбери технологию и проверь свои знания
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={handleSelectCategory}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Вопросы перемешиваются при каждом запуске
        </p>
      </div>
    </div>
  );
}
