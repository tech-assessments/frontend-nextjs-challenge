'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          داشبورد
        </Typography>
        <Button color="inherit" component={Link} href="/">خانه</Button>
        <Button color="inherit" component={Link} href="/users">کاربران</Button>
      </Toolbar>
    </AppBar>
  );
}
