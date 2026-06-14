import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
});

// TODO: Cập nhật metadata cho từng dự án
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    default: 'BaseApp',
    template: '%s | BaseApp',
  },
  description: 'BaseApp — Next.js App Router template.',
  openGraph: {
    title: 'BaseApp',
    description: 'BaseApp — Next.js App Router template.',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'BaseApp',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#060816' },
    { media: '(prefers-color-scheme: light)', color: '#7C4DFF' },
  ],
};

import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/providers/auth-provider';
import QueryProvider from '@/providers/query-provider';
import { Toaster } from 'sonner';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  return (
    <html lang="vi" suppressHydrationWarning className={cn('h-full', 'antialiased', inter.variable, 'font-sans')}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <QueryProvider>
            <AuthProvider initialAccessToken={accessToken}>
              <Header initialAccessToken={accessToken} />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster richColors closeButton duration={2000} position="bottom-right" />
            </AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
