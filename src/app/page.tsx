'use client';
import { Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Box textAlign="center" mt={6}>
      <Image
      src="/images/user-management-dashboard.jpg"
        alt="Dashboard illustration"
        width={400}
        height={300}
        style={{ margin: '0 auto' }}
      />

      <Typography variant="h4" gutterBottom mt={4}>
        Welcome to the User Management Dashboard
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Manage users efficiently and view detailed information
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/users"
        sx={{ mt: 3 }}
      >
        Go to Users List
      </Button>
    </Box>
  );
}
