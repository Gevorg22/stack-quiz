'use client';

import { useState, useCallback, useRef } from 'react';
import { CodingChallenge } from '@/types/challenge';
import { useCodeRunner } from '@/hooks/useCodeRunner';
import { CodeEditor } from './CodeEditor';
import { DarkModeToggle } from './DarkModeToggle';

interface ChallengeRunnerProps {
  challenge: CodingChallenge;
  isDark: boolean;
  onToggleDark: () => void;
  onSolved: (id: string) => void;
  onBack: () => void;
}

export function ChallengeRunner({
  challenge,
  isDark,
  onToggleDark,
  onSolved,
  onBack,
}: ChallengeRunnerProps) {
  const [code, setCode] = useState(challenge.initialCode);
  const [showHint, setShowHint] = useState(false);
  const [mobileTab, setMobileTab] = useState<'description' | 'editor'>('description');
  const [consoleHeight, setConsoleHeight] = useState(176);
  const { run, result, running } = useCodeRunner();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleRun = useCallback(() => {
    run(code, challenge);
  }, [code, challenge, run]);

  if (result?.allPassed) {
    onSolved(challenge.id);
  }

  const onDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    dragging.current = true;
    e.preventDefault();

    const onMove = (ev: MouseEvent | TouchEvent) => {
      if (!dragging.current || !containerRef.current) return;
      const clientY = 'touches' in ev ? ev.touches[0].clientY : ev.clientY;
      const rect = containerRef.current.getBoundingClientRect();
      const newHeight = rect.bottom - clientY;
      setConsoleHeight(Math.max(80, Math.min(newHeight, rect.height * 0.75)));
    };

    const onUp = () => {
      dragging.current = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove as EventListener);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchend', onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove as EventListener, { passive: false });
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchend', onUp);
  }, []);

  const descriptionLines = challenge.description.split('\n');

  const bg = isDark ? 'bg-[#0f1117]' : 'bg-gray-50';
  const sidebarBg = isDark ? 'bg-[#13151f]' : 'bg-white';
  const consoleBg = isDark ? 'bg-[#13151f]' : 'bg-gray-50';
  const border = isDark ? 'border-white/10' : 'border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textSecondary = isDark ? 'text-slate-300' : 'text-gray-600';
  const textMuted = isDark ? 'text-slate-500' : 'text-gray-400';
  const btnBack = isDark
    ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
    : 'border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200';
  const testDefault = isDark
    ? 'border-white/10 bg-white/5 text-slate-400'
    : 'border-gray-200 bg-gray-50 text-gray-500';

  const descriptionPanel = (
    <div className={`flex flex-col overflow-y-auto ${sidebarBg}`}>
      <div className="p-4">
        <h2 className={`mb-3 text-base font-bold ${textPrimary}`}>{challenge.title}</h2>
        <div className={`space-y-1.5 text-sm ${textSecondary} leading-relaxed`}>
          {descriptionLines.map((line, i) =>
            line.startsWith('```') ? null : line.trim() === '' ? (
              <div key={i} className="h-2" />
            ) : (
              <p key={i}>{line}</p>
            ),
          )}
        </div>

        {showHint && challenge.hint && (
          <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-3 text-xs text-yellow-600">
            <span className="font-semibold">💡 Подсказка: </span>
            {challenge.hint}
          </div>
        )}

        <div className="mt-5">
          <p className={`mb-2 text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
            Тест-кейсы
          </p>
          <div className="space-y-2">
            {challenge.testCases.map((tc, i) => {
              const tr = result?.testResults?.[i];
              return (
                <div
                  key={i}
                  className={`rounded-lg border p-2.5 text-xs transition-colors ${
                    !tr
                      ? testDefault
                      : tr.passed
                        ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-600'
                        : 'border-red-400/30 bg-red-400/10 text-red-500'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0">
                      {!tr ? '○' : tr.passed ? '✓' : '✕'}
                    </span>
                    <div className="min-w-0">
                      <p className="font-medium">{tc.description}</p>
                      {tr && !tr.passed && (
                        <p className="mt-1 text-xs opacity-80">
                          Получено: <code>{tr.actual}</code>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const editorPanel = (
    <div className="flex flex-1 flex-col overflow-hidden" ref={containerRef}>
      <div className="flex-1 overflow-hidden">
        <CodeEditor value={code} onChange={setCode} isDark={isDark} />
      </div>

      <div
        className={`flex shrink-0 flex-col border-t ${border} ${consoleBg}`}
        style={{ height: consoleHeight }}
      >
        <div
          className={`flex h-2 shrink-0 cursor-row-resize items-center justify-center border-b ${border} select-none`}
          onMouseDown={onDragStart}
          onTouchStart={onDragStart}
        >
          <div className={`h-1 w-10 rounded-full ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} />
        </div>

        <div className={`flex h-9 shrink-0 items-center justify-between px-4`}>
          <span className={`text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
            Консоль
          </span>
          <button
            onClick={handleRun}
            disabled={running}
            className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
              running
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed dark:bg-slate-600 dark:text-slate-400'
                : result?.allPassed
                  ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                  : 'bg-indigo-500 text-white hover:bg-indigo-400 active:scale-95'
            }`}
          >
            {running ? (
              <>
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
                <span className="hidden sm:inline">Выполняется...</span>
              </>
            ) : result?.allPassed ? (
              '✓ Решено!'
            ) : (
              '▶ Запустить'
            )}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 font-mono text-xs">
          {!result && !running && (
            <p className={textMuted}>Нажми «Запустить» чтобы выполнить код...</p>
          )}
          {result?.error && (
            <p className="text-red-500">✕ {result.error}</p>
          )}
          {result?.logs.map((log, i) => (
            <p key={i} className={`${textSecondary} leading-relaxed`}>
              {log}
            </p>
          ))}
          {result && !result.error && result.logs.length === 0 && (
            <p className={textMuted}>Нет вывода console.log</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`flex h-screen flex-col ${bg} ${textPrimary}`}>
      <div className={`flex h-12 shrink-0 items-center justify-between border-b ${border} px-3 sm:px-4`}>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onBack}
            className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs transition-colors ${btnBack}`}
          >
            ← <span className="hidden sm:inline">Назад</span>
          </button>
          <span className={`truncate text-sm font-semibold ${textPrimary} max-w-[120px] sm:max-w-none`}>
            {challenge.title}
          </span>
          <span className="hidden rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-400 sm:inline">
            JavaScript
          </span>
        </div>
        <div className="flex items-center gap-2">
          {challenge.hint && (
            <button
              onClick={() => setShowHint((v) => !v)}
              className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1.5 text-xs text-yellow-500 transition-colors hover:bg-yellow-400/20 sm:px-3"
            >
              <span className="sm:hidden">💡</span>
              <span className="hidden sm:inline">{showHint ? 'Скрыть подсказку' : '💡 Подсказка'}</span>
            </button>
          )}
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
        </div>
      </div>

      {/* Mobile tabs */}
      <div className={`flex shrink-0 border-b ${border} md:hidden`}>
        <button
          onClick={() => setMobileTab('description')}
          className={`flex-1 py-2 text-xs font-semibold transition-colors ${
            mobileTab === 'description'
              ? 'border-b-2 border-indigo-500 text-indigo-500'
              : textMuted
          }`}
        >
          📋 Задание
        </button>
        <button
          onClick={() => setMobileTab('editor')}
          className={`flex-1 py-2 text-xs font-semibold transition-colors ${
            mobileTab === 'editor'
              ? 'border-b-2 border-indigo-500 text-indigo-500'
              : textMuted
          }`}
        >
          💻 Редактор
        </button>
      </div>

      {/* Mobile layout */}
      <div className="flex flex-1 overflow-hidden md:hidden">
        {mobileTab === 'description' ? (
          <div className="flex-1 overflow-y-auto">
            {descriptionPanel}
          </div>
        ) : (
          <div className="flex flex-1 flex-col overflow-hidden">
            {editorPanel}
          </div>
        )}
      </div>

      {/* Desktop layout */}
      <div className="hidden flex-1 overflow-hidden md:flex">
        <div className={`flex w-80 shrink-0 flex-col border-r ${border}`}>
          {descriptionPanel}
        </div>
        {editorPanel}
      </div>
    </div>
  );
}
