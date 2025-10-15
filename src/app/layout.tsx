
import React, { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from '@/theme/theme';
import QueryProvider from '@/providers/react-query-provider';
import Navbar from "../components/layout/Navbar"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <ThemeProvider theme={theme}>
      
        <QueryProvider>
        <Navbar />
            <Container sx={{ mt: 4 }}>{children}</Container>
            </QueryProvider>
       
        </ThemeProvider>
      </body>
    </html>
  );
}
