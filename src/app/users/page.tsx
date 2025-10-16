

import UserTable from '@/components/users/UserTabel';
import { Typography } from '@mui/material';



export default function UsersPage() {
  return (
    <>
  <Typography variant="h5" align="center">
  لیست کاربران
</Typography>
      <UserTable />
    </>
  );
}