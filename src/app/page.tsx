
'use client';
import { Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>
        خوش اومدی به داشبورد مدیریت کاربران 
      </Typography>
      <Button variant="contained" component={Link} href="/users">رفتن به لیست کاربران</Button>
    </Box>
  );
}