import { Question } from '@/types/quiz';

export const cssQuestions: Question[] = [
  {
    id: 'css-1',
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
];
