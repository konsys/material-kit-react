"use client"

import * as React from 'react';
import type { Viewport } from 'next';

import '@/styles/global.css';

import { UserProvider } from '@/contexts/user-context';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import { QueryClient, QueryClientProvider } from 'react-query';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <body>

        <LocalizationProvider>
          <UserProvider>
            <ThemeProvider>
              <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </ThemeProvider>
          </UserProvider>
        </LocalizationProvider>

      </body>
    </html>
  );
}
