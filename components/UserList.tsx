'use client';
import { useUsers, useDeleteUser } from '../hooks/useUsers';
import {
  Typography,
  Box,
  CircularProgress,
  Alert,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination
} from '@mui/material';
import  ConfirmationDialog  from '../components/ConfirmationDialog'
import { Delete, Info, Person } from '@mui/icons-material';
import { useState } from 'react';

export default function UserList() {
  const { data: users, isLoading, error } = useUsers();
  const deleteUserMutation = useDeleteUser();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const handleDeleteClick = (userId: number) => {
    setSelectedUser(userId);
    setDeleteDialogOpen(true);
  };
  const handleDeleteConfirm = () => {
    if (selectedUser) {
      deleteUserMutation.mutate(selectedUser);
      setDeleteDialogOpen(false);
      setSelectedUser(null);
    }
  };
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        خطا در بارگذاری کاربران: {error.message}
      </Alert>
    );
  }

  return (
    <>
           <>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="users table">
      <TableHead>
        <TableRow>
          <TableCell align="center">نام</TableCell>
          <TableCell>ایمیل</TableCell>
          <TableCell>شرکت</TableCell>
          <TableCell>مشاهده جزئیات</TableCell>
          <TableCell align="center">عملیات</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users?.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((user) => (
          <TableRow
            key={user.id}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <TableCell component="th" scope="row">
              <Box display="flex" alignItems="center">
                <Person color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1" noWrap>
                  {user.name}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                {user.company.name}
              </Typography>
            </TableCell>
          <TableCell align="center">
  <IconButton 
    size="small" 
    color="primary"
    onClick={() => window.location.href = `/users/${user.id}`}
  >
    <Info />
  </IconButton>
</TableCell>
            <TableCell align="center">
                <IconButton 
                  size="small" 
                  color="error"
                  onClick={() => handleDeleteClick(user.id)}
                  disabled={deleteUserMutation.isPending}
                >
                  <Delete />
                </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  <Box display="flex" justifyContent="center" mt={3}>
    <Pagination
      count={Math.ceil((users?.length || 0) / rowsPerPage)}
      page={page}
      onChange={(event, value) => setPage(value)}
      color="primary"
    />
  </Box>
</>

        <ConfirmationDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDeleteConfirm}
        title="تایید حذف کاربر"
        message="آیا از حذف این کاربر اطمینان دارید؟"
        confirmText="حذف"
        cancelText="لغو"
        loading={deleteUserMutation.isPending}
        loadingText="در حال حذف..."
        confirmColor="error"
      />
    </>
  );
}