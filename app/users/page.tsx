'use client';

import { 
  Container, 
  Typography, 
  Button, 
  Box,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import UserList from '../../components/UserList';

export default function UsersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1">
          مدیریت کاربران
        </Typography>
        <Link href="/" passHref>
          <Button variant="outlined" startIcon={<ArrowBack />} sx={{ 
             gap:1
            }}>
            بازگشت به خانه
          </Button>
        </Link>
      </Box>

      <UserList />
    </Container>
  );
}