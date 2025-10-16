
'use client';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import type { User } from '@/lib/types';
import { useUsers } from '@/hooks/UseUsers';

export default function UserTable() {
  const theme = useTheme();
  const { data, isLoading, isError, error } = useUsers();

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
        <CircularProgress />
      </Box>
    );

  if (isError)
    return <Alert severity="error">خطا در بارگذاری کاربران: {error?.message}</Alert>;

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, mx: 'auto', mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
            <TableCell sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>نام</TableCell>
            <TableCell sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>ایمیل</TableCell>
            <TableCell sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>شرکت</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((user: User, index) => (
            <TableRow
              key={user.id}
              component={Link}
              href={`/users/${user.id}`}
              style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
              sx={{
                backgroundColor: index % 2 === 0 ? theme.palette.action.hover : 'transparent',
                '&:hover': { backgroundColor: theme.palette.action.selected },
              }}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company?.name || '—'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
