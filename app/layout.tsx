import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Cinzel, Sora } from 'next/font/google';
import './globals.css';

const cinematicDisplay = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinematic-display',
  weight: ['500', '600', '700'],
});

const cinematicBody = Sora({
  subsets: ['latin'],
  variable: '--font-cinematic-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Fuad Muslim N.S | English Teacher Tasikmalaya',
  description:
    'Profil Fuad Muslim N.S, English teacher di Tasikmalaya dengan fokus pembelajaran bahasa Inggris interaktif dan pengalaman belajar digital.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className={`${cinematicDisplay.variable} ${cinematicBody.variable}`}>{children}</body>
    </html>
  );
}
