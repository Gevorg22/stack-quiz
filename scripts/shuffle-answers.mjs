import { readFileSync, writeFileSync } from 'fs';

const positionPattern = [0, 1, 2, 3, 1, 3, 0, 2, 3, 0, 2, 1, 2, 3, 1, 0, 0, 2, 3, 1];

function extractOptions(optionsBlock) {
  const results = [];
  let i = 0;
  while (i < optionsBlock.length) {
    const ch = optionsBlock[i];
    if (ch === "'" || ch === '"') {
      const quote = ch;
      let str = quote;
      i++;
      while (i < optionsBlock.length) {
        if (optionsBlock[i] === '\\') {
          str += optionsBlock[i] + optionsBlock[i + 1];
          i += 2;
        } else if (optionsBlock[i] === quote) {
          str += quote;
          i++;
          break;
        } else {
          str += optionsBlock[i];
          i++;
        }
      }
      results.push(str);
    } else {
      i++;
    }
  }
  return results;
}

function processFile(filepath) {
  let content = readFileSync(filepath, 'utf8');
  let qIndex = 0;
  let changeCount = 0;
  let output = '';
  let pos = 0;

  const optionsStart = 'options: [';
  const correctAnswerStr = 'correctAnswer: ';

  while (pos < content.length) {
    const optIdx = content.indexOf(optionsStart, pos);
    if (optIdx === -1) {
      output += content.slice(pos);
      break;
    }

    // Find the closing bracket of options array
    const arrayStart = optIdx + optionsStart.length;
    let depth = 1;
    let i = arrayStart;
    while (i < content.length && depth > 0) {
      if (content[i] === '[') depth++;
      else if (content[i] === ']') depth--;
      i++;
    }
    const arrayEnd = i; // position after ']'
    const optionsBlock = content.slice(arrayStart, arrayEnd - 1);

    const options = extractOptions(optionsBlock);
    if (options.length !== 4) {
      output += content.slice(pos, arrayEnd);
      pos = arrayEnd;
      continue;
    }

    // Find correctAnswer after the options block
    const caIdx = content.indexOf(correctAnswerStr, arrayEnd);
    if (caIdx === -1 || caIdx - arrayEnd > 50) {
      output += content.slice(pos, arrayEnd);
      pos = arrayEnd;
      continue;
    }

    const caValueStart = caIdx + correctAnswerStr.length;
    const caValueEnd = content.indexOf(',', caValueStart);
    const correctIdx = parseInt(content.slice(caValueStart, caValueEnd));

    const newPos = positionPattern[qIndex % positionPattern.length];
    qIndex++;

    if (newPos === correctIdx) {
      output += content.slice(pos, caValueEnd);
      pos = caValueEnd;
      continue;
    }

    // Shuffle: move correct answer to newPos
    const newOptions = [...options];
    const correctOpt = newOptions[correctIdx];
    newOptions.splice(correctIdx, 1);
    newOptions.splice(newPos, 0, correctOpt);

    // Preserve the indentation from existing options
    const indentMatch = optionsBlock.match(/\n(\s+)/);
    const itemIndent = indentMatch ? indentMatch[1] : '      ';
    const arrayIndent = itemIndent.slice(0, -2);

    const newOptionsBlock = newOptions
      .map((opt, idx) => `${itemIndent}${opt}${idx < 3 ? ',' : ''}`)
      .join('\n');

    output += content.slice(pos, optIdx);
    output += `options: [\n${newOptionsBlock}\n${arrayIndent}]`;
    output += content.slice(arrayEnd, caValueStart);
    output += newPos;
    pos = caValueEnd;
    changeCount++;
  }

  writeFileSync(filepath, output, 'utf8');
  return changeCount;
}

const files = [
  'src/data/questions/css.ts',
  'src/data/questions/html.ts',
  'src/data/questions/network.ts',
  'src/data/questions/react.ts',
  'src/data/questions/javascript.ts',
  'src/data/questions/git.ts',
  'src/data/questions/typescript.ts',
];

for (const f of files) {
  const count = processFile(f);
  console.log(`${f}: ${count} shuffled`);
}
console.log('Done!');
