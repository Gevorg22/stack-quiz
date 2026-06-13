'use client';

import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-[#1e1e1e] text-sm text-slate-400">
      Загрузка редактора...
    </div>
  ),
});

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  isDark?: boolean;
}

export function CodeEditor({ value, onChange, isDark = true }: CodeEditorProps) {
  return (
    <MonacoEditor
      height="100%"
      defaultLanguage="javascript"
      theme={isDark ? 'vs-dark' : 'vs'}
      value={value}
      onChange={(v) => onChange(v ?? '')}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        lineNumbers: 'on',
        tabSize: 2,
        wordWrap: 'on',
        automaticLayout: true,
        padding: { top: 12, bottom: 12 },
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        renderLineHighlight: 'all',
        bracketPairColorization: { enabled: true },
      }}
    />
  );
}
