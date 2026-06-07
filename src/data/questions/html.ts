import { Question } from '@/types/quiz';

export const htmlQuestions: Question[] = [
  {
    id: 'html-1',
    category: 'html',
    question: 'Что такое DOCTYPE и зачем он нужен?',
    options: [
      'Метатег для указания кодировки документа',
      'Объявление в начале HTML-документа, сообщающее браузеру о версии HTML и режиме рендеринга (standards mode)',
      'XML-инструкция для обработки HTML-документов',
      'Устаревший тег для подключения CSS-стилей',
    ],
    correctAnswer: 1,
    explanation:
      '<!DOCTYPE html> — объявление, размещаемое самой первой строкой HTML-документа. Оно сообщает браузеру, что документ написан на HTML5, и включает "standards mode" (стандартный режим рендеринга). Без DOCTYPE браузер может войти в "quirks mode" и некорректно отображать страницу.',
  },
  {
    id: 'html-2',
    category: 'html',
    question: 'В чём разница между тегами <div> и <span>?',
    options: [
      '<div> только для текста, <span> для блочных элементов',
      '<div> — блочный элемент (занимает всю ширину строки), <span> — строчный (только ширина содержимого)',
      'Нет разницы, они взаимозаменяемы',
      '<span> поддерживает вложенные блочные элементы, <div> — нет',
    ],
    correctAnswer: 1,
    explanation:
      '<div> — блочный (block-level) элемент: занимает всю доступную ширину, начинается с новой строки. Используется для структурной разметки. <span> — строчный (inline) элемент: занимает только ширину содержимого, не начинает новую строку. Используется для стилизации части текста или группировки строчных элементов.',
  },
  {
    id: 'html-3',
    category: 'html',
    question: 'Для чего используются семантические теги HTML5?',
    options: [
      'Для ускорения загрузки страницы',
      'Только для визуального оформления текста',
      'Для придания смысловой структуры контенту, улучшения доступности (a11y) и SEO',
      'Для совместимости с IE6',
    ],
    correctAnswer: 2,
    explanation:
      'Семантические теги HTML5 (<header>, <main>, <footer>, <nav>, <article>, <section>, <aside>, <figure>, <time> и др.) описывают смысловую роль контента. Преимущества: 1) SEO — поисковики лучше понимают структуру. 2) Доступность — скринридеры навигируют по семантическим блокам. 3) Читаемость кода для разработчиков.',
  },
  {
    id: 'html-4',
    category: 'html',
    question: 'Что такое атрибут alt у изображений?',
    options: [
      'Заголовок, отображаемый при наведении на изображение',
      'Альтернативный текст, описывающий изображение; показывается если картинка не загрузилась, важен для доступности и SEO',
      'Алиас для CSS-класса изображения',
      'Атрибут для задания анимации при загрузке',
    ],
    correctAnswer: 1,
    explanation:
      'Атрибут alt предоставляет текстовую альтернативу изображению. Зачем нужен: 1) Скринридеры зачитывают alt людям с нарушениями зрения. 2) Отображается если изображение не загружается. 3) Улучшает SEO. Для декоративных изображений используйте alt="" (пустой), чтобы скринридер пропустил их.',
  },
  {
    id: 'html-5',
    category: 'html',
    question: 'В чём разница между атрибутами id и class?',
    options: [
      'id — для JS, class — для CSS',
      'id должен быть уникальным на странице (один элемент); class может использоваться для множества элементов',
      'id нельзя использовать в CSS, class — нельзя в JS',
      'Разницы нет, оба атрибута идентичны',
    ],
    correctAnswer: 1,
    explanation:
      'id должен быть уникальным в пределах страницы — для одного конкретного элемента. Используется для якорных ссылок (#id), доступа через JS (getElementById). class — для группировки элементов со схожим стилем/поведением; один элемент может иметь несколько классов. CSS-специфичность: id (#) сильнее класса (.).',
  },
  {
    id: 'html-6',
    category: 'html',
    question: 'Что такое data-атрибуты в HTML?',
    options: [
      'Атрибуты для указания типа данных (data-type="string")',
      'Пользовательские атрибуты (data-*) для хранения дополнительных данных в HTML-элементах; доступны через dataset в JS',
      'Атрибуты для связи с базой данных',
      'Шаблоны данных для повторного использования в HTML',
    ],
    correctAnswer: 1,
    explanation:
      'data-атрибуты (data-*) позволяют хранить произвольные данные прямо в HTML-элементах без нарушения семантики. Пример: <div data-user-id="42" data-role="admin">. В JavaScript: element.dataset.userId (camelCase). Полезны для передачи данных в JS без Ajax, для хранения конфигурации UI-компонентов.',
  },
  {
    id: 'html-7',
    category: 'html',
    question: 'Что такое тег <meta> и для чего используется?',
    options: [
      'Тег для создания внешних ссылок',
      'Контейнер для скриптов',
      'Тег для метаданных документа: кодировка, описание, ключевые слова, viewport, Open Graph и др.',
      'Родительский тег для всего содержимого <head>',
    ],
    correctAnswer: 2,
    explanation:
      '<meta> — самозакрывающийся тег в <head> для метаданных. Ключевые примеры: <meta charset="UTF-8"> — кодировка; <meta name="viewport" content="width=device-width"> — адаптивность; <meta name="description" content="..."> — для SEO; <meta property="og:title" content="..."> — Open Graph для соцсетей.',
  },
  {
    id: 'html-8',
    category: 'html',
    question: 'В чём разница между тегами <strong> и <b>?',
    options: [
      'Оба идентичны — делают текст жирным',
      '<strong> — семантический тег (важный контент), скринридеры интонируют его; <b> — визуальное выделение без семантики',
      '<b> — устарел в HTML5, его использование запрещено',
      '<strong> работает только внутри <article>',
    ],
    correctAnswer: 1,
    explanation:
      '<strong> — семантический тег, означающий важность контента. Скринридеры могут акцентировать его голосом. <b> — только визуальное выделение жирным без семантической нагрузки. Аналогично: <em> (акцент/ударение, курсив семантически) vs <i> (курсив визуально). Предпочитайте семантические теги для доступности.',
  },
  {
    id: 'html-9',
    category: 'html',
    question: 'Что такое атрибут tabindex?',
    options: [
      'Атрибут для указания порядка вкладок в браузере',
      'Управляет порядком фокусировки элементов при навигации с клавиатуры (Tab). tabindex=0 включает в естественный порядок, -1 исключает но оставляет фокусируемым через JS',
      'Атрибут для создания вкладок в HTML без JavaScript',
      'Номер слоя для z-index в CSS',
    ],
    correctAnswer: 1,
    explanation:
      'tabindex управляет порядком фокуса при нажатии Tab. Значения: tabindex="0" — элемент входит в естественный порядок DOM. tabindex="-1" — элемент не фокусируется Tab, но программно можно element.focus(). tabindex="1+" — задаёт явный порядок (не рекомендуется). Важно для доступности.',
  },
  {
    id: 'html-10',
    category: 'html',
    question: 'Что такое тег <canvas>?',
    options: [
      'Тег для встраивания PDF-документов',
      'Контейнер для SVG-графики',
      'HTML-элемент для растровой 2D/3D-графики через JavaScript API (Context 2D, WebGL)',
      'Тег для создания адаптивных таблиц',
    ],
    correctAnswer: 2,
    explanation:
      '<canvas> предоставляет растровую (bitmap) поверхность для рисования через JS. API: const ctx = canvas.getContext("2d"). Позволяет: рисовать фигуры, изображения, текст; создавать анимации; 3D-графику через WebGL. В отличие от SVG, canvas — пиксельный (нет DOM-элементов внутри), что даёт высокую производительность для игр/визуализаций.',
  },
  {
    id: 'html-11',
    category: 'html',
    question: 'Что такое атрибут async и defer у тега <script>?',
    options: [
      'async — асинхронный PHP, defer — откладывает JS до загрузки CSS',
      'Оба откладывают загрузку скрипта; async — запускает сразу после загрузки; defer — запускает после полного парсинга HTML, в порядке появления',
      'async — для внешних скриптов, defer — для встроенных',
      'Разницы нет — оба делают загрузку неблокирующей',
    ],
    correctAnswer: 1,
    explanation:
      'Без атрибутов: браузер останавливает парсинг HTML для загрузки и выполнения скрипта. async: загрузка параллельна, выполнение сразу после загрузки (не дожидаясь HTML). defer: загрузка параллельна, выполнение после полного парсинга HTML, в порядке объявления. defer подходит для скриптов, зависящих от DOM.',
  },
  {
    id: 'html-12',
    category: 'html',
    question: 'Для чего используется тег <picture>?',
    options: [
      'Устаревший тег для добавления изображений (заменён <img>)',
      'Для встраивания видео в различных форматах',
      'Для задания разных источников изображений в зависимости от медиа-условий, размера экрана или поддержки формата',
      'Для создания фотогалерей с встроенной навигацией',
    ],
    correctAnswer: 2,
    explanation:
      '<picture> содержит несколько <source> с условиями и финальный <img>. Позволяет: art direction (разные кадрировки для разных экранов), формат (WebP с fallback на JPEG), retina (2x изображения). Браузер выбирает подходящий source. <img> внутри обязателен как fallback.',
  },
  {
    id: 'html-13',
    category: 'html',
    question: 'Что такое ARIA-атрибуты?',
    options: [
      'Атрибуты для анимации в CSS',
      'Атрибуты (Accessible Rich Internet Applications) для улучшения доступности интерактивных элементов для скринридеров',
      'Атрибуты для указания серверного API',
      'Атрибуты для работы с Service Workers',
    ],
    correctAnswer: 1,
    explanation:
      'ARIA (Accessible Rich Internet Applications) — набор HTML-атрибутов для улучшения доступности. Три категории: роли (role="dialog"), свойства (aria-label, aria-required), состояния (aria-expanded, aria-hidden). Правило: используйте семантический HTML первым, ARIA — только когда нативных возможностей недостаточно. "No ARIA is better than bad ARIA".',
  },
  {
    id: 'html-14',
    category: 'html',
    question: 'Что делает тег <link rel="preload">?',
    options: [
      'Создаёт предварительную загрузку всей страницы',
      'Инструктирует браузер загрузить ресурс заранее с высоким приоритетом (шрифты, критический CSS, изображения) ещё до их обнаружения парсером',
      'Создаёт ссылку на связанный документ',
      'Загружает CSS-стили асинхронно',
    ],
    correctAnswer: 1,
    explanation:
      '<link rel="preload" href="font.woff2" as="font"> указывает браузеру загрузить ресурс с высоким приоритетом как только началась обработка HTML. Атрибут as указывает тип ресурса (font, script, style, image). Улучшает LCP и устраняет задержку для критических ресурсов. Не путать с prefetch (загрузка для следующей страницы).',
  },
  {
    id: 'html-15',
    category: 'html',
    question: 'Что такое Web Storage API?',
    options: [
      'API для работы с файловой системой сервера',
      'Браузерный API для хранения данных на клиенте: localStorage (постоянное) и sessionStorage (на время сессии)',
      'API для хранения кэша через Service Worker',
      'Часть IndexedDB для простых ключ-значение операций',
    ],
    correctAnswer: 1,
    explanation:
      'Web Storage — localStorage и sessionStorage. localStorage: данные сохраняются навсегда (пока не удалены вручную/кодом), доступны во всех вкладках домена. sessionStorage: данные живут до закрытия вкладки. Оба хранят строки (используйте JSON.stringify/parse для объектов). Лимит ~5-10MB. В отличие от cookie — не отправляются на сервер.',
  },
  {
    id: 'html-16',
    category: 'html',
    question: 'В чём разница между тегами <article> и <section>?',
    options: [
      'Нет разницы — оба создают блочный контейнер',
      '<article> — самодостаточный независимый контент (пост, новость, комментарий); <section> — тематическая группировка контента, часть большего целого',
      '<article> используется только для статей, <section> — только для секций навигации',
      '<section> устарел в пользу <div>',
    ],
    correctAnswer: 1,
    explanation:
      '<article> — независимый, самодостаточный контент, который можно вырвать из контекста и он будет понятен: блог-пост, новость, комментарий, виджет. <section> — тематическая группировка связанного контента, обычно с заголовком. Внутри <article> могут быть <section>, и наоборот. Если сомневаетесь — используйте <div>.',
  },
  {
    id: 'html-17',
    category: 'html',
    question: 'Что такое атрибут loading="lazy" у изображений?',
    options: [
      'Замедляет загрузку изображений для экономии трафика',
      'Откладывает загрузку изображения до тех пор, пока оно не приблизится к области просмотра (ленивая загрузка)',
      'Загружает изображение в фоновом потоке',
      'Кэширует изображение в Service Worker',
    ],
    correctAnswer: 1,
    explanation:
      'loading="lazy" — нативная ленивая загрузка изображений. Браузер откладывает загрузку изображений, которые находятся далеко от текущего viewport, и загружает их по мере прокрутки пользователя. Значительно ускоряет начальную загрузку страницы. Не применяйте к LCP-изображению (первый экран) — оно должно грузиться сразу.',
  },
  {
    id: 'html-18',
    category: 'html',
    question: 'Что такое Shadow DOM?',
    options: [
      'Скрытый DOM, создаваемый браузером для внутренних элементов управления',
      'Часть спецификации Web Components — инкапсулированное дерево DOM с изолированными стилями, скрытое от основного документа',
      'Виртуальный DOM, используемый React и Vue',
      'DOM-элементы с display:none или visibility:hidden',
    ],
    correctAnswer: 1,
    explanation:
      'Shadow DOM — технология инкапсуляции в Web Components. Позволяет прикрепить изолированный DOM-поддерево (shadow tree) к элементу. Стили внутри Shadow DOM не влияют на внешний документ и наоборот. Браузер использует Shadow DOM для <input type="range">, <video> и других встроенных элементов. Методы: element.attachShadow({mode: "open"}).',
  },
  {
    id: 'html-19',
    category: 'html',
    question: 'Для чего используется тег <template> в HTML?',
    options: [
      'Для создания HTML-шаблонов для email-рассылок',
      'Клиентский шаблон: содержимое не рендерится и не выполняется при загрузке страницы; используется через JavaScript для создания повторяемого контента',
      'Серверный шаблонизатор, встроенный в HTML5',
      'Устаревший аналог <div> для группировки элементов',
    ],
    correctAnswer: 1,
    explanation:
      '<template> содержит HTML-фрагмент, который не отображается при загрузке (не рендерится, скрипты не выполняются, ресурсы не загружаются). Через JS можно клонировать содержимое: const clone = template.content.cloneNode(true); Используется в Web Components и для динамической генерации повторяющихся элементов.',
  },
  {
    id: 'html-20',
    category: 'html',
    question: 'Что такое атрибут role в HTML?',
    options: [
      'Определяет CSS-роль элемента (block, inline)',
      'ARIA-атрибут, определяющий семантическую роль элемента для вспомогательных технологий (скринридеров)',
      'Атрибут для управления доступом на основе ролей (RBAC)',
      'Атрибут для определения стиля курсора',
    ],
    correctAnswer: 1,
    explanation:
      'role — ARIA-атрибут, явно задающий семантическую роль элемента. Используется когда нельзя использовать нативный семантический тег. Например: role="button" на <div> (лучше использовать <button>), role="dialog" для модального окна, role="navigation" (лучше <nav>). Нативные семантические теги лучше — они имеют встроенный role и поведение.',
  },
  {
    id: 'html-21',
    category: 'html',
    question: 'Что такое прогрессивное улучшение (Progressive Enhancement) в HTML?',
    options: [
      'Постепенная загрузка HTML-контента с сервера',
      'Стратегия: сначала создать базовую функциональность для любого браузера, затем добавлять улучшения для современных браузеров поверх',
      'Оптимизация HTML для Progressive Web Apps',
      'Постепенная замена устаревшего HTML5 на HTML6',
    ],
    correctAnswer: 1,
    explanation:
      'Progressive Enhancement vs Graceful Degradation: PE — строим снизу вверх (base → enhanced), GD — сверху вниз (full → fallback). PE: базовый HTML работает без CSS и JS. CSS добавляет визуальные улучшения. JS — интерактивность. Результат: сайт работает везде, от старых браузеров до современных. Важно для доступности и SEO.',
  },
  {
    id: 'html-22',
    category: 'html',
    question: 'Что такое атрибут contenteditable?',
    options: [
      'Делает текст доступным только для копирования',
      'Делает содержимое HTML-элемента редактируемым пользователем прямо на странице',
      'Атрибут для rich text editor библиотек',
      'Способ отключить автозаполнение форм',
    ],
    correctAnswer: 1,
    explanation:
      'contenteditable="true" — элемент становится редактируемым. Пользователь может вводить текст, вставлять контент. document.execCommand() — старый API для форматирования (Bold, Italic, устаревает). Используется в: онлайн-редакторах (Notion, Medium editor), rich text editors. Важно обрабатывать innerHTML с осторожностью (XSS). Современные редакторы: ProseMirror, Lexical, Slate.js.',
  },
  {
    id: 'html-23',
    category: 'html',
    question: 'Что такое элемент <details> и <summary>?',
    options: [
      'Теги для отображения технических деталей в разработческих инструментах',
      '<details> создаёт раскрывающийся виджет без JavaScript; <summary> — видимый заголовок. Нативный accordion/disclosure паттерн',
      'Теги для написания подробных описаний изображений',
      'HTML аналог CSS display:none для скрытия элементов',
    ],
    correctAnswer: 1,
    explanation:
      '<details open> — атрибут open раскрывает по умолчанию. Событие toggle при открытии/закрытии. <summary> — кликабельный заголовок. Браузер добавляет треугольник ▶. CSS: details[open] summary { ... }. Стилизация через ::marker или list-style: none. Используется для FAQ, аккордеонов без JS, спойлеров. Отличная доступность из коробки.',
  },
  {
    id: 'html-24',
    category: 'html',
    question: 'Что такое атрибут defer и async у тега <script>?',
    options: [
      'defer откладывает загрузку скрипта, async — выполнение',
      'async загружает параллельно и выполняет сразу; defer загружает параллельно и выполняет после парсинга HTML в порядке размещения',
      'Оба одинаковы — просто синонимы для отложенного выполнения',
      'defer только для внешних скриптов, async для инлайн',
    ],
    correctAnswer: 1,
    explanation:
      'Без атрибутов: HTML-парсинг останавливается, скрипт загружается и выполняется. async: загрузка параллельна, выполнение немедленно при готовности (может нарушить порядок). defer: загрузка параллельна, выполнение после DOMContentLoaded в порядке в документе. Рекомендация: defer для большинства скриптов, async для независимых (аналитика, реклама).',
  },
  {
    id: 'html-25',
    category: 'html',
    question: 'Что такое атрибут tabindex и как управлять фокусом?',
    options: [
      'Определяет порядок вкладок в HTML-таблице',
      'tabindex="0" добавляет элемент в естественный порядок фокуса; tabindex="-1" даёт фокус только через JS; положительные числа задают явный порядок (не рекомендуется)',
      'Атрибут для создания горячих клавиш',
      'Порядок рендеринга элементов на странице',
    ],
    correctAnswer: 1,
    explanation:
      'tabindex: 0 — в natural tab order (дополнительно к нативно фокусируемым). -1 — не в tab order, но focus() через JS работает (для модалок). Положительные значения (1,2,3) — плохая практика, нарушают естественный порядок. Для keyboard accessibility: нативные интерактивные элементы (button, a, input) имеют tabindex="0" по умолчанию — используйте их.',
  },
  {
    id: 'html-26',
    category: 'html',
    question: 'Что такое атрибут loading="lazy" у изображений и iframe?',
    options: [
      'Загружает изображение в низком качестве сначала',
      'Откладывает загрузку до тех пор, пока элемент не приблизится к viewport (native lazy loading браузера)',
      'Показывает placeholder вместо изображения',
      'Кэширует изображение для офлайн-использования',
    ],
    correctAnswer: 1,
    explanation:
      'loading="lazy" — нативная ленивая загрузка браузера без JS. Браузер загружает изображение когда оно в пределах "расстояния" от viewport (зависит от браузера). loading="eager" — загрузить немедленно. loading="auto" — браузер решает. Не используйте lazy для above-the-fold изображений (LCP) — это замедлит Core Web Vitals. Поддержка: все современные браузеры.',
  },
  {
    id: 'html-27',
    category: 'html',
    question: 'Что такое элемент <picture> и зачем использовать вместо <img>?',
    options: [
      'Контейнер для группы изображений в галерее',
      '<picture> позволяет задать разные источники для разных условий (размер экрана, поддержка формата, плотность пикселей) через <source> элементы',
      'Тег для SVG-изображений с fallback на PNG',
      'Способ добавить caption к изображению',
    ],
    correctAnswer: 1,
    explanation:
      '<picture><source srcset="img.avif" type="image/avif"><source srcset="img.webp" type="image/webp"><img src="img.jpg" alt="..."></picture>. Браузер выбирает первый поддерживаемый source. Art direction: <source media="(min-width:768px)" srcset="desktop.jpg">. <img> в конце — обязательный fallback. Vs srcset: picture даёт полный контроль над выбором формата/изображения.',
  },
  {
    id: 'html-28',
    category: 'html',
    question: 'Что такое Intersection Observer API?',
    options: [
      'API для обнаружения пересечений CSS-свойств',
      'Web API для асинхронного отслеживания пересечения элементов с viewport или другим элементом — эффективная замена scroll listeners',
      'API для отслеживания кликов мыши на элементах',
      'Способ обнаружить коллизии DOM-элементов',
    ],
    correctAnswer: 1,
    explanation:
      'IntersectionObserver: new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) loadContent(e.target) }) }, { threshold: 0.1, rootMargin: "100px" }). Применения: lazy loading, infinite scroll, анимации при появлении, видео autoplay. Эффективнее getBoundingClientRect() в scroll handler — не блокирует main thread. Поддержка: все современные браузеры.',
  },
  {
    id: 'html-29',
    category: 'html',
    question: 'Что такое Web Workers и когда применять?',
    options: [
      'Service workers — воркеры для кэширования запросов',
      'JavaScript, выполняющийся в фоновом потоке без блокировки UI; обменивается с main thread через postMessage; не имеет доступа к DOM',
      'Способ создать несколько вкладок браузера программно',
      'Node.js worker threads для серверных вычислений',
    ],
    correctAnswer: 1,
    explanation:
      'Web Worker: const worker = new Worker("worker.js"); worker.postMessage(data); worker.onmessage = e => result(e.data). Без доступа к DOM, window (есть self). Применения: тяжёлые вычисления (криптография, обработка изображений, парсинг), WebAssembly. SharedWorker — один воркер для нескольких вкладок. Не путать с Service Worker (кэширование/PWA).',
  },
  {
    id: 'html-30',
    category: 'html',
    question: 'Что такое Mutation Observer API?',
    options: [
      'API для отслеживания мутаций CSS-правил',
      'Web API для асинхронного наблюдения за изменениями в DOM-дереве (добавление/удаление узлов, изменение атрибутов, текста)',
      'Способ отследить изменения в localStorage',
      'API для мониторинга ошибок в JavaScript коде',
    ],
    correctAnswer: 1,
    explanation:
      'MutationObserver: const observer = new MutationObserver(mutations => mutations.forEach(m => console.log(m.type))). observer.observe(node, { childList: true, attributes: true, subtree: true, characterData: true }). Заменил устаревшие DOM Mutation Events. Применения: реализация собственных UI-библиотек, наблюдение за сторонним кодом, lazy-init для появляющихся элементов.',
  },
  {
    id: 'html-31',
    category: 'html',
    question: 'Что такое Performance Observer API?',
    options: [
      'Инструмент для профилирования CSS анимаций',
      'Web API для отслеживания performance метрик: ресурсы, navigation, paint, long tasks, layout shift — основа для мониторинга Core Web Vitals',
      'API для измерения времени рендеринга компонентов React',
      'Расширение Chrome DevTools для анализа производительности',
    ],
    correctAnswer: 1,
    explanation:
      'PerformanceObserver: const po = new PerformanceObserver(list => list.getEntries().forEach(e => console.log(e))). po.observe({ type: "largest-contentful-paint", buffered: true }). Types: "resource", "navigation", "paint", "longtask", "largest-contentful-paint", "layout-shift", "first-input". Библиотека web-vitals от Google использует этот API для измерения LCP, FID, CLS.',
  },
  {
    id: 'html-32',
    category: 'html',
    question: 'Что такое атрибут fetchpriority у изображений и скриптов?',
    options: [
      'Атрибут для установки приоритета кэширования ресурсов',
      'Подсказка браузеру о приоритете загрузки ресурса: high/low/auto. Критично для оптимизации LCP — установите high для главного изображения',
      'Атрибут для предварительной загрузки ресурсов',
      'Настройка очерёдности запросов к API',
    ],
    correctAnswer: 1,
    explanation:
      'fetchpriority="high" — для LCP-изображения, критических скриптов. fetchpriority="low" — для изображений ниже fold, неважных ресурсов. По умолчанию (auto) браузер использует эвристику. Комбинация: <img src="hero.jpg" fetchpriority="high" loading="eager"> для LCP. <link rel="preload" fetchpriority="high"> — для предзагрузки с высоким приоритетом.',
  },
  {
    id: 'html-33',
    category: 'html',
    question: 'Что такое IndexedDB и когда использовать вместо localStorage?',
    options: [
      'Встроенная реляционная база данных браузера с SQL',
      'Низкоуровневый NoSQL хранилище в браузере: асинхронный, поддерживает сложные типы данных (Blob, ArrayBuffer), большой объём (GB), транзакции',
      'Облачное хранилище данных синхронизированное между устройствами',
      'Шифрованная версия localStorage',
    ],
    correctAnswer: 1,
    explanation:
      'IndexedDB vs localStorage: объём (GB vs ~5MB), async API vs sync (блокирует поток), сложные типы vs только строки, индексы и транзакции. Применения: PWA офлайн-данные, кэш API-ответов, large datasets. Низкоуровневый API — обычно используют обёртки: Dexie.js, idb. Cache API (Service Worker) — для HTTP-ответов/ресурсов.',
  },
  {
    id: 'html-34',
    category: 'html',
    question: 'Что такое атрибуты crossorigin и integrity у тега <script>/<link>?',
    options: [
      'crossorigin — для CORS, integrity — для шифрования ресурса',
      'integrity содержит хеш ресурса (Subresource Integrity) — браузер отклонит файл если хеш не совпадает; crossorigin нужен для CORS и чтобы integrity работало с CDN',
      'crossorigin разрешает кросс-доменные запросы из скрипта, integrity — версионирование',
      'Оба только для скриптов в Content Security Policy',
    ],
    correctAnswer: 1,
    explanation:
      'SRI (Subresource Integrity): <script src="cdn/lib.js" integrity="sha384-abc123..." crossorigin="anonymous">. Браузер вычисляет хеш загруженного файла и сравнивает с integrity. Если не совпадает — блокирует выполнение. Защищает от CDN-компрометации. crossorigin="anonymous" — CORS без credentials. crossorigin="use-credentials" — с cookies. Нужен для SRI на cross-origin ресурсах.',
  },
  {
    id: 'html-35',
    category: 'html',
    question: 'Что такое <link rel="preconnect"> и <link rel="dns-prefetch">?',
    options: [
      'Загружают ресурсы заранее до HTML парсинга',
      'preconnect устанавливает TCP+TLS соединение с доменом заранее. dns-prefetch только DNS-разрешение. Оба уменьшают задержку при первом запросе к домену',
      'Кэшируют ресурсы с указанных доменов',
      'Блокируют соединения с нежелательными доменами',
    ],
    correctAnswer: 1,
    explanation:
      'preconnect: DNS + TCP + TLS handshake заранее. Дорогостоящий — используйте для 1-3 критических доменов (Google Fonts API, CDN). dns-prefetch: только DNS. Дешевле, используйте для менее критичных доменов. <link rel="preconnect" href="https://fonts.googleapis.com"> + <link rel="dns-prefetch" href="https://fonts.googleapis.com"> — частая комбинация. Значительно ускоряет TTFB.',
  },
  {
    id: 'html-36',
    category: 'html',
    question: 'Что такое Content Security Policy (CSP)?',
    options: [
      'HTML-атрибут для ограничения содержимого отдельных элементов',
      'HTTP-заголовок или <meta> тег, определяющий политику загрузки ресурсов — защита от XSS, data injection, clickjacking',
      'Способ шифрования HTML-содержимого страницы',
      'Политика доступа к контенту для авторизованных пользователей',
    ],
    correctAnswer: 1,
    explanation:
      'CSP через HTTP заголовок: Content-Security-Policy: default-src "self"; script-src "self" cdn.example.com; Через meta: <meta http-equiv="Content-Security-Policy" content="...">. Директивы: default-src, script-src, style-src, img-src, connect-src. Nonce: script-src "nonce-abc123" — позволяет только скрипты с этим nonce. Защищает от XSS запрещая inline скрипты и сторонние источники.',
  },
  {
    id: 'html-37',
    category: 'html',
    question: 'Что такое Progressive Web App (PWA) и её ключевые технологии?',
    options: [
      'Мобильное приложение написанное на HTML и загружаемое в App Store',
      'Веб-приложение с возможностями нативного приложения: офлайн работа (Service Worker), установка на экран (Web App Manifest), push-уведомления, background sync',
      'Метод постепенной загрузки веб-страницы по частям',
      'Framework для создания кросс-платформенных приложений',
    ],
    correctAnswer: 1,
    explanation:
      'PWA требует: 1) HTTPS. 2) Web App Manifest (manifest.json): name, icons, start_url, display: "standalone". 3) Service Worker: офлайн кэширование, background sync, push notifications. Критерии Google: Lighthouse PWA audit. Преимущества: устанавливается без App Store, офлайн, push-уведомления. Минусы: iOS ограничения (Safari урезает Service Worker возможности).',
  },
  {
    id: 'html-38',
    category: 'html',
    question: 'Что такое Web Components и их основные технологии?',
    options: [
      'Фреймворк от Google для создания переиспользуемых виджетов',
      'Набор стандартов: Custom Elements, Shadow DOM, HTML Templates — позволяют создавать инкапсулированные переиспользуемые компоненты нативными средствами браузера',
      'Способ встраивать React-компоненты в обычный HTML',
      'Технология для создания виджетов только в Chrome',
    ],
    correctAnswer: 1,
    explanation:
      'Web Components: 1) Custom Elements: class MyButton extends HTMLElement; customElements.define("my-button", MyButton). 2) Shadow DOM: this.attachShadow({mode:"open"}) — инкапсулированное DOM-дерево (стили не проникают). 3) HTML Templates: <template> — переиспользуемый фрагмент. Lit (от Google) — библиотека над Web Components. Совместимы со всеми фреймворками.',
  },
  {
    id: 'html-39',
    category: 'html',
    question: 'Что такое атрибут autocomplete у форм?',
    options: [
      'Включает встроенную валидацию поля браузером',
      'Подсказывает браузеру как автозаполнять поле: "email", "name", "current-password", "new-password", "off". Критично для UX и password managers',
      'Автоматически завершает ввод текста через AI',
      'Атрибут для синхронизации форм между вкладками',
    ],
    correctAnswer: 1,
    explanation:
      'autocomplete управляет автозаполнением браузера и password managers. Значения: "email", "username", "current-password" (для login), "new-password" (для регистрации/смены пароля), "one-time-code" (OTP), "cc-number" (карта). autocomplete="off" не всегда работает — браузеры игнорируют для паролей. Правильный autocomplete улучшает UX и соответствие WCAG.',
  },
  {
    id: 'html-40',
    category: 'html',
    question: 'Что такое HTML Drag and Drop API?',
    options: [
      'CSS-техника для перетаскивания элементов через transform',
      'Нативный браузерный API для drag & drop: атрибут draggable, события dragstart/dragover/drop/dragend, DataTransfer объект для передачи данных',
      'JavaScript библиотека для создания сортируемых списков',
      'API только для файлов, перетаскиваемых из файловой системы',
    ],
    correctAnswer: 1,
    explanation:
      'HTML DnD: draggable="true" на элементе. Events: dragstart (установить DataTransfer.setData), dragover (preventDefault() чтобы разрешить drop), drop (DataTransfer.getData), dragend. DataTransfer.effectAllowed: "copy"/"move"/"link". Для файлов: event.dataTransfer.files — FileList. Ограничения на мобильных. Библиотеки: dnd-kit, react-beautiful-dnd — удобнее нативного API.',
  },
  {
    id: 'html-41',
    category: 'html',
    question: 'Что такое атрибуты aria-label, aria-labelledby, aria-describedby?',
    options: [
      'CSS-атрибуты для стилизации элементов формы',
      'ARIA-атрибуты для доступности: aria-label задаёт текстовую метку; aria-labelledby ссылается на ID элемента-метки; aria-describedby ссылается на описание',
      'HTML-атрибуты для подсказок только в формах',
      'SEO-атрибуты для поисковых систем',
    ],
    correctAnswer: 1,
    explanation:
      'aria-label: <button aria-label="Закрыть диалог">×</button> — когда нет видимого текста. aria-labelledby: <input aria-labelledby="heading" /> <h2 id="heading">Поиск</h2> — ссылка на существующий текст. aria-describedby: дополнительное описание (подсказки, ошибки). Приоритет: aria-labelledby > aria-label > нативный label. Проверяйте через скринридер или axe DevTools.',
  },
  {
    id: 'html-42',
    category: 'html',
    question: 'Что такое Beacon API?',
    options: [
      'API для GPS-навигации в веб-приложениях',
      'API для надёжной отправки небольших данных на сервер при закрытии страницы (не блокирует разгрузку): navigator.sendBeacon(url, data)',
      'API для real-time уведомлений от сервера',
      'Способ создать web beacon для отслеживания открытия email',
    ],
    correctAnswer: 1,
    explanation:
      'navigator.sendBeacon(url, data) — отправляет POST-запрос асинхронно, гарантированно даже при закрытии вкладки/браузера. Не блокирует unload. Лимит: ~64KB. Формат: FormData, Blob, URLSearchParams, string. Применения: аналитика при уходе со страницы, логирование ошибок, сохранение прогресса. В отличие от fetch в unload — sendBeacon не отменяется браузером.',
  },
  {
    id: 'html-43',
    category: 'html',
    question: 'Что такое атрибут rel у тега <a> и зачем rel="noopener noreferrer"?',
    options: [
      'rel определяет стиль ссылки (underline, none)',
      'rel описывает отношение к целевому документу. noopener запрещает доступ к opener через window.opener (защита от tabnapping). noreferrer скрывает Referer заголовок',
      'rel только для SEO — передаёт сигналы поисковикам',
      'Атрибут определяет метод HTTP-запроса ссылки',
    ],
    correctAnswer: 1,
    explanation:
      'target="_blank" без защиты: новая вкладка может получить ссылку на opener через window.opener и перенаправить его (tabnapping-атака). noopener: window.opener === null. noreferrer: включает noopener + скрывает Referer. rel="nofollow" — не передавать SEO-вес (спонсорные ссылки). rel="canonical" — у link тега для дублированного контента. Современные браузеры автоматически добавляют noopener для _blank.',
  },
  {
    id: 'html-44',
    category: 'html',
    question: 'Что такое Resize Observer API?',
    options: [
      'API для отслеживания изменения размеров viewport через media queries',
      'Web API для наблюдения за изменениями размера DOM-элементов — запускает callback когда размер элемента изменяется',
      'API для отслеживания изменения шрифта на странице',
      'Способ следить за изменением CSS-переменных',
    ],
    correctAnswer: 1,
    explanation:
      'ResizeObserver: const ro = new ResizeObserver(entries => entries.forEach(e => { const { width, height } = e.contentRect; })); ro.observe(element). Применения: адаптивные компоненты (не только страница, но и контейнер), динамическое изменение сложных layouts, замена window.resize для компонентов. Эффективнее чем window resize listener. Поддерживает все современные браузеры.',
  },
  {
    id: 'html-45',
    category: 'html',
    question: 'Что такое атрибут translate у HTML-элементов?',
    options: [
      'Атрибут для встроенного перевода текста браузером',
      'Подсказка браузерам и инструментам перевода: translate="yes" (переводить) или "no" (не переводить). Важно для: бренд-названий, кода, технических терминов',
      'CSS-атрибут для управления transform translate свойством',
      'Атрибут для локализации числовых форматов',
    ],
    correctAnswer: 1,
    explanation:
      'translate="no": <span translate="no">Stack Overflow</span> — Google Translate и другие инструменты не переведут это. Важно для: имён брендов, имён собственных, кода, технических терминов которые не должны переводиться. translate="yes" — включить перевод (по умолчанию). Используется в сочетании с lang атрибутом для правильной локализации.',
  },
  {
    id: 'html-46',
    category: 'html',
    question: 'Что такое Cache API и как использовать с Service Worker?',
    options: [
      'Браузерный кэш HTTP-ответов управляемый через HTTP-заголовки',
      'Web API для программного управления кэшем HTTP-ответов в Service Worker: caches.open(), cache.put(), cache.match() — основа офлайн-возможностей PWA',
      'API для кэширования JavaScript-переменных в памяти браузера',
      'Способ кэшировать данные из IndexedDB',
    ],
    correctAnswer: 1,
    explanation:
      'Cache API: caches.open("v1").then(cache => cache.addAll(PRECACHE_URLS)). cache.match(request) → response | undefined. В Service Worker fetch event: event.respondWith(caches.match(event.request) || fetch(event.request)). Стратегии: Cache First, Network First, Stale-While-Revalidate, Network Only. Workbox (от Google) упрощает реализацию стратегий.',
  },
  {
    id: 'html-47',
    category: 'html',
    question: 'Что такое атрибут spellcheck и lang в HTML?',
    options: [
      'Оба атрибута только для <input> и <textarea>',
      'lang определяет язык контента (важно для скринридеров, перевода, переносов). spellcheck="true/false" управляет проверкой орфографии браузером',
      'spellcheck включает автокоррекцию, lang меняет раскладку клавиатуры',
      'Оба используются только для SEO оптимизации',
    ],
    correctAnswer: 1,
    explanation:
      'lang="ru" на <html> — язык страницы. lang="en" на отдельном элементе — смена языка. Влияет на: скринридеры (произношение), переводчики, CSS-переносы слов (hyphens: auto), spell checking. spellcheck="false" — для полей с кодом, специальными словами. spellcheck="true" — для textarea с пользовательским контентом. Без lang на html — ошибка доступности.',
  },
  {
    id: 'html-48',
    category: 'html',
    question: 'Что такое Picture-in-Picture API и fullscreen API?',
    options: [
      'CSS-способы отображения элементов поверх других',
      'Web APIs для управления видео: Picture-in-Picture выносит видео в плавающее окно; Fullscreen переключает элемент в полноэкранный режим',
      'Браузерные расширения для управления видео-плеерами',
      'HTML-атрибуты для видео-элементов',
    ],
    correctAnswer: 1,
    explanation:
      'PiP: videoElement.requestPictureInPicture(). document.pictureInPictureElement — текущий PiP элемент. document.exitPictureInPicture(). Поддержка: Chrome, Firefox, Safari. Fullscreen: element.requestFullscreen(). document.exitFullscreen(). document.fullscreenElement. CSS: :fullscreen псевдокласс. Событие fullscreenchange. Используется в медиа-плеерах, презентациях, играх.',
  },
  {
    id: 'html-49',
    category: 'html',
    question: 'Что такое Open Graph и Twitter Card мета-теги?',
    options: [
      'Мета-теги для оптимизации кода в браузерах',
      'Протоколы для управления внешним видом превью при шаринге страниц в социальных сетях (Facebook, Twitter, Telegram и др.)',
      'Теги для интеграции с Facebook и Twitter API',
      'SEO мета-теги для улучшения позиций в поиске',
    ],
    correctAnswer: 1,
    explanation:
      'Open Graph: <meta property="og:title" content="Заголовок"><meta property="og:image" content="img.jpg"><meta property="og:description"><meta property="og:url">. Используется Facebook, LinkedIn, Telegram. Twitter Cards: <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title">. В Next.js — через metadata API или generateMetadata(). Влияет на CTR при шаринге.',
  },
  {
    id: 'html-50',
    category: 'html',
    question: 'Что такое атрибут inputmode у input-элементов?',
    options: [
      'Атрибут для выбора режима автозаполнения',
      'Подсказывает мобильным браузерам какую виртуальную клавиатуру показывать: numeric, decimal, email, url, search, tel — без изменения type',
      'Управляет режимом ввода для скринридеров',
      'Определяет максимальное количество символов для ввода',
    ],
    correctAnswer: 1,
    explanation:
      'inputmode="numeric" — цифровая клавиатура (без минуса для OTP/PIN). inputmode="decimal" — с точкой/запятой (для цен). inputmode="email" — клавиатура с @ и .com. inputmode="url" — с / и .com. inputmode="search" — с иконкой поиска. inputmode="tel" — телефонная. В отличие от type — только визуальный эффект, не меняет поведение. Мощный UX-инструмент для мобильных форм.',
  },
];
