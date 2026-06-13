import { CodingChallenge } from '@/types/challenge';

export const challenges: CodingChallenge[] = [
  // ─── BEGINNER ────────────────────────────────────────────────────────────────
  {
    id: 'fizzbuzz',
    title: 'FizzBuzz',
    difficulty: 'beginner',
    tags: ['Циклы', 'Условия'],
    description:
      'Напиши функцию `fizzBuzz(n)`, которая возвращает массив строк от 1 до n.\n\n- Если число делится на 3 — «Fizz»\n- Если на 5 — «Buzz»\n- Если на 3 и 5 — «FizzBuzz»\n- Иначе — само число в виде строки',
    initialCode: `function fizzBuzz(n) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'fizzBuzz(5) → ["1","2","Fizz","4","Buzz"]',
        call: 'JSON.stringify(fizzBuzz(5))',
        expected: '["1","2","Fizz","4","Buzz"]',
      },
      {
        description: 'fizzBuzz(15) — последний элемент "FizzBuzz"',
        call: 'fizzBuzz(15)[14]',
        expected: 'FizzBuzz',
      },
      {
        description: 'fizzBuzz(1) → ["1"]',
        call: 'JSON.stringify(fizzBuzz(1))',
        expected: '["1"]',
      },
    ],
  },
  {
    id: 'palindrome',
    title: 'Палиндром',
    difficulty: 'beginner',
    tags: ['Строки'],
    description:
      'Напиши функцию `isPalindrome(str)`, которая возвращает `true`, если строка читается одинаково слева направо и справа налево.\n\nРегистр не учитывается, пробелы и знаки препинания игнорируются.\n\nПример: `isPalindrome("A man a plan a canal Panama")` → `true`',
    initialCode: `function isPalindrome(str) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"racecar" → true',
        call: 'isPalindrome("racecar")',
        expected: 'true',
      },
      {
        description: '"A man a plan a canal Panama" → true',
        call: 'isPalindrome("A man a plan a canal Panama")',
        expected: 'true',
      },
      {
        description: '"hello" → false',
        call: 'isPalindrome("hello")',
        expected: 'false',
      },
    ],
  },
  {
    id: 'reverse-words',
    title: 'Перевернуть слова',
    difficulty: 'beginner',
    tags: ['Строки', 'Массивы'],
    description:
      'Напиши функцию `reverseWords(str)`, которая переворачивает порядок слов в предложении.\n\nПример: `reverseWords("Hello World")` → `"World Hello"`',
    initialCode: `function reverseWords(str) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"Hello World" → "World Hello"',
        call: 'reverseWords("Hello World")',
        expected: 'World Hello',
      },
      {
        description: '"one two three" → "three two one"',
        call: 'reverseWords("one two three")',
        expected: 'three two one',
      },
      {
        description: '"single" → "single"',
        call: 'reverseWords("single")',
        expected: 'single',
      },
    ],
  },
  {
    id: 'count-vowels',
    title: 'Подсчёт гласных',
    difficulty: 'beginner',
    tags: ['Строки', 'Регулярные выражения'],
    description:
      'Напиши функцию `countVowels(str)`, которая возвращает количество гласных букв (a, e, i, o, u) в строке. Регистр не важен.\n\nПример: `countVowels("Hello World")` → `3`',
    initialCode: `function countVowels(str) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"Hello World" → 3',
        call: 'countVowels("Hello World")',
        expected: '3',
      },
      {
        description: '"aeiou" → 5',
        call: 'countVowels("aeiou")',
        expected: '5',
      },
      {
        description: '"rhythm" → 0',
        call: 'countVowels("rhythm")',
        expected: '0',
      },
    ],
  },
  {
    id: 'flatten',
    title: 'Flatten Array',
    difficulty: 'beginner',
    tags: ['Массивы', 'Рекурсия'],
    description:
      'Напиши функцию `flatten(arr)`, которая принимает вложенный массив любой глубины и возвращает плоский массив.\n\nПример: `flatten([1, [2, [3, [4]]]])` → `[1, 2, 3, 4]`',
    initialCode: `function flatten(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'flatten([1, [2, 3]]) → [1, 2, 3]',
        call: 'JSON.stringify(flatten([1, [2, 3]]))',
        expected: '[1,2,3]',
      },
      {
        description: 'flatten([1, [2, [3, [4]]]]) → [1, 2, 3, 4]',
        call: 'JSON.stringify(flatten([1, [2, [3, [4]]]]))',
        expected: '[1,2,3,4]',
      },
      {
        description: 'flatten([]) → []',
        call: 'JSON.stringify(flatten([]))',
        expected: '[]',
      },
    ],
  },
  {
    id: 'unique',
    title: 'Уникальные элементы',
    difficulty: 'beginner',
    tags: ['Массивы', 'Set'],
    description:
      'Напиши функцию `unique(arr)`, которая возвращает массив без дубликатов, сохраняя порядок первого появления.\n\nПример: `unique([1, 2, 1, 3, 2])` → `[1, 2, 3]`',
    initialCode: `function unique(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'unique([1,2,1,3,2]) → [1,2,3]',
        call: 'JSON.stringify(unique([1, 2, 1, 3, 2]))',
        expected: '[1,2,3]',
      },
      {
        description: 'unique(["a","b","a"]) → ["a","b"]',
        call: 'JSON.stringify(unique(["a","b","a"]))',
        expected: '["a","b"]',
      },
      {
        description: 'unique([]) → []',
        call: 'JSON.stringify(unique([]))',
        expected: '[]',
      },
    ],
  },
  {
    id: 'sum-array',
    title: 'Сумма массива',
    difficulty: 'beginner',
    tags: ['Массивы', 'reduce'],
    description:
      'Напиши функцию `sum(arr)`, которая возвращает сумму всех чисел в массиве.\n\nНельзя использовать встроенный метод `reduce` — реализуй логику вручную.\n\nПример: `sum([1, 2, 3, 4])` → `10`',
    initialCode: `function sum(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'sum([1,2,3,4]) → 10',
        call: 'sum([1, 2, 3, 4])',
        expected: '10',
      },
      {
        description: 'sum([]) → 0',
        call: 'sum([])',
        expected: '0',
      },
      {
        description: 'sum([-1, -2, 3]) → 0',
        call: 'sum([-1, -2, 3])',
        expected: '0',
      },
    ],
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'beginner',
    tags: ['Массивы', 'Map', 'Алгоритмы'],
    description:
      'Напиши функцию `twoSum(nums, target)`, которая возвращает индексы двух чисел, сумма которых равна `target`.\n\nГарантируется ровно одно решение. Нельзя использовать один элемент дважды.\n\nПример: `twoSum([2, 7, 11, 15], 9)` → `[0, 1]`',
    hint: 'Используй Map для хранения уже просмотренных чисел. O(n) решение лучше O(n²).',
    initialCode: `function twoSum(nums, target) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'twoSum([2,7,11,15], 9) → [0,1]',
        call: 'JSON.stringify(twoSum([2, 7, 11, 15], 9))',
        expected: '[0,1]',
      },
      {
        description: 'twoSum([3,2,4], 6) → [1,2]',
        call: 'JSON.stringify(twoSum([3, 2, 4], 6))',
        expected: '[1,2]',
      },
      {
        description: 'twoSum([3,3], 6) → [0,1]',
        call: 'JSON.stringify(twoSum([3, 3], 6))',
        expected: '[0,1]',
      },
    ],
  },
  {
    id: 'chunk-array',
    title: 'Chunk Array',
    difficulty: 'beginner',
    tags: ['Массивы'],
    description:
      'Напиши функцию `chunk(arr, size)`, которая разбивает массив на подмассивы заданного размера.\n\nПример: `chunk([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`',
    initialCode: `function chunk(arr, size) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]',
        call: 'JSON.stringify(chunk([1,2,3,4,5], 2))',
        expected: '[[1,2],[3,4],[5]]',
      },
      {
        description: 'chunk([1,2,3], 3) → [[1,2,3]]',
        call: 'JSON.stringify(chunk([1,2,3], 3))',
        expected: '[[1,2,3]]',
      },
      {
        description: 'chunk([], 2) → []',
        call: 'JSON.stringify(chunk([], 2))',
        expected: '[]',
      },
    ],
  },
  {
    id: 'capitalize',
    title: 'Capitalize Words',
    difficulty: 'beginner',
    tags: ['Строки'],
    description:
      'Напиши функцию `capitalize(str)`, которая делает первую букву каждого слова заглавной, остальные — строчными.\n\nПример: `capitalize("hello world")` → `"Hello World"`',
    initialCode: `function capitalize(str) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"hello world" → "Hello World"',
        call: 'capitalize("hello world")',
        expected: 'Hello World',
      },
      {
        description: '"the QUICK brown FOX" → "The Quick Brown Fox"',
        call: 'capitalize("the QUICK brown FOX")',
        expected: 'The Quick Brown Fox',
      },
      {
        description: '"a" → "A"',
        call: 'capitalize("a")',
        expected: 'A',
      },
    ],
  },
  {
    id: 'range',
    title: 'Range',
    difficulty: 'beginner',
    tags: ['Массивы'],
    description:
      'Напиши функцию `range(start, end, step = 1)`, которая возвращает массив чисел от `start` до `end` (не включая) с шагом `step`.\n\nПример: `range(0, 10, 2)` → `[0, 2, 4, 6, 8]`',
    initialCode: `function range(start, end, step = 1) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'range(0, 5) → [0,1,2,3,4]',
        call: 'JSON.stringify(range(0, 5))',
        expected: '[0,1,2,3,4]',
      },
      {
        description: 'range(0, 10, 2) → [0,2,4,6,8]',
        call: 'JSON.stringify(range(0, 10, 2))',
        expected: '[0,2,4,6,8]',
      },
      {
        description: 'range(1, 1) → []',
        call: 'JSON.stringify(range(1, 1))',
        expected: '[]',
      },
    ],
  },
  {
    id: 'find-duplicates',
    title: 'Найти дубликаты',
    difficulty: 'beginner',
    tags: ['Массивы', 'Set'],
    description:
      'Напиши функцию `findDuplicates(arr)`, которая возвращает массив элементов, встречающихся в исходном массиве более одного раза. Порядок не важен, каждый дубликат включается один раз.\n\nПример: `findDuplicates([1,2,3,2,4,3])` → `[2, 3]`',
    initialCode: `function findDuplicates(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[1,2,3,2,4,3] → [2,3]',
        call: 'JSON.stringify(findDuplicates([1,2,3,2,4,3]).sort((a,b)=>a-b))',
        expected: '[2,3]',
      },
      {
        description: '[1,2,3] → []',
        call: 'JSON.stringify(findDuplicates([1,2,3]))',
        expected: '[]',
      },
      {
        description: '[1,1,1] → [1]',
        call: 'JSON.stringify(findDuplicates([1,1,1]))',
        expected: '[1]',
      },
    ],
  },
  {
    id: 'count-occurrences',
    title: 'Подсчёт вхождений',
    difficulty: 'beginner',
    tags: ['Массивы'],
    description:
      'Напиши функцию `countOccurrences(arr, val)`, которая возвращает количество раз, которое `val` встречается в `arr`.\n\nПример: `countOccurrences([1,1,2,1,3], 1)` → `3`',
    initialCode: `function countOccurrences(arr, val) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'countOccurrences([1,1,2,1,3], 1) → 3',
        call: 'countOccurrences([1,1,2,1,3], 1)',
        expected: '3',
      },
      {
        description: 'countOccurrences(["a","b","a"], "a") → 2',
        call: 'countOccurrences(["a","b","a"], "a")',
        expected: '2',
      },
      {
        description: 'countOccurrences([1,2,3], 5) → 0',
        call: 'countOccurrences([1,2,3], 5)',
        expected: '0',
      },
    ],
  },
  {
    id: 'binary-search',
    title: 'Бинарный поиск',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Массивы'],
    description:
      'Напиши функцию `binarySearch(arr, target)`, которая ищет `target` в отсортированном массиве и возвращает его индекс. Если не найден — возвращает `-1`.\n\nСложность должна быть O(log n).',
    initialCode: `function binarySearch(arr, target) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'binarySearch([1,3,5,7,9], 5) → 2',
        call: 'binarySearch([1,3,5,7,9], 5)',
        expected: '2',
      },
      {
        description: 'binarySearch([1,3,5,7,9], 4) → -1',
        call: 'binarySearch([1,3,5,7,9], 4)',
        expected: '-1',
      },
      {
        description: 'binarySearch([1], 1) → 0',
        call: 'binarySearch([1], 1)',
        expected: '0',
      },
    ],
  },

  // ─── INTERMEDIATE ─────────────────────────────────────────────────────────────
  {
    id: 'groupby',
    title: 'GroupBy',
    difficulty: 'intermediate',
    tags: ['Массивы', 'Объекты', 'reduce'],
    description:
      'Напиши функцию `groupBy(arr, fn)`, которая группирует элементы массива по ключу, возвращаемому функцией `fn`.\n\nПример:\n```\ngroupBy([1.2, 1.8, 2.1], Math.floor)\n// → { 1: [1.2, 1.8], 2: [2.1] }\n```',
    initialCode: `function groupBy(arr, fn) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'groupBy по Math.floor',
        call: 'JSON.stringify(groupBy([1.2, 1.8, 2.1], Math.floor))',
        expected: '{"1":[1.2,1.8],"2":[2.1]}',
      },
      {
        description: 'groupBy по длине строки',
        call: 'JSON.stringify(groupBy(["one","two","three"], s => s.length))',
        expected: '{"3":["one","two"],"5":["three"]}',
      },
    ],
  },
  {
    id: 'debounce',
    title: 'Debounce',
    difficulty: 'intermediate',
    tags: ['Замыкания', 'Таймеры', 'Паттерны'],
    description:
      'Реализуй функцию `debounce(fn, delay)`. Она возвращает обёртку над `fn`, которая вызывает `fn` только спустя `delay` мс после последнего вызова обёртки.\n\nИспользуется для отложенной реакции на частые события (поиск, resize).',
    hint: 'Используй setTimeout и clearTimeout. При каждом вызове обёртки сбрасывай предыдущий таймер.',
    initialCode: `function debounce(fn, delay) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Функция вызывается только один раз после серии вызовов',
        call: `(() => {
  let count = 0;
  const inc = debounce(() => count++, 50);
  inc(); inc(); inc();
  return new Promise(resolve => setTimeout(() => resolve(count), 100));
})()`,
        expected: '1',
      },
      {
        description: 'Возвращает функцию',
        call: 'typeof debounce(() => {}, 100)',
        expected: 'function',
      },
    ],
  },
  {
    id: 'throttle',
    title: 'Throttle',
    difficulty: 'intermediate',
    tags: ['Замыкания', 'Таймеры', 'Паттерны'],
    description:
      'Реализуй функцию `throttle(fn, limit)`. Она возвращает обёртку, которая вызывает `fn` не чаще одного раза за `limit` мс, игнорируя промежуточные вызовы.\n\nОтличие от debounce: throttle гарантирует вызов сразу при первом нажатии.',
    hint: 'Используй флаг `inThrottle`. Сбрасывай его через setTimeout.',
    initialCode: `function throttle(fn, limit) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Возвращает функцию',
        call: 'typeof throttle(() => {}, 100)',
        expected: 'function',
      },
      {
        description: 'Первый вызов выполняется немедленно',
        call: `(() => {
  let count = 0;
  const inc = throttle(() => count++, 100);
  inc();
  return count;
})()`,
        expected: '1',
      },
      {
        description: 'Повторные вызовы в пределах limit игнорируются',
        call: `(() => {
  let count = 0;
  const inc = throttle(() => count++, 200);
  inc(); inc(); inc();
  return count;
})()`,
        expected: '1',
      },
    ],
  },
  {
    id: 'memoize',
    title: 'Memoize',
    difficulty: 'intermediate',
    tags: ['Замыкания', 'Кэширование', 'Map'],
    description:
      'Реализуй функцию `memoize(fn)`, которая кэширует результаты вызовов `fn` по аргументам. При повторном вызове с теми же аргументами возвращает кэшированный результат без вызова `fn`.\n\nПример:\n```\nconst slow = memoize(n => n * 2);\nslow(5); // вычисляет\nslow(5); // из кэша\n```',
    initialCode: `function memoize(fn) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Возвращает правильный результат',
        call: 'memoize(x => x * 2)(5)',
        expected: '10',
      },
      {
        description: 'Не вызывает fn повторно',
        call: `(() => {
  let calls = 0;
  const fn = memoize(x => { calls++; return x * 3; });
  fn(4); fn(4); fn(4);
  return calls;
})()`,
        expected: '1',
      },
      {
        description: 'Разные аргументы — разные результаты',
        call: `(() => {
  const fn = memoize(x => x + 10);
  return fn(1) + ',' + fn(2);
})()`,
        expected: '11,12',
      },
    ],
  },
  {
    id: 'once',
    title: 'Once',
    difficulty: 'beginner',
    tags: ['Замыкания', 'Паттерны'],
    description:
      'Напиши функцию `once(fn)`, которая возвращает обёртку над `fn`. Обёртка вызывает `fn` только при первом вызове, при последующих вызовах возвращает результат первого вызова.\n\nПример:\n```\nconst init = once(() => 42);\ninit(); // 42\ninit(); // 42 (fn больше не вызывается)\n```',
    initialCode: `function once(fn) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Первый вызов выполняет fn',
        call: 'once(() => 99)()',
        expected: '99',
      },
      {
        description: 'fn вызывается ровно один раз',
        call: `(() => {
  let calls = 0;
  const fn = once(() => ++calls);
  fn(); fn(); fn();
  return calls;
})()`,
        expected: '1',
      },
      {
        description: 'Последующие вызовы возвращают результат первого',
        call: `(() => {
  const fn = once(() => 7);
  fn();
  return fn();
})()`,
        expected: '7',
      },
    ],
  },
  {
    id: 'curry',
    title: 'Curry',
    difficulty: 'intermediate',
    tags: ['Замыкания', 'Функциональное программирование'],
    description:
      'Реализуй функцию `curry(fn)`, которая преобразует функцию с несколькими аргументами в цепочку функций с одним аргументом.\n\nПример:\n```\nconst add = curry((a, b, c) => a + b + c);\nadd(1)(2)(3); // 6\nadd(1, 2)(3); // тоже 6\n```',
    hint: 'Сравнивай количество переданных аргументов с fn.length. Если достаточно — вызывай fn, иначе возвращай функцию, ожидающую остальные.',
    initialCode: `function curry(fn) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'curry((a,b,c) => a+b+c)(1)(2)(3) === 6',
        call: 'curry((a,b,c) => a+b+c)(1)(2)(3)',
        expected: '6',
      },
      {
        description: 'Смешанные вызовы: curry(fn)(1,2)(3)',
        call: 'curry((a,b,c) => a*b+c)(2,3)(4)',
        expected: '10',
      },
      {
        description: 'Вызов сразу со всеми аргументами',
        call: 'curry((a,b) => a-b)(10,3)',
        expected: '7',
      },
    ],
  },
  {
    id: 'deep-clone',
    title: 'Deep Clone',
    difficulty: 'intermediate',
    tags: ['Объекты', 'Рекурсия'],
    description:
      'Напиши функцию `deepClone(obj)`, которая создаёт глубокую копию объекта или массива. Изменения в копии не должны влиять на оригинал.\n\nПодсказка: поддержи объекты, массивы и примитивы. Циклические ссылки можно не обрабатывать.',
    initialCode: `function deepClone(obj) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Изменение клона не меняет оригинал',
        call: `(() => {
  const orig = { a: { b: 1 } };
  const clone = deepClone(orig);
  clone.a.b = 99;
  return orig.a.b;
})()`,
        expected: '1',
      },
      {
        description: 'Массивы клонируются глубоко',
        call: `(() => {
  const orig = [1, [2, 3]];
  const clone = deepClone(orig);
  clone[1][0] = 99;
  return orig[1][0];
})()`,
        expected: '2',
      },
      {
        description: 'Примитивы возвращаются как есть',
        call: 'deepClone(42)',
        expected: '42',
      },
    ],
  },
  {
    id: 'deep-equal',
    title: 'Deep Equal',
    difficulty: 'intermediate',
    tags: ['Объекты', 'Рекурсия'],
    description:
      'Напиши функцию `deepEqual(a, b)`, которая глубоко сравнивает два значения и возвращает `true`, если они структурно одинаковы.\n\nПример:\n```\ndeepEqual({a: {b: 1}}, {a: {b: 1}}) // true\ndeepEqual({a: 1}, {a: 2})            // false\n```',
    initialCode: `function deepEqual(a, b) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Одинаковые вложенные объекты → true',
        call: 'deepEqual({a: {b: 1}}, {a: {b: 1}})',
        expected: 'true',
      },
      {
        description: 'Разные значения → false',
        call: 'deepEqual({a: 1}, {a: 2})',
        expected: 'false',
      },
      {
        description: 'Вложенные массивы',
        call: 'deepEqual([1,[2,3]], [1,[2,3]])',
        expected: 'true',
      },
      {
        description: 'Разные типы → false',
        call: 'deepEqual(null, undefined)',
        expected: 'false',
      },
    ],
  },
  {
    id: 'intersection',
    title: 'Пересечение массивов',
    difficulty: 'intermediate',
    tags: ['Массивы', 'Set'],
    description:
      'Напиши функцию `intersection(arr1, arr2)`, которая возвращает массив элементов, присутствующих в обоих массивах. Дубликаты не учитываются.\n\nПример: `intersection([1,2,3], [2,3,4])` → `[2, 3]`',
    initialCode: `function intersection(arr1, arr2) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'intersection([1,2,3], [2,3,4]) → [2,3]',
        call: 'JSON.stringify(intersection([1,2,3], [2,3,4]))',
        expected: '[2,3]',
      },
      {
        description: 'Нет общих элементов → []',
        call: 'JSON.stringify(intersection([1,2], [3,4]))',
        expected: '[]',
      },
      {
        description: 'Все общие',
        call: 'JSON.stringify(intersection([1,2,3], [1,2,3]))',
        expected: '[1,2,3]',
      },
    ],
  },
  {
    id: 'zip',
    title: 'Zip Arrays',
    difficulty: 'intermediate',
    tags: ['Массивы', 'Функциональное программирование'],
    description:
      'Напиши функцию `zip(...arrays)`, которая объединяет несколько массивов в один массив кортежей (по индексу).\n\nПример:\n```\nzip([1,2,3], ["a","b","c"]) → [[1,"a"],[2,"b"],[3,"c"]]\n```\nДлина результата определяется самым коротким массивом.',
    initialCode: `function zip(...arrays) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'zip([1,2], ["a","b"]) → [[1,"a"],[2,"b"]]',
        call: 'JSON.stringify(zip([1,2], ["a","b"]))',
        expected: '[[1,"a"],[2,"b"]]',
      },
      {
        description: 'zip([1,2,3], [4,5]) → [[1,4],[2,5]] (длина по короткому)',
        call: 'JSON.stringify(zip([1,2,3], [4,5]))',
        expected: '[[1,4],[2,5]]',
      },
      {
        description: 'zip трёх массивов',
        call: 'JSON.stringify(zip([1,2], ["a","b"], [true,false]))',
        expected: '[[1,"a",true],[2,"b",false]]',
      },
    ],
  },
  {
    id: 'to-camel-case',
    title: 'toCamelCase',
    difficulty: 'intermediate',
    tags: ['Строки', 'Регулярные выражения'],
    description:
      'Напиши функцию `toCamelCase(str)`, которая преобразует строку в `snake_case` или `kebab-case` в `camelCase`.\n\nПример:\n```\ntoCamelCase("hello_world") → "helloWorld"\ntoCamelCase("some-long-string") → "someLongString"\n```',
    initialCode: `function toCamelCase(str) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"hello_world" → "helloWorld"',
        call: 'toCamelCase("hello_world")',
        expected: 'helloWorld',
      },
      {
        description: '"some-long-string" → "someLongString"',
        call: 'toCamelCase("some-long-string")',
        expected: 'someLongString',
      },
      {
        description: '"already" → "already"',
        call: 'toCamelCase("already")',
        expected: 'already',
      },
    ],
  },
  {
    id: 'clamp',
    title: 'Clamp',
    difficulty: 'beginner',
    tags: ['Математика'],
    description:
      'Напиши функцию `clamp(num, min, max)`, которая ограничивает число `num` диапазоном `[min, max]`.\n\n- Если `num < min` — вернуть `min`\n- Если `num > max` — вернуть `max`\n- Иначе — вернуть `num`',
    initialCode: `function clamp(num, min, max) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'clamp(5, 1, 10) → 5',
        call: 'clamp(5, 1, 10)',
        expected: '5',
      },
      {
        description: 'clamp(-5, 0, 10) → 0',
        call: 'clamp(-5, 0, 10)',
        expected: '0',
      },
      {
        description: 'clamp(15, 0, 10) → 10',
        call: 'clamp(15, 0, 10)',
        expected: '10',
      },
    ],
  },
  {
    id: 'omit',
    title: 'Omit',
    difficulty: 'intermediate',
    tags: ['Объекты'],
    description:
      'Напиши функцию `omit(obj, keys)`, которая возвращает новый объект без указанных ключей.\n\nПример:\n```\nomit({a:1, b:2, c:3}, ["a","c"]) → {b: 2}\n```',
    initialCode: `function omit(obj, keys) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'omit({a:1,b:2,c:3}, ["a","c"]) → {b:2}',
        call: 'JSON.stringify(omit({a:1,b:2,c:3}, ["a","c"]))',
        expected: '{"b":2}',
      },
      {
        description: 'omit({a:1}, []) → {a:1}',
        call: 'JSON.stringify(omit({a:1}, []))',
        expected: '{"a":1}',
      },
      {
        description: 'omit({a:1,b:2}, ["a","b"]) → {}',
        call: 'JSON.stringify(omit({a:1,b:2}, ["a","b"]))',
        expected: '{}',
      },
    ],
  },
  {
    id: 'pick',
    title: 'Pick',
    difficulty: 'intermediate',
    tags: ['Объекты'],
    description:
      'Напиши функцию `pick(obj, keys)`, которая возвращает новый объект только с указанными ключами.\n\nПример:\n```\npick({a:1, b:2, c:3}, ["a","c"]) → {a:1, c:3}\n```',
    initialCode: `function pick(obj, keys) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'pick({a:1,b:2,c:3}, ["a","c"]) → {a:1,c:3}',
        call: 'JSON.stringify(pick({a:1,b:2,c:3}, ["a","c"]))',
        expected: '{"a":1,"c":3}',
      },
      {
        description: 'pick({a:1,b:2}, []) → {}',
        call: 'JSON.stringify(pick({a:1,b:2}, []))',
        expected: '{}',
      },
      {
        description: 'Несуществующие ключи игнорируются',
        call: 'JSON.stringify(pick({a:1}, ["a","z"]))',
        expected: '{"a":1}',
      },
    ],
  },
  {
    id: 'count-by',
    title: 'CountBy',
    difficulty: 'intermediate',
    tags: ['Массивы', 'Объекты'],
    description:
      'Напиши функцию `countBy(arr, fn)`, которая возвращает объект с количеством элементов, сгруппированных по ключу из функции `fn`.\n\nПример:\n```\ncountBy([1.1, 1.5, 2.7, 2.3], Math.floor)\n// → { "1": 2, "2": 2 }\n```',
    initialCode: `function countBy(arr, fn) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'countBy по Math.floor',
        call: 'JSON.stringify(countBy([1.1, 1.5, 2.7, 2.3], Math.floor))',
        expected: '{"1":2,"2":2}',
      },
      {
        description: 'countBy по чётности',
        call: 'JSON.stringify(countBy([1,2,3,4,5], n => n % 2 === 0 ? "even" : "odd"))',
        expected: '{"odd":3,"even":2}',
      },
    ],
  },
  {
    id: 'flatten-object',
    title: 'Flatten Object',
    difficulty: 'intermediate',
    tags: ['Объекты', 'Рекурсия'],
    description:
      'Напиши функцию `flattenObject(obj, prefix = "")`, которая преобразует вложенный объект в плоский, используя точку как разделитель ключей.\n\nПример:\n```\nflattenObject({a: {b: {c: 1}}, d: 2})\n// → {"a.b.c": 1, "d": 2}\n```',
    initialCode: `function flattenObject(obj, prefix = "") {
  // твой код здесь
}`,
    testCases: [
      {
        description: '{a:{b:1},c:2} → {"a.b":1,"c":2}',
        call: 'JSON.stringify(flattenObject({a:{b:1},c:2}))',
        expected: '{"a.b":1,"c":2}',
      },
      {
        description: '{a:{b:{c:1}}} → {"a.b.c":1}',
        call: 'JSON.stringify(flattenObject({a:{b:{c:1}}}))',
        expected: '{"a.b.c":1}',
      },
      {
        description: '{a:1} → {"a":1}',
        call: 'JSON.stringify(flattenObject({a:1}))',
        expected: '{"a":1}',
      },
    ],
  },
  {
    id: 'shuffle',
    title: 'Fisher-Yates Shuffle',
    difficulty: 'intermediate',
    tags: ['Массивы', 'Алгоритмы'],
    description:
      'Реализуй функцию `shuffleArray(arr)`, которая перемешивает массив **на месте** (мутирует) по алгоритму Фишера-Йейтса и возвращает его.\n\nАлгоритм: идём с конца, для каждого элемента выбираем случайный элемент среди оставшихся и меняем местами.',
    hint: 'for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); ... }',
    initialCode: `function shuffleArray(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Возвращает массив той же длины',
        call: 'shuffleArray([1,2,3,4,5]).length',
        expected: '5',
      },
      {
        description: 'Содержит те же элементы (отсортированные)',
        call: 'JSON.stringify(shuffleArray([3,1,2]).sort((a,b)=>a-b))',
        expected: '[1,2,3]',
      },
      {
        description: 'Возвращает тот же массив (мутирует)',
        call: `(() => { const a = [1,2,3]; return shuffleArray(a) === a; })()`,
        expected: 'true',
      },
    ],
  },

  // ─── INTERMEDIATE / ADVANCED ─────────────────────────────────────────────────
  {
    id: 'pipe',
    title: 'Pipe / Compose',
    difficulty: 'intermediate',
    tags: ['Функциональное программирование', 'Массивы'],
    description:
      'Напиши функцию `pipe(...fns)`, которая принимает набор функций и возвращает новую функцию. Новая функция последовательно применяет каждую из `fns` слева направо, передавая результат следующей.\n\nПример:\n```\nconst process = pipe(x => x + 1, x => x * 2, x => x - 3);\nprocess(5); // (5+1)*2-3 = 9\n```',
    initialCode: `function pipe(...fns) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'pipe(x=>x+1, x=>x*2)(5) === 12',
        call: 'pipe(x => x + 1, x => x * 2)(5)',
        expected: '12',
      },
      {
        description: 'pipe(x=>x-3, x=>x*2, x=>x+1)(10) === 15',
        call: 'pipe(x => x - 3, x => x * 2, x => x + 1)(10)',
        expected: '15',
      },
      {
        description: 'pipe с одной функцией',
        call: 'pipe(x => x * 10)(7)',
        expected: '70',
      },
    ],
  },
  {
    id: 'event-emitter',
    title: 'EventEmitter',
    difficulty: 'intermediate',
    tags: ['Классы', 'Паттерны', 'Map'],
    description:
      'Реализуй класс `EventEmitter` с методами:\n\n- `on(event, listener)` — подписаться на событие\n- `off(event, listener)` — отписаться\n- `emit(event, ...args)` — вызвать всех подписчиков\n- `once(event, listener)` — подписаться один раз',
    initialCode: `class EventEmitter {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'on / emit вызывает слушателя',
        call: `(() => {
  const ee = new EventEmitter();
  let result = 0;
  ee.on('add', n => result += n);
  ee.emit('add', 5);
  ee.emit('add', 3);
  return result;
})()`,
        expected: '8',
      },
      {
        description: 'off отписывает слушателя',
        call: `(() => {
  const ee = new EventEmitter();
  let count = 0;
  const fn = () => count++;
  ee.on('x', fn);
  ee.emit('x');
  ee.off('x', fn);
  ee.emit('x');
  return count;
})()`,
        expected: '1',
      },
      {
        description: 'once вызывается только один раз',
        call: `(() => {
  const ee = new EventEmitter();
  let count = 0;
  ee.once('x', () => count++);
  ee.emit('x');
  ee.emit('x');
  return count;
})()`,
        expected: '1',
      },
    ],
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    difficulty: 'advanced',
    tags: ['Классы', 'Map', 'Алгоритмы'],
    description:
      'Реализуй класс `LRUCache(capacity)`:\n\n- `get(key)` — возвращает значение или `-1` если нет\n- `put(key, value)` — добавляет/обновляет. Если кэш полон — удаляет **наименее недавно использованный** элемент\n\nОба метода должны работать за O(1).',
    hint: 'Используй Map — он сохраняет порядок вставки. При обращении к элементу — удали и вставь снова (переместится в конец).',
    initialCode: `class LRUCache {
  constructor(capacity) {
    // твой код здесь
  }

  get(key) {
    // твой код здесь
  }

  put(key, value) {
    // твой код здесь
  }
}`,
    testCases: [
      {
        description: 'get несуществующего ключа → -1',
        call: 'new LRUCache(2).get(1)',
        expected: '-1',
      },
      {
        description: 'put и get работают',
        call: `(() => {
  const cache = new LRUCache(2);
  cache.put(1, 10);
  return cache.get(1);
})()`,
        expected: '10',
      },
      {
        description: 'Вытесняет LRU элемент при переполнении',
        call: `(() => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1);
  cache.put(3, 3);
  return cache.get(2);
})()`,
        expected: '-1',
      },
    ],
  },

  // ─── ADVANCED ─────────────────────────────────────────────────────────────────
  {
    id: 'promise-all',
    title: 'Реализуй Promise.all',
    difficulty: 'advanced',
    tags: ['Promise', 'Асинхронность'],
    description:
      'Реализуй функцию `promiseAll(promises)`, которая ведёт себя как `Promise.all`:\n\n- Разрешается массивом результатов, когда **все** промисы выполнены\n- Отклоняется сразу, если **хотя бы один** промис отклонён\n- Порядок результатов соответствует порядку промисов',
    initialCode: `function promiseAll(promises) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Разрешается массивом значений',
        call: 'promiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])',
        expected: '[1,2,3]',
      },
      {
        description: 'Отклоняется при первой ошибке',
        call: `promiseAll([Promise.resolve(1), Promise.reject(new Error("fail")), Promise.resolve(3)])
  .then(() => "resolved")
  .catch(e => "rejected: " + e.message)`,
        expected: 'rejected: fail',
      },
      {
        description: 'Пустой массив → []',
        call: 'promiseAll([])',
        expected: '[]',
      },
    ],
  },
  {
    id: 'promise-all-settled',
    title: 'Реализуй Promise.allSettled',
    difficulty: 'advanced',
    tags: ['Promise', 'Асинхронность'],
    description:
      'Реализуй функцию `promiseAllSettled(promises)`, аналог `Promise.allSettled`:\n\nДожидается **всех** промисов и возвращает массив объектов:\n- `{ status: "fulfilled", value }` — для выполненных\n- `{ status: "rejected", reason }` — для отклонённых\n\nНикогда не отклоняется сам.',
    initialCode: `function promiseAllSettled(promises) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Возвращает fulfilled для resolved',
        call: `promiseAllSettled([Promise.resolve(42)])
  .then(r => r[0].status + ':' + r[0].value)`,
        expected: 'fulfilled:42',
      },
      {
        description: 'Возвращает rejected для rejected',
        call: `promiseAllSettled([Promise.reject(new Error("oops"))])
  .then(r => r[0].status + ':' + r[0].reason.message)`,
        expected: 'rejected:oops',
      },
      {
        description: 'Смешанный массив — оба статуса',
        call: `promiseAllSettled([Promise.resolve(1), Promise.reject(new Error("x"))])
  .then(r => r.map(x => x.status).join(','))`,
        expected: 'fulfilled,rejected',
      },
    ],
  },
  {
    id: 'promise-race',
    title: 'Реализуй Promise.race',
    difficulty: 'advanced',
    tags: ['Promise', 'Асинхронность'],
    description:
      'Реализуй функцию `promiseRace(promises)`, аналог `Promise.race`:\n\nВозвращает промис, который разрешается или отклоняется вместе с **первым** завершившимся промисом из массива.',
    initialCode: `function promiseRace(promises) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Побеждает первый resolved',
        call: `promiseRace([
  new Promise(r => setTimeout(() => r("slow"), 100)),
  Promise.resolve("fast")
])`,
        expected: 'fast',
      },
      {
        description: 'Побеждает первый rejected',
        call: `promiseRace([
  Promise.reject(new Error("first")),
  Promise.resolve("second")
]).catch(e => "caught: " + e.message)`,
        expected: 'caught: first',
      },
    ],
  },
  {
    id: 'implement-map',
    title: 'Реализуй Array.map',
    difficulty: 'advanced',
    tags: ['Массивы', 'Прототипы'],
    description:
      'Реализуй собственный метод `myMap(arr, fn)`, который работает как `Array.prototype.map`.\n\nНельзя использовать встроенный `.map()`. Метод должен возвращать новый массив, не мутируя исходный.',
    initialCode: `function myMap(arr, fn) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'myMap([1,2,3], x => x*2) → [2,4,6]',
        call: 'JSON.stringify(myMap([1,2,3], x => x*2))',
        expected: '[2,4,6]',
      },
      {
        description: 'Передаёт индекс в callback',
        call: 'JSON.stringify(myMap(["a","b"], (v,i) => i+":"+v))',
        expected: '["0:a","1:b"]',
      },
      {
        description: 'Не мутирует исходный массив',
        call: `(() => { const a = [1,2,3]; myMap(a, x=>x*2); return JSON.stringify(a); })()`,
        expected: '[1,2,3]',
      },
    ],
  },
  {
    id: 'implement-reduce',
    title: 'Реализуй Array.reduce',
    difficulty: 'advanced',
    tags: ['Массивы', 'Прототипы'],
    description:
      'Реализуй `myReduce(arr, fn, initialValue)`, который работает как `Array.prototype.reduce`.\n\nНельзя использовать встроенный `.reduce()`. Если `initialValue` не передан — использует первый элемент как аккумулятор.',
    initialCode: `function myReduce(arr, fn, initialValue) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Сумма с начальным значением',
        call: 'myReduce([1,2,3,4], (acc, v) => acc + v, 0)',
        expected: '10',
      },
      {
        description: 'Без начального значения',
        call: 'myReduce([1,2,3], (acc, v) => acc + v)',
        expected: '6',
      },
      {
        description: 'Построение объекта',
        call: 'JSON.stringify(myReduce(["a","b","c"], (acc, v, i) => ({...acc, [v]: i}), {}))',
        expected: '{"a":0,"b":1,"c":2}',
      },
    ],
  },
  {
    id: 'retry',
    title: 'Retry',
    difficulty: 'advanced',
    tags: ['Promise', 'Асинхронность', 'Рекурсия'],
    description:
      'Реализуй функцию `retry(fn, retries)`, которая вызывает асинхронную функцию `fn` и повторяет вызов до `retries` раз при ошибке.\n\nЕсли все попытки исчерпаны — отклоняет промис с последней ошибкой.\n\nПример:\n```\nawait retry(() => fetch("/api"), 3);\n```',
    hint: 'Рекурсия: если fn() отклонился и retries > 0, вызови retry(fn, retries - 1).',
    initialCode: `function retry(fn, retries) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Успешный вызов с первой попытки',
        call: 'retry(() => Promise.resolve(42), 3)',
        expected: '42',
      },
      {
        description: 'Повторяет при ошибке и успевает',
        call: `(() => {
  let attempts = 0;
  return retry(() => {
    attempts++;
    if (attempts < 3) return Promise.reject(new Error("fail"));
    return Promise.resolve(attempts);
  }, 5);
})()`,
        expected: '3',
      },
      {
        description: 'Отклоняет после всех попыток',
        call: `retry(() => Promise.reject(new Error("always fails")), 2)
  .catch(e => e.message)`,
        expected: 'always fails',
      },
    ],
  },
];
