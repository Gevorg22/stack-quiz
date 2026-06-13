import { CodingChallenge } from '@/types/challenge';

export const challenges: CodingChallenge[] = [
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
];
