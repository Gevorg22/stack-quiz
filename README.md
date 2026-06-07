# Stack Quiz

Интерактивный тренажёр для подготовки к собеседованиям по веб-технологиям. Проверяй знания в дороге, в очереди или в любое свободное время.

**Ссылка на приложение:** https://gevorg22.github.io/stack-quiz/

## Категории вопросов

**JavaScript** 75 вопросов по замыканиям, промисам, Event Loop, прототипам, ES2022+, паттернам проектирования, оптимизации и многому другому.

**React** 75 вопросов по хукам, Concurrent Mode, Server Components, React 19, архитектурным паттернам, производительности и экосистеме.

**HTML** 50 вопросов по семантике, доступности, Web API, PWA, производительности и современным браузерным возможностям.

**CSS** 50 вопросов по специфичности, Flexbox, Grid, Container Queries, Cascade Layers, анимациям и современным CSS-функциям.

**Все темы** все 250 вопросов в случайном порядке для комплексной подготовки.

## Как устроено

Выбираешь категорию и отвечаешь на вопросы с вариантами ответов. При правильном ответе карточка подсвечивается зелёным, при неправильном — красным. После каждого ответа появляется подробное объяснение. Вопросы перемешиваются при каждом запуске. В конце показывается итоговый результат с процентом правильных ответов.

## Стек технологий

**Next.js 16** с App Router и статической генерацией (output: export).

**React 19** с TypeScript.

**Tailwind CSS v4** для адаптивной вёрстки.

**ESLint** с eslint-config-next и eslint-config-prettier.

**Prettier** для форматирования кода.

**GitHub Actions** для автоматического деплоя на GitHub Pages.

## Архитектура

```
src/
  app/          — Next.js App Router (layout, page)
  components/   — UI компоненты (QuizClient, QuizQuestion, AnswerOption, ExplanationModal, ResultScreen, ProgressBar, CategoryCard)
  data/
    questions/  — Базы вопросов по категориям (javascript, react, html, css)
  hooks/        — useQuiz (логика квиза)
  types/        — TypeScript типы (Question, Category, QuizState, CategoryInfo)
  utils/        — shuffle (алгоритм Фишера-Йейтса)
```

## Запуск локально

```bash
npm install
npm run dev
```

Открой http://localhost:3000

## Сборка

```bash
npm run build
```

Статические файлы генерируются в папку `out/`.

## Деплой

Деплой происходит автоматически через GitHub Actions при пуше в ветку `main`. Приложение публикуется на GitHub Pages.
