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

import type { User } from '@/types/types';
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
    return <Alert severity="error">Error loading users: {error?.message}</Alert>;

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: 900,
        mx: 'auto',
        mt: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
          mt: 2,
          mb: 1,
          fontWeight: 'bold',
          color: theme.palette.primary.main,
        }}
      >
        User List
      </Typography>

      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
            <TableCell sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
              Name
            </TableCell>
            <TableCell sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
              Email
            </TableCell>
            <TableCell sx={{ color: theme.palette.common.white, fontWeight: 'bold' }}>
              Company
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((user: User, index) => (
            <TableRow
              key={user.id}
              component={Link}
              href={`/users/${user.id}`}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
              }}
              sx={{
                backgroundColor:
                  index % 2 === 0
                    ? theme.palette.action.hover
                    : theme.palette.background.default,
                '&:hover': {
                  backgroundColor: theme.palette.action.selected,
                },
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
