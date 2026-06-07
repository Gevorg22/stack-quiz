import { Question } from '@/types/quiz';

export const reactQuestions: Question[] = [
  {
    id: 'react-1',
    category: 'react',
    question: 'Что такое React и для чего он используется?',
    options: [
      'Серверный фреймворк для построения REST API',
      'JavaScript-библиотека от Meta для создания пользовательских интерфейсов на основе компонентов',
      'Полноценный MVC-фреймворк с встроенным роутером и стейт-менеджером',
      'Язык разметки для описания UI-структуры',
    ],
    correctAnswer: 1,
    explanation:
      'React — это JavaScript-библиотека с открытым исходным кодом, разработанная Meta (Facebook). Она используется для создания пользовательских интерфейсов на основе переиспользуемых компонентов. React управляет только View-слоем, использует Virtual DOM для оптимизации обновлений и однонаправленный поток данных.',
  },
  {
    id: 'react-2',
    category: 'react',
    question: 'Что такое Virtual DOM в React?',
    options: [
      'Серверная копия DOM для SSR',
      'Облегчённое in-memory представление реального DOM; React сравнивает его версии (diffing) и применяет минимальные изменения в реальный DOM',
      'Браузерное расширение для визуализации DOM-дерева',
      'Теневой DOM (Shadow DOM) из спецификации Web Components',
    ],
    correctAnswer: 1,
    explanation:
      'Virtual DOM — это легковесный JavaScript-объект, отражающий структуру реального DOM. При изменении состояния React создаёт новый VDOM, сравнивает его с предыдущим (reconciliation/diffing), находит минимальный набор изменений и применяет их к реальному DOM. Это значительно эффективнее прямых манипуляций с DOM.',
  },
  {
    id: 'react-3',
    category: 'react',
    question: 'Что такое JSX?',
    options: [
      'Отдельный язык программирования на базе Java',
      'Расширение синтаксиса JavaScript, позволяющее писать HTML-подобный код внутри JS; компилируется в React.createElement()',
      'Шаблонизатор для генерации HTML на сервере',
      'Формат конфигурационных файлов для React-проектов',
    ],
    correctAnswer: 1,
    explanation:
      'JSX (JavaScript XML) — синтаксическое расширение JS, позволяющее писать структуру UI в виде HTML-подобного кода прямо в JavaScript. Babel транспилирует JSX в вызовы React.createElement(). Например, <h1>Hello</h1> превращается в React.createElement("h1", null, "Hello"). Это делает код более читаемым и декларативным.',
  },
  {
    id: 'react-4',
    category: 'react',
    question: 'Для чего используется хук useState?',
    options: [
      'Для выполнения HTTP-запросов к API',
      'Для добавления локального состояния в функциональный компонент',
      'Для создания глобального состояния приложения',
      'Для подписки на Redux store',
    ],
    correctAnswer: 1,
    explanation:
      'useState — хук React, добавляющий локальное состояние в функциональный компонент. Возвращает пару [state, setState]. При вызове setState компонент перерендеривается. Пример: const [count, setCount] = useState(0). Начальное значение передаётся как аргумент, может быть любым типом или функцией (lazy initialization).',
  },
  {
    id: 'react-5',
    category: 'react',
    question: 'Для чего используется хук useEffect?',
    options: [
      'Для оптимизации ре-рендеринга компонента',
      'Для создания и удаления DOM-элементов',
      'Для выполнения побочных эффектов: запросы к API, подписки, изменение DOM — после рендеринга компонента',
      'Для передачи данных дочерним компонентам',
    ],
    correctAnswer: 2,
    explanation:
      'useEffect выполняется после рендеринга и позволяет делать побочные эффекты: fetch-запросы, подписки на события, таймеры, изменение заголовка страницы. Принимает функцию и массив зависимостей. Пустой массив [] — эффект запускается один раз. Возвращаемая функция — cleanup (очистка). Аналог componentDidMount + componentDidUpdate + componentWillUnmount.',
  },
  {
    id: 'react-6',
    category: 'react',
    question: 'В чём разница между props и state?',
    options: [
      'Props — для функциональных компонентов, state — для классовых',
      'Props передаются родителем и неизменяемы внутри компонента; state — внутренние данные компонента, которые он сам управляет и обновляет',
      'State — глобальный, props — локальный',
      'Props и state идентичны по функционалу, разные только названия',
    ],
    correctAnswer: 1,
    explanation:
      'Props (свойства) — данные, которые родительский компонент передаёт дочернему. Они неизменяемы (read-only) внутри компонента. State — внутреннее состояние компонента, которое он может изменять сам через setState/useState. Изменение обоих вызывает ре-рендеринг. Правило: данные текут вниз через props, события поднимаются вверх через callbacks.',
  },
  {
    id: 'react-7',
    category: 'react',
    question: 'Что такое хук useMemo и когда его использовать?',
    options: [
      'Хук для мемоизации функций-обработчиков событий',
      'Хук для кэширования результатов дорогостоящих вычислений; пересчитывает значение только при изменении зависимостей',
      'Хук для запоминания ссылки на DOM-элемент',
      'Аналог useEffect для синхронных побочных эффектов',
    ],
    correctAnswer: 1,
    explanation:
      'useMemo(() => computation, [deps]) кэширует результат вычислений. Пересчёт происходит только при изменении зависимостей в массиве deps. Используйте для тяжёлых вычислений или когда нужно стабильная ссылка на объект/массив (чтобы не вызывать лишних ре-рендеров дочерних компонентов). Не злоупотребляйте — сама мемоизация имеет стоимость.',
  },
  {
    id: 'react-8',
    category: 'react',
    question: 'Что такое хук useCallback?',
    options: [
      'Хук для выполнения callback после монтирования компонента',
      'Хук для мемоизации функций — возвращает одну и ту же ссылку на функцию пока не изменятся зависимости',
      'Хук для создания обработчиков ошибок',
      'Хук для асинхронного вызова функций',
    ],
    correctAnswer: 1,
    explanation:
      'useCallback(() => fn, [deps]) возвращает мемоизированную версию функции. Без useCallback при каждом рендере создаётся новая ссылка на функцию, что может вызвать лишние ре-рендеры дочерних компонентов, обёрнутых в React.memo. useCallback полезен при передаче callbacks в оптимизированные дочерние компоненты.',
  },
  {
    id: 'react-9',
    category: 'react',
    question: 'Что такое Context API в React?',
    options: [
      'API для работы с браузерным localStorage',
      'Механизм для передачи данных через дерево компонентов без prop drilling (передачи через каждый уровень)',
      'REST API клиент, встроенный в React',
      'Способ создания глобальных CSS-переменных',
    ],
    correctAnswer: 1,
    explanation:
      'Context API позволяет передавать данные (тему, язык, пользователя) глубоко в дерево компонентов без prop drilling. createContext() создаёт контекст. Provider передаёт значение. useContext() потребляет его в любом дочернем компоненте. Подходит для глобальных данных; для сложного стейт-менеджмента лучше Redux/Zustand.',
  },
  {
    id: 'react-10',
    category: 'react',
    question: 'Что такое React.memo?',
    options: [
      'Хук для создания заметок внутри компонента',
      'HOC, оборачивающий функциональный компонент для пропуска ре-рендеринга, если props не изменились',
      'Метод для глубокого клонирования компонентов',
      'Декоратор для добавления метаданных к компоненту',
    ],
    correctAnswer: 1,
    explanation:
      'React.memo — компонент высшего порядка (HOC), который мемоизирует функциональный компонент. Если пропсы не изменились (поверхностное сравнение), компонент не перерендеривается. Аналог PureComponent для функциональных компонентов. Можно передать свою функцию сравнения вторым аргументом: React.memo(Component, areEqual).',
  },
  {
    id: 'react-11',
    category: 'react',
    question: 'Что такое HOC (Higher-Order Component)?',
    options: [
      'Компонент с большим количеством пропсов',
      'Функция, принимающая компонент и возвращающая новый компонент с расширенной функциональностью',
      'Компонент верхнего уровня в иерархии приложения',
      'Встроенный React-компонент для обработки ошибок',
    ],
    correctAnswer: 1,
    explanation:
      'HOC — паттерн для переиспользования логики компонентов. Функция принимает компонент (WrappedComponent) и возвращает новый компонент с дополнительными возможностями. Например: const withAuth = (Component) => (props) => isAuth ? <Component {...props} /> : <Redirect to="/login" />. Современная альтернатива — хуки.',
  },
  {
    id: 'react-12',
    category: 'react',
    question: 'Что такое хук useRef?',
    options: [
      'Хук для создания ссылок на другие компоненты через Redux',
      'Хук, возвращающий мутабельный ref-объект, сохраняющий значение между рендерами без вызова ре-рендеринга; используется для доступа к DOM-элементам',
      'Хук для создания реактивных ссылок на переменные состояния',
      'Хук для работы с React Router',
    ],
    correctAnswer: 1,
    explanation:
      'useRef возвращает { current: initialValue }. Изменение .current не вызывает ре-рендер. Два основных применения: 1) Доступ к DOM: const inputRef = useRef(null); <input ref={inputRef} /> — потом inputRef.current.focus(). 2) Хранение мутабельных значений между рендерами (предыдущее значение, таймер и т.д.).',
  },
  {
    id: 'react-13',
    category: 'react',
    question: 'Что такое Error Boundary в React?',
    options: [
      'TypeScript-тип для описания возможных ошибок в компоненте',
      'Классовый компонент, перехватывающий ошибки JavaScript в дереве дочерних компонентов и отображающий запасной UI',
      'Встроенный try/catch для асинхронных хуков',
      'ESLint-правило для поиска потенциальных ошибок',
    ],
    correctAnswer: 1,
    explanation:
      'Error Boundary — классовый компонент с методами componentDidCatch и/или static getDerivedStateFromError. Перехватывает ошибки в дочерних компонентах во время рендеринга, в методах жизненного цикла и в конструкторах. Не перехватывает ошибки в обработчиках событий и асинхронном коде. Позволяет показывать fallback UI вместо краша всего приложения.',
  },
  {
    id: 'react-14',
    category: 'react',
    question: 'Что такое React Portals?',
    options: [
      'Система роутинга для навигации между страницами',
      'Способ рендеринга дочерних элементов в DOM-узел вне иерархии родительского компонента',
      'API для интеграции React с другими фреймворками',
      'Метод для передачи данных между не связанными компонентами',
    ],
    correctAnswer: 1,
    explanation:
      'ReactDOM.createPortal(child, domNode) рендерит дочерний элемент в указанный DOM-узел, находящийся вне иерархии родителя. Логика React (события, контекст) продолжает работать корректно. Идеально для модальных окон, tooltips, dropdown-меню — когда нужно рендерить поверх остального контента без проблем с overflow:hidden или z-index.',
  },
  {
    id: 'react-15',
    category: 'react',
    question: 'Что такое reconciliation в React?',
    options: [
      'Процесс слияния PR в GitHub Actions для CI/CD',
      'Алгоритм React для сравнения предыдущего и нового VDOM (diffing) и минимального обновления реального DOM',
      'Способ разрешения конфликтов состояния в Redux',
      'Метод синхронизации серверного и клиентского состояния при SSR',
    ],
    correctAnswer: 1,
    explanation:
      'Reconciliation — алгоритм React для эффективного обновления DOM. React сравнивает деревья элементов (diffing). Ключевые правила: элементы разных типов — полное перестроение поддерева; одинаковые типы — обновление атрибутов; списки используют key для минимальных перестановок. Алгоритм работает за O(n) вместо O(n³) классического diff.',
  },
  {
    id: 'react-16',
    category: 'react',
    question: 'Для чего нужен атрибут key в списках React?',
    options: [
      'Для добавления уникального CSS-класса каждому элементу',
      'Для шифрования данных при передаче между компонентами',
      'Помогает React идентифицировать элементы списка при изменениях — добавление, удаление, перестановка — для минимального обновления DOM',
      'Для доступа к элементу через useRef',
    ],
    correctAnswer: 2,
    explanation:
      'key — специальный атрибут React для элементов списков. Должен быть уникальным среди siblings и стабильным (не индекс при сортировке). React использует key при reconciliation для определения, какие элементы добавлены, удалены или переставлены. Без key React не может эффективно обновить список и может некорректно сохранять состояние.',
  },
  {
    id: 'react-17',
    category: 'react',
    question: 'Что такое Suspense в React?',
    options: [
      'Хук для приостановки анимаций',
      'Компонент, позволяющий показывать fallback UI пока дочерние компоненты загружаются (lazy loading, data fetching)',
      'Обёртка для обработки асинхронных ошибок',
      'Специальный режим рендеринга для медленных устройств',
    ],
    correctAnswer: 1,
    explanation:
      'Suspense позволяет "ждать" загрузку чего-либо и показывать fallback: <Suspense fallback={<Loader />}><LazyComponent /></Suspense>. Используется с React.lazy() для code-splitting. В React 18+ поддерживает data fetching (с серверными компонентами и библиотеками типа SWR). Работает совместно с Error Boundary для обработки ошибок.',
  },
  {
    id: 'react-18',
    category: 'react',
    question: 'Что такое React.lazy()?',
    options: [
      'Метод для отложенного вычисления значений состояния',
      'Функция для динамического импорта компонентов (code splitting) — компонент загружается только когда нужен',
      'Оптимизация рендеринга для компонентов вне области видимости',
      'Хук для отложенного выполнения useEffect',
    ],
    correctAnswer: 1,
    explanation:
      'React.lazy(() => import("./Component")) позволяет динамически импортировать компоненты. Бандлер (webpack/vite) выделяет компонент в отдельный chunk, который загружается только когда компонент нужен. Обязательно использовать с Suspense для отображения состояния загрузки. Значительно улучшает начальную загрузку приложения.',
  },
  {
    id: 'react-19',
    category: 'react',
    question: 'Что такое controlled компонент (управляемый компонент)?',
    options: [
      'Компонент, управляемый родительским компонентом через ref',
      'Форм-элемент, значение которого контролируется состоянием React (через value и onChange)',
      'Компонент с доступом к Redux store',
      'Компонент с обязательными TypeScript-типами для всех props',
    ],
    correctAnswer: 1,
    explanation:
      'Управляемый компонент — форм-элемент (input, select, textarea), значение которого задаётся через пропс value, а изменения обрабатываются через onChange для обновления состояния. React является "источником истины". Противоположность — неуправляемый компонент, где значение хранится в DOM и читается через ref.',
  },
  {
    id: 'react-20',
    category: 'react',
    question: 'Что делает хук useReducer?',
    options: [
      'Уменьшает количество ре-рендеров компонента',
      'Альтернатива useState для сложной логики состояния; принимает reducer-функцию и начальное состояние, возвращает [state, dispatch]',
      'Объединяет несколько контекстов в один',
      'Хук для работы с массивами в состоянии',
    ],
    correctAnswer: 1,
    explanation:
      'useReducer(reducer, initialState) — альтернатива useState. reducer(state, action) => newState — чистая функция. dispatch({type, payload}) отправляет action. Подходит для сложного состояния с несколькими вложенными значениями или когда следующее состояние зависит от предыдущего. Паттерн схож с Redux без глобального стора.',
  },
  {
    id: 'react-21',
    category: 'react',
    question: 'Что такое prop drilling и как его избежать?',
    options: [
      'Баг при передаче props через несколько уровней вложенности',
      'Передача props через несколько промежуточных компонентов, которым они не нужны; решение — Context API, Redux, Zustand или composition',
      'Оптимизационная техника для пропуска рендеринга промежуточных компонентов',
      'TypeScript-паттерн для типизации вложенных пропсов',
    ],
    correctAnswer: 1,
    explanation:
      'Prop drilling — ситуация, когда данные передаются через несколько уровней компонентов, которым они не нужны — только чтобы добраться до вложенного компонента. Решения: 1) Context API для глобальных данных. 2) Redux/Zustand/Jotai для стейт-менеджмента. 3) Component composition — children, render props. 4) Пересмотр архитектуры компонентов.',
  },
  {
    id: 'react-22',
    category: 'react',
    question: 'Чем отличается useEffect от useLayoutEffect?',
    options: [
      'useLayoutEffect работает только в классовых компонентах',
      'useEffect выполняется после отрисовки браузером (асинхронно); useLayoutEffect — после DOM-мутаций, но до отрисовки браузером (синхронно)',
      'useLayoutEffect поддерживает async-функции, useEffect — нет',
      'Разница только в синтаксисе, функционал идентичен',
    ],
    correctAnswer: 1,
    explanation:
      'useEffect срабатывает после того, как браузер отрисовал изменения (асинхронно). useLayoutEffect — синхронно после DOM-мутаций, но до отрисовки браузером. useLayoutEffect полезен для измерения DOM-элементов и синхронного изменения DOM до того, как пользователь увидит flickering. По умолчанию используйте useEffect.',
  },
  {
    id: 'react-23',
    category: 'react',
    question: 'Что такое render props паттерн?',
    options: [
      'Передача HTML как строки через пропс',
      'Паттерн, при котором пропс является функцией, возвращающей JSX — позволяет переиспользовать логику',
      'Способ рендеринга компонентов условно',
      'Метод оптимизации рендеринга через shouldComponentUpdate',
    ],
    correctAnswer: 1,
    explanation:
      'Render props — паттерн, где компонент принимает функцию как prop (или children) и вызывает её с данными для рендеринга. Пример: <DataProvider render={(data) => <Chart data={data} />} />. Позволяет переиспользовать логику (например, mousePosition, auth state) без HOC. Современная альтернатива — кастомные хуки.',
  },
  {
    id: 'react-24',
    category: 'react',
    question: 'Что такое подъём состояния (lifting state up)?',
    options: [
      'Передача состояния в Redux store',
      'Перенос общего состояния в ближайшего общего родителя компонентов, которым оно нужно',
      'Использование useContext для глобального доступа к состоянию',
      'Оптимизация состояния для уменьшения количества ре-рендеров',
    ],
    correctAnswer: 1,
    explanation:
      'Подъём состояния — когда несколько компонентов должны отражать одни данные, состояние переносится к их общему родителю. Родитель управляет состоянием и передаёт его через props вместе с callback для обновления. Это обеспечивает единый источник истины. Классический пример — синхронизация температуры в двух полях ввода.',
  },
  {
    id: 'react-25',
    category: 'react',
    question: 'Что такое React Server Components (RSC)?',
    options: [
      'Компоненты для создания Node.js серверов на React',
      'Компоненты, рендеримые исключительно на сервере без JS в браузере; позволяют напрямую обращаться к базам данных, файловой системе и др.',
      'Компоненты с серверной валидацией форм',
      'Способ создания WebSocket-соединений в React-приложении',
    ],
    correctAnswer: 1,
    explanation:
      'React Server Components (RSC) рендерятся на сервере и не отправляют JS в браузер. Могут напрямую обращаться к БД, файловой системе, использовать секреты без утечки. В Next.js App Router все компоненты по умолчанию — Server Components. Для интерактивности используются Client Components с директивой "use client".',
  },
  {
    id: 'react-26',
    category: 'react',
    question: 'Что такое React Concurrent Mode и Concurrent Features?',
    options: [
      'Режим многопоточного выполнения React на нескольких CPU',
      'Набор функций, позволяющих React прерывать, откладывать и возобновлять рендеринг, делая UI отзывчивым во время тяжёлых обновлений',
      'Параллельная загрузка нескольких Route в Next.js',
      'Конкурентный доступ к Redux store из нескольких компонентов',
    ],
    correctAnswer: 1,
    explanation:
      'Concurrent Mode (React 18+) позволяет прерывать рендеринг. Ключевые API: startTransition — пометить обновление как некритическое (можно прерывать); useTransition — получить isPending флаг; useDeferredValue — отложить обновление значения. Это устраняет "замерзание" интерфейса при дорогих вычислениях.',
  },
  {
    id: 'react-27',
    category: 'react',
    question: 'Для чего используется хук useId()?',
    options: [
      'Генерация уникального ID пользователя для авторизации',
      'Генерация стабильного уникального ID для доступности (aria-*), гарантированно совпадающего между SSR и клиентом',
      'Создание ключа для элементов списка вместо key prop',
      'Генерация случайного UUID для API-запросов',
    ],
    correctAnswer: 1,
    explanation:
      'useId() (React 18+) генерирует уникальный ID, стабильный между SSR и гидрацией. Главное применение — доступность: const id = useId(); <label htmlFor={id}>; <input id={id} />. Не используйте для key в списках — для этого нужны данные из БД. Работает корректно при множественных экземплярах компонента.',
  },
  {
    id: 'react-28',
    category: 'react',
    question: 'Что такое хук useSyncExternalStore?',
    options: [
      'Хук для синхронизации данных с IndexedDB',
      'Хук для безопасной подписки на внешние хранилища (Redux, Zustand, браузерные API) с поддержкой Server Rendering и Concurrent Mode',
      'Синхронная версия useEffect для внешних эффектов',
      'Хук для синхронизации состояния между вкладками браузера',
    ],
    correctAnswer: 1,
    explanation:
      'useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) — правильный способ подписки на внешние источники. Решает проблему "tearing" в Concurrent Mode когда компоненты читают разные версии состояния. Redux Toolkit и Zustand используют этот хук внутри. Самостоятельно нужен при интеграции с браузерными API (window.matchMedia, localStorage).',
  },
  {
    id: 'react-29',
    category: 'react',
    question: 'Что такое forwardRef и useImperativeHandle?',
    options: [
      'Способы передать ref через Context без prop drilling',
      'forwardRef позволяет передать ref в дочерний компонент; useImperativeHandle настраивает, что именно доступно родителю через этот ref',
      'Хуки для работы с DOM-элементами только в class-компонентах',
      'Оба устарели в React 19 и заменены use()',
    ],
    correctAnswer: 1,
    explanation:
      'forwardRef(fn): компонент получает (props, ref) и пробрасывает ref к DOM или дочернему компоненту. useImperativeHandle(ref, () => ({ focus, scroll })) — ограничивает публичный API: родитель видит только явно объявленные методы, а не весь DOM-узел. Применение: Input, Modal, VideoPlayer с методами play/pause.',
  },
  {
    id: 'react-30',
    category: 'react',
    question: 'Как работает хук useTransition?',
    options: [
      'Создаёт CSS-анимацию перехода между страницами',
      'Позволяет пометить обновление состояния как некритическое; React может прерывать такой рендеринг ради срочных обновлений (например, ввод пользователя)',
      'Управляет переходами в React Router',
      'Хук для плавного появления компонентов через Suspense',
    ],
    correctAnswer: 1,
    explanation:
      'const [isPending, startTransition] = useTransition(). Внутри startTransition(() => setState(val)) — обновление некритическое. isPending === true пока transition выполняется. React может прерывать этот рендеринг, если пришло срочное обновление. Пример: фильтрация большого списка — не блокирует ввод. Аналог для значений — useDeferredValue.',
  },
  {
    id: 'react-31',
    category: 'react',
    question: 'Что такое React.memo и в чём его отличие от useMemo?',
    options: [
      'React.memo — для классовых компонентов, useMemo — для функциональных',
      'React.memo — HOC, мемоизирующий компонент (пропускает рендер при неизменных props). useMemo — хук, мемоизирующий значение внутри компонента',
      'Они идентичны, просто разный синтаксис',
      'React.memo работает с Context, useMemo — только с состоянием',
    ],
    correctAnswer: 1,
    explanation:
      'React.memo(Component, areEqual?) — оборачивает компонент: если props не изменились (shallow comparison) — рендер пропускается. useMemo(() => compute(), [deps]) — мемоизирует результат вычисления внутри компонента. Связка: React.memo + useCallback (для стабильных функций-props) предотвращает лишние рендеры дочерних компонентов.',
  },
  {
    id: 'react-32',
    category: 'react',
    question: 'Что такое Suspense и как он работает с data fetching?',
    options: [
      'Способ отложить загрузку JS-бандла через lazy import',
      'Механизм декларативного ожидания: компонент "приостанавливается" если данные не готовы, Suspense показывает fallback. Для данных нужна совместимая библиотека (React Query, Relay, Next.js)',
      'Хук для обработки промисов внутри компонентов',
      'API для постепенной гидрации серверно-рендеренных страниц',
    ],
    correctAnswer: 1,
    explanation:
      'Suspense работает через "throwing a Promise": когда компонент кидает Promise (данные не готовы), ближайший <Suspense fallback={<Spinner/>}> показывает fallback. После разрешения Promise — рендерится компонент. React Query, SWR, Relay поддерживают это нативно. В Next.js 13+ — Server Components + Streaming SSR через Suspense.',
  },
  {
    id: 'react-33',
    category: 'react',
    question: 'Что такое React Fiber?',
    options: [
      'Сторонняя библиотека для маршрутизации в React',
      'Внутренняя архитектура алгоритма согласования (reconciliation) React, позволяющая разбивать работу на единицы и приоритизировать обновления',
      'Веб-воркер для рендеринга React в фоне',
      'Формат компонента для повторного использования между приложениями',
    ],
    correctAnswer: 1,
    explanation:
      'React Fiber — переписанный алгоритм reconciliation (React 16+). Разбивает работу на маленькие единицы (fiber nodes), которые можно прерывать и возобновлять. Это основа Concurrent Mode. Каждый fiber — объект с информацией о компоненте, его состоянии, эффектах. Поддерживает приоритизацию: срочные обновления (ввод) > несрочные (аналитика).',
  },
  {
    id: 'react-34',
    category: 'react',
    question: 'Как правильно типизировать props с TypeScript в React?',
    options: [
      'Использовать PropTypes вместо TypeScript интерфейсов',
      'Определить interface/type для props и передать как generic: React.FC<Props> или явный тип параметра function Component({ name }: Props)',
      'TypeScript автоматически определяет типы props без аннотаций',
      'Использовать only any тип для гибкости',
    ],
    correctAnswer: 1,
    explanation:
      'Предпочтительный подход: interface Props { name: string; age?: number; onClick: () => void; children: React.ReactNode } и function Button({ name, onClick }: Props). React.FC<Props> добавляет children автоматически (React 17-), но React 18+ убрал это — лучше явно. Используйте React.ComponentProps<"button"> для наследования HTML-атрибутов.',
  },
  {
    id: 'react-35',
    category: 'react',
    question: 'Что такое паттерн Compound Components в React?',
    options: [
      'Компоненты, разделённые на несколько файлов',
      'Паттерн: связанные компоненты делят состояние через Context. Например: <Select><Select.Option/></Select> — Select управляет состоянием, Option его потребляет',
      'HOC-обёртки, добавляющие несколько функций компоненту',
      'Компоненты с несколькими состояниями через useReducer',
    ],
    correctAnswer: 1,
    explanation:
      'Compound Components: <Tabs> управляет activeTab, <Tabs.Tab> и <Tabs.Panel> получают это состояние через Context. Создаётся гибкий API с сохранением инкапсуляции. Реализация: Context + React.Children или sub-components как свойства. Примеры: Radix UI, React Aria, Headless UI используют этот паттерн. Даёт пользователю гибкость в расположении элементов.',
  },
  {
    id: 'react-36',
    category: 'react',
    question: 'Что такое паттерн Render Props?',
    options: [
      'Передача JSX через props вместо children',
      'Паттерн: компонент принимает функцию через prop (или children) и вызывает её с данными/состоянием для рендеринга — способ переиспользовать логику',
      'Рендеринг props-объекта как JSON в DOM',
      'Передача render-функций в HOC',
    ],
    correctAnswer: 1,
    explanation:
      'Render Props: <Mouse render={({ x, y }) => <Cursor x={x} y={y} />} />. Mouse обрабатывает логику отслеживания мыши и передаёт позицию. Children as function — вариант: <Mouse>{({ x }) => ...}</Mouse>. Сегодня большинство случаев render props заменяются кастомными хуками, но паттерн актуален для некоторых случаев (ReactQuery, Formik).',
  },
  {
    id: 'react-37',
    category: 'react',
    question: 'Что такое key prop в React и почему нельзя использовать индекс массива?',
    options: [
      'key — обязательный атрибут всех React-компонентов для доступности',
      'key помогает React идентифицировать элементы при reconciliation. Индекс массива опасен: при изменении порядка React переиспользует неправильные компоненты, что ломает состояние и вызывает баги',
      'key — шифровальный ключ для защиты данных компонента',
      'key должен быть уникален только в пределах всего приложения',
    ],
    correctAnswer: 1,
    explanation:
      'key должен быть: уникальным среди siblings, стабильным (не меняться между рендерами), идентифицирующим элемент данных. Проблема индекса: удаление/добавление/сортировка → индексы меняются → React думает что данные те же. Результат: потеря состояния input, некорректные анимации, баги в forms. Используйте ID из данных: key={item.id}.',
  },
  {
    id: 'react-38',
    category: 'react',
    question: 'Что такое batch updates в React 18?',
    options: [
      'Массовое обновление props через Object.assign',
      'Автоматическая группировка нескольких setState вызовов в один ре-рендер. React 18 расширил batching на все контексты: async, setTimeout, Promise',
      'Batch-запросы к серверу из нескольких компонентов',
      'Оптимизация загрузки компонентов через code splitting',
    ],
    correctAnswer: 1,
    explanation:
      'React 16/17: batching только в обработчиках событий. React 18: Automatic Batching везде. Пример: setTimeout(() => { setState1(v1); setState2(v2); }) — два setState = один ре-рендер. Это снижает количество рендеров. Для отключения: flushSync(() => setState(v)) — заставляет немедленный синхронный рендер. Улучшает производительность без изменения кода.',
  },
  {
    id: 'react-39',
    category: 'react',
    question: 'Как работает createPortal в React?',
    options: [
      'Создаёт отдельное React-приложение внутри текущего',
      'Рендерит дочерние компоненты в другой DOM-узел вне родительской иерархии, сохраняя React-контекст и обработку событий',
      'Создаёт портал для обмена данными между приложениями',
      'Способ рендерить компоненты в Shadow DOM',
    ],
    correctAnswer: 1,
    explanation:
      'ReactDOM.createPortal(children, domNode) — рендерит children внутри domNode, который может находиться вне React-root. События всплывают по React-дереву (не DOM): клик на Modal → обработчик в родителе. Контекст работает. Применения: модальные окна, тултипы, всплывающие меню — чтобы z-index работал без ограничений overflow: hidden.',
  },
  {
    id: 'react-40',
    category: 'react',
    question: 'Что такое React DevTools Profiler и как им пользоваться?',
    options: [
      'Инструмент для профилирования сетевых запросов в React-приложениях',
      'Вкладка в React DevTools для записи и анализа рендеров: показывает что рендерилось, как долго и почему — помогает найти узкие места производительности',
      'Логгер prop-изменений для debugging',
      'Инструмент для измерения размера бандла React-приложения',
    ],
    correctAnswer: 1,
    explanation:
      'Profiler: Record → взаимодействуй → Stop. Flamegraph показывает каждый рендер по времени. "Why did this render?" — показывает изменившиеся props/state/hooks. Компоненты серого цвета — не рендерились. Оранжевые/красные — долгий рендер. <Profiler id="Nav" onRender={cb}> — программный профилинг. Ищи лишние рендеры React.memo-кандидатов.',
  },
  {
    id: 'react-41',
    category: 'react',
    question: 'Что такое Controlled vs Uncontrolled компоненты?',
    options: [
      'Controlled — с TypeScript, Uncontrolled — с PropTypes',
      'Controlled: значение формы управляется React state (value + onChange). Uncontrolled: значение хранится в DOM, доступно через ref (defaultValue). Controlled — рекомендуется для React',
      'Controlled — класс-компоненты, Uncontrolled — функциональные',
      'Uncontrolled обновляются быстрее, так как не вызывают ре-рендер',
    ],
    correctAnswer: 1,
    explanation:
      'Controlled: <input value={state} onChange={e => setState(e.target.value)} /> — React — источник истины, мгновенная валидация. Uncontrolled: <input defaultValue="init" ref={inputRef} /> — DOM — источник истины, значение через inputRef.current.value. Когда uncontrolled оправдан: интеграция со сторонними DOM-библиотеками, файловые поля (input type="file").',
  },
  {
    id: 'react-42',
    category: 'react',
    question: 'Что такое хук useLayoutEffect и когда использовать вместо useEffect?',
    options: [
      'useLayoutEffect для CSS-анимаций, useEffect для запросов к API',
      'useLayoutEffect срабатывает синхронно после всех DOM-мутаций, но до отрисовки браузером — используйте для чтения layout и синхронных DOM-манипуляций',
      'useLayoutEffect — устаревший хук, заменённый useEffect в React 18',
      'useLayoutEffect работает только в Server Components',
    ],
    correctAnswer: 1,
    explanation:
      'Порядок: DOM-мутации → useLayoutEffect (синхронно) → браузер рисует → useEffect (асинхронно). useLayoutEffect блокирует отрисовку — используйте только когда необходимо: измерение DOM (getBoundingClientRect), предотвращение мигания при позиционировании тултипов, синхронная анимация. В SSR useLayoutEffect выдаёт предупреждение — используйте useEffect или проверку typeof window.',
  },
  {
    id: 'react-43',
    category: 'react',
    question: 'Как реализовать оптимистичные обновления (Optimistic Updates) в React?',
    options: [
      'Через специальный хук useOptimistic из React core',
      'Немедленно обновить UI до получения ответа сервера; при ошибке — откатить. React 19 добавил useOptimistic хук. В React 18 — вручную через временный state',
      'Используя React Query с автоматическим кэшированием',
      'Только через Redux с middleware для async действий',
    ],
    correctAnswer: 1,
    explanation:
      'Optimistic UI: 1) Пользователь нажал "Лайк". 2) Немедленно обновили state (UI показывает лайк). 3) Отправили запрос. 4) Успех — всё хорошо; Ошибка — откатили state. React 19: useOptimistic(state, updater) — автоматически откатывает при ошибке. React Query/SWR: onMutate callback + context для rollback. Улучшает воспринимаемую скорость.',
  },
  {
    id: 'react-44',
    category: 'react',
    question: 'Что такое React 19 и какие ключевые изменения он вносит?',
    options: [
      'Полная переработка архитектуры с несовместимым API',
      'Actions (async transitions), use() хук, useOptimistic, Server Actions, улучшенный ref (как обычный prop), автоматическая мемоизация через React Compiler',
      'Введение нового JSX синтаксиса несовместимого с JSX 2.0',
      'Только performance-улучшения без изменений API',
    ],
    correctAnswer: 1,
    explanation:
      'React 19: 1) Actions — функции для async операций в transitions. 2) useActionState, useFormStatus. 3) use(Promise) — читает промис в рендере (с Suspense). 4) useOptimistic. 5) Server Actions — функции сервера, вызываемые с клиента. 6) ref как обычный prop (без forwardRef). 7) React Compiler (экспериментальный) — автоматическая мемоизация.',
  },
  {
    id: 'react-45',
    category: 'react',
    question: 'Что такое паттерн "Container/Presentational" (умные/глупые компоненты)?',
    options: [
      'Разделение компонентов по размеру: большие и маленькие',
      'Container: содержит бизнес-логику, работает с данными/состоянием. Presentational: только UI, получает данные через props, не знает об источнике данных',
      'Container — серверный компонент, Presentational — клиентский',
      'Разделение по расположению в файловой структуре',
    ],
    correctAnswer: 1,
    explanation:
      'Паттерн разделяет ответственность: Container (Smart) управляет состоянием, делает запросы, содержит логику. Presentational (Dumb) — чистый UI компонент, легко тестировать, переиспользовать, менять внешний вид. С хуками граница размылась: хуки вынесли логику без необходимости в отдельных компонентах-контейнерах. Тем не менее принцип разделения актуален.',
  },
  {
    id: 'react-46',
    category: 'react',
    question: 'Как работает алгоритм Reconciliation в React?',
    options: [
      'Полное пересоздание DOM при каждом setState',
      'Сравнение нового и предыдущего Virtual DOM дерева по правилам: разные типы → полная замена; одинаковые типы → обновление атрибутов; списки → сравнение по key',
      'Сравнение JSON-представлений компонентов',
      'Браузерный алгоритм из спецификации W3C',
    ],
    correctAnswer: 1,
    explanation:
      'Reconciliation (React Diffing): 1) Разные типы элементов (<div> → <span>) — React уничтожает поддерево и создаёт новое. 2) Одинаковые типы DOM — обновляет только изменившиеся атрибуты. 3) Одинаковые типы компонентов — обновляет props, вызывает рендер. 4) Списки — сравнение по key. O(n) вместо O(n³) за счёт эвристик.',
  },
  {
    id: 'react-47',
    category: 'react',
    question: 'Что такое Zustand и чем отличается от Redux?',
    options: [
      'Zustand — немецкое слово для компонента',
      'Zustand — минималистичная state management библиотека: нет boilerplate (actions/reducers), простой API через хуки, автоматический ре-рендер только при изменении используемого среза',
      'Zustand — альтернативное название React Context',
      'Zustand работает только с TypeScript, Redux — с JavaScript',
    ],
    correctAnswer: 1,
    explanation:
      'Zustand: const useStore = create((set) => ({ count: 0, inc: () => set(s => ({count: s.count+1})) })). В компоненте: const count = useStore(s => s.count). Особенности: без Provider, без боilerplate, гранулярные подписки (ре-рендер только если нужное поле изменилось), работает вне React. Redux Toolkit — больше структуры, DevTools, middleware для сложных приложений.',
  },
  {
    id: 'react-48',
    category: 'react',
    question: 'Что такое React Query (TanStack Query) и для чего используется?',
    options: [
      'ORM для работы с базами данных из React-компонентов',
      'Библиотека для управления серверным состоянием: fetching, caching, synchronization, background updates с минимальным кодом',
      'Инструмент для написания GraphQL-запросов в React',
      'State manager специально для форм',
    ],
    correctAnswer: 1,
    explanation:
      'React Query разделяет серверное и клиентское состояние. const { data, isLoading, error } = useQuery({ queryKey: ["user", id], queryFn: () => fetchUser(id) }). Автоматически: кэширует, дедуплицирует запросы, обновляет при фокусе окна, retry при ошибке. useMutation для мутаций + invalidateQueries для инвалидации кэша. Заменяет useEffect для data fetching.',
  },
  {
    id: 'react-49',
    category: 'react',
    question: 'Как работает React Testing Library и каков её подход?',
    options: [
      'Тестирует внутреннюю реализацию компонентов через state и methods',
      'Тестирует поведение с точки зрения пользователя: находит элементы по роли/тексту, симулирует взаимодействия, проверяет результат — "чёрный ящик"',
      'Только unit-тесты отдельных функций, без рендеринга компонентов',
      'Snapshot-тестирование HTML-вывода компонентов',
    ],
    correctAnswer: 1,
    explanation:
      'RTL принцип: "Тестируйте код так, как его используют пользователи". getByRole("button", {name: "Submit"}), getByText("Привет"), findByLabelText("Email"). userEvent.click(), userEvent.type(). waitFor, findBy для async. Не тестируйте: state, className, ref — тестируйте поведение. В паре с Jest и jest-dom matchers (toBeInTheDocument, toBeDisabled).',
  },
  {
    id: 'react-50',
    category: 'react',
    question: 'Что такое Server Actions в Next.js App Router?',
    options: [
      'API роуты, написанные на сервере для обработки форм',
      'Функции с директивой "use server", вызываемые с клиента как обычные функции; Next.js транслирует их в RPC-вызовы к серверу без ручного создания API',
      'Middleware функции для обработки серверных событий',
      'WebSocket handlers для real-time коммуникации',
    ],
    correctAnswer: 1,
    explanation:
      '"use server" в теле функции или вверху файла — создаёт Server Action. Можно передать как action в form: <form action={serverFn}>. Или вызвать из обработчика: await submitData(formData). Next.js автоматически создаёт эндпоинт, сериализует аргументы. Интеграция с useFormStatus (isPending) и useActionState для обработки результата.',
  },
  {
    id: 'react-51',
    category: 'react',
    question: 'Что такое паттерн "Custom Hook" и каковы правила его создания?',
    options: [
      'Хук, написанный на TypeScript вместо JavaScript',
      'Функция с именем "use...", использующая встроенные хуки для инкапсуляции и переиспользования логики состояния. Подчиняется всем Rules of Hooks',
      'Способ создать новый примитивный хук на уровне React',
      'Только хуки, работающие с внешними API или базами данных',
    ],
    correctAnswer: 1,
    explanation:
      'Custom Hook: function useWindowSize() { const [size, setSize] = useState(...); useEffect(() => {...}, []); return size; }. Правила: 1) Имя начинается с "use". 2) Вызывает только другие хуки. 3) Подчиняется Rules of Hooks (нельзя в условиях). Позволяет: переиспользовать логику, тестировать отдельно, разделить компоненты. Примеры: useFetch, useDebounce, useLocalStorage.',
  },
  {
    id: 'react-52',
    category: 'react',
    question: 'Что такое Streaming SSR в Next.js и как работает с Suspense?',
    options: [
      'Потоковая передача видео через React-компоненты',
      'Сервер отправляет HTML частями по мере готовности: сначала shell страницы, затем содержимое каждого Suspense-блока — пользователь видит контент быстрее',
      'WebSocket соединение между сервером и клиентом для обновления UI',
      'Параллельная загрузка нескольких страниц в фоне',
    ],
    correctAnswer: 1,
    explanation:
      'Streaming SSR: сервер не ждёт загрузки всех данных. Shell (<Layout>) отправляется немедленно. Каждый <Suspense> — независимый chunk. Когда данные готовы — сервер стримит HTML с inline-скриптом для замены fallback. TTFB снижается. В Next.js: loading.tsx автоматически создаёт Suspense. Совместно с React Server Components — мощное решение.',
  },
  {
    id: 'react-53',
    category: 'react',
    question: 'Как работает хук useReducer и когда предпочесть useState?',
    options: [
      'useReducer — более медленный аналог useState для Redux-совместимости',
      'useReducer(reducer, initialState) управляет сложным состоянием через чистую функцию reducer(state, action) → newState. Предпочтителен при: сложной логике, множестве подсостояний, state-машинах',
      'useReducer только для массивов и объектов, useState — для примитивов',
      'useReducer требует установки Redux как зависимости',
    ],
    correctAnswer: 1,
    explanation:
      'useReducer идеален когда: следующий state зависит от предыдущего сложным образом, несколько связанных подсостояний, сложные переходы состояний (state machines). const [state, dispatch] = useReducer(reducer, init). dispatch({ type: "INCREMENT" }). Reducer — чистая функция: легко тестировать, предсказуема. useState проще для независимых простых значений.',
  },
  {
    id: 'react-54',
    category: 'react',
    question: 'Что такое React.lazy() и dynamic import в Next.js?',
    options: [
      'Способ замедлить рендеринг компонента для отладки',
      'Динамический импорт компонента — загружается только при первом рендере. React.lazy + Suspense в React; next/dynamic в Next.js с поддержкой SSR-опции',
      'Ленивая инициализация состояния через функцию в useState',
      'Способ загрузить CSS-стили только при необходимости',
    ],
    correctAnswer: 1,
    explanation:
      'React.lazy(() => import("./HeavyComponent")) + <Suspense fallback={<Spinner/>}>. Webpack/Vite создаёт отдельный chunk, загружаемый по требованию. Next.js: const Map = dynamic(() => import("./Map"), { loading: () => <Spin/>, ssr: false }). ssr:false для клиент-only библиотек (leaflet, D3). Снижает initial bundle size — ключевая оптимизация производительности.',
  },
  {
    id: 'react-55',
    category: 'react',
    question: 'Что такое паттерн "Provider Pattern" в React?',
    options: [
      'Способ предоставить доступ к интернету в офлайн-режиме',
      'Паттерн: компонент-Provider оборачивает дерево и предоставляет данные/функции через Context без prop drilling',
      'HOC для внедрения внешних зависимостей в компоненты',
      'Фабричная функция для создания компонентов',
    ],
    correctAnswer: 1,
    explanation:
      'Provider Pattern: создаём Context, Provider компонент с состоянием и хук для потребления. const ThemeContext = createContext(); function ThemeProvider({ children }) { const [theme, setTheme] = useState("dark"); return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>; }. const useTheme = () => useContext(ThemeContext). Паттерн используют React Router, Redux, все крупные библиотеки.',
  },
  {
    id: 'react-56',
    category: 'react',
    question: 'Как избежать prop drilling в React?',
    options: [
      'Передавать все props через один объект config',
      'Использовать Context API, state management (Zustand, Redux), composition (component injection), или переосмыслить структуру компонентов',
      'Использовать только глобальные переменные вместо props',
      'Prop drilling — необходимость React, которую нельзя избежать',
    ],
    correctAnswer: 1,
    explanation:
      'Решения prop drilling: 1) Context API — для глобальных данных (тема, пользователь, локаль). 2) State management (Zustand, Redux) — для сложного глобального состояния. 3) Component Composition — передавать компоненты как children или render props. 4) Переосмыслить структуру: часто данные нужны только в одном месте и структуру можно упростить.',
  },
  {
    id: 'react-57',
    category: 'react',
    question: 'Что такое Hydration в React и проблема гидрации?',
    options: [
      'Процесс загрузки данных с сервера в React-приложение',
      'Процесс присоединения React к серверному HTML: React воссоздаёт VDOM и добавляет обработчики событий к уже существующему DOM',
      'Добавление CSS-переменных к серверно-рендеренным компонентам',
      'Оптимизация памяти браузера при работе с большим DOM',
    ],
    correctAnswer: 1,
    explanation:
      'Гидрация (Hydration): сервер генерирует HTML → браузер показывает (быстро) → React загружается → гидрирует (добавляет обработчики). Если серверный и клиентский HTML различаются — hydration mismatch (предупреждение). Причины mismatch: случайные значения, Date.now(), window — используйте useEffect или suppressHydrationWarning. Selective Hydration (React 18) — гидрирует компоненты по приоритету.',
  },
  {
    id: 'react-58',
    category: 'react',
    question: 'Что такое паттерн "State Machine" в React и когда применять?',
    options: [
      'Способ управлять состоянием через Redux actions',
      'Явное моделирование конечных состояний (idle, loading, success, error) и переходов между ними — исключает невозможные состояния и упрощает логику',
      'Паттерн для работы с формами с множеством полей',
      'Управление состоянием через URL параметры',
    ],
    correctAnswer: 1,
    explanation:
      'State Machine: вместо isLoading/isError/isSuccess (16 комбинаций!) — один state: "idle"|"loading"|"success"|"error". XState — библиотека для сложных машин состояний. Простая реализация: useReducer с action-type переходами. Преимущества: невозможные состояния невозможны (isLoading && isSuccess нет), визуализация через XState Viz, легкая отладка.',
  },
  {
    id: 'react-59',
    category: 'react',
    question: 'Как работает React.StrictMode?',
    options: [
      'Включает TypeScript strict mode для React-файлов',
      'Обёртка для разработки: двойной вызов render/lifecycle для обнаружения побочных эффектов, предупреждения об устаревших API, проверка unexpected side effects',
      'Запрещает использование deprecated APIs в production',
      'Применяет строгую типизацию к props без TypeScript',
    ],
    correctAnswer: 1,
    explanation:
      'StrictMode только в development: 1) Двойной рендер компонентов (React 18+) — находит неидемпотентные render. 2) Двойной вызов useEffect (mount → unmount → mount) — проверяет корректность cleanup. 3) Предупреждения об устаревших API (findDOMNode, legacy Context). Помогает подготовиться к Concurrent Mode. В production режиме не влияет на производительность.',
  },
  {
    id: 'react-60',
    category: 'react',
    question: 'Что такое React use() хук (React 19)?',
    options: [
      'Универсальный хук, заменяющий все остальные хуки',
      'Хук для чтения ресурсов в рендере: use(promise) приостанавливает рендер до разрешения (с Suspense), use(context) — читает контекст условно',
      'Способ вызывать Server Actions с клиента',
      'Замена useEffect для асинхронных операций',
    ],
    correctAnswer: 1,
    explanation:
      'use() (React 19): use(promise) — приостанавливает рендер, Suspense показывает fallback, после разрешения продолжает рендер с данными. use(context) — читает контекст, в отличие от useContext можно вызывать условно. Пример: const data = use(fetchUserPromise). Важно: промис нужно создавать вне компонента или мемоизировать чтобы не пересоздавать на каждый рендер.',
  },
  {
    id: 'react-61',
    category: 'react',
    question: 'Что такое "правила хуков" (Rules of Hooks) и почему они существуют?',
    options: [
      'Конвенции именования: все хуки должны начинаться с "use"',
      'Хуки нельзя вызывать в условиях, циклах, вложенных функциях — только на верхнем уровне функционального компонента/хука. Это гарантирует стабильный порядок вызовов между рендерами',
      'Хуки можно вызывать только в компонентах, но не в утилитах',
      'Максимальное количество хуков в компоненте — 10',
    ],
    correctAnswer: 1,
    explanation:
      'React хранит состояние хуков в порядке их вызова (связанный список). Если порядок меняется (из-за условия) — React не знает какое состояние какому хуку соответствует. Отсюда правила: 1) Только на верхнем уровне. 2) Только в React функциях. ESLint плагин eslint-plugin-react-hooks автоматически проверяет. useRef для флагов внутри условий — решение.',
  },
  {
    id: 'react-62',
    category: 'react',
    question: 'Как оптимизировать Context API для предотвращения лишних ре-рендеров?',
    options: [
      'Использовать только один глобальный Context для всего приложения',
      'Разделить Context на независимые части (state и dispatch), мемоизировать value через useMemo, использовать Context Selector паттерн или Zustand/Jotai',
      'Добавить React.memo к Provider',
      'Использовать useCallback для всех функций в Context',
    ],
    correctAnswer: 1,
    explanation:
      'Проблема: все подписчики Context ре-рендерятся при любом изменении value. Решения: 1) Разделить: StateContext + DispatchContext — компоненты с dispatch не рендерятся при смене state. 2) useMemo для value объекта. 3) use-context-selector (библиотека) — подписка на часть контекста. 4) Jotai/Zustand — атомарное состояние без этих проблем.',
  },
  {
    id: 'react-63',
    category: 'react',
    question: 'Что такое паттерн "Hooks Composition" и как он заменяет HOC?',
    options: [
      'Использование нескольких useEffect в одном хуке',
      'Кастомные хуки, комбинирующие другие хуки для создания переиспользуемой логики — более чистая и TypeScript-friendly альтернатива HOC без wrapper hell',
      'Способ передать хуки между компонентами через props',
      'Паттерн для создания хуков с зависимостями друг от друга',
    ],
    correctAnswer: 1,
    explanation:
      'HOC недостатки: wrapper hell, проблемы с TypeScript generic, конфликт имён props, сложная отладка. Custom hooks решают: useAuth() + usePermissions() + useAnalytics() — просто вызвать 3 хука вместо 3 HOC. Прозрачно для TypeScript. Нет wrapper компонентов в DevTools. Composition: function useFeature() { const auth = useAuth(); const data = useFetch(auth.token); return data; }.',
  },
  {
    id: 'react-64',
    category: 'react',
    question: 'Что такое React Compiler (бывший React Forget)?',
    options: [
      'Инструмент для компиляции JSX в оптимизированный нативный код',
      'Компилятор, автоматически добавляющий мемоизацию (useMemo/useCallback/React.memo) — устраняет необходимость ручной оптимизации производительности',
      'TypeScript компилятор с React-специфичными оптимизациями',
      'Babel плагин для трансформации JSX в React.createElement',
    ],
    correctAnswer: 1,
    explanation:
      'React Compiler (React 19+, экспериментальный) — статический анализ компонентов и автоматическое добавление мемоизации. Разработчику не нужно думать: useMemo или useCallback? Компилятор сам понимает зависимости. Основан на понимании семантики React и JavaScript. Тестировался на Instagram — снижение ненужных рендеров без изменения кода.',
  },
  {
    id: 'react-65',
    category: 'react',
    question: 'Как работает Server-Side Rendering (SSR) в React и Next.js?',
    options: [
      'React рендерится только на сервере без клиентского JS',
      'HTML генерируется на сервере при каждом запросе: быстрый FCP, SEO-дружелюбно. Next.js: getServerSideProps (Pages Router) или async Server Components (App Router)',
      'SSR — устаревший подход, заменённый Client-Side Rendering',
      'Сервер кэширует HTML навсегда после первого запроса',
    ],
    correctAnswer: 1,
    explanation:
      'SSR: каждый запрос → сервер рендерит HTML → отправляет → гидрация. Преимущества: быстрый FCP/FMP, SEO. Минусы: медленный TTFB, нагрузка на сервер. Next.js App Router: Server Components рендерятся на сервере, могут быть async. Стратегии кэширования: fetch с cache: "force-cache" (SSG), "no-store" (SSR), revalidate (ISR).',
  },
  {
    id: 'react-66',
    category: 'react',
    question: 'Что такое Jotai и чем отличается от Zustand и Redux?',
    options: [
      'Jotai — японский фреймворк для создания React-приложений',
      'Jotai — атомарный state management: состояние разбито на мелкие атомы, компонент подписывается только на нужные — минимальные ре-рендеры без selector-функций',
      'Jotai — более быстрый Redux с меньшим boilerplate',
      'Jotai для React Native, Zustand для веб',
    ],
    correctAnswer: 1,
    explanation:
      'Jotai (атомарный, как Recoil): const countAtom = atom(0). В компоненте: const [count, setCount] = useAtom(countAtom). Компонент подписывается на конкретный атом — ре-рендер только при его изменении. Derived atoms: atom(get => get(countAtom) * 2). Async atoms с Suspense. Vs Zustand: Jotai bottom-up (много атомов), Zustand top-down (один store).',
  },
  {
    id: 'react-67',
    category: 'react',
    question: 'Что такое React DevTools и какие возможности предоставляет?',
    options: [
      'Только инструмент для просмотра HTML структуры React-приложения',
      'Браузерное расширение: инспектор дерева компонентов с props/state/hooks, Profiler для анализа производительности, поиск почему компонент ре-рендерился',
      'Командная строка для анализа bundle size React-приложений',
      'Встроенный в браузер инструмент без установки',
    ],
    correctAnswer: 1,
    explanation:
      'React DevTools: 1) Components вкладка — дерево компонентов, props, state, hooks, context. Можно редактировать state на лету. 2) Profiler — запись рендеров, flamegraph, "why did this render?". 3) Highlight updates — мигание ре-рендеримых компонентов. 4) $r в консоли — ссылка на выбранный компонент. Незаменимый инструмент для отладки.',
  },
  {
    id: 'react-68',
    category: 'react',
    question: 'Что такое паттерн "Headless Components" или Headless UI?',
    options: [
      'Компоненты без head секции в HTML',
      'Компоненты, содержащие только логику и состояние без UI — потребитель полностью контролирует внешний вид. Примеры: Radix UI, Headless UI, React Aria',
      'Server Components без клиентского JavaScript',
      'Компоненты, работающие без React Runtime',
    ],
    correctAnswer: 1,
    explanation:
      'Headless components разделяют: логику (доступность, keyboard navigation, state) и UI. Библиотека предоставляет поведение, разработчик — стили. Пример: <Dialog.Root><Dialog.Overlay><Dialog.Content> — никакого встроенного CSS. Contrast с Material UI (стилизованные компоненты). Тренд: Radix, Headless UI (Tailwind), React Aria (Adobe), Ark UI, Park UI.',
  },
  {
    id: 'react-69',
    category: 'react',
    question: 'Как работает Next.js Image компонент и какие оптимизации даёт?',
    options: [
      'Обычный тег img с дополнительными проверками TypeScript',
      'Автоматическая оптимизация: WebP/AVIF конвертация, lazy loading, предотвращение CLS через width/height, responsive srcset, blur placeholder, on-demand resize через встроенный Image API',
      'Только добавляет loading="lazy" к стандартному img тегу',
      'Компонент только для показа SVG-изображений',
    ],
    correctAnswer: 1,
    explanation:
      'next/image: автоматически конвертирует в WebP/AVIF (меньший размер), lazy loading по умолчанию, обязательные width/height предотвращают CLS (Cumulative Layout Shift), responsive images через sizes prop, blur-up placeholder (blurDataURL), оптимизация через CDN-подобный Image Optimization API. Критически важно для Core Web Vitals (LCP улучшение).',
  },
  {
    id: 'react-70',
    category: 'react',
    question: 'Что такое React Suspense для гидрации и Selective Hydration?',
    options: [
      'Способ загружать компоненты по порядку, один за другим',
      'React 18: каждый Suspense-блок гидрируется независимо. React приоритизирует гидрацию компонента, с которым взаимодействует пользователь, прерывая гидрацию других',
      'Отложенная гидрация всей страницы до полной загрузки JS',
      'Способ сохранить состояние при серверной гидрации',
    ],
    correctAnswer: 1,
    explanation:
      'Selective Hydration (React 18): вместо гидрации всего дерева сразу — каждый <Suspense> гидрируется независимо. Если пользователь кликает на компонент во время гидрации — React немедленно приоритизирует его гидрацию. "Interaction-driven hydration". Совместно со Streaming SSR и Progressive Hydration — максимально быстрый Time to Interactive.',
  },
  {
    id: 'react-71',
    category: 'react',
    question: 'Что такое ISR (Incremental Static Regeneration) в Next.js?',
    options: [
      'Постепенная миграция проекта с Pages Router на App Router',
      'Гибрид SSG и SSR: страница генерируется статически, но автоматически перегенерируется в фоне при запросе после истечения revalidate времени',
      'Инкрементальная сборка — только изменённые страницы пересобираются',
      'Способ добавить новые страницы без полного деплоя',
    ],
    correctAnswer: 1,
    explanation:
      'ISR: fetch(url, { next: { revalidate: 60 } }) — страница кэшируется 60 секунд. После первого запроса по истечении TTL: показывается стale версия, в фоне генерируется новая. Stale-While-Revalidate паттерн. On-demand revalidation: revalidatePath("/blog") или revalidateTag("posts") в Server Action. Баланс между fresh данными и производительностью SSG.',
  },
  {
    id: 'react-72',
    category: 'react',
    question: 'Что такое паттерн "Polymorphic Component" в React?',
    options: [
      'Компонент, работающий с несколькими типами данных',
      'Компонент, который рендерит разный HTML-тег через as prop: <Button as="a" href="..."> рендерит <a>, сохраняя стили и логику кнопки',
      'HOC для объединения нескольких компонентов в один',
      'Компонент с условным рендерингом нескольких layouts',
    ],
    correctAnswer: 1,
    explanation:
      'Polymorphic Component (as prop): <Text as="h1">, <Text as="span">, <Button as="a" href="/...">. TypeScript реализация с generics: function Button<T extends ElementType = "button">({ as, ...props }: PolymorphicProps<T>). Используется в: Mantine, Chakra UI, Radix UI. Позволяет сохранять семантику HTML при переиспользовании стилей.',
  },
  {
    id: 'react-73',
    category: 'react',
    question: 'Как работает оптимизация с помощью virtualisation (виртуализации) списков?',
    options: [
      'Загрузка списка в виртуальную память браузера',
      'Рендерится только видимая часть списка; DOM-узлы повторно используются при прокрутке. react-virtual, react-window, TanStack Virtual — популярные библиотеки',
      'Кэширование элементов списка в IndexedDB',
      'Разбиение длинного списка на несколько страниц (пагинация)',
    ],
    correctAnswer: 1,
    explanation:
      'Виртуализация решает проблему: 10000 DOM-узлов = медленный рендер, memoria. Библиотека рендерит только ~20 видимых + несколько вне экрана (overscan). При прокрутке — переиспользует DOM-узлы с новыми данными. Требования: фиксированная или измеримая высота строки. TanStack Virtual — самый гибкий, react-window — простой. Ключевая оптимизация для таблиц, лент.',
  },
  {
    id: 'react-74',
    category: 'react',
    question: 'Что такое паттерн "Atomic Design" применительно к React?',
    options: [
      'Стиль CSS-архитектуры только для React-проектов',
      'Методология структурирования компонентов: Atoms (Button) → Molecules (SearchBar) → Organisms (Header) → Templates (PageLayout) → Pages',
      'Паттерн для работы с Jotai атомарным состоянием',
      'Система деизайн-токенов для тем оформления',
    ],
    correctAnswer: 1,
    explanation:
      'Atomic Design (Брэд Фрост): Atoms — базовые: Button, Input, Label. Molecules — группы атомов: SearchBar = Input + Button. Organisms — сложные секции: Header = Logo + Nav + SearchBar. Templates — структура страниц без данных. Pages — конкретные экземпляры. Плюсы: переиспользование, масштабируемость. Минусы: размытые границы, оверинжиниринг для малых проектов.',
  },
  {
    id: 'react-75',
    category: 'react',
    question: 'Что такое Storybook и как он используется в React-разработке?',
    options: [
      'Библиотека книжных историй для контент-сайтов',
      'Инструмент разработки UI-компонентов в изоляции: каждый "story" демонстрирует состояние компонента. Используется для документации, тестирования, design system',
      'CMS для управления историями пользователей в Agile',
      'Способ хранить историю изменений компонентов в Git',
    ],
    correctAnswer: 1,
    explanation:
      'Storybook: разрабатывай компоненты без запуска всего приложения. Story — конкретное состояние компонента: Primary, Disabled, Loading. Автодокументация через args и JSDoc. Аддоны: a11y (проверка доступности), viewport (адаптивность), interactions (автотесты). Используется в крупных компаниях для Design System: Airbnb, IBM, GitHub. Интеграция с Chromatic для визуальных регрессий.',
  },
];
