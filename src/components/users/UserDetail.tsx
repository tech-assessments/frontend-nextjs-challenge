
'use client';
import { useUserDetail } from '@/hooks/UseUserDetail';
import { Paper, Typography, Box, Button, Alert, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';


export default function UserDetailCard({ id }: { id: string }) {
  const router = useRouter();
  const { data: user, isLoading, isError, error } = useUserDetail(id);

  if (isLoading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
      <CircularProgress />
    </Box>
  );

  if (isError) return <Alert severity="error">خطا در دریافت جزئیات: {error?.message}</Alert>;

  if (!user) return <Typography>کاربری یافت نشد</Typography>;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>{user.name}</Typography>
      <Typography><strong>نام کاربری:</strong> {user.username}</Typography>
      <Typography><strong>ایمیل:</strong> {user.email}</Typography>
      <Typography><strong>تلفن:</strong> {user.phone}</Typography>
      <Typography><strong>شهر:</strong> {user.address?.city}</Typography>

      <Box mt={3}>
        <Button variant="contained" onClick={() => router.push('/users')}>بازگشت</Button>
      </Box>
    </Paper>
  );
}
