'use client';

import { useState, useCallback } from 'react';
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
  const { run, result, running } = useCodeRunner();

  const handleRun = useCallback(() => {
    run(code, challenge);
  }, [code, challenge, run]);

  if (result?.allPassed) {
    onSolved(challenge.id);
  }

  const descriptionLines = challenge.description.split('\n');

  return (
    <div className="flex h-screen flex-col bg-[#0f1117] text-white">
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/10 px-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:bg-white/10"
          >
            ← Назад
          </button>
          <span className="text-sm font-semibold text-white">{challenge.title}</span>
          <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-300">
            JavaScript
          </span>
        </div>
        <div className="flex items-center gap-2">
          {challenge.hint && (
            <button
              onClick={() => setShowHint((v) => !v)}
              className="rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5 text-xs text-yellow-300 transition-colors hover:bg-yellow-400/20"
            >
              {showHint ? 'Скрыть подсказку' : '💡 Подсказка'}
            </button>
          )}
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex w-80 shrink-0 flex-col overflow-y-auto border-r border-white/10 bg-[#13151f]">
          <div className="p-4">
            <h2 className="mb-3 text-base font-bold text-white">{challenge.title}</h2>
            <div className="space-y-1.5 text-sm text-slate-300 leading-relaxed">
              {descriptionLines.map((line, i) =>
                line.startsWith('```') ? null : line.trim() === '' ? (
                  <div key={i} className="h-2" />
                ) : (
                  <p key={i}>{line}</p>
                ),
              )}
            </div>

            {showHint && challenge.hint && (
              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-3 text-xs text-yellow-200">
                <span className="font-semibold">💡 Подсказка: </span>
                {challenge.hint}
              </div>
            )}

            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
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
                          ? 'border-white/10 bg-white/5 text-slate-400'
                          : tr.passed
                            ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
                            : 'border-red-400/30 bg-red-400/10 text-red-300'
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

        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <CodeEditor value={code} onChange={setCode} />
          </div>

          <div className="flex h-44 shrink-0 flex-col border-t border-white/10 bg-[#13151f]">
            <div className="flex h-9 items-center justify-between border-b border-white/10 px-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Консоль
              </span>
              <button
                onClick={handleRun}
                disabled={running}
                className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  running
                    ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                    : result?.allPassed
                      ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                      : 'bg-indigo-500 text-white hover:bg-indigo-400 active:scale-95'
                }`}
              >
                {running ? (
                  <>
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
                    Выполняется...
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
                <p className="text-slate-600">Нажми «Запустить» чтобы выполнить код...</p>
              )}
              {result?.error && (
                <p className="text-red-400">✕ {result.error}</p>
              )}
              {result?.logs.map((log, i) => (
                <p key={i} className="text-slate-300 leading-relaxed">
                  {log}
                </p>
              ))}
              {result && !result.error && result.logs.length === 0 && (
                <p className="text-slate-600">Нет вывода console.log</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
