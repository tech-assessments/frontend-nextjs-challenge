'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from '@/theme/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
      <body>
        <ThemeProvider theme={theme}>
        
        
      
            <Container sx={{ mt: 4 }}>{children}</Container>
       
        </ThemeProvider>
      </body>
    </html>
  );
}
