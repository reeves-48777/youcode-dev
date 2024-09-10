'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/components/themes/ThemeProvider';
import { PropsWithChildren } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
      >
        <SessionProvider>
          <Toaster />
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
