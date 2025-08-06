import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/providers/auth-provider';
import Head from 'next/head';

import GoogleAnalytics from '@/components/analytics/google-analytics';
import ApolloTracking from '@/components/analytics/apollo-tracking';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nayastack - Premier Web Development Agency',
  description: 'Professional web development services including custom applications, e-commerce solutions, and digital transformation.',
  keywords: 'web development, custom software, e-commerce, digital transformation, React, Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>


        <GoogleAnalytics />
        <ApolloTracking />

      </body>
    </html>
  );
}