'use client';

import { useState, useCallback, useRef } from 'react';
import { CodingChallenge, RunResult } from '@/types/challenge';

function buildIframeHtml(userCode: string, challenge: CodingChallenge): string {
  const testCasesJs = challenge.testCases
    .map(
      (tc, i) => `
    try {
      const _result_${i} = await Promise.resolve(${tc.call});
      const _actual_${i} = Array.isArray(_result_${i}) ? JSON.stringify(_result_${i}) : String(_result_${i});
      results.push({
        description: ${JSON.stringify(tc.description)},
        passed: _actual_${i} === ${JSON.stringify(tc.expected)},
        actual: _actual_${i},
        expected: ${JSON.stringify(tc.expected)},
      });
    } catch(e) {
      results.push({
        description: ${JSON.stringify(tc.description)},
        passed: false,
        actual: 'Error: ' + e.message,
        expected: ${JSON.stringify(tc.expected)},
      });
    }`,
    )
    .join('\n');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script>
(async () => {
  const logs = [];
  const _origLog = console.log;
  const _origWarn = console.warn;
  const _origError = console.error;

  const _fmt = (args) => args.map(a => {
    if (typeof a === 'object' && a !== null) {
      try { return JSON.stringify(a); } catch { return String(a); }
    }
    return String(a);
  }).join(' ');

  console.log = (...args) => { logs.push(_fmt(args)); _origLog(...args); };
  console.warn = (...args) => { logs.push('⚠ ' + _fmt(args)); _origWarn(...args); };
  console.error = (...args) => { logs.push('✕ ' + _fmt(args)); _origError(...args); };

  const results = [];

  try {
    ${userCode}
    ${testCasesJs}
    window.parent.postMessage({ type: 'done', logs, results }, '*');
  } catch(e) {
    window.parent.postMessage({ type: 'done', logs, results, error: e.message }, '*');
  }
})();
<\/script>
</body>
</html>`;
}

export function useCodeRunner() {
  const [result, setResult] = useState<RunResult | null>(null);
  const [running, setRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const run = useCallback(
    (code: string, challenge: CodingChallenge) => {
      setRunning(true);
      setResult(null);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const html = buildIframeHtml(code, challenge);
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);

      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.sandbox.add('allow-scripts');
      document.body.appendChild(iframe);
      iframeRef.current = iframe;

      const onMessage = (e: MessageEvent) => {
        if (e.data?.type !== 'done') return;
        window.removeEventListener('message', onMessage);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        const { logs, results: testResults, error } = e.data;
        setResult({
          logs,
          testResults,
          error,
          allPassed: !error && testResults.every((r: { passed: boolean }) => r.passed),
        });
        setRunning(false);

        iframe.remove();
        URL.revokeObjectURL(url);
      };

      window.addEventListener('message', onMessage);

      timeoutRef.current = setTimeout(() => {
        window.removeEventListener('message', onMessage);
        setResult({
          logs: [],
          testResults: [],
          error: 'Превышено время выполнения (5 сек). Возможно бесконечный цикл.',
          allPassed: false,
        });
        setRunning(false);
        iframe.remove();
        URL.revokeObjectURL(url);
      }, 5000);

      iframe.src = url;
    },
    [],
  );

  const reset = useCallback(() => setResult(null), []);

  return { run, result, running, reset };
}
