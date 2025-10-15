
'use client';
import Link from 'next/link';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer, Typography, Box, Alert, CircularProgress
} from '@mui/material';

import type { User } from '@/lib/types';
import { useUsers } from '@/hooks/useUsers';

export default function UserTable() {
  const { data, isLoading, isError, error } = useUsers();

  if (isLoading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
      <CircularProgress />
    </Box>
  );

  if (isError) return <Alert severity="error">خطا در بارگذاری کاربران: {error?.message}</Alert>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>نام</TableCell>
            <TableCell>ایمیل</TableCell>
            <TableCell>شرکت</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((user: User) => (
            <TableRow key={user.id} hover component={Link} href={`/users/${user.id}`} style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company?.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
