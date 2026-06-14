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

  // ─── АЛГОРИТМЫ (Яндекс-стиль) ────────────────────────────────────────────────
  {
    id: 'bubble-sort',
    title: 'Сортировка пузырьком',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Сортировка'],
    description:
      'Реализуй функцию `bubbleSort(arr)`, которая сортирует массив чисел по возрастанию методом пузырьковой сортировки.\n\nАлгоритм: сравниваем соседние элементы и меняем местами, если левый больше правого. Повторяем пока массив не отсортирован.\n\nПример: `bubbleSort([3,1,2])` → `[1,2,3]`',
    hint: 'Два вложенных цикла. Внешний — N проходов, внутренний — сравнивает пары. Оптимизация: если за проход не было обменов — массив уже отсортирован.',
    initialCode: `function bubbleSort(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[3,1,2] → [1,2,3]',
        call: 'JSON.stringify(bubbleSort([3,1,2]))',
        expected: '[1,2,3]',
      },
      {
        description: '[5,4,3,2,1] → [1,2,3,4,5]',
        call: 'JSON.stringify(bubbleSort([5,4,3,2,1]))',
        expected: '[1,2,3,4,5]',
      },
      {
        description: 'Уже отсортированный массив',
        call: 'JSON.stringify(bubbleSort([1,2,3,4,5]))',
        expected: '[1,2,3,4,5]',
      },
      {
        description: 'Один элемент',
        call: 'JSON.stringify(bubbleSort([42]))',
        expected: '[42]',
      },
    ],
  },
  {
    id: 'merge-sort',
    title: 'Сортировка слиянием',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Сортировка', 'Рекурсия'],
    description:
      'Реализуй функцию `mergeSort(arr)`, которая сортирует массив чисел методом слияния (merge sort).\n\nАлгоритм:\n1. Если массив из 1 элемента — вернуть его\n2. Разделить массив на два равных\n3. Рекурсивно отсортировать каждую половину\n4. Слить две отсортированных половины в одну\n\nСложность: O(n log n)',
    hint: 'Напиши вспомогательную функцию `merge(left, right)`, которая сливает два отсортированных массива.',
    initialCode: `function mergeSort(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[3,1,4,1,5,9,2,6] сортируется',
        call: 'JSON.stringify(mergeSort([3,1,4,1,5,9,2,6]))',
        expected: '[1,1,2,3,4,5,6,9]',
      },
      {
        description: 'Пустой массив',
        call: 'JSON.stringify(mergeSort([]))',
        expected: '[]',
      },
      {
        description: 'Один элемент',
        call: 'JSON.stringify(mergeSort([7]))',
        expected: '[7]',
      },
      {
        description: 'Обратный порядок',
        call: 'JSON.stringify(mergeSort([5,4,3,2,1]))',
        expected: '[1,2,3,4,5]',
      },
    ],
  },
  {
    id: 'valid-parentheses',
    title: 'Правильная скобочная последовательность',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Стек', 'Строки'],
    description:
      'Реализуй функцию `isValid(s)`, которая проверяет, является ли строка скобок правильной.\n\nДопустимые символы: `(`, `)`, `{`, `}`, `[`, `]`.\n\nПравила:\n- Каждая открывающая скобка должна быть закрыта правильной закрывающей\n- Скобки закрываются в правильном порядке\n\nПример: `isValid("()[]{}")` → `true`, `isValid("(]")` → `false`',
    hint: 'Используй стек. Для каждой открывающей — кладёшь в стек. Для закрывающей — проверяешь что на вершине стека соответствующая открывающая.',
    initialCode: `function isValid(s) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"()[]{}" → true',
        call: 'isValid("()[]{}")',
        expected: 'true',
      },
      {
        description: '"([])" → true',
        call: 'isValid("([])")',
        expected: 'true',
      },
      {
        description: '"(]" → false',
        call: 'isValid("(]")',
        expected: 'false',
      },
      {
        description: '"([)]" → false',
        call: 'isValid("([)]")',
        expected: 'false',
      },
      {
        description: '"" → true',
        call: 'isValid("")',
        expected: 'true',
      },
    ],
  },
  {
    id: 'longest-substring',
    title: 'Самая длинная подстрока без повторений',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Строки', 'Скользящее окно'],
    description:
      'Реализуй функцию `lengthOfLongestSubstring(s)`, которая возвращает длину самой длинной подстроки без повторяющихся символов.\n\nПример:\n- `"abcabcbb"` → `3` (подстрока `"abc"`)\n- `"bbbbb"` → `1` (подстрока `"b"`)\n- `"pwwkew"` → `3` (подстрока `"wke"`)',
    hint: 'Используй технику скользящего окна (sliding window) с Map или Set. Двигай левую границу когда встречаешь повтор.',
    initialCode: `function lengthOfLongestSubstring(s) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"abcabcbb" → 3',
        call: 'lengthOfLongestSubstring("abcabcbb")',
        expected: '3',
      },
      {
        description: '"bbbbb" → 1',
        call: 'lengthOfLongestSubstring("bbbbb")',
        expected: '1',
      },
      {
        description: '"pwwkew" → 3',
        call: 'lengthOfLongestSubstring("pwwkew")',
        expected: '3',
      },
      {
        description: '"" → 0',
        call: 'lengthOfLongestSubstring("")',
        expected: '0',
      },
      {
        description: '"au" → 2',
        call: 'lengthOfLongestSubstring("au")',
        expected: '2',
      },
    ],
  },
  {
    id: 'max-subarray',
    title: 'Максимальная сумма подмассива (алгоритм Кадане)',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Массивы', 'Динамическое программирование'],
    description:
      'Реализуй функцию `maxSubArray(nums)`, которая находит подмассив с наибольшей суммой и возвращает эту сумму.\n\nПример:\n- `[-2,1,-3,4,-1,2,1,-5,4]` → `6` (подмассив `[4,-1,2,1]`)\n- `[1]` → `1`\n- `[5,4,-1,7,8]` → `23`\n\nАлгоритм Кадане работает за O(n).',
    hint: 'Храни текущую сумму `current` и максимальную `max`. На каждом шаге: `current = max(nums[i], current + nums[i])`, затем обнови `max`.',
    initialCode: `function maxSubArray(nums) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[-2,1,-3,4,-1,2,1,-5,4] → 6',
        call: 'maxSubArray([-2,1,-3,4,-1,2,1,-5,4])',
        expected: '6',
      },
      {
        description: '[1] → 1',
        call: 'maxSubArray([1])',
        expected: '1',
      },
      {
        description: '[5,4,-1,7,8] → 23',
        call: 'maxSubArray([5,4,-1,7,8])',
        expected: '23',
      },
      {
        description: 'Все отрицательные [-3,-2,-1] → -1',
        call: 'maxSubArray([-3,-2,-1])',
        expected: '-1',
      },
    ],
  },
  {
    id: 'anagram',
    title: 'Проверка анаграммы',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Строки', 'Хэш-таблица'],
    description:
      'Реализуй функцию `isAnagram(s, t)`, которая возвращает `true`, если строка `t` является анаграммой строки `s`.\n\nАнаграмма — слово, образованное перестановкой букв другого слова.\n\nПример:\n- `isAnagram("anagram", "nagaram")` → `true`\n- `isAnagram("rat", "car")` → `false`',
    hint: 'Подсчитай частоту каждой буквы в обеих строках и сравни. Или отсортируй обе строки и сравни.',
    initialCode: `function isAnagram(s, t) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"anagram","nagaram" → true',
        call: 'isAnagram("anagram","nagaram")',
        expected: 'true',
      },
      {
        description: '"rat","car" → false',
        call: 'isAnagram("rat","car")',
        expected: 'false',
      },
      {
        description: 'Разная длина → false',
        call: 'isAnagram("ab","a")',
        expected: 'false',
      },
      {
        description: '"listen","silent" → true',
        call: 'isAnagram("listen","silent")',
        expected: 'true',
      },
    ],
  },
  {
    id: 'fibonacci-memo',
    title: 'Числа Фибоначчи с мемоизацией',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Рекурсия', 'Динамическое программирование'],
    description:
      'Реализуй функцию `fib(n)`, которая возвращает n-е число Фибоначчи.\n\n`fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)`\n\nОбычная рекурсия работает за O(2^n) — слишком медленно. Используй мемоизацию или итерацию чтобы достичь O(n).\n\nПример: `fib(10)` → `55`',
    hint: 'Вариант 1: храни Map с уже посчитанными значениями. Вариант 2: итерация с двумя переменными prev и curr.',
    initialCode: `function fib(n) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'fib(0) → 0',
        call: 'fib(0)',
        expected: '0',
      },
      {
        description: 'fib(1) → 1',
        call: 'fib(1)',
        expected: '1',
      },
      {
        description: 'fib(10) → 55',
        call: 'fib(10)',
        expected: '55',
      },
      {
        description: 'fib(20) → 6765',
        call: 'fib(20)',
        expected: '6765',
      },
    ],
  },
  {
    id: 'climbing-stairs',
    title: 'Лестница (DP)',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Динамическое программирование'],
    description:
      'Ты поднимаешься по лестнице из `n` ступеней. За один шаг можно подняться на 1 или 2 ступени.\n\nРеализуй функцию `climbStairs(n)`, которая возвращает количество различных способов добраться до вершины.\n\nПример:\n- `climbStairs(2)` → `2` (1+1 или 2)\n- `climbStairs(3)` → `3` (1+1+1, 1+2, 2+1)',
    hint: 'Это последовательность Фибоначчи! ways(n) = ways(n-1) + ways(n-2). Базовые случаи: ways(1)=1, ways(2)=2.',
    initialCode: `function climbStairs(n) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'climbStairs(1) → 1',
        call: 'climbStairs(1)',
        expected: '1',
      },
      {
        description: 'climbStairs(2) → 2',
        call: 'climbStairs(2)',
        expected: '2',
      },
      {
        description: 'climbStairs(3) → 3',
        call: 'climbStairs(3)',
        expected: '3',
      },
      {
        description: 'climbStairs(5) → 8',
        call: 'climbStairs(5)',
        expected: '8',
      },
    ],
  },
  {
    id: 'missing-number',
    title: 'Найди пропущенное число',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Массивы', 'Математика'],
    description:
      'Дан массив из n различных чисел в диапазоне `[0, n]`. Найди единственное число, которого не хватает.\n\nРеализуй функцию `missingNumber(nums)`.\n\nПример:\n- `missingNumber([3,0,1])` → `2`\n- `missingNumber([0,1])` → `2`\n- `missingNumber([9,6,4,2,3,5,7,0,1])` → `8`',
    hint: 'Сумма чисел от 0 до n равна n*(n+1)/2. Вычти из неё сумму элементов массива — получишь пропущенное число.',
    initialCode: `function missingNumber(nums) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[3,0,1] → 2',
        call: 'missingNumber([3,0,1])',
        expected: '2',
      },
      {
        description: '[0,1] → 2',
        call: 'missingNumber([0,1])',
        expected: '2',
      },
      {
        description: '[9,6,4,2,3,5,7,0,1] → 8',
        call: 'missingNumber([9,6,4,2,3,5,7,0,1])',
        expected: '8',
      },
    ],
  },
  {
    id: 'product-except-self',
    title: 'Произведение кроме себя',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Массивы'],
    description:
      'Дан массив `nums`. Верни массив `output`, где `output[i]` — произведение всех элементов `nums`, кроме `nums[i]`.\n\nРеализуй функцию `productExceptSelf(nums)` без использования деления и за O(n).\n\nПример: `productExceptSelf([1,2,3,4])` → `[24,12,8,6]`',
    hint: 'Два прохода: слева направо накапливаешь произведение элементов слева, справа налево — справа. Умножаешь оба результата.',
    initialCode: `function productExceptSelf(nums) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[1,2,3,4] → [24,12,8,6]',
        call: 'JSON.stringify(productExceptSelf([1,2,3,4]))',
        expected: '[24,12,8,6]',
      },
      {
        description: '[-1,1,0,-3,3] → [0,0,9,0,0]',
        call: 'JSON.stringify(productExceptSelf([-1,1,0,-3,3]))',
        expected: '[0,0,9,0,0]',
      },
      {
        description: '[2,3] → [3,2]',
        call: 'JSON.stringify(productExceptSelf([2,3]))',
        expected: '[3,2]',
      },
    ],
  },
  {
    id: 'move-zeroes',
    title: 'Сдвинь нули в конец',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Массивы', 'Два указателя'],
    description:
      'Реализуй функцию `moveZeroes(nums)`, которая перемещает все нули в конец массива, сохраняя относительный порядок ненулевых элементов.\n\nФункция должна изменять массив "на месте" и возвращать его.\n\nПример: `moveZeroes([0,1,0,3,12])` → `[1,3,12,0,0]`',
    hint: 'Используй два указателя: slow указывает на позицию для следующего ненулевого элемента, fast — перебирает все элементы.',
    initialCode: `function moveZeroes(nums) {
  // твой код здесь
  return nums;
}`,
    testCases: [
      {
        description: '[0,1,0,3,12] → [1,3,12,0,0]',
        call: 'JSON.stringify(moveZeroes([0,1,0,3,12]))',
        expected: '[1,3,12,0,0]',
      },
      {
        description: '[0,0,1] → [1,0,0]',
        call: 'JSON.stringify(moveZeroes([0,0,1]))',
        expected: '[1,0,0]',
      },
      {
        description: 'Без нулей → без изменений',
        call: 'JSON.stringify(moveZeroes([1,2,3]))',
        expected: '[1,2,3]',
      },
    ],
  },
  {
    id: 'min-stack',
    title: 'Стек с минимумом',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Стек', 'Структуры данных'],
    description:
      'Реализуй класс `MinStack` со следующими методами:\n- `push(val)` — добавить элемент\n- `pop()` — удалить верхний элемент\n- `top()` — вернуть верхний элемент\n- `getMin()` — вернуть минимальный элемент за O(1)\n\nПример:\n```\nconst s = new MinStack();\ns.push(-2); s.push(0); s.push(-3);\ns.getMin(); // -3\ns.pop();\ns.top();    // 0\ns.getMin(); // -2\n```',
    hint: 'Храни два стека: основной и вспомогательный (для минимумов). При push — добавляй в стек минимумов если новый элемент ≤ текущего минимума. При pop — если удаляемый элемент равен текущему минимуму, удаляй и из стека минимумов.',
    initialCode: `class MinStack {
  constructor() {
    // твой код здесь
  }

  push(val) {
    // твой код здесь
  }

  pop() {
    // твой код здесь
  }

  top() {
    // твой код здесь
  }

  getMin() {
    // твой код здесь
  }
}`,
    testCases: [
      {
        description: 'push(-2,0,-3) → getMin() = -3',
        call: `(() => { const s = new MinStack(); s.push(-2); s.push(0); s.push(-3); return s.getMin(); })()`,
        expected: '-3',
      },
      {
        description: 'После pop() → top() = 0',
        call: `(() => { const s = new MinStack(); s.push(-2); s.push(0); s.push(-3); s.pop(); return s.top(); })()`,
        expected: '0',
      },
      {
        description: 'После pop() → getMin() = -2',
        call: `(() => { const s = new MinStack(); s.push(-2); s.push(0); s.push(-3); s.pop(); return s.getMin(); })()`,
        expected: '-2',
      },
    ],
  },
  {
    id: 'rotate-array',
    title: 'Поворот массива',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Массивы', 'Два указателя'],
    description:
      'Реализуй функцию `rotate(nums, k)`, которая поворачивает массив вправо на `k` шагов и возвращает его.\n\nПример:\n- `rotate([1,2,3,4,5,6,7], 3)` → `[5,6,7,1,2,3,4]`\n- `rotate([-1,-100,3,99], 2)` → `[3,99,-1,-100]`\n\nРешение за O(1) доп. памяти: переверни весь массив, затем первые k и оставшиеся n-k элементов.',
    hint: 'Трюк с тремя разворотами: reverse(0, n-1), reverse(0, k-1), reverse(k, n-1). Не забудь k = k % n.',
    initialCode: `function rotate(nums, k) {
  // твой код здесь
  return nums;
}`,
    testCases: [
      {
        description: '[1,2,3,4,5,6,7] k=3 → [5,6,7,1,2,3,4]',
        call: 'JSON.stringify(rotate([1,2,3,4,5,6,7], 3))',
        expected: '[5,6,7,1,2,3,4]',
      },
      {
        description: '[-1,-100,3,99] k=2 → [3,99,-1,-100]',
        call: 'JSON.stringify(rotate([-1,-100,3,99], 2))',
        expected: '[3,99,-1,-100]',
      },
      {
        description: 'k больше длины массива',
        call: 'JSON.stringify(rotate([1,2,3], 5))',
        expected: '[2,3,1]',
      },
    ],
  },
  {
    id: 'roman-to-int',
    title: 'Римские цифры в число',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Строки', 'Хэш-таблица'],
    description:
      'Реализуй функцию `romanToInt(s)`, которая переводит строку с римскими цифрами в целое число.\n\nСимволы: `I=1, V=5, X=10, L=50, C=100, D=500, M=1000`\n\nПравило вычитания: если символ меньше следующего — его нужно вычесть.\n- `IV` = 4, `IX` = 9, `XL` = 40, `XC` = 90\n\nПример: `romanToInt("MCMXCIV")` → `1994`',
    hint: 'Иди справа налево. Если текущее значение меньше максимального встреченного — вычитай его, иначе прибавляй.',
    initialCode: `function romanToInt(s) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"III" → 3',
        call: 'romanToInt("III")',
        expected: '3',
      },
      {
        description: '"IV" → 4',
        call: 'romanToInt("IV")',
        expected: '4',
      },
      {
        description: '"IX" → 9',
        call: 'romanToInt("IX")',
        expected: '9',
      },
      {
        description: '"MCMXCIV" → 1994',
        call: 'romanToInt("MCMXCIV")',
        expected: '1994',
      },
    ],
  },
  {
    id: 'coin-change',
    title: 'Размен монет',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Динамическое программирование'],
    description:
      'Дан массив монет `coins` и сумма `amount`. Найди минимальное количество монет, которое в сумме даёт `amount`.\n\nЕсли сдачу дать невозможно — верни `-1`.\n\nРеализуй функцию `coinChange(coins, amount)`.\n\nПример:\n- `coinChange([1,2,5], 11)` → `3` (5+5+1)\n- `coinChange([2], 3)` → `-1`',
    hint: 'Динамическое программирование. Создай массив dp[0..amount] где dp[i] = минимальное число монет для суммы i. dp[0]=0, остальные = Infinity. Для каждой монеты: dp[i] = min(dp[i], dp[i-coin]+1).',
    initialCode: `function coinChange(coins, amount) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'coins=[1,2,5] amount=11 → 3',
        call: 'coinChange([1,2,5], 11)',
        expected: '3',
      },
      {
        description: 'coins=[2] amount=3 → -1',
        call: 'coinChange([2], 3)',
        expected: '-1',
      },
      {
        description: 'coins=[1] amount=0 → 0',
        call: 'coinChange([1], 0)',
        expected: '0',
      },
      {
        description: 'coins=[1,5,10,25] amount=30 → 2',
        call: 'coinChange([1,5,10,25], 30)',
        expected: '2',
      },
    ],
  },
  {
    id: 'queue-via-stacks',
    title: 'Очередь через два стека',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Стек', 'Очередь', 'Структуры данных'],
    description:
      'Реализуй класс `MyQueue` — очередь (FIFO) используя только два стека (массива).\n\nМетоды:\n- `push(x)` — добавить элемент в конец очереди\n- `pop()` — удалить и вернуть элемент из начала\n- `peek()` — вернуть элемент из начала без удаления\n- `empty()` — вернуть `true` если очередь пустая\n\nОперации `pop` и `peek` должны работать амортизированно за O(1).',
    hint: 'Используй два стека: `inbox` для push и `outbox` для pop/peek. Когда outbox пустой и нужен pop/peek — переложи все из inbox в outbox (это развернёт порядок).',
    initialCode: `class MyQueue {
  constructor() {
    // твой код здесь
  }

  push(x) {
    // твой код здесь
  }

  pop() {
    // твой код здесь
  }

  peek() {
    // твой код здесь
  }

  empty() {
    // твой код здесь
  }
}`,
    testCases: [
      {
        description: 'push(1),push(2),peek() → 1',
        call: `(() => { const q = new MyQueue(); q.push(1); q.push(2); return q.peek(); })()`,
        expected: '1',
      },
      {
        description: 'push(1),push(2),pop() → 1',
        call: `(() => { const q = new MyQueue(); q.push(1); q.push(2); return q.pop(); })()`,
        expected: '1',
      },
      {
        description: 'После pop() peek() → 2',
        call: `(() => { const q = new MyQueue(); q.push(1); q.push(2); q.pop(); return q.peek(); })()`,
        expected: '2',
      },
      {
        description: 'empty() на пустой → true',
        call: `(() => { const q = new MyQueue(); return q.empty(); })()`,
        expected: 'true',
      },
    ],
  },
  {
    id: 'quick-sort',
    title: 'Быстрая сортировка',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Сортировка', 'Рекурсия'],
    description:
      'Реализуй функцию `quickSort(arr)`, которая сортирует массив чисел методом быстрой сортировки.\n\nАлгоритм:\n1. Выбери опорный элемент (pivot)\n2. Раздели массив на три части: меньше pivot, равные, больше\n3. Рекурсивно отсортируй левую и правую части\n4. Объедини результаты\n\nСредняя сложность: O(n log n)',
    hint: 'Простая реализация: pivot = средний элемент, left = элементы < pivot, mid = элементы === pivot, right = элементы > pivot. return [...quickSort(left), ...mid, ...quickSort(right)].',
    initialCode: `function quickSort(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[3,6,8,10,1,2,1] сортируется',
        call: 'JSON.stringify(quickSort([3,6,8,10,1,2,1]))',
        expected: '[1,1,2,3,6,8,10]',
      },
      {
        description: 'Пустой массив',
        call: 'JSON.stringify(quickSort([]))',
        expected: '[]',
      },
      {
        description: 'Один элемент',
        call: 'JSON.stringify(quickSort([5]))',
        expected: '[5]',
      },
      {
        description: 'Обратный порядок',
        call: 'JSON.stringify(quickSort([5,4,3,2,1]))',
        expected: '[1,2,3,4,5]',
      },
    ],
  },
  {
    id: 'two-sum-hash',
    title: 'Два числа в сумму (за O(n))',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Массивы', 'Хэш-таблица'],
    description:
      'Дан массив чисел `nums` и целое число `target`. Найди два числа, которые в сумме дают `target`, и верни их индексы.\n\nРеализуй функцию `twoSum(nums, target)`. Гарантируется ровно одно решение.\n\nПример: `twoSum([2,7,11,15], 9)` → `[0,1]`\n\nРешение за O(n) используя хэш-таблицу.',
    hint: 'Создай Map. Для каждого элемента проверяй: есть ли в Map значение (target - nums[i])? Если да — нашёл пару. Если нет — добавь nums[i] в Map с индексом i.',
    initialCode: `function twoSum(nums, target) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[2,7,11,15] target=9 → [0,1]',
        call: 'JSON.stringify(twoSum([2,7,11,15], 9))',
        expected: '[0,1]',
      },
      {
        description: '[3,2,4] target=6 → [1,2]',
        call: 'JSON.stringify(twoSum([3,2,4], 6))',
        expected: '[1,2]',
      },
      {
        description: '[3,3] target=6 → [0,1]',
        call: 'JSON.stringify(twoSum([3,3], 6))',
        expected: '[0,1]',
      },
    ],
  },
  {
    id: 'reverse-linked-list',
    title: 'Разворот связного списка',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Связный список', 'Структуры данных'],
    description:
      'Реализуй функцию `reverseList(head)`, которая разворачивает односвязный список.\n\nУзел списка: `{ val, next }`\n\nПример: `1→2→3→4→5` → `5→4→3→2→1`\n\nВспомогательная функция `makeList(arr)` создаёт список из массива, `listToArray(head)` — наоборот. Они уже доступны в тестах.',
    hint: 'Три переменные: prev=null, curr=head, next. В цикле: сохрани next, curr.next = prev, prev = curr, curr = next. В конце верни prev.',
    initialCode: `function reverseList(head) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[1,2,3,4,5] разворачивается',
        call: `(() => {
  function makeList(arr) { let h=null; for(let i=arr.length-1;i>=0;i--) h={val:arr[i],next:h}; return h; }
  function listToArray(h) { const r=[]; while(h){r.push(h.val);h=h.next;} return r; }
  return JSON.stringify(listToArray(reverseList(makeList([1,2,3,4,5]))));
})()`,
        expected: '[5,4,3,2,1]',
      },
      {
        description: '[1,2] разворачивается',
        call: `(() => {
  function makeList(arr) { let h=null; for(let i=arr.length-1;i>=0;i--) h={val:arr[i],next:h}; return h; }
  function listToArray(h) { const r=[]; while(h){r.push(h.val);h=h.next;} return r; }
  return JSON.stringify(listToArray(reverseList(makeList([1,2]))));
})()`,
        expected: '[2,1]',
      },
      {
        description: 'null → null',
        call: `String(reverseList(null))`,
        expected: 'null',
      },
    ],
  },
  {
    id: 'flatten-deep',
    title: 'Глубокое выравнивание массива',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Массивы', 'Рекурсия'],
    description:
      'Реализуй функцию `flattenDeep(arr)`, которая рекурсивно выравнивает вложенный массив любой глубины.\n\nНельзя использовать `Array.prototype.flat(Infinity)`.\n\nПример: `flattenDeep([1,[2,[3,[4]],5]])` → `[1,2,3,4,5]`',
    hint: 'Рекурсия: для каждого элемента — если массив, вызывай flattenDeep, иначе добавляй в результат. Или используй reduce.',
    initialCode: `function flattenDeep(arr) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[1,[2,[3,[4]],5]] → [1,2,3,4,5]',
        call: 'JSON.stringify(flattenDeep([1,[2,[3,[4]],5]]))',
        expected: '[1,2,3,4,5]',
      },
      {
        description: 'Уже плоский массив',
        call: 'JSON.stringify(flattenDeep([1,2,3]))',
        expected: '[1,2,3]',
      },
      {
        description: 'Пустой массив',
        call: 'JSON.stringify(flattenDeep([]))',
        expected: '[]',
      },
      {
        description: 'Глубокая вложенность',
        call: 'JSON.stringify(flattenDeep([[[[1]]],[[[2]]]]))',
        expected: '[1,2]',
      },
    ],
  },
  {
    id: 'group-anagrams',
    title: 'Группировка анаграмм',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Строки', 'Хэш-таблица'],
    description:
      'Дан массив строк. Сгруппируй анаграммы вместе.\n\nРеализуй функцию `groupAnagrams(strs)` которая возвращает массив групп.\n\nПример:\n`groupAnagrams(["eat","tea","tan","ate","nat","bat"])`\n→ `[["eat","tea","ate"],["tan","nat"],["bat"]]`\n\nПорядок групп и слов внутри не важен.',
    hint: 'Ключ для группировки — отсортированные буквы слова. "eat" и "tea" оба дают "aet". Используй Map где ключ — sorted string.',
    initialCode: `function groupAnagrams(strs) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'Количество групп = 3',
        call: 'groupAnagrams(["eat","tea","tan","ate","nat","bat"]).length',
        expected: '3',
      },
      {
        description: 'Группа "bat" содержит только "bat"',
        call: `(() => {
  const res = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
  const batGroup = res.find(g => g.includes("bat"));
  return batGroup ? batGroup.length : -1;
})()`,
        expected: '1',
      },
      {
        description: 'Пустой массив → [[""]]',
        call: 'JSON.stringify(groupAnagrams([""]))',
        expected: '[[""]]',
      },
    ],
  },
  {
    id: 'power-function',
    title: 'Возведение в степень (быстрое)',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Математика', 'Рекурсия'],
    description:
      'Реализуй функцию `myPow(x, n)` которая вычисляет `x` в степени `n`.\n\nПоддержи отрицательные степени. Реши за O(log n) — нельзя просто умножать n раз.\n\nПример:\n- `myPow(2, 10)` → `1024`\n- `myPow(2, -2)` → `0.25`\n- `myPow(2, 0)` → `1`',
    hint: 'Быстрое возведение: если n чётное — myPow(x*x, n/2). Если нечётное — x * myPow(x, n-1). Для отрицательного n: myPow(1/x, -n).',
    initialCode: `function myPow(x, n) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'myPow(2, 10) → 1024',
        call: 'myPow(2, 10)',
        expected: '1024',
      },
      {
        description: 'myPow(2, -2) → 0.25',
        call: 'myPow(2, -2)',
        expected: '0.25',
      },
      {
        description: 'myPow(2, 0) → 1',
        call: 'myPow(2, 0)',
        expected: '1',
      },
      {
        description: 'myPow(3, 3) → 27',
        call: 'myPow(3, 3)',
        expected: '27',
      },
    ],
  },

  {
    id: 'three-sum',
    title: 'Три числа с нулевой суммой',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Массивы', 'Два указателя'],
    description:
      'Дан массив чисел. Найди все уникальные тройки `[a, b, c]` такие что `a + b + c = 0`.\n\nРеализуй функцию `threeSum(nums)`. Тройки не должны повторяться.\n\nПример:\n`threeSum([-1,0,1,2,-1,-4])` → `[[-1,-1,2],[-1,0,1]]`\n\nПодход: отсортируй массив, затем для каждого элемента используй два указателя.',
    hint: 'Сортируй массив. Для каждого i фиксируй nums[i] и ищи пару через два указателя left=i+1, right=n-1. Пропускай дубликаты для i, left, right.',
    initialCode: `function threeSum(nums) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[-1,0,1,2,-1,-4] → 2 тройки',
        call: 'threeSum([-1,0,1,2,-1,-4]).length',
        expected: '2',
      },
      {
        description: 'Первая тройка содержит -1,-1,2',
        call: `(() => {
  const res = threeSum([-1,0,1,2,-1,-4]);
  return res.some(t => t.includes(-1) && t.includes(2) && t.filter(x=>x===-1).length===2) ? 'true' : 'false';
})()`,
        expected: 'true',
      },
      {
        description: '[0,0,0] → [[0,0,0]]',
        call: 'JSON.stringify(threeSum([0,0,0]))',
        expected: '[[0,0,0]]',
      },
      {
        description: '[1,2,3] → [] (нет нулевых троек)',
        call: 'JSON.stringify(threeSum([1,2,3]))',
        expected: '[]',
      },
    ],
  },
  {
    id: 'container-water',
    title: 'Контейнер с наибольшим количеством воды',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Массивы', 'Два указателя'],
    description:
      'Дан массив высот столбцов `height`. Найди два столбца, которые вместе с осью X образуют контейнер с наибольшим объёмом воды.\n\nРеализуй функцию `maxArea(height)`.\n\nОбъём = расстояние между столбцами × минимальная высота.\n\nПример: `maxArea([1,8,6,2,5,4,8,3,7])` → `49`',
    hint: 'Два указателя: left=0, right=n-1. Считай площадь, двигай тот указатель, у которого высота меньше — ищем большую высоту.',
    initialCode: `function maxArea(height) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[1,8,6,2,5,4,8,3,7] → 49',
        call: 'maxArea([1,8,6,2,5,4,8,3,7])',
        expected: '49',
      },
      {
        description: '[1,1] → 1',
        call: 'maxArea([1,1])',
        expected: '1',
      },
      {
        description: '[4,3,2,1,4] → 16',
        call: 'maxArea([4,3,2,1,4])',
        expected: '16',
      },
      {
        description: '[1,2,1] → 2',
        call: 'maxArea([1,2,1])',
        expected: '2',
      },
    ],
  },
  {
    id: 'trapping-rain',
    title: 'Сбор дождевой воды',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Массивы', 'Два указателя'],
    description:
      'Дан массив высот `height`, где каждый элемент — высота столбца. Сколько единиц воды может скопиться после дождя?\n\nРеализуй функцию `trap(height)`.\n\nПример: `trap([0,1,0,2,1,0,1,3,2,1,2,1])` → `6`\n\nВода над позицией i = `min(maxLeft[i], maxRight[i]) - height[i]`',
    hint: 'Два указателя: left=0, right=n-1, leftMax=0, rightMax=0. Если leftMax < rightMax — обрабатывай левый столбец, иначе правый. Добавляй max(0, соответствующий Max - height[i]).',
    initialCode: `function trap(height) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[0,1,0,2,1,0,1,3,2,1,2,1] → 6',
        call: 'trap([0,1,0,2,1,0,1,3,2,1,2,1])',
        expected: '6',
      },
      {
        description: '[4,2,0,3,2,5] → 9',
        call: 'trap([4,2,0,3,2,5])',
        expected: '9',
      },
      {
        description: 'Нет ям → 0',
        call: 'trap([1,2,3,4,5])',
        expected: '0',
      },
    ],
  },
  {
    id: 'longest-palindrome-substr',
    title: 'Самая длинная палиндромная подстрока',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Строки', 'Динамическое программирование'],
    description:
      'Дана строка `s`. Найди самую длинную подстроку, которая является палиндромом.\n\nРеализуй функцию `longestPalindrome(s)`.\n\nПример:\n- `longestPalindrome("babad")` → `"bab"` или `"aba"`\n- `longestPalindrome("cbbd")` → `"bb"`\n- `longestPalindrome("racecar")` → `"racecar"`',
    hint: 'Метод "расширения от центра": для каждой позиции расширяй palindrome влево и вправо (два варианта: нечётная и чётная длина). Следи за максимальной длиной.',
    initialCode: `function longestPalindrome(s) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"racecar" → "racecar"',
        call: 'longestPalindrome("racecar")',
        expected: 'racecar',
      },
      {
        description: '"cbbd" → "bb"',
        call: 'longestPalindrome("cbbd")',
        expected: 'bb',
      },
      {
        description: '"a" → "a"',
        call: 'longestPalindrome("a")',
        expected: 'a',
      },
      {
        description: 'Длина "babad" ≥ 3',
        call: 'longestPalindrome("babad").length >= 3 ? "true" : "false"',
        expected: 'true',
      },
    ],
  },
  {
    id: 'first-unique-char',
    title: 'Первый уникальный символ',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Строки', 'Хэш-таблица'],
    description:
      'Дана строка `s`. Найди первый символ, который встречается в строке только один раз, и верни его индекс.\n\nЕсли такого нет — верни `-1`.\n\nРеализуй функцию `firstUniqChar(s)`.\n\nПример:\n- `firstUniqChar("leetcode")` → `0`\n- `firstUniqChar("loveleetcode")` → `2`\n- `firstUniqChar("aabb")` → `-1`',
    hint: 'Два прохода: первый — подсчёт частоты каждого символа в Map. Второй — найди первый символ с частотой 1.',
    initialCode: `function firstUniqChar(s) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"leetcode" → 0',
        call: 'firstUniqChar("leetcode")',
        expected: '0',
      },
      {
        description: '"loveleetcode" → 2',
        call: 'firstUniqChar("loveleetcode")',
        expected: '2',
      },
      {
        description: '"aabb" → -1',
        call: 'firstUniqChar("aabb")',
        expected: '-1',
      },
    ],
  },
  {
    id: 'compress-string',
    title: 'Сжатие строки',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Строки'],
    description:
      'Реализуй функцию `compressString(s)`, которая выполняет базовое сжатие строки.\n\nАлгоритм: подсчитывай повторяющиеся символы и записывай в формате `символ+количество`.\n\nЕсли сжатая строка не короче исходной — верни исходную.\n\nПример:\n- `compressString("aabcccdddd")` → `"a2b1c3d4"`\n- `compressString("abc")` → `"abc"` (не короче)',
    hint: 'Иди по строке, считай consecutive символы. Когда символ меняется — записывай пару char+count в результат.',
    initialCode: `function compressString(s) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"aabcccdddd" → "a2b1c3d4"',
        call: 'compressString("aabcccdddd")',
        expected: 'a2b1c3d4',
      },
      {
        description: '"abc" → "abc" (без сжатия)',
        call: 'compressString("abc")',
        expected: 'abc',
      },
      {
        description: '"aaaa" → "a4"',
        call: 'compressString("aaaa")',
        expected: 'a4',
      },
      {
        description: '"aabb" → "aabb" (a2b2 не короче)',
        call: 'compressString("aabb")',
        expected: 'aabb',
      },
    ],
  },
  {
    id: 'spiral-matrix',
    title: 'Спиральная матрица',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Матрицы', 'Симуляция'],
    description:
      'Дана матрица `m×n`. Верни все элементы в порядке обхода по спирали (по часовой стрелке).\n\nРеализуй функцию `spiralOrder(matrix)`.\n\nПример:\n```\n[[1,2,3],\n [4,5,6],\n [7,8,9]]\n→ [1,2,3,6,9,8,7,4,5]\n```',
    hint: 'Используй 4 границы: top, bottom, left, right. Обходи: слева→направо, сверху→вниз, справа→налево, снизу→вверх. После каждого прохода сужай соответствующую границу.',
    initialCode: `function spiralOrder(matrix) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '3×3 матрица',
        call: 'JSON.stringify(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))',
        expected: '[1,2,3,6,9,8,7,4,5]',
      },
      {
        description: '3×4 матрица',
        call: 'JSON.stringify(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))',
        expected: '[1,2,3,4,8,12,11,10,9,5,6,7]',
      },
      {
        description: '1×1 матрица',
        call: 'JSON.stringify(spiralOrder([[1]]))',
        expected: '[1]',
      },
    ],
  },
  {
    id: 'pascal-triangle',
    title: 'Треугольник Паскаля',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Массивы', 'Математика'],
    description:
      'Реализуй функцию `generate(numRows)`, которая генерирует первые `numRows` строк треугольника Паскаля.\n\nКаждый элемент — сумма двух элементов над ним.\n\nПример:\n```\ngenerate(5) →\n[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n```',
    hint: 'Строй каждую строку на основе предыдущей. Первый и последний элемент всегда 1. Остальные: row[i] = prev[i-1] + prev[i].',
    initialCode: `function generate(numRows) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'generate(1) → [[1]]',
        call: 'JSON.stringify(generate(1))',
        expected: '[[1]]',
      },
      {
        description: 'generate(5) → 5 строк',
        call: 'generate(5).length',
        expected: '5',
      },
      {
        description: 'Последняя строка generate(5)',
        call: 'JSON.stringify(generate(5)[4])',
        expected: '[1,4,6,4,1]',
      },
      {
        description: 'generate(3)',
        call: 'JSON.stringify(generate(3))',
        expected: '[[1],[1,1],[1,2,1]]',
      },
    ],
  },
  {
    id: 'count-bits',
    title: 'Подсчёт единичных битов',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Битовые операции', 'Динамическое программирование'],
    description:
      'Для каждого числа от `0` до `n` посчитай количество единиц в его двоичном представлении.\n\nРеализуй функцию `countBits(n)` которая возвращает массив длиной `n+1`.\n\nПример:\n- `countBits(2)` → `[0,1,1]`\n- `countBits(5)` → `[0,1,1,2,1,2]`\n\nРеши за O(n) без встроенных функций подсчёта битов.',
    hint: 'DP: bits[i] = bits[i >> 1] + (i & 1). Число битов в i равно числу битов в i/2 плюс последний бит.',
    initialCode: `function countBits(n) {
  // твой код здесь
}`,
    testCases: [
      {
        description: 'countBits(2) → [0,1,1]',
        call: 'JSON.stringify(countBits(2))',
        expected: '[0,1,1]',
      },
      {
        description: 'countBits(5) → [0,1,1,2,1,2]',
        call: 'JSON.stringify(countBits(5))',
        expected: '[0,1,1,2,1,2]',
      },
      {
        description: 'countBits(0) → [0]',
        call: 'JSON.stringify(countBits(0))',
        expected: '[0]',
      },
    ],
  },
  {
    id: 'find-peak',
    title: 'Найти пиковый элемент',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Бинарный поиск', 'Массивы'],
    description:
      'Пиковый элемент — элемент, который строго больше своих соседей.\n\nДан массив `nums`, где `nums[-1] = nums[n] = -∞`.\n\nРеализуй функцию `findPeakElement(nums)`, которая возвращает индекс любого пикового элемента за O(log n).\n\nПример:\n- `findPeakElement([1,2,3,1])` → `2`\n- `findPeakElement([1,2,1,3,5,6,4])` → `1` или `5`',
    hint: 'Бинарный поиск. Если nums[mid] < nums[mid+1] — пик правее, иначе левее или mid сам является пиком.',
    initialCode: `function findPeakElement(nums) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[1,2,3,1] → 2',
        call: 'findPeakElement([1,2,3,1])',
        expected: '2',
      },
      {
        description: '[1] → 0',
        call: 'findPeakElement([1])',
        expected: '0',
      },
      {
        description: '[1,2,1,3,5,6,4] — результат валиден',
        call: `(() => {
  const nums = [1,2,1,3,5,6,4];
  const i = findPeakElement(nums);
  const left = i === 0 ? -Infinity : nums[i-1];
  const right = i === nums.length-1 ? -Infinity : nums[i+1];
  return nums[i] > left && nums[i] > right ? 'true' : 'false';
})()`,
        expected: 'true',
      },
    ],
  },
  {
    id: 'search-rotated',
    title: 'Поиск в повёрнутом массиве',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Бинарный поиск', 'Массивы'],
    description:
      'Отсортированный массив был повёрнут в неизвестной точке: `[4,5,6,7,0,1,2]`.\n\nРеализуй функцию `search(nums, target)` которая ищет `target` за O(log n).\n\nВерни индекс элемента или `-1` если не найден.\n\nПример:\n- `search([4,5,6,7,0,1,2], 0)` → `4`\n- `search([4,5,6,7,0,1,2], 3)` → `-1`',
    hint: 'Модифицированный бинарный поиск. Определяй на каком из двух отсортированных участков находится mid, затем сужай поиск.',
    initialCode: `function search(nums, target) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[4,5,6,7,0,1,2] target=0 → 4',
        call: 'search([4,5,6,7,0,1,2], 0)',
        expected: '4',
      },
      {
        description: '[4,5,6,7,0,1,2] target=3 → -1',
        call: 'search([4,5,6,7,0,1,2], 3)',
        expected: '-1',
      },
      {
        description: '[1] target=0 → -1',
        call: 'search([1], 0)',
        expected: '-1',
      },
      {
        description: '[1,3] target=3 → 1',
        call: 'search([1,3], 3)',
        expected: '1',
      },
    ],
  },
  {
    id: 'longest-common-prefix',
    title: 'Наибольший общий префикс',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Строки'],
    description:
      'Дан массив строк. Найди наибольший общий префикс среди всех строк.\n\nРеализуй функцию `longestCommonPrefix(strs)`.\n\nЕсли общего префикса нет — верни пустую строку `""`.\n\nПример:\n- `longestCommonPrefix(["flower","flow","flight"])` → `"fl"`\n- `longestCommonPrefix(["dog","racecar","car"])` → `""`',
    hint: 'Возьми первую строку как кандидата. Сокращай её пока она не является префиксом всех остальных строк.',
    initialCode: `function longestCommonPrefix(strs) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '["flower","flow","flight"] → "fl"',
        call: 'longestCommonPrefix(["flower","flow","flight"])',
        expected: 'fl',
      },
      {
        description: '["dog","racecar","car"] → ""',
        call: 'longestCommonPrefix(["dog","racecar","car"])',
        expected: '',
      },
      {
        description: '["abc"] → "abc"',
        call: 'longestCommonPrefix(["abc"])',
        expected: 'abc',
      },
      {
        description: '["a","a","b"] → ""',
        call: 'longestCommonPrefix(["a","a","b"])',
        expected: '',
      },
    ],
  },
  {
    id: 'number-of-islands',
    title: 'Количество островов',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Матрицы', 'BFS', 'DFS'],
    description:
      'Дана матрица из `"1"` (суша) и `"0"` (вода). Посчитай количество островов.\n\nОстров — группа смежных клеток с `"1"` (по горизонтали и вертикали).\n\nРеализуй функцию `numIslands(grid)`.\n\nПример:\n```\n[["1","1","0"],\n ["1","0","0"],\n ["0","0","1"]]\n→ 2\n```',
    hint: 'DFS или BFS: для каждой непосещённой клетки "1" запускай обход и "затапливай" (меняй на "0") все смежные клетки. Счётчик островов увеличивай при каждом новом запуске.',
    initialCode: `function numIslands(grid) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '2 острова',
        call: `numIslands([["1","1","0"],["1","0","0"],["0","0","1"]])`,
        expected: '2',
      },
      {
        description: '1 большой остров',
        call: `numIslands([["1","1","1"],["0","1","0"],["1","1","1"]])`,
        expected: '1',
      },
      {
        description: '3 острова',
        call: `numIslands([["1","0","1"],["0","0","0"],["1","0","1"]])`,
        expected: '4',
      },
      {
        description: 'Вся вода → 0',
        call: `numIslands([["0","0"],["0","0"]])`,
        expected: '0',
      },
    ],
  },
  {
    id: 'num-to-words',
    title: 'Число прописью',
    difficulty: 'advanced',
    tags: ['Алгоритмы', 'Строки', 'Математика'],
    description:
      'Реализуй функцию `numberToWords(num)`, которая переводит число в его английское словесное представление.\n\nПример:\n- `numberToWords(123)` → `"One Hundred Twenty Three"`\n- `numberToWords(12345)` → `"Twelve Thousand Three Hundred Forty Five"`\n- `numberToWords(0)` → `"Zero"`\n\nПоддержи числа до 999 999.',
    hint: 'Раздели число на тысячи и сотни. Создай словари ones = ["","One","Two",...], teens = ["Ten","Eleven",...], tens = ["","","Twenty",...]. Рекурсивно обрабатывай группы из трёх цифр.',
    initialCode: `function numberToWords(num) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '0 → "Zero"',
        call: 'numberToWords(0)',
        expected: 'Zero',
      },
      {
        description: '13 → "Thirteen"',
        call: 'numberToWords(13)',
        expected: 'Thirteen',
      },
      {
        description: '100 → "One Hundred"',
        call: 'numberToWords(100)',
        expected: 'One Hundred',
      },
      {
        description: '1000 → "One Thousand"',
        call: 'numberToWords(1000)',
        expected: 'One Thousand',
      },
    ],
  },
  {
    id: 'implement-strstr',
    title: 'Реализуй indexOf (strStr)',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Строки'],
    description:
      'Реализуй функцию `strStr(haystack, needle)`, которая возвращает индекс первого вхождения строки `needle` в строку `haystack`.\n\nЕсли не найдено — верни `-1`.\n\nНельзя использовать `String.prototype.indexOf`.\n\nПример:\n- `strStr("hello", "ll")` → `2`\n- `strStr("aaaaa", "bba")` → `-1`\n- `strStr("", "")` → `0`',
    hint: 'Скользящее окно: для каждой позиции i проверяй совпадает ли подстрока haystack[i..i+needle.length] с needle.',
    initialCode: `function strStr(haystack, needle) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '"hello","ll" → 2',
        call: 'strStr("hello","ll")',
        expected: '2',
      },
      {
        description: '"aaaaa","bba" → -1',
        call: 'strStr("aaaaa","bba")',
        expected: '-1',
      },
      {
        description: '"","" → 0',
        call: 'strStr("","")',
        expected: '0',
      },
      {
        description: '"mississippi","issip" → 4',
        call: 'strStr("mississippi","issip")',
        expected: '4',
      },
    ],
  },
  {
    id: 'majority-element',
    title: 'Мажоритарный элемент',
    difficulty: 'beginner',
    tags: ['Алгоритмы', 'Массивы', 'Алгоритм Бойера-Мура'],
    description:
      'Дан массив, в котором один элемент встречается более `n/2` раз. Найди его.\n\nРеализуй функцию `majorityElement(nums)`.\n\nРеши за O(n) времени и O(1) памяти — алгоритм голосования Бойера-Мура.\n\nПример:\n- `majorityElement([3,2,3])` → `3`\n- `majorityElement([2,2,1,1,1,2,2])` → `2`',
    hint: 'Алгоритм Бойера-Мура: держи candidate и count. Если count=0 — смени кандидата. Если текущий = candidate, count++, иначе count--.',
    initialCode: `function majorityElement(nums) {
  // твой код здесь
}`,
    testCases: [
      {
        description: '[3,2,3] → 3',
        call: 'majorityElement([3,2,3])',
        expected: '3',
      },
      {
        description: '[2,2,1,1,1,2,2] → 2',
        call: 'majorityElement([2,2,1,1,1,2,2])',
        expected: '2',
      },
      {
        description: '[1] → 1',
        call: 'majorityElement([1])',
        expected: '1',
      },
    ],
  },
  {
    id: 'sort-colors',
    title: 'Сортировка цветов (Dutch flag)',
    difficulty: 'intermediate',
    tags: ['Алгоритмы', 'Массивы', 'Три указателя'],
    description:
      'Дан массив из 0, 1 и 2 (нидерландский флаг: красный/белый/синий). Отсортируй его на месте за один проход.\n\nРеализуй функцию `sortColors(nums)` (верни массив).\n\nНельзя использовать встроенную сортировку.\n\nПример: `sortColors([2,0,2,1,1,0])` → `[0,0,1,1,2,2]`',
    hint: 'Алгоритм Дейкстры: три указателя low=0, mid=0, high=n-1. Пока mid<=high: 0→swap(low,mid),low++,mid++; 1→mid++; 2→swap(mid,high),high--.',
    initialCode: `function sortColors(nums) {
  // твой код здесь
  return nums;
}`,
    testCases: [
      {
        description: '[2,0,2,1,1,0] → [0,0,1,1,2,2]',
        call: 'JSON.stringify(sortColors([2,0,2,1,1,0]))',
        expected: '[0,0,1,1,2,2]',
      },
      {
        description: '[2,0,1] → [0,1,2]',
        call: 'JSON.stringify(sortColors([2,0,1]))',
        expected: '[0,1,2]',
      },
      {
        description: '[0] → [0]',
        call: 'JSON.stringify(sortColors([0]))',
        expected: '[0]',
      },
      {
        description: '[1,2,0] → [0,1,2]',
        call: 'JSON.stringify(sortColors([1,2,0]))',
        expected: '[0,1,2]',
      },
    ],
  },
];
