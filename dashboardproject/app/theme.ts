
'use client';
import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

const theme = createTheme({
  direction: 'rtl',
  cssVariables: true,
}, faIR);

export default theme;