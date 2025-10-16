
import React, { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from '@/theme/theme';
import QueryProvider from '@/providers/react-query-provider';
import Navbar from "../components/layout/Navbar"

import { Figtree } from "next/font/google";
import localFont from "next/font/local";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

const yekanbakh = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSans/IRANSans.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSans_Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-yekanbakh",
});

export default function RootLayout({ children }: { children: ReactNode }) {

 
  return (
    <html  className={`${yekanbakh.variable} ${figtree.variable} `}>
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
