import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../index.css';
import Providers from '@/components/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://felipes.dev'),
  title: 'Luis Felipe Ribeiro da Silva — Desenvolvedor Full Stack',
  description:
    'Desenvolvimento de sites, produtos digitais e sistemas web rápidos, acessíveis e feitos para crescer junto com o seu negócio.',
  openGraph: {
    title: 'Luis Felipe Ribeiro da Silva — Desenvolvedor Full Stack',
    description:
      'Produtos digitais, sites e sistemas web com foco em performance e resultado.',
    url: 'https://felipes.dev',
    siteName: 'felipes.dev',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
