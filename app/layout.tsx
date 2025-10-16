import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
export const metadata: Metadata = {
  title: 'User Management App',
  description: 'Mini project for interview',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}