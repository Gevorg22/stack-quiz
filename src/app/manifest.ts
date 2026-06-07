import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return {
    name: 'Stack Quiz',
    short_name: 'Stack Quiz',
    description:
      'Тренажёр для подготовки к собеседованиям по веб-технологиям. JavaScript, React, HTML, CSS.',
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#1e1b4b',
    theme_color: '#4f46e5',
    categories: ['education', 'productivity'],
    lang: 'ru',
    icons: [
      {
        src: `${basePath}/icons/icon-192.svg`,
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: `${basePath}/icons/icon-512.svg`,
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: `${basePath}/icons/icon-maskable.svg`,
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
