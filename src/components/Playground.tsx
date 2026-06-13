'use client';

import { useState, useCallback, useRef } from 'react';
import { CodeEditor } from './CodeEditor';
import { DarkModeToggle } from './DarkModeToggle';

interface PlaygroundProps {
  isDark: boolean;
  onToggleDark: () => void;
  onBack: () => void;
}

const INITIAL_CODE = `// Свободный редактор — пиши любой JS код
// console.log выводит результат в консоль ниже

function greet(name) {
  return \`Привет, \${name}!\`;
}

console.log(greet('мир'));
console.log([1, 2, 3].map(x => x * 2));
`;

export function Playground({ isDark, onToggleDark, onBack }: PlaygroundProps) {
  const [code, setCode] = useState(INITIAL_CODE);
  const [logs, setLogs] = useState<{ text: string; type: 'log' | 'error' | 'warn' }[]>([]);
  const [running, setRunning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const bg = isDark ? 'bg-[#0f1117]' : 'bg-gray-50';
  const consoleBg = isDark ? 'bg-[#13151f]' : 'bg-white';
  const border = isDark ? 'border-white/10' : 'border-gray-200';
  const textPrimary = isDark ? 'text-white' : 'text-gray-900';
  const textMuted = isDark ? 'text-slate-500' : 'text-gray-400';
  const btnBack = isDark
    ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
    : 'border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200';
  const clearBtn = isDark
    ? 'text-slate-600 hover:text-slate-400'
    : 'text-gray-400 hover:text-gray-600';

  const run = useCallback(() => {
    setRunning(true);
    setLogs([]);

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"></head><body>
<script>
(async () => {
  const entries = [];
  const fmt = (args) => args.map(a => {
    if (typeof a === 'object' && a !== null) {
      try { return JSON.stringify(a, null, 2); } catch { return String(a); }
    }
    return String(a);
  }).join(' ');

  console.log = (...args) => entries.push({ text: fmt(args), type: 'log' });
  console.warn = (...args) => entries.push({ text: fmt(args), type: 'warn' });
  console.error = (...args) => entries.push({ text: fmt(args), type: 'error' });

  try {
    ${code}
    window.parent.postMessage({ type: 'done', entries }, '*');
  } catch(e) {
    entries.push({ text: e.message, type: 'error' });
    window.parent.postMessage({ type: 'done', entries }, '*');
  }
})();
<\/script></body></html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.sandbox.add('allow-scripts');
    document.body.appendChild(iframe);

    const onMessage = (e: MessageEvent) => {
      if (e.data?.type !== 'done') return;
      window.removeEventListener('message', onMessage);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setLogs(e.data.entries);
      setRunning(false);
      iframe.remove();
      URL.revokeObjectURL(url);
    };

    window.addEventListener('message', onMessage);

    timeoutRef.current = setTimeout(() => {
      window.removeEventListener('message', onMessage);
      setLogs([{ text: 'Превышено время выполнения (5 сек). Возможно бесконечный цикл.', type: 'error' }]);
      setRunning(false);
      iframe.remove();
      URL.revokeObjectURL(url);
    }, 5000);

    iframe.src = url;
  }, [code]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      run();
    }
  }, [run]);

  return (
    <div className={`flex h-screen flex-col ${bg} ${textPrimary}`} onKeyDown={handleKeyDown}>
      <div className={`flex h-12 shrink-0 items-center justify-between border-b ${border} px-4`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition-colors ${btnBack}`}
          >
            ← Назад
          </button>
          <span className={`text-sm font-semibold ${textPrimary}`}>Playground</span>
          <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-400">
            JavaScript
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`hidden text-xs sm:block ${textMuted}`}>⌘ + Enter — запустить</span>
          <DarkModeToggle isDark={isDark} onToggle={onToggleDark} />
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <CodeEditor value={code} onChange={setCode} isDark={isDark} />
        </div>

        <div className={`flex h-52 shrink-0 flex-col border-t ${border} ${consoleBg}`}>
          <div className={`flex h-9 shrink-0 items-center justify-between border-b ${border} px-4`}>
            <span className={`text-xs font-semibold uppercase tracking-wider ${textMuted}`}>
              Консоль
            </span>
            <div className="flex items-center gap-2">
              {logs.length > 0 && (
                <button
                  onClick={() => setLogs([])}
                  className={`text-xs transition-colors ${clearBtn}`}
                >
                  Очистить
                </button>
              )}
              <button
                onClick={run}
                disabled={running}
                className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  running
                    ? 'cursor-not-allowed bg-slate-300 text-slate-500'
                    : 'bg-indigo-500 text-white hover:bg-indigo-400 active:scale-95'
                }`}
              >
                {running ? (
                  <>
                    <span className="h-3 w-3 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
                    Выполняется...
                  </>
                ) : (
                  '▶ Запустить'
                )}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 font-mono text-xs">
            {logs.length === 0 && !running && (
              <p className={textMuted}>Нажми «Запустить» или ⌘+Enter...</p>
            )}
            {logs.map((entry, i) => (
              <div
                key={i}
                className={`leading-relaxed whitespace-pre-wrap ${
                  entry.type === 'error'
                    ? 'text-red-500'
                    : entry.type === 'warn'
                      ? 'text-yellow-600'
                      : isDark ? 'text-slate-300' : 'text-gray-700'
                }`}
              >
                {entry.type === 'error' && <span className="mr-1">✕</span>}
                {entry.type === 'warn' && <span className="mr-1">⚠</span>}
                {entry.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
