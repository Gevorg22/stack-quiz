import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Stack Quiz | Тренажёр по веб-технологиям',
  description:
    'Интерактивный тренажёр для подготовки к собеседованиям. 250 вопросов по JavaScript, React, HTML и CSS с подробными объяснениями. Построен на Next.js, React, TypeScript и Tailwind CSS.',
  keywords: ['javascript', 'react', 'html', 'css', 'quiz', 'тест', 'обучение'],
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Stack Quiz',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: [{ url: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
