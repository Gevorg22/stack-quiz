import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const CATEGORY_CONFIG = [
  { file: 'javascript', prefix: 'js',     total: 180 },
  { file: 'react',      prefix: 'react',  total: 150 },
  { file: 'typescript', prefix: 'ts',     total: 75  },
  { file: 'html',       prefix: 'html',   total: 100 },
  { file: 'css',        prefix: 'css',    total: 100 },
  { file: 'network',    prefix: 'network', total: 100 },
  { file: 'git',        prefix: 'git',    total: 50  },
];

function getDifficulty(num, total) {
  const third = total / 3;
  if (num <= third)       return 'beginner';
  if (num <= 2 * third)   return 'intermediate';
  return 'advanced';
}

for (const { file, prefix, total } of CATEGORY_CONFIG) {
  const filePath = join(root, 'src', 'data', 'questions', `${file}.ts`);
  let content = readFileSync(filePath, 'utf-8');

  if (content.includes("difficulty:")) {
    console.log(`${file}.ts — already has difficulty, skipping`);
    continue;
  }

  let count = 0;
  content = content.replace(
    new RegExp(`(id:\\s*'${prefix}-(\\d+)',)`, 'g'),
    (_, full, numStr) => {
      const num = parseInt(numStr, 10);
      const difficulty = getDifficulty(num, total);
      count++;
      return `${full}\n    difficulty: '${difficulty}',`;
    },
  );

  writeFileSync(filePath, content, 'utf-8');
  console.log(`${file}.ts — tagged ${count} questions`);
}
