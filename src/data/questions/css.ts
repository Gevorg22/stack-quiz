import { Question } from '@/types/quiz';

export const cssQuestions: Question[] = [
  {
    id: 'css-1',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое специфичность (specificity) в CSS?',
    options: [
      'Скорость применения CSS-правил к элементам',
      'Алгоритм определения приоритета CSS-правил: какой стиль победит при конфликте — рассчитывается по весу селекторов (inline > ID > class > tag)',
      'Порядок подключения CSS-файлов в HTML',
      'Совместимость CSS-свойств с разными браузерами',
    ],
    correctAnswer: 1,
    explanation:
      'Специфичность — система весов для определения победившего CSS-правила. Порядок приоритетов (от высшего): 1) !important. 2) Инлайн-стили (1000). 3) ID-селекторы (100). 4) Классы, атрибуты, псевдоклассы (10). 5) Теги, псевдоэлементы (1). При равной специфичности побеждает последнее правило.',
  },
  {
    id: 'css-2',
    difficulty: 'beginner',
    category: 'css',
    question: 'В чём разница между Flexbox и Grid?',
    options: [
      'Flexbox для мобильных, Grid только для десктопов',
      'Flexbox — одномерная раскладка (ряд или колонка); Grid — двумерная (строки И колонки одновременно)',
      'Grid устарел, Flexbox — современный стандарт',
      'Flexbox используется для изображений, Grid — для текста',
    ],
    correctAnswer: 1,
    explanation:
      'Flexbox идеален для одномерных раскладок: либо по строкам, либо по столбцам (navigation bar, группа кнопок). Grid создан для двумерных раскладок: строки И столбцы одновременно (page layout, card grid). Они дополняют друг друга — часто используют Grid для макета страницы и Flexbox для отдельных компонентов внутри.',
  },
  {
    id: 'css-3',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое блочная модель (box model) в CSS?',
    options: [
      'Модель для создания блочных элементов через display:block',
      'Прямоугольная модель, описывающая пространство вокруг каждого элемента: content, padding, border, margin',
      'Метод рисования прямоугольников через CSS-свойства',
      'Система координат для позиционирования элементов',
    ],
    correctAnswer: 1,
    explanation:
      'Box model — основа CSS-раскладки. Каждый элемент — прямоугольник с 4 слоями: content (содержимое), padding (внутренние отступы), border (граница), margin (внешние отступы). По умолчанию (content-box) width/height задают размер content. box-sizing: border-box включает padding и border в width/height — гораздо удобнее для расчётов.',
  },
  {
    id: 'css-4',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что делает свойство position: sticky?',
    options: [
      'Фиксирует элемент относительно viewport, как position: fixed',
      'Элемент ведёт себя как relative, пока не достигнет заданного threshold при прокрутке, затем "прилипает" как fixed',
      'Прилепляет элемент к ближайшему родителю с overflow',
      'Устаревший аналог position: fixed только для шапок',
    ],
    correctAnswer: 1,
    explanation:
      'position: sticky — гибрид relative и fixed. Элемент находится в нормальном потоке документа, но когда пользователь прокручивает страницу и элемент достигает заданного top/left/bottom/right — "прилипает" к этому положению. Пример: sticky-шапка таблицы. Важно: родитель должен быть достаточно высоким и без overflow:hidden.',
  },
  {
    id: 'css-5',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-переменные (Custom Properties)?',
    options: [
      'Переменные в препроцессорах SASS/LESS',
      'Нативные переменные CSS, объявляемые через --name: value и используемые через var(--name); доступны в JavaScript и каскадируют',
      'Атрибуты data-* в HTML для передачи значений в CSS',
      'Специальные свойства только для CSS Grid',
    ],
    correctAnswer: 1,
    explanation:
      'CSS Custom Properties: объявляются с префиксом -- (обычно на :root): --primary-color: #6366f1; Используются: color: var(--primary-color). В отличие от SASS-переменных: нативные, доступны в JS (getPropertyValue/setProperty), поддерживают наследование и каскад, работают динамически (изменяются в runtime). Идеальны для тем оформления.',
  },
  {
    id: 'css-6',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое медиа-запросы (media queries)?',
    options: [
      'JS-функции для получения медиафайлов с сервера',
      'CSS-синтаксис для применения стилей в зависимости от характеристик устройства (ширина, ориентация, тип медиа и др.)',
      'Атрибут тега <img> для адаптивных изображений',
      'API браузера для определения разрешения экрана',
    ],
    correctAnswer: 1,
    explanation:
      'Media queries позволяют применять CSS только при определённых условиях: @media (max-width: 768px) { ... } — для мобильных. Могут проверять: ширину/высоту viewport, ориентацию, разрешение экрана (retina), предпочтения пользователя (prefers-color-scheme, prefers-reduced-motion). Основа адаптивного дизайна.',
  },
  {
    id: 'css-7',
    difficulty: 'beginner',
    category: 'css',
    question: 'В чём разница между em и rem?',
    options: [
      'em — для текста, rem — для отступов',
      'em — относительная единица от размера шрифта родительского элемента; rem — от размера шрифта корневого элемента (html)',
      'rem устарел, em является современным стандартом',
      'Разницы нет, оба вычисляются от body',
    ],
    correctAnswer: 1,
    explanation:
      'em — относительная единица, зависящая от font-size текущего (или родительского для font-size) элемента. Это может привести к "compound effect" при вложенности. rem (root em) — всегда относительно font-size корневого элемента <html> (обычно 16px). rem предсказуемее и удобнее для глобальных размеров.',
  },
  {
    id: 'css-8',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое z-index и как он работает?',
    options: [
      'Z-индекс всегда работает для любого элемента',
      'Управляет порядком наложения позиционированных элементов по оси Z; работает только для элементов с position != static',
      'Задаёт прозрачность элемента (аналог opacity)',
      'CSS-анимация вдоль оси Z (3D-эффект)',
    ],
    correctAnswer: 1,
    explanation:
      'z-index управляет порядком наложения элементов. Работает ТОЛЬКО для позиционированных элементов (position: relative, absolute, fixed, sticky). Больший z-index — элемент ближе к пользователю. Важно понимать контексты наложения (stacking context): transform, opacity, filter создают новый контекст, что может "сломать" ожидаемое поведение z-index.',
  },
  {
    id: 'css-9',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-трансформации (transform)?',
    options: [
      'Изменение CSS-переменных в runtime',
      'Свойство для применения 2D/3D преобразований к элементу (translate, rotate, scale, skew) без влияния на поток документа',
      'Переход между CSS-стилями (аналог transition)',
      'Конвертация единиц измерения в CSS',
    ],
    correctAnswer: 1,
    explanation:
      'transform применяет 2D и 3D преобразования: translate(x, y) — перемещение, rotate(deg) — вращение, scale(n) — масштаб, skew — наклон. Ключевое: transform не влияет на поток документа и другие элементы. Трансформации обрабатываются GPU, что делает их анимацию плавной (60fps). Часто используются вместе с transition и animation.',
  },
  {
    id: 'css-10',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое псевдоэлементы ::before и ::after?',
    options: [
      'Специальные атрибуты для добавления данных до и после элемента в HTML',
      'CSS-псевдоэлементы, создающие виртуальный первый/последний дочерний элемент; контент задаётся через свойство content',
      'Устаревшие CSS-хаки для IE6',
      'Способ добавления комментариев в CSS',
    ],
    correctAnswer: 1,
    explanation:
      '::before и ::after создают псевдоэлементы — виртуальные дочерние элементы. Требуют свойство content (даже пустое: content: ""). Используются для: декоративных элементов без засорения HTML, иконок, счётчиков, clearfix. Позиционируются относительно родителя. Пример: .btn::after { content: "→"; } — добавляет стрелку после текста кнопки.',
  },
  {
    id: 'css-11',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-каскад?',
    options: [
      'Способ подключения нескольких CSS-файлов',
      'Алгоритм определения победившего CSS-правила при конфликте: учитывает источник, специфичность и порядок объявления',
      'Анимация плавного изменения стилей (cascade effect)',
      'Наследование стилей от родительского элемента',
    ],
    correctAnswer: 1,
    explanation:
      'CSS-каскад — алгоритм приоритизации конфликтующих стилей. Учитывает в порядке важности: 1) Источник (user agent < author < user с !important). 2) !important. 3) Специфичность селектора. 4) Порядок объявления (последнее правило побеждает). Понимание каскада — ключ к предсказуемым стилям.',
  },
  {
    id: 'css-12',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS Grid и свойство grid-template-areas?',
    options: [
      'Шаблон HTML-разметки для Grid-раскладки',
      'Свойство, позволяющее называть области сетки и задавать раскладку через именованные зоны в виде ASCII-арта',
      'Способ автоматического создания grid-колонок',
      'Метод для создания адаптивной сетки без медиа-запросов',
    ],
    correctAnswer: 1,
    explanation:
      'grid-template-areas позволяет визуально описать раскладку: grid-template-areas: "header header" "sidebar main" "footer footer". Каждый элемент сетки получает grid-area: header/sidebar/main/footer. Делает структуру макета наглядной и легко изменяемой. Точка (.) обозначает пустую ячейку.',
  },
  {
    id: 'css-13',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что делает свойство overflow: hidden?',
    options: [
      'Скрывает элемент при переполнении контейнера',
      'Обрезает содержимое, выходящее за границы элемента; также создаёт новый Block Formatting Context (BFC)',
      'Добавляет скроллбар при переполнении',
      'Устанавливает opacity: 0 для дочерних элементов',
    ],
    correctAnswer: 1,
    explanation:
      'overflow: hidden обрезает содержимое, выходящее за границы. Важный побочный эффект: создаёт Block Formatting Context (BFC). BFC изолирует внутренний поток документа: фиксирует выпадающие margin, содержит float-элементы (классический clearfix). overflow: hidden + позиционированные дочерние элементы — частое применение.',
  },
  {
    id: 'css-14',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-анимации (animation) и чем отличаются от transition?',
    options: [
      'Разницы нет — оба создают плавные переходы',
      'transition — автоматический переход между двумя состояниями при смене значения; animation — полноценная анимация с keyframes, циклами, задержками',
      'transition для 2D, animation для 3D',
      'animation только для SVG-элементов',
    ],
    correctAnswer: 1,
    explanation:
      'transition создаёт плавный переход между двумя CSS-состояниями при смене значения (hover, active). Прост в использовании. animation + @keyframes даёт полный контроль: несколько промежуточных состояний, автозапуск, итерации, направление, заполнение. Для performant-анимаций используйте transform и opacity (GPU-accelerated).',
  },
  {
    id: 'css-15',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-методология BEM?',
    options: [
      'Browser Enhancement Module — система для кросс-браузерной совместимости',
      'Block-Element-Modifier — методология именования CSS-классов для создания независимых, переиспользуемых компонентов',
      'Best Engine Model — оптимизация CSS для лучшей производительности',
      'Backend Embedded Markup — система генерации CSS на сервере',
    ],
    correctAnswer: 1,
    explanation:
      'BEM (Block__Element--Modifier) — методология именования классов: .card (Block), .card__title (Element), .card--featured (Modifier). Принципы: блок независим, элемент привязан к блоку, модификатор меняет внешний вид/поведение. Предотвращает конфликты специфичности, делает структуру понятной из имён классов.',
  },
  {
    id: 'css-16',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое свойство will-change?',
    options: [
      'Объявляет будущие изменения стилей для оптимизации браузером (перевод элемента на GPU-слой)',
      'Предусловие для применения CSS-правила',
      'Способ объявления CSS-переменных динамически',
      'Анонс изменений стилей для анимационного движка',
    ],
    correctAnswer: 0,
    explanation:
      'will-change: transform/opacity сообщает браузеру, что элемент будет анимироваться, позволяя заранее оптимизировать (создать композитный слой, GPU-рендеринг). Улучшает плавность анимаций. Важно: не злоупотребляйте — создание compositor layers потребляет память. Применяйте только к элементам, которые действительно будут анимироваться.',
  },
  {
    id: 'css-17',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-переменные функции clamp(), min(), max()?',
    options: [
      'JavaScript-функции для вычисления CSS-значений',
      'CSS-функции для адаптивных значений: clamp(min, ideal, max) — значение в диапазоне; min/max — наименьшее/наибольшее из аргументов',
      'Псевдоклассы для граничных элементов списка',
      'Функции для обрезки текста и изображений',
    ],
    correctAnswer: 1,
    explanation:
      'clamp(min, ideal, max) — значение ideal, ограниченное между min и max. Пример: font-size: clamp(1rem, 2.5vw, 2rem) — шрифт масштабируется с viewport, но не меньше 1rem и не больше 2rem. min(a, b) — меньшее из двух. max(a, b) — большее. Мощный инструмент для fluid typography и адаптивных размеров без медиа-запросов.',
  },
  {
    id: 'css-18',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-селектор :nth-child()?',
    options: [
      'Выбирает n-й дочерний элемент определённого типа',
      'Псевдокласс для выбора элементов по порядковому номеру среди siblings; поддерживает an+b формулу',
      'Атрибут для нумерации дочерних элементов',
      'Псевдоэлемент для добавления контента после n-го элемента',
    ],
    correctAnswer: 1,
    explanation:
      ':nth-child(n) выбирает элемент по позиции среди siblings. Синтаксис an+b: :nth-child(2n) — чётные, :nth-child(2n+1) — нечётные, :nth-child(3n) — каждый третий. Ключевые слова: odd (нечётные), even (чётные). :nth-of-type() — аналог, но считает только элементы одного типа. Используется для зебровой раскраски таблиц.',
  },
  {
    id: 'css-19',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS-модули (CSS Modules)?',
    options: [
      'Официальная система модулей CSS (как ES Modules)',
      'Технология, при которой CSS-классы автоматически получают уникальные хэши для локальной области видимости, предотвращая конфликты имён',
      'Способ разделения CSS на несколько файлов для ленивой загрузки',
      'Плагин для импорта CSS в JavaScript без сборщиков',
    ],
    correctAnswer: 1,
    explanation:
      'CSS Modules — инструментальное решение (поддерживается webpack, Vite и др.). Каждый класс в .module.css-файле автоматически получает уникальный идентификатор: .button → .button_xyz123. В JS: import styles from "./Button.module.css"; и <div className={styles.button}>. Классы изолированы компонентом — никаких глобальных конфликтов.',
  },
  {
    id: 'css-20',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое критический CSS (Critical CSS)?',
    options: [
      'CSS с синтаксическими ошибками, критически важными для отладки',
      'Минимальный CSS для рендеринга контента первого экрана (above-the-fold); встраивается inline для устранения блокирующего рендеринг CSS',
      'Специальные CSS-правила с !important',
      'CSS-файлы, необходимые для работы браузера',
    ],
    correctAnswer: 1,
    explanation:
      'Critical CSS — стили, необходимые для рендеринга видимой части страницы (первый экран). Встраиваются inline в <head>, чтобы браузер мог отрисовать страницу немедленно, не дожидаясь загрузки внешних CSS-файлов. Остальные стили загружаются асинхронно через rel="preload" или media-хак. Улучшает FCP и LCP — ключевые метрики Core Web Vitals.',
  },
  {
    id: 'css-21',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS Container Queries и чем они лучше Media Queries?',
    options: [
      'Запросы к CSS-переменным внутри компонента',
      'Правила стилей, зависящие от размера родительского контейнера, а не viewport. Позволяют создавать по-настоящему переиспользуемые компоненты',
      'Способ вложить одни media queries в другие',
      'CSS-аналог JavaScript querySelector',
    ],
    correctAnswer: 1,
    explanation:
      'Container Queries (@container): .card { container-type: inline-size; } @container (min-width: 400px) { .card__content { flex-direction: row; } }. Преимущество перед Media Queries: компонент адаптируется к СВОЕМУ контейнеру, а не viewport. Идеален для: design systems, переиспользуемых компонентов, dashboard-виджетов. Поддержка: все современные браузеры (Chrome 105+, Safari 16+, Firefox 110+).',
  },
  {
    id: 'css-22',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS Cascade Layers (@layer)?',
    options: [
      'CSS-аналог z-index для управления перекрытием элементов',
      'Механизм явного управления порядком каскада через именованные слои — устраняет проблемы специфичности между базовыми, компонентными и утилитными стилями',
      'Способ разбить CSS-файл на несколько загружаемых слоев',
      'CSS-переменные для управления z-index стеком',
    ],
    correctAnswer: 1,
    explanation:
      '@layer base, components, utilities; @layer base { button { color: red; } } @layer utilities { .text-blue { color: blue; } }. Утилитарный слой всегда побеждает базовый, независимо от специфичности. Это революция: Tailwind больше не нужен !important. Стили вне @layer имеют наивысший приоритет. Поддержка: Chrome 99+, Firefox 97+, Safari 15.4+.',
  },
  {
    id: 'css-23',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS Subgrid?',
    options: [
      'Вложенный CSS Grid внутри другого Grid',
      'Позволяет дочернему Grid-элементу участвовать в родительской Grid-сетке: строки/колонки дочернего элемента выравниваются по grid-трекам родителя',
      'Grid с минимальным количеством колонок',
      'CSS Grid только для мобильных устройств',
    ],
    correctAnswer: 1,
    explanation:
      'Subgrid: .card { display: grid; grid-column: span 3; grid-template-columns: subgrid; }. Дочерние элементы выровнены по колонкам прародителя. Решает классическую проблему: карточки в сетке с разным контентом — заголовки, описания, кнопки выровнены по горизонтали. grid-template-rows: subgrid — для строк. Поддержка: все браузеры (Chrome 117+, Firefox 71+, Safari 16+).',
  },
  {
    id: 'css-24',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS Logical Properties?',
    options: [
      'CSS-свойства для создания логических условий',
      'Свойства, описывающие направление в терминах потока текста (inline-start, block-end) вместо физических (left, top) — автоматически поддерживают RTL-языки',
      'Булевые CSS-свойства (true/false)',
      'Способ задать стили через JavaScript-выражения',
    ],
    correctAnswer: 1,
    explanation:
      'Logical properties: margin-inline-start вместо margin-left (в RTL станет margin-right автоматически). padding-block (top/bottom), border-inline-end, inset-inline-start. Размеры: inline-size (width в LTR), block-size (height). writing-mode меняет интерпретацию. Критически важно для: арабских, иврит, японских вертикальных текстов. В Tailwind: ms-4 (margin-inline-start).',
  },
  {
    id: 'css-25',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое псевдоэлемент ::before и ::after?',
    options: [
      'Элементы, вставляемые перед и после HTML-тега в DOM',
      'CSS-псевдоэлементы: вставляют виртуальное содержимое до/после элемента. Требуют content свойство. Существуют только в CSS, не в DOM',
      'Обработчики событий до и после клика на элемент',
      'Селекторы для первого и последнего дочернего элемента',
    ],
    correctAnswer: 1,
    explanation:
      '::before и ::after создают псевдоэлементы, styled через CSS. Обязательны: display (inline по умолчанию) и content (может быть пустым ""). Применения: декоративные элементы, иконки, бейджи, custom checkbox/radio, clearfix (::after { clear: both }), quoted text. Не работают на: img, input (void elements). Не в DOM — не доступны через JS.',
  },
  {
    id: 'css-26',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS transform и как работает аппаратное ускорение?',
    options: [
      'Свойство для изменения текстового контента элемента',
      'Позволяет трансформировать элемент (translate, rotate, scale, skew) без влияния на layout. GPU-ускорение через translateZ(0) или will-change: transform',
      'CSS-аналог JavaScript .style изменений',
      'Только 2D-трансформации, 3D недоступны в CSS',
    ],
    correctAnswer: 1,
    explanation:
      'transform: translate(), rotate(), scale(), skew(), matrix(). 3D: translateZ(), rotateY(), perspective(). GPU-ускорение: translateZ(0) или translate3d(0,0,0) "продвигает" элемент на отдельный compositor layer. will-change: transform — более декларативный способ. Трансформации не вызывают reflow (в отличие от left/top). Анимировать через transform+opacity — оптимально.',
  },
  {
    id: 'css-27',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS Cascade (каскад) и как он работает?',
    options: [
      'Процесс загрузки CSS-файлов один за другим',
      'Алгоритм разрешения конфликтов CSS-правил: Origin (user-agent < author < user), !important, Cascade Layers, специфичность, порядок в документе',
      'Способ наследования стилей от родителя к дочернему элементу',
      'CSS-анимация водопада для loading индикаторов',
    ],
    correctAnswer: 1,
    explanation:
      'Полный порядок каскада (от наивысшего): 1) Transition (переходы). 2) !important (user-agent → author → user). 3) Animation (@keyframes). 4) Normal (author → user → user-agent). Внутри одного origin: Cascade Layers → специфичность → порядок появления. Большинство разработчиков работают только с author стилями в normal layer.',
  },
  {
    id: 'css-28',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое функция clamp() в CSS и когда использовать?',
    options: [
      'Функция для ограничения z-index значений',
      'clamp(min, preferred, max) — ограничивает значение между минимумом и максимумом. Идеальна для fluid typography и responsive spacing без media queries',
      'CSS-функция для обрезки текста по ширине',
      'Способ зафиксировать элемент внутри родителя',
    ],
    correctAnswer: 1,
    explanation:
      'clamp(1rem, 2.5vw, 2rem): минимум 1rem, максимум 2rem, предпочтительно 2.5vw. Fluid typography: font-size: clamp(14px, 2vw, 18px). Responsive spacing: gap: clamp(1rem, 3%, 2rem). Аналоги: min(), max(). Устраняет много media query breakpoints для размеров шрифтов. Поддержка: все браузеры. Сочетайте с viewport units (vw, vh, vmin, vmax).',
  },
  {
    id: 'css-29',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS revert и revert-layer?',
    options: [
      'Способ отменить последнее CSS-правило',
      'revert сбрасывает значение к браузерному стилю по умолчанию; revert-layer — к значению предыдущего Cascade Layer',
      'Псевдо-класс для отмены hover-эффектов',
      'CSS-функция для перехода к предыдущему состоянию анимации',
    ],
    correctAnswer: 1,
    explanation:
      'CSS keywords: initial — начальное значение CSS-спецификации. inherit — унаследованное значение. unset — inherit если наследуемое, иначе initial. revert — браузерный стиль (user-agent stylesheet). revert-layer — значение из предыдущего @layer. all: revert — сбросить все свойства к браузерным стилям (мощный reset).',
  },
  {
    id: 'css-30',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS Houdini и Paint Worklet?',
    options: [
      'Инструмент для debugging CSS в браузерах',
      'Набор низкоуровневых браузерных API, позволяющих JS расширять CSS движок: создавать custom properties с типами, программные background через Paint API',
      'CSS-фреймворк для создания иллюзий и трюков',
      'Способ ускорить CSS через WebAssembly',
    ],
    correctAnswer: 1,
    explanation:
      'CSS Houdini APIs: CSS Properties and Values (@property — типизированные CSS-переменные). Paint API: CSS.paintWorklet.addModule("painter.js") — рисовать background/border через Canvas API. Layout API — custom layout алгоритмы. Animation Worklet — анимации в отдельном потоке. Typed OM — типизированные CSS-значения через JS. Большинство API в Chrome, частичная поддержка в других.',
  },
  {
    id: 'css-31',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое @property в CSS (Houdini Custom Properties)?',
    options: [
      'Устаревший способ объявить CSS-переменную',
      '@property --my-color { syntax: "<color>"; inherits: false; initial-value: red; } — типизированная CSS-переменная с анимацией и валидацией типа',
      'Атрибут для именования CSS Grid областей',
      'Способ создать CSS-переменную доступную только в одном классе',
    ],
    correctAnswer: 1,
    explanation:
      '@property позволяет: 1) Задать тип: syntax: "<color>" | "<length>" | "<number>" | "<percentage>" и др. 2) Анимировать CSS-переменные (невозможно без @property). 3) Задать initial-value. 4) Контролировать наследование. Пример: @property --hue { syntax: "<angle>"; inherits: false; initial-value: 0deg; } @keyframes { to { --hue: 360deg; } }. Поддержка: Chrome/Edge 85+, Firefox 128+, Safari 16.4+.',
  },
  {
    id: 'css-32',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое CSS :has() псевдокласс (Parent Selector)?',
    options: [
      'Проверяет, имеет ли элемент определённый CSS-класс',
      ':has(selector) — "parent selector": позволяет стилизовать элемент на основе его потомков. Первый нативный способ выбрать родителя по дочернему элементу',
      'Псевдокласс для проверки наличия атрибута',
      'Способ стилизовать элемент если он содержит текст',
    ],
    correctAnswer: 1,
    explanation:
      ':has(): .card:has(img) { ... } — карточка содержащая изображение. form:has(:invalid) { border-color: red; } — форма с невалидными полями. h1:has(+ p) { margin-bottom: 0; } — h1 перед которым идёт p. Настоящий "parent selector", которого ждали 20 лет. Поддержка: Chrome 105+, Safari 15.4+, Firefox 121+. Может влиять на производительность при сложных цепочках.',
  },
  {
    id: 'css-33',
    difficulty: 'beginner',
    category: 'css',
    question: 'Что такое Utility-First CSS и Tailwind CSS?',
    options: [
      'CSS-фреймворк с готовыми компонентами (кнопки, карточки)',
      'Подход: маленькие утилитарные классы (flex, p-4, text-lg) вместо кастомных CSS-классов. Tailwind генерирует только используемые классы через tree-shaking',
      'CSS-методология только для utility-библиотек',
      'Инструмент для автоматической генерации CSS из дизайн-токенов',
    ],
    correctAnswer: 1,
    explanation:
      'Tailwind CSS: <div class="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md">. Преимущества: нет naming, CSS не растёт, design system из коробки (spacing/colors/typography), встроенная responsive и hover-система, JIT компилятор генерирует минимальный CSS. Критика: HTML захламлён классами, кривая обучения. Популярность огромна: 2024 — самый популярный CSS фреймворк.',
  },
  {
    id: 'css-34',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Scroll Snap?',
    options: [
      'Способ зафиксировать scroll-bar в видимом состоянии',
      'Браузерный механизм для привязки прокрутки к точкам: создаёт эффект "щелчка" при скролле к следующему элементу без JavaScript',
      'CSS-свойство для отключения прокрутки на странице',
      'Анимация прокрутки через CSS transitions',
    ],
    correctAnswer: 1,
    explanation:
      'Scroll Snap: контейнер: scroll-snap-type: x mandatory; overflow-x: scroll. Дочерние: scroll-snap-align: start. Значения snap-type: x/y/both, mandatory/proximity. mandatory — всегда привязывается, proximity — только если близко. Применения: карусели, слайдеры, горизонтальные списки, страничный скролл. Без JS! scroll-snap-stop: always — запрещает пропуск элементов при быстром скролле.',
  },
  {
    id: 'css-35',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Anchor Positioning?',
    options: [
      'Устаревший способ центрирования элементов через position: absolute',
      'Новый CSS API для позиционирования элемента относительно другого (anchor) без JavaScript — идеален для тултипов, dropdown, поповеров',
      'Способ закрепить footer внизу страницы',
      'CSS-свойство для привязки элемента к border страницы',
    ],
    correctAnswer: 1,
    explanation:
      'Anchor Positioning (CSS 2024): anchor-name: --btn на референсном элементе. position-anchor: --btn; top: anchor(bottom); left: anchor(left) — позиционирование относительно anchor. position-try-fallbacks для автоматического flip при выходе за viewport. Раньше требовало JS (Floating UI, Popper.js). Поддержка: Chrome 125+, пока не во всех браузерах.',
  },
  {
    id: 'css-36',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS view transitions API?',
    options: [
      'Анимации при смене CSS классов через transitions',
      'Browser API для плавных переходов между состояниями страницы или SPA-навигации: document.startViewTransition(() => updateDOM()) — снимок до и после, анимация перехода',
      'CSS-способ анимировать SVG-пути',
      'Анимации при смене темы оформления (dark/light mode)',
    ],
    correctAnswer: 1,
    explanation:
      'View Transitions API: document.startViewTransition(callback). Браузер делает снимок до изменения, применяет callback, снимает после, анимирует crossfade. view-transition-name: hero — именованный элемент анимируется отдельно (Shared Element Transition — morphing). CSS: ::view-transition-old, ::view-transition-new для кастомизации. В Next.js 14 — unstable_noStore; в React Router 6.28+ — встроенная поддержка.',
  },
  {
    id: 'css-37',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое color-scheme, prefers-color-scheme и forced-colors?',
    options: [
      'CSS-свойства для изменения цветовой схемы в Photoshop',
      'prefers-color-scheme — media query для тёмной/светлой темы. color-scheme: dark light — подсказка браузеру. forced-colors — режим высокой контрастности (Windows)',
      'Свойства для управления профилем цвета монитора',
      'CSS-переменные для хранения брендовых цветов',
    ],
    correctAnswer: 1,
    explanation:
      '@media (prefers-color-scheme: dark) { :root { --bg: #000; } }. color-scheme: dark light — браузер сам адаптирует scrollbar, input, select. light-dark() функция (CSS 2024): color: light-dark(black, white) — без media query! forced-colors: active — Windows High Contrast Mode. Используйте системные цвета: ButtonText, Canvas, LinkText. Нельзя полагаться на кастомные цвета.',
  },
  {
    id: 'css-38',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Nesting?',
    options: [
      'Способ вложить один HTML элемент в другой через CSS',
      'Нативная вложенность CSS-правил (как в Sass/Less): .parent { color: red; & .child { color: blue; } &:hover { opacity: 0.8; } @media (max-width: 768px) { font-size: 14px; } }',
      'Вложенные CSS Custom Properties',
      'Способ создать компоненты внутри CSS-правил',
    ],
    correctAnswer: 1,
    explanation:
      'CSS Nesting (native): .nav { display: flex; & ul { list-style: none; } & li { padding: 0.5rem; } & a { &:hover { color: blue; } } @media (max-width: 768px) { flex-direction: column; } }. Полностью как SCSS, но нативно. Поддержка: Chrome 120+, Firefox 117+, Safari 17.2+. & — ссылка на родительский селектор. Больше не нужен Sass только ради nesting!',
  },
  {
    id: 'css-39',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Scroll-Driven Animations?',
    options: [
      'Анимации запускающиеся только при скролле пользователя',
      'Анимации привязанные к позиции скролла или видимости элемента через CSS без JavaScript: animation-timeline: scroll() или view()',
      'CSS плавная прокрутка через scroll-behavior: smooth',
      'Параллакс-эффекты реализованные только через CSS',
    ],
    correctAnswer: 1,
    explanation:
      'Scroll-Driven Animations (CSS 2023): @keyframes grow { from { scale: 0; } to { scale: 1; } }. .element { animation: grow linear; animation-timeline: view(); animation-range: entry 0% entry 100%; }. scroll() — прогресс скролла контейнера. view() — прогресс видимости элемента в viewport. Заменяет Intersection Observer + gsap для базовых scroll-анимаций. Поддержка: Chrome 115+, Firefox 110+.',
  },
  {
    id: 'css-40',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Scope (@scope)?',
    options: [
      'Способ ограничить применение CSS-переменных в компоненте',
      '@scope(.card) { h2 { font-size: 1.5rem; } } — ограничивает действие стилей компонентом без необходимости использовать специфичные селекторы или методологии вроде BEM',
      'CSS-аналог JavaScript модулей с private-полями',
      'Способ изолировать CSS между несколькими файлами',
    ],
    correctAnswer: 1,
    explanation:
      '@scope: @scope (.card) to (.card__body) { a { color: blue; } } — стили от .card до .card__body (scope limit). @scope (.card) { :scope { border: 1px solid; } h2 { ... } }. Решает "proximity" — стили ближайшего scope более специфичны. Заменяет: BEM, CSS Modules, Shadow DOM для инкапсуляции. Поддержка: Chrome 118+, Safari 17.4+, Firefox — в разработке.',
  },
  {
    id: 'css-41',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Gap и как работает в Flex и Grid?',
    options: [
      'gap — устаревший alias для margin между элементами',
      'gap (row-gap + column-gap) задаёт расстояние между элементами в Grid и Flex контейнерах. В Grid — между строками и колонками, в Flex — между flex items',
      'Только для Grid, Flex использует margin',
      'gap работает только с числовыми значениями без единиц',
    ],
    correctAnswer: 1,
    explanation:
      'gap: 1rem (= row-gap: 1rem; column-gap: 1rem). gap: 1rem 2rem (row-gap column-gap). В Grid: gap между всеми ячейками. В Flex: gap между flex-items. Преимущество над margin: нет проблемы "лишнего margin" у первого/последнего элемента. Ранее назывался grid-gap (устарело). column-gap работает в Multi-column layout тоже.',
  },
  {
    id: 'css-42',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS функция env() и Safe Area Insets?',
    options: [
      'Функция для чтения переменных окружения операционной системы',
      'env() читает переменные окружения браузера. Safe-area-inset-* — отступы для устройств с "челкой" (iPhone notch) чтобы контент не перекрывался',
      'CSS аналог JavaScript process.env',
      'Способ получить разрешение экрана через CSS',
    ],
    correctAnswer: 1,
    explanation:
      'env(safe-area-inset-top), env(safe-area-inset-right/bottom/left) — отступы от аппаратных элементов устройства (notch, home indicator). В HTML нужен viewport-fit=cover: <meta name="viewport" content="viewport-fit=cover">. Использование: padding-bottom: env(safe-area-inset-bottom). Критично для PWA и мобильных приложений на iPhone. Также: env(keyboard-inset-height) для виртуальной клавиатуры.',
  },
  {
    id: 'css-43',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Masonry Layout?',
    options: [
      'CSS-способ создать каменную текстуру фона',
      'Макет в стиле Pinterest: элементы разной высоты заполняют колонки без пробелов. Экспериментально в CSS Grid: grid-template-rows: masonry',
      'Grid layout только с чётным количеством колонок',
      'Способ имитировать кирпичную укладку через border-radius',
    ],
    correctAnswer: 1,
    explanation:
      'Masonry layout (Pinterest-стиль): элементы размещаются заполняя свободное место. CSS Grid Masonry (экспериментальный, Firefox за флагом): display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: masonry. Сейчас: column-count: 3; column-gap (Multi-column layout) — ближайший нативный способ. Или JS библиотеки: Masonry.js, Packery.',
  },
  {
    id: 'css-44',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Counters?',
    options: [
      'CSS-переменные для хранения числовых значений',
      'Механизм для автоматической нумерации элементов через CSS: counter-reset, counter-increment, counter() функция — без JS нумерует заголовки, списки',
      'Способ отображать количество дочерних элементов',
      'CSS-аналог JavaScript счётчика в циклах',
    ],
    correctAnswer: 1,
    explanation:
      'CSS Counters: ol { counter-reset: item; } li { counter-increment: item; } li::before { content: counter(item) ". "; }. Вложенные счётчики: counter(chapter) "." counter(section). Применения: нумерация заголовков (1.1, 1.2, 2.1), кастомные ol-стили, прогресс-шаги. @counter-style — создание кастомного формата нумерации (римские, кириллические и др.).',
  },
  {
    id: 'css-45',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS clip-path и как использовать?',
    options: [
      'Способ обрезать изображения до прямоугольной формы',
      'Свойство для создания произвольных форм обрезки элемента: circle(), ellipse(), polygon(), inset(), path(). Анимируется, применяется к любому элементу',
      'CSS-аналог overflow:hidden с кастомным радиусом',
      'Свойство для обрезки SVG-элементов',
    ],
    correctAnswer: 1,
    explanation:
      'clip-path: circle(50%) — круг. polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%) — шестиугольник. inset(10px 20px round 10px) — прямоугольник с закруглением. path("M...") — SVG-путь. Анимируется (те же типы фигур). Применения: avatar-обрезка, header-волны, reveal-анимации, декоративные формы. Clippy.io — генератор clip-path. Производительность: лучше чем border-radius для сложных форм.',
  },
  {
    id: 'css-46',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS aspect-ratio?',
    options: [
      'Способ растянуть изображение по горизонтали',
      'Задаёт соотношение сторон элемента: aspect-ratio: 16/9. Если задана только width, height вычисляется автоматически — идеально для responsive видео и изображений',
      'CSS-свойство только для img и video',
      'Отношение CSS-пикселей к физическим пикселям',
    ],
    correctAnswer: 1,
    explanation:
      'aspect-ratio: 16/9 или просто 1 (квадрат). Работает для любого элемента. Применения: video: width: 100%; aspect-ratio: 16/9 (вместо padding-top: 56.25% трюка). Изображения: img { aspect-ratio: attr(width) / attr(height) } — браузер знает соотношение до загрузки → нет CLS. Карточки: .card { aspect-ratio: 4/3 }. Поддержка: все современные браузеры.',
  },
  {
    id: 'css-47',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS overscroll-behavior?',
    options: [
      'Управление стилем scrollbar при переполнении контейнера',
      'Контролирует поведение при прокрутке до края: overscroll-behavior: contain предотвращает цепочку прокрутки к родителю (scroll chaining)',
      'Стиль анимации при достижении конца прокручиваемого контейнера',
      'CSS-свойство для bounce-эффекта на iOS устройствах',
    ],
    correctAnswer: 1,
    explanation:
      'overscroll-behavior: auto (по умолчанию, цепочка прокрутки к родителю), contain (нет цепочки к родителю, но есть нативный overscroll-эффект), none (без цепочки и без эффекта). Применения: модальные окна (не прокручивают body), chat/список с независимой прокруткой, отключение pull-to-refresh. overscroll-behavior-x/y — для отдельных осей.',
  },
  {
    id: 'css-48',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS text-overflow и line-clamp?',
    options: [
      'Свойства только для форматирования текста в PDF',
      'text-overflow: ellipsis — обрезает текст с "..." (требует overflow:hidden + white-space:nowrap). -webkit-line-clamp ограничивает многострочный текст',
      'Способ ограничить шрифт минимальным размером',
      'CSS-анимация для плавного исчезновения текста',
    ],
    correctAnswer: 1,
    explanation:
      'Однострочное обрезание: overflow: hidden; white-space: nowrap; text-overflow: ellipsis. Многострочное: display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden. Стандартный line-clamp появляется: line-clamp: 3 (в Overflow Level 4). text-overflow: "." clip — текст с кастомным обрезчиком. Используется в карточках, превью-текстах.',
  },
  {
    id: 'css-49',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS custom properties (переменные) и их ограничения?',
    options: [
      'Переменные CSS, работающие только в :root',
      '--var-name: value; var(--var-name) — CSS-переменные с наследованием, изменяемые через JS, не работают в медиа-запросах как условия, нет математических операций без calc()',
      'CSS-переменные, компилируемые Sass в статические значения',
      'Только для цветов и размеров шрифтов',
    ],
    correctAnswer: 1,
    explanation:
      ':root { --primary: #3b82f6; --spacing: 1rem; }. button { background: var(--primary); padding: var(--spacing); }. JS: element.style.setProperty("--primary", "#ff0000"). Ограничения: нельзя в селекторах (@media (width > var(--bp)) — не работает). Нельзя как частичное значение (font-size: var(--size)px — не работает, нужен calc()). Каскадируются и наследуются как обычные свойства.',
  },
  {
    id: 'css-50',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Что такое CSS Selector List Forgiveness (:is(), :where(), :not())?',
    options: [
      'Особый режим CSS-парсера для игнорирования синтаксических ошибок',
      ':is() и :where() — "прощающие" списки селекторов: невалидный селектор в списке не делает весь список невалидным. :is() берёт специфичность наибольшего. :where() — нулевая специфичность',
      'Селекторы для обработки исключений в CSS-анимациях',
      'Только для современных браузеров без fallback',
    ],
    correctAnswer: 1,
    explanation:
      ':is(h1, h2, h3) { color: red } — применяется ко всем тегам. Специфичность = наибольшей из списка. :where(h1, h2, h3) — то же, но нулевая специфичность (легко переопределить). Forgiving: :is(.exists, .unknown-pseudo) — .exists работает, невалидный не ломает. В отличие от: h1, .unknown-pseudo { ... } — весь список падает в старых браузерах. :not() с ES2022 также прощающий.',
  },
  {
    id: 'css-51',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Как с помощью функции `color-mix()` смешать 30% синего цвета в пространстве sRGB с красным цветом?',
    options: [
      'color-mix(in srgb, blue 30%, red)',
      'color-mix(srgb, blue 30%, red 70%)',
      'mix-color(blue 30%, red 70%, srgb)',
      'color-mix(blue, red, 30%, srgb)'
    ],
    correctAnswer: 0,
    explanation:
      'Синтаксис функции требует первым аргументом указать цветовое пространство (in srgb), а затем смешиваемые цвета с указанием процентов. Если процент указан только для одного цвета (blue 30%), второй цвет (red) автоматически займет оставшиеся 70%.',
  },
  {
    id: 'css-52',
    difficulty: 'intermediate',
    category: 'css',
    question: 'В чём основное преимущество использования функции `color(display-p3 ...)` по сравнению со стандартными цветами sRGB (например, `rgb()` или `#hex`)?',
    options: [
      'Она автоматически рассчитывает контрастность для текста',
      'Она дает доступ к расширенному цветовому охвату (wide gamut), позволяя отображать на 25% более насыщенные и яркие цвета (особенно зеленый и красный) на совместимых экранах',
      'Она гарантирует одинаковое отображение цветов на абсолютно любых экранах',
      'Она позволяет использовать полупрозрачность без альфа-канала'
    ],
    correctAnswer: 1,
    explanation:
      'Пространство display-p3 имеет значительно более широкий цветовой охват (gamut), чем sRGB. С помощью color(display-p3 R G B) можно отобразить гораздо более яркие и чистые оттенки зеленого, красного и розового, которые просто "обрезаются" в стандартном sRGB.',
  },
  {
    id: 'css-53',
    difficulty: 'intermediate',
    category: 'css',
    question: 'В чём заключается главное преимущество цветового пространства `oklch()` перед классическими `hsl()` и `rgb()` при программном изменении цветов?',
    options: [
      'Оно поддерживается во всех браузерах начиная с Internet Explorer 10',
      'Оно имеет перцептивную равномерность (perceptual uniformity) — изменение светлоты (L) воспринимается глазом одинаково независимо от оттенка (H), что решает проблему неожиданно разной визуальной яркости в HSL',
      'Оно не требует указания процентов для яркости',
      'Оно автоматически подстраивается под темную тему операционной системы'
    ],
    correctAnswer: 1,
    explanation:
      'oklch() (Lightness, Chroma, Hue) — перцептивно равномерное цветовое пространство. В отличие от HSL, где желтый цвет при светлоте 50% кажется намного ярче синего при тех же 50%, в oklch() одинаковое значение Lightness (L) гарантирует одинаковую воспринимаемую глазом яркость для любого оттенка (Hue).',
  },
  {
    id: 'css-54',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Как с помощью относительного синтаксиса цветов (Relative Color Syntax) сделать цвет фона на 20% прозрачнее, используя существующую переменную `--primary` в формате oklch?',
    options: [
      'background: oklch(from var(--primary) l c h / calc(alpha - 0.2))',
      'background: relative(var(--primary), oklch, alpha - 20%)',
      'background: color-mix(var(--primary), transparent 20%)',
      'background: oklch(var(--primary) opacity(0.8))'
    ],
    correctAnswer: 0,
    explanation:
      'Относительный синтаксис цветов позволяет деструктурировать существующий цвет с помощью ключевого слова "from": oklch(from var(--primary) l c h / calc(alpha - 0.2)). Здесь l, c, h и alpha — переменные, полученные из исходного цвета.',
  },
  {
    id: 'css-55',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Как работает экспериментальная функция `color-contrast()` в CSS?',
    options: [
      'Она увеличивает контрастность изображения-подложки',
      'Она сравнивает первый указанный цвет со списком других цветов и автоматически выбирает из списка тот цвет, который имеет наибольшую контрастность по отношению к первому',
      'Она делает текст черным или белым в зависимости от времени суток',
      'Она генерирует градиент между двумя максимально контрастными цветами'
    ],
    correctAnswer: 1,
    explanation:
      'Функция color-contrast(color vs color1, color2, ...) сравнивает первый цвет (обычно цвет фона) с предложенными вариантами и выбирает наиболее контрастный (соответствующий стандартам WCAG).',
  },
  {
    id: 'css-56',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Какое поведение демонстрирует значение `font-display: optional`?',
    options: [
      'Браузер бесконечно ждет загрузки шрифта, блокируя отображение текста',
      'Браузер дает шрифту очень маленькое окно времени на загрузку (около 100 мс). Если шрифт не загрузился, используется системный, и шрифт НЕ заменяется после загрузки, а сохраняется в кэше для следующего визита',
      'Шрифт скачивается только при явном клике пользователя по тексту',
      'Шрифт заменяет системный сразу же, как только скачается, вызывая сдвиг текста (FOUT) в любой момент времени'
    ],
    correctAnswer: 1,
    explanation:
      'font-display: optional дает лучший UX с точки зрения сдвигов разметки (CLS). Он выделяет сверхкороткий период блокировки (100мс) и нулевой период обмена. Если шрифт не успел загрузиться сразу — пользователь видит системный шрифт, и смены шрифта на лету (избегая вспышек текста FOUT) не происходит, но шрифт кэшируется.',
  },
  {
    id: 'css-57',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Какое CSS-свойство является низкоуровневым механизмом для управления кастомными осями вариативных шрифтов (например, ширина, наклон), которые не покрываются стандартными свойствами?',
    options: [
      'font-feature-settings',
      'font-variation-settings',
      'font-stretch-axes',
      'font-axis-control'
    ],
    correctAnswer: 1,
    explanation:
      'Свойство font-variation-settings используется для управления осями вариативных шрифтов. Стандартные оси имеют свои CSS-свойства (например, font-weight для "wght"), а кастомные оси (например, "GRAD" для градации или "YSGN" для высоты знаков) настраиваются через font-variation-settings: "GRAD" 150.',
  },
  {
    id: 'css-58',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Для чего используется CSS-свойство `font-palette`?',
    options: [
      'Для изменения цвета выделения текста на странице',
      'Для выбора предопределенной или кастомной цветовой палитры в современных цветных векторных шрифтах (форматы COLRv1 / OpenType-SVG)',
      'Для принудительного рендеринга текста в черно-белом режиме',
      'Для управления сглаживанием шрифтов'
    ],
    correctAnswer: 1,
    explanation:
      'font-palette позволяет управлять цветами в современных цветных шрифтах (COLRv1). Разработчик может переключаться между встроенными палитрами шрифта (font-palette: --dark) или создавать свои палитры через правило @font-palette-values.',
  },
  {
    id: 'css-59',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Какую основную проблему решают дескрипторы `size-adjust`, `ascent-override` и `descent-override` внутри правила `@font-face`?',
    options: [
      'Они позволяют изменять размер шрифта без изменения line-height',
      'Они помогают сопоставить метрики кастомного шрифта с резервным системным шрифтом, минимизируя или полностью устраняя сдвиги макета (CLS) при замене шрифта',
      'Они добавляют поддержку сглаживания текста в операционной системе Windows',
      'Они позволяют загружать шрифты из внешних доменов в обход CORS'
    ],
    correctAnswer: 1,
    explanation:
      'Эти дескрипторы позволяют "подкрутить" геометрические параметры резервного системного шрифта (размер, высоту надстрочных и подстрочных элементов), чтобы его метрики точно совпадали с метриками подгружаемого кастомного веб-шрифта. Это убирает дергание разметки (CLS) в момент переключения шрифтов.',
  },
  {
    id: 'css-60',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Какое условие является обязательным для того, чтобы свойство `shape-outside` начало работать на элементе и обтекаться текстом?',
    options: [
      'Элемент должен иметь свойство position: absolute',
      'Элемент должен быть плавающим (float: left или float: right)',
      'Элемент должен иметь свойство display: flex',
      'Элемент должен содержать SVG-графику'
    ],
    correctAnswer: 1,
    explanation:
      'Свойство shape-outside (определяющее геометрию обтекания элемента текстом) применяется исключительно к плавающим элементам, то есть к элементам с установленным float (left или right). Без float свойство игнорируется.',
  },
  {
    id: 'css-61',
    difficulty: 'intermediate',
    category: 'css',
    question: 'В чём разница между стандартным обтеканием `float` со свойствами CSS Shapes и концепцией CSS Exclusions?',
    options: [
      'Exclusions позволяет тексту обтекать элемент со всех четырех сторон, даже если элемент расположен по центру, а не прижат к краю',
      'Exclusions работает только с абсолютно позиционированными SVG-путями',
      'Разницы нет, это разные коммерческие названия одной технологии',
      'Exclusions блокирует попадание текста внутрь контейнера'
    ],
    correctAnswer: 0,
    explanation:
      'Классический float позволяет тексту обтекать элемент только с одной стороны (противоположной направлению float). Спецификация CSS Exclusions (свойства wrap-flow, wrap-through) позволяет тексту обтекать элемент, спозиционированный любым способом (например, через absolute или grid), со всех сторон.',
  },
  {
    id: 'css-62',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Для чего используется CSS-свойство `initial-letter`?',
    options: [
      'Для автоматического перевода первой буквы предложения в верхний регистр',
      'Для стилизации буквицы (drop cap) — первой буквы абзаца, позволяя задать её размер в строках текста и глубину опускания',
      'Для изменения межбуквенного интервала первого слова',
      'Для скрытия первой буквы в целях безопасности'
    ],
    correctAnswer: 1,
    explanation:
      'Свойство initial-letter позволяет красиво оформлять буквицы. Оно принимает два значения: первое указывает высоту буквы в строках текста (например, 3), второе (необязательное) — насколько строк вниз буква должна опуститься в текст.',
  },
  {
    id: 'css-63',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Какое свойство `writing-mode` задает вертикальное направление письма с расположением строк справа налево?',
    options: [
      'writing-mode: vertical-lr',
      'writing-mode: vertical-rl',
      'writing-mode: sideways-lr',
      'writing-mode: horizontal-tb'
    ],
    correctAnswer: 1,
    explanation:
      'Значение vertical-rl (vertical right-to-left) задает вертикальный поток текста (сверху вниз), при этом строки заполняются справа налево (типично для традиционного китайского или японского письма). vertical-lr заполняет строки слева направо.',
  },
  {
    id: 'css-64',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Для чего используется CSS-свойство `text-combine-upright` в сочетании с вертикальным режимом письма (`writing-mode`)?',
    options: [
      'Для автоматического выравнивания вертикального текста по центру',
      'Для компоновки нескольких горизонтальных символов (например, цифр "24" или букв "AD") в пространство одного вертикального символа',
      'Для преобразования латинских букв в иероглифы',
      'Для разворота всего вертикального текста на 90 градусов по часовой стрелке'
    ],
    correctAnswer: 1,
    explanation:
      'Свойство text-combine-upright (обычно со значением digits 2) группирует короткие горизонтальные символы (например, двузначные числа года или дня) так, чтобы они отображались горизонтально в один ряд внутри общей вертикальной строки текста.',
  },
  {
    id: 'css-65',
    difficulty: 'intermediate',
    category: 'css',
    question: 'В чём ключевое различие между свойствами `clip-path` и `mask-image` при скрытии частей элемента?',
    options: [
      'clip-path работает только с векторной графикой, а mask-image — только с растровой',
      'clip-path — это жесткое векторное отсечение по контуру (пиксель либо виден, либо нет), а mask-image поддерживает полупрозрачность (альфа-каналы и градиенты), позволяя делать плавные переходы прозрачности',
      'mask-image не поддерживает адаптивность и проценты',
      'clip-path не создает новый контекст наложения (stacking context), в отличие от mask-image'
    ],
    correctAnswer: 1,
    explanation:
      'clip-path создает бинарную маску (граница четкая, без полутонов). mask-image использует изображение-маску (или градиент), где степень прозрачности каждого пикселя маски определяет прозрачность соответствующего пикселя элемента (плавный градиент угасания).',
  },
  {
    id: 'css-66',
    difficulty: 'intermediate',
    category: 'css',
    question: 'Почему свойство `backdrop-filter` может не работать, если у самого элемента задан непрозрачный цвет фона (например, `background: #ffffff`)?',
    options: [
      'backdrop-filter требует обязательного использования картинок в формате WebP',
      'Потому что эффект применяется к контенту ПОД элементом, и если фон самого элемента полностью непрозрачный, примененное размытие или фильтр просто физически перекрываются фоном и не видны',
      'backdrop-filter работает только на корневом элементе <body>',
      'Для его работы требуется отключить аппаратное ускорение в браузере'
    ],
    correctAnswer: 1,
    explanation:
      'backdrop-filter применяет эффекты (например, blur) к области позади элемента. Чтобы этот эффект был виден пользователю, сам элемент должен быть полупрозрачным (например, background: rgba(255,255,255,0.5)) или прозрачным.',
  },
  {
    id: 'css-67',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое значение `mix-blend-mode` инвертирует цвета элемента на основе цветов фона, давая белый цвет на черном фоне и черный цвет на белом?',
    options: [
      'multiply',
      'screen',
      'difference',
      'overlay'
    ],
    correctAnswer: 2,
    explanation:
      'Режим смешивания difference (разница) вычитает более темный цвет из более светлого. При смешивании белого текста с черным фоном получается белый, а с белым фоном — черный (происходит инверсия цвета текста в зависимости от фона).',
  },
  {
    id: 'css-68',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какую проблему решает CSS-свойство `isolation: isolate`?',
    options: [
      'Оно предотвращает наследование шрифтов родительского элемента',
      'Оно ограничивает действие свойств смешивания цветов (`mix-blend-mode`), заставляя элемент смешиваться только с дочерними или соседними элементами внутри группы, не затрагивая общий фон страницы',
      'Оно изолирует CSS-переменные внутри веб-компонента',
      'Оно убирает влияние внешних margin-схлопываний (margin collapse)'
    ],
    correctAnswer: 1,
    explanation:
      'isolation: isolate создает новый контекст наложения (stacking context). Элементы с mix-blend-mode внутри этой группы не будут смешивать свои цвета с элементами, находящимися позади этой изолированной группы (например, с общим фоном страницы).',
  },
  {
    id: 'css-69',
    difficulty: 'advanced',
    category: 'css',
    question: 'Что произойдет с 3D-трансформированными дочерними элементами, если у их родителя свойство `transform-style` установлено в `flat` (по умолчанию)?',
    options: [
      'Они полностью перестанут отображаться на странице',
      'Они потеряют свои 3D-позиции и будут отрисованы плоскими (сплющенными) в двухмерной плоскости родительского элемента',
      'Они унаследуют свойство perspective от корневого элемента',
      'Они автоматически получат backface-visibility: hidden'
    ],
    correctAnswer: 1,
    explanation:
      'Значение flat свойства transform-style заставляет браузер проецировать все дочерние 3D-элементы на плоскость их родителя. Чтобы сохранить реальное 3D-пространство и взаимное перекрытие по оси Z, необходимо установить transform-style: preserve-3d.',
  },
  {
    id: 'css-70',
    difficulty: 'advanced',
    category: 'css',
    question: 'В чём заключается главная опасность злоупотребления свойством `will-change: transform` на большом количестве элементов?',
    options: [
      'Браузер заблокирует выполнение любых CSS-анимаций',
      'Браузер попытается вынести каждый элемент на отдельный слой GPU, что приведет к огромному потреблению оперативной и видеопамяти и сильному замедлению работы интерфейса',
      'Это приведет к автоматическому сбросу z-index у всех элементов',
      'Элементы перестанут реагировать на события мыши'
    ],
    correctAnswer: 1,
    explanation:
      'will-change — это оптимизация "в крайнем случае". Если повесить его на многие элементы, браузер выделит под каждый графический слой в памяти GPU, что быстро исчерпает ресурсы устройства (особенно мобильного) и приведет к падению производительности и лагам.',
  },
  {
    id: 'css-71',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое значение свойства `contain` (CSS Containment) указывает браузеру, что внутренности элемента никак не влияют на размеры и разметку внешних элементов, а также не выходят за его границы, обеспечивая максимальную оптимизацию перерисовки?',
    options: [
      'contain: layout',
      'contain: paint',
      'contain: strict',
      'contain: size'
    ],
    correctAnswer: 2,
    explanation:
      'contain: strict является сокращением для contain: size layout paint style. Оно сообщает браузеру, что элемент имеет фиксированный размер и полностью изолирован от остального документа. Браузер может вообще не пересчитывать глобальный layout при изменениях внутри этого элемента.',
  },
  {
    id: 'css-72',
    difficulty: 'advanced',
    category: 'css',
    question: 'Каким образом свойство `content-visibility: auto` оптимизирует производительность рендеринга длинных страниц?',
    options: [
      'Оно асинхронно скачивает картинки, находящиеся вне экрана',
      'Оно пропускает отрисовку (layout и paint) содержимого элементов, находящихся вне зоны видимости (viewport), мгновенно ускоряя начальную загрузку страницы',
      'Оно сжимает HTML-код невидимых блоков',
      'Оно автоматически уменьшает разрешение фоновых видеороликов'
    ],
    correctAnswer: 1,
    explanation:
      'content-visibility: auto — мощнейший инструмент оптимизации. Браузер не тратит ресурсы на рендеринг (вычисление геометрии и отрисовку) блоков, находящихся вне экрана. Как только блок приближается к viewport, браузер рендерит его. Важно использовать с contain-intrinsic-size для резервирования высоты блока.',
  },
  {
    id: 'css-73',
    difficulty: 'advanced',
    category: 'css',
    question: 'Каким образом подключается и используется кастомный Paint Worklet, созданный через CSS Painting API (Houdini)?',
    options: [
      'CSS.paintWorklet.addModule("file.js") в JS, и background: paint(my-custom-painter) в CSS',
      'import "file.js" в CSS через @import',
      'Через тег <link rel="paint-worklet">',
      'background-image: url("paint-worklet:my-painter")'
    ],
    correctAnswer: 0,
    explanation:
      'Сначала скрипт ворклета регистрируется в JS через CSS.paintWorklet.addModule("path.js"). Внутри ворклета вызывается registerPaint("my-custom-painter", ...). Затем в CSS этот ворклет вызывается как функция генерации изображения: background: paint(my-custom-painter).',
  },
  {
    id: 'css-74',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какую задачу решает экспериментальный CSS Layout API (Houdini)?',
    options: [
      'Он позволяет создавать кастомные сетки на основе CSS Grid',
      'Он дает разработчикам возможность писать собственные алгоритмы раскладки элементов (например, Masonry) на JavaScript, которые выполняются прямо на этапе компоновки (Layout) браузера',
      'Он автоматически перестраивает разметку под размеры экрана часов',
      'Он управляет порядком наложения элементов без z-index'
    ],
    correctAnswer: 1,
    explanation:
      'CSS Layout API позволяет зарегистрировать свой ворклет разметки (registerLayout("my-layout", ...)). В CSS это применяется как display: layout(my-layout). Это дает нативную производительность для сложных кастомных раскладок, которые ранее писались на медленном JS (считывание размеров из DOM и вызов reflow).',
  },
  {
    id: 'css-75',
    difficulty: 'advanced',
    category: 'css',
    question: 'Для чего используется CSS-правило `@counter-style`?',
    options: [
      'Для стилизации анимации обратного отсчета времени',
      'Для определения собственных (кастомных) стилей нумерации списков, позволяя настраивать префиксы, суффиксы, символы и алгоритмы инкремента',
      'Для ведения учета количества кликов на странице',
      'Для управления CSS-переменными счетчиков'
    ],
    correctAnswer: 1,
    explanation:
      'Правило @counter-style позволяет выйти за рамки стандартных decimal, square или circle. Можно определить свою систему нумерации, например, римские цифры с кастомными символами, эмодзи-списки или алфавитные системы, настраивая свойства system, symbols, suffix и др.',
  },
  {
    id: 'css-76',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое свойство предотвращает разрыв элемента (например, заголовка или изображения) между колонками в многоколоночной верстке (`column-count`)?',
    options: [
      'column-span: none',
      'break-inside: avoid',
      'page-break-inside: auto',
      'column-break: prevent'
    ],
    correctAnswer: 1,
    explanation:
      'Чтобы элемент не разрывался пополам при переходе из низа одной колонки в верх следующей, ему задают break-inside: avoid (или legacy-вариант page-break-inside: avoid). Это гарантирует целостность отображения элемента.',
  },
  {
    id: 'css-77',
    difficulty: 'advanced',
    category: 'css',
    question: 'В чём разница между CSS-свойствами `orphans` и `widows` при форматировании многостраничного или колоночного текста?',
    options: [
      'orphans задает минимальное число строк абзаца, оставляемых внизу страницы; widows задает минимальное число строк, переносимых на следующую страницу',
      'widows работает только со списками, а orphans — только с заголовками',
      'Разницы нет, свойства взаимозаменяемы',
      'orphans управляет межстрочным интервалом, а widows — отступами между абзацами'
    ],
    correctAnswer: 0,
    explanation:
      'orphans (сироты) управляет минимальным количеством строк абзаца, которые могут остаться на первой странице (внизу), прежде чем произойдет разрыв. widows (вдовы) управляет минимальным количеством строк, которые должны перенестись на новую страницу (вверху).',
  },
  {
    id: 'css-78',
    difficulty: 'advanced',
    category: 'css',
    question: 'Как принудительно заставить браузер всегда начинать конкретный элемент (например, тег `<h2>`) с новой страницы при печати документа?',
    options: [
      'break-before: page',
      'break-inside: page',
      'page-break: force',
      'break-after: avoid-page'
    ],
    correctAnswer: 0,
    explanation:
      'Свойство break-before со значением page (или break-before: always) указывает браузеру вставить разрыв страницы/колонки непосредственно перед текущим элементом. Это стандартный способ структурирования печатных версий документов.',
  },
  {
    id: 'css-79',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое CSS-свойство позволяет управлять печатью фоновых изображений и цветов элемента, если они отключены в настройках принтера пользователя по умолчанию?',
    options: [
      'color-adjust: exact (или -webkit-print-color-adjust: exact)',
      'background-visibility: force',
      'print-background: keep',
      'forced-colors: active'
    ],
    correctAnswer: 0,
    explanation:
      'Свойство print-color-adjust (в WebKit: -webkit-print-color-adjust) со значением exact заставляет принтер печатать фоновые цвета и фоновые картинки именно так, как они заданы в CSS, игнорируя настройки экономии чернил принтера.',
  },
  {
    id: 'css-80',
    difficulty: 'advanced',
    category: 'css',
    question: 'Что происходит с CSS-стилями страницы при активации медиа-функции `@media (forced-colors: active)`?',
    options: [
      'Браузер принудительно преобразует все цвета в оттенки серого',
      'Браузер переходит в режим повышенного контраста ОС, переопределяя большинство авторских цветов (background-color, color, border-color) на системную палитру пользователя',
      'Страница блокирует загрузку любых внешних шрифтов',
      'Стили полностью отключаются, загружается только голый HTML'
    ],
    correctAnswer: 1,
    explanation:
      'forced-colors: active сообщает, что на устройстве включен режим высокой контрастности (например, в Windows Accessibility). Браузер берет под контроль цвета текста, ссылок, рамок и фона, заменяя их на цвета, выбранные пользователем в системе. Разработчик может корректировать стили через эту медиа-функцию.',
  },
  {
    id: 'css-81',
    difficulty: 'advanced',
    category: 'css',
    question: 'Каков наилучший паттерн использования медиа-запроса `prefers-reduced-motion` для отключения анимаций без дублирования кода?',
    options: [
      '@media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; scroll-behavior: auto !important; } }',
      'Использовать JS для удаления всех тегов <style>',
      'Прописывать анимации только внутри медиа-запроса @media (prefers-reduced-motion: no-preference)',
      'Установить animation-duration: 0.001s для всех элементов'
    ],
    correctAnswer: 2,
    explanation:
      'Прогрессивное улучшение — лучший паттерн: объявлять сложные анимации и плавный скролл только внутри @media (prefers-reduced-motion: no-preference). Это избавляет от необходимости перебивать стили через !important и гарантирует отсутствие вспышек анимации на этапе загрузки.',
  },
  {
    id: 'css-82',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какие значения может принимать медиа-запрос `prefers-contrast`?',
    options: [
      'on / off',
      'no-preference / more / less / custom',
      'high / low',
      'true / false'
    ],
    correctAnswer: 1,
    explanation:
      'Медиа-запрос prefers-contrast определяет предпочтения пользователя по контрастности интерфейса. Он может принимать значения: no-preference (нет предпочтений), more (повышенная контрастность), less (пониженная контрастность), custom (пользователь использует forced-colors).',
  },
  {
    id: 'css-83',
    difficulty: 'advanced',
    category: 'css',
    question: 'Для чего используется медиа-запрос `prefers-reduced-transparency`?',
    options: [
      'Для уменьшения яркости экрана на мобильных устройствах',
      'Для определения того, что пользователь предпочитает сплошные фоны вместо полупрозрачных эффектов (например, стеклянного дизайна backdrop-filter)',
      'Для принудительного включения прозрачности во всех PNG изображениях',
      'Для управления прозрачностью шрифтов при рендеринге'
    ],
    correctAnswer: 1,
    explanation:
      'Медиа-запрос prefers-reduced-transparency позволяет адаптировать интерфейс для пользователей, испытывающих трудности с восприятием текста на полупрозрачных, размытых или градиентных фонах. При значении reduce следует заменять opacity/backdrop-filter на сплошные цвета.',
  },
  {
    id: 'css-84',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какую проблему решает использование единицы измерения `dvh` (Dynamic Viewport Height) по сравнению со стандартной `vh` на мобильных устройствах?',
    options: [
      'Она учитывает только альбомную ориентацию экрана',
      'Она динамически подстраивается под высоту экрана, учитывая появление и скрытие панели навигации/адресной строки мобильного браузера во время скролла',
      'Она округляет высоту экрана до ближайшего четного числа',
      'Она предотвращает горизонтальный скролл'
    ],
    correctAnswer: 1,
    explanation:
      'Стандартная vh игнорирует мобильные панели интерфейса (адресную строку), из-за чего элементы с height: 100vh часто уходят под нижнюю панель браузера. svh (small vh) рассчитывается с учетом панелей, lvh (large vh) — без них, а dvh динамически адаптируется при их скрытии или появлении.',
  },
  {
    id: 'css-85',
    difficulty: 'advanced',
    category: 'css',
    question: 'К чему привязана единица измерения `cqi` (Container Query Inline) в CSS?',
    options: [
      'К 1% от ширины viewport браузера',
      'К 1% от размера инлайн-направления (ширины в горизонтальном режиме) ближайшего предка, объявленного как контейнер запросов (container-type)',
      'К высоте базового шрифта внутри контейнера',
      'К размеру родительского элемента по оси Y'
    ],
    correctAnswer: 1,
    explanation:
      'Единица cqi составляет 1% от размера контейнера в инлайн-направлении (обычно ширина). cqb (Container Query Block) — 1% от размера в блочном направлении (обычно высота). Это позволяет создавать компоненты, адаптивные к размеру своего контейнера, а не всего экрана.',
  },
  {
    id: 'css-86',
    difficulty: 'advanced',
    category: 'css',
    question: 'В каком случае при создании масштабируемых и доступных интерфейсов правильнее использовать единицы `em`, а не `rem`?',
    options: [
      'Для задания общего размера шрифта (font-size) у заголовков верхнего уровня',
      'Для внутренних отступов (padding) и внешних (margin) компонента, которые должны пропорционально масштабироваться при изменении локального font-size самого этого компонента',
      'Для задания медиа-запросов (media queries)',
      'Для позиционирования фоновых изображений'
    ],
    correctAnswer: 1,
    explanation:
      'rem привязана строго к корневому шрифту (html). em привязана к размеру шрифта текущего элемента. Если мы хотим, чтобы при увеличении font-size кнопки (например, .btn--large) её внутренние отступы и иконка внутри масштабировались пропорционально тексту кнопки, padding/margin нужно задавать в em.',
  },
  {
    id: 'css-87',
    difficulty: 'advanced',
    category: 'css',
    question: 'Чему в точности равна единица измерения `1ch` в CSS?',
    options: [
      'Ширине символа перевода строки',
      'Ширине глифа "0" (ноль) используемого шрифта и его размера',
      'Средней ширине всех букв алфавита текущего шрифта',
      'Высоте заглавной буквы "C"'
    ],
    correctAnswer: 1,
    explanation:
      '1ch равен ширине символа "0" (ноль) текущего шрифта. Это исключительно полезно для ограничения ширины текстовых блоков для комфортного чтения (например, max-width: 60ch гарантирует около 60 символов в строке).',
  },
  {
    id: 'css-88',
    difficulty: 'advanced',
    category: 'css',
    question: 'Чему равна единица измерения `1rlh`?',
    options: [
      'Высоте строки корневого элемента (root element line-height, обычно тега <html>)',
      'Высоте строки текущего элемента',
      'Отношению межстрочного интервала к размеру шрифта',
      'Высоте строки первого абзаца'
    ],
    correctAnswer: 0,
    explanation:
      'lh равна высоте строки (line-height) текущего элемента. rlh (root line-height) равна высоте строки корневого элемента (html). Это позволяет верстать сетку вертикального ритма (baseline grid), выравнивая отступы по высоте строки.',
  },
  {
    id: 'css-89',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое утверждение о производительности селекторов (Selector Performance) CSS является верным?',
    options: [
      'Браузер читает селекторы слева направо, поэтому длинные цепочки быстрее коротких',
      'Браузер читает CSS-селекторы справа налево, поэтому селектор вида `.card *` заставляет браузер сначала найти абсолютно все элементы на странице, а затем проверять, лежат ли они в `.card`',
      'Использование ID-селекторов всегда медленнее, чем использование тегов',
      'Сложные псевдоклассы типа :not() полностью блокируют основной поток браузера'
    ],
    correctAnswer: 1,
    explanation:
      'Движок CSS-рендеринга сопоставляет селекторы справа налево (от ключевого к родителям). Селекторы с универсальным селектором в конце (например, .container *) крайне непроизводительны, так как браузер сначала собирает все элементы в DOM, а затем проверяет их предков.',
  },
  {
    id: 'css-90',
    difficulty: 'advanced',
    category: 'css',
    question: 'Каков вес (специфичность) селектора `#nav .menu-item:not(.active) a`?',
    options: [
      '1, 2, 1 (1 ID, 2 класса/псевдокласса, 1 элемент)',
      '0, 3, 1 (0 ID, 3 класса, 1 элемент)',
      '1, 1, 2 (1 ID, 1 класс, 2 элемента)',
      '1, 3, 0 (1 ID, 3 класса, 0 элементов)'
    ],
    correctAnswer: 0,
    explanation:
      'Расчет веса: 1) ID selector: #nav (вес 1,0,0). 2) Классы и псевдоклассы: .menu-item и .active (псевдокласс :not сам по себе веса не имеет, но его аргумент .active учитывается; итого 2 класса, вес 0,2,0). 3) Теги: a (вес 0,0,1). Итоговая специфичность: (1, 2, 1).',
  },
  {
    id: 'css-91',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое поведение демонстрирует сложный селектор `li:nth-child(2n of .featured)`?',
    options: [
      'Он выбирает каждый второй элемент li, если у него есть класс .featured',
      'Он сначала фильтрует список, оставляя только элементы с классом .featured, а затем выбирает среди них каждый второй элемент',
      'Он выбирает второй по счету элемент li внутри контейнера .featured',
      'Он выбирает каждый четный li, игнорируя класс'
    ],
    correctAnswer: 1,
    explanation:
      'Новый синтаксис :focus-visible / :nth-child(An+B of selector) сначала находит элементы, соответствующие вложенному селектору, строит из них виртуальный список и применяет к нему формулу An+B. Это заменяет и решает проблему классического :nth-child, который считал все элементы подряд.',
  },
  {
    id: 'css-92',
    difficulty: 'advanced',
    category: 'css',
    question: 'В чём разница между селекторами `div:nth-child(2)` и `div:nth-of-type(2)`?',
    options: [
      'div:nth-child(2) выбирает второй элемент только если это div; div:nth-of-type(2) выбирает второй по счету элемент div среди детей родителя, даже если перед ним были элементы других типов',
      'Разницы нет, это синонимы',
      'div:nth-child(2) ищет с конца списка',
      'div:nth-of-type(2) работает только в Grid-контейнерах'
    ],
    correctAnswer: 0,
    explanation:
      'nth-child(2) проверяет строго второго ребенка родителя (и если это не div, ничего не выберет). nth-of-type(2) игнорирует элементы других типов (например, p или span), находит все элементы div и выбирает среди них второй.',
  },
  {
    id: 'css-93',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое условие должно соблюдаться для срабатывания селектора `p:only-of-type`?',
    options: [
      'Элемент p должен быть единственным ребенком у своего родителя',
      'Элемент p должен быть единственным элементом типа p среди детей родителя, хотя у родителя могут быть другие дети других типов (например, h1 или span)',
      'Элемент p должен быть пустым внутри',
      'На странице должен присутствовать только один элемент p'
    ],
    correctAnswer: 1,
    explanation:
      'p:only-of-type выбирает элемент p, если у его родителя больше нет других элементов типа p. В отличие от p:only-child, который требует, чтобы у родителя вообще не было других дочерних элементов (p должен быть единственным).',
  },
  {
    id: 'css-94',
    difficulty: 'advanced',
    category: 'css',
    question: 'В чём разница между псевдоклассами `:empty` и `:blank` согласно современным спецификациям?',
    options: [
      'Разницы нет, оба реагируют на отсутствие текста',
      ':empty выбирает элемент, если в нём нет абсолютно ничего (даже пробелов); :blank выбирает элемент, если он пуст ИЛИ содержит только пробельные символы (пробелы, табы, переносы строк)',
      ':blank используется только для input полей, а :empty — для блоков',
      ':empty работает только со скрытыми элементами'
    ],
    correctAnswer: 1,
    explanation:
      ':empty очень строгий: даже одиночный пробел или перенос строки внутри тега делает его "непустым". Псевдокласс :blank (уровня Selectors Level 4) является более гибким и считает элемент пустым, если внутри него нет видимого контента, а есть только "whitespace".',
  },
  {
    id: 'css-95',
    difficulty: 'advanced',
    category: 'css',
    question: 'В каком сценарии сработает селектор `:focus-visible`, но НЕ будет раздражать пользователей, кликающих мышкой по кнопкам?',
    options: [
      'Он сработает только при фокусе элемента через JavaScript',
      'Он сработает, когда фокус на элемент устанавливается с помощью клавиатуры (например, навигацией клавишей Tab), помогая пользователям, но не показывая рамку при обычном клике мышью',
      'Он сработает только на сенсорных экранах',
      'Он активируется при двойном клике на элемент'
    ],
    correctAnswer: 1,
    explanation:
      ':focus-visible решает известную проблему доступности: рамка фокуса (outline) важна для клавиатурной навигации, но выглядит лишней для зрячих пользователей при клике мышкой. Браузер сам определяет способ ввода и применяет стили :focus-visible только при клавиатурном фокусе.',
  },
  {
    id: 'css-96',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое поведение описывает псевдокласс `:focus-within`?',
    options: [
      'Он выбирает дочерний элемент, если его родитель находится в фокусе',
      'Он выбирает сам элемент, если он находится в фокусе, ИЛИ если любой из его дочерних элементов (потомков) получает фокус',
      'Он блокирует фокус на всех внутренних элементах',
      'Он отслеживает наведение курсора мыши на элемент'
    ],
    correctAnswer: 1,
    explanation:
      ':focus-within позволяет стилизовать родительский контейнер (например, подсвечивать рамку всей формы или карточки), когда пользователь фокусит интерактивный элемент внутри этого контейнера (например, input или кнопку).',
  },
  {
    id: 'css-97',
    difficulty: 'advanced',
    category: 'css',
    question: 'Каким образом псевдокласс `:placeholder-shown` помогает создавать эффект плавающих подписей (floating labels) в формах без использования JS?',
    options: [
      'Он показывает placeholder только тогда, когда input пуст',
      'Он позволяет стилизовать подпись (label), находящуюся рядом с полем, реагируя на то, отображается ли в данный момент плейсхолдер в поле (то есть поле пустое) или пользователь уже начал ввод текста (плейсхолдер скрыт)',
      'Он автоматически заменяет текст label на placeholder',
      'Он делает плейсхолдер анимированным'
    ],
    correctAnswer: 1,
    explanation:
      'Если плейсхолдер виден (input:placeholder-shown), поле пустое. Как только пользователь начинает вводить текст, плейсхолдер скрывается, и селектор :placeholder-shown перестает действовать. Это позволяет с помощью CSS-селекторов соседних элементов (например, input:not(:placeholder-shown) + label) анимировать и смещать label наверх.',
  },
  {
    id: 'css-98',
    difficulty: 'advanced',
    category: 'css',
    question: 'В чём ключевое преимущество использования `:user-invalid` вместо стандартного `:invalid` при стилизации ошибок валидации полей ввода?',
    options: [
      'Он работает быстрее',
      'Он применяет стили ошибки только ПОСЛЕ того, как пользователь совершил взаимодействие с полем (ввел текст, нажал Tab или попытался отправить форму), предотвращая красную подсветку пустых полей при загрузке',
      'Он автоматически переводит сообщения об ошибках',
      'Он не требует поддержки HTML5-атрибутов'
    ],
    correctAnswer: 1,
    explanation:
      ':invalid срабатывает мгновенно (даже на пустых полях с required сразу после загрузки страницы). Псевдокласс :user-invalid (и аналогичный :user-valid) ждет первого взаимодействия пользователя с полем, обеспечивая гораздо более дружелюбный UX.',
  },
  {
    id: 'css-99',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какое поведение демонстрирует псевдокласс `:user-valid`?',
    options: [
      'Он валидирует поле на сервере',
      'Он применяет стили успешной валидации только после того, как пользователь изменил значение поля и убрал с него фокус, подтвердив успешный ввод',
      'Он делает поле доступным только для авторизованных пользователей',
      'Он автоматически очищает поле при успешном вводе'
    ],
    correctAnswer: 1,
    explanation:
      'Подобно :user-invalid, :user-valid срабатывает только после взаимодействия пользователя с элементом, предотвращая ложно-положительную подсветку валидности полей до того, как пользователь успел туда что-то ввести.',
  },
  {
    id: 'css-100',
    difficulty: 'advanced',
    category: 'css',
    question: 'Какую основную возможность открывает использование правила `@property` в CSS Houdini?',
    options: [
      'Создание новых HTML-тегов прямо в CSS',
      'Регистрацию и строгое определение типа данных, начального значения и наследуемости кастомного свойства (CSS-переменной), что делает возможным плавное анимирование градиентов через transition',
      'Автоматическую оптимизацию размеров картинок',
      'Интеграцию CSS со сторонними базами данных'
    ],
    correctAnswer: 1,
    explanation:
      'Правило @property позволяет задать тип переменной (например, syntax: "<color>"). Без этого браузер считает значение переменной просто строкой и не может анимировать её (например, плавно переливать градиент). С типизированной переменной браузер понимает промежуточные значения цвета и запускает плавную анимацию.',
  },
];
