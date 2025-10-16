'use client';
import { useParams } from 'next/navigation';
import UserDetail from '../../../components/users/UserDetail';
import { Typography } from '@mui/material';

export default function UserDetailPage() {
  const { id } = useParams();

  if (!id) return <Typography>User not found</Typography>;

  return <UserDetail id={id.toString()} />;
}
