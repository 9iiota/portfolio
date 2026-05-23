import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Burak Kiliç — Software Developer',
  description:
    'Software developer based in Rotterdam. Building useful tools, automation, and applications.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
