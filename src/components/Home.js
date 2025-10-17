import React from 'react'
import {  Button, Stack } from '@mui/material';
import Groups from '@mui/icons-material/Groups';
import {  useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  return (
    <div className="container">

    <main>
         <div className="content">
         <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Button
          variant="outlined"
          startIcon={<Groups />}
          onClick={() => navigate('/users')}
        >
مشاهده لیست کاربران      
  </Button>
      </Stack>
          <h4>سلام دوست عزیز</h4>
         <p>خوش آمدی به خانه اینترنتی ما</p>
         </div>
    </main>
   
</div>
  )
}

export default Home
