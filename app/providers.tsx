'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import { faIR } from '@mui/material/locale';
import Header from '../components/Header';

import '@fontsource/vazir/300.css';
import '@fontsource/vazir/400.css';
import '@fontsource/vazir/500.css';
import '@fontsource/vazir/700.css';

const theme = createTheme(
  {
    direction: 'rtl',
    typography: {
      fontFamily: '"Vazir", "Tahoma", "Arial", sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => `
          :root {
            font-family: "Vazir", Tahoma, Arial, sans-serif;
          }
          * {
            font-family: "Vazir", Tahoma, Arial, sans-serif !important;
          }
          body {
            font-family: "Vazir", Tahoma, Arial, sans-serif;
            direction: rtl;
          }
        `,
      },
    },
  },
 faIR
);
export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
            retry: (failureCount, error: any) => {
              // Don't retry on 404
              if (error?.status === 404) return false;
              return failureCount < 2;
            },
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header/>
        <CssBaseline />
        <div dir="rtl">
          {children}
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}