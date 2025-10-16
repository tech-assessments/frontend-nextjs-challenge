'use client';

import { useUserDetail } from '../../hooks/UseUserDetail';
import {
  Paper,
  Typography,
  Box,
  Button,
  Alert,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

interface UserDetailCardProps {
  id: string;
}

export default function UserDetailCard({ id }: UserDetailCardProps) {
  const router = useRouter();
  const theme = useTheme(); 
  const { data: user, isLoading, isError, error } = useUserDetail(id);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Alert severity="error">خطا در دریافت جزئیات: {error?.message}</Alert>;
  }

  if (!user) {
    return <Typography>کاربری یافت نشد</Typography>;
  }

  return (
    <Paper sx={{ p: 3, maxWidth: 700, mx: 'auto', backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h5" gutterBottom color={theme.palette.primary.main}>
        جزئیات کاربر
      </Typography>

      <TableContainer>
        <Table>
          <TableBody>
            {[
              ['نام', user.name],
              ['نام کاربری', user.username],
              ['ایمیل', user.email],
              ['تلفن', user.phone],
              ['شهر', user.address?.city || 'نامشخص'],
              ['شرکت', user.company?.name || 'نامشخص'],
            ].map(([label, value], index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? theme.palette.action.hover : 'transparent',
                  '&:hover': { backgroundColor: theme.palette.action.selected },
                }}
              >
                <TableCell sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>{label}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={3} textAlign="right">
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/users')}
        >
          بازگشت
        </Button>
      </Box>
    </Paper>
  );
}
