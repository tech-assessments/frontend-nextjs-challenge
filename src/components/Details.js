
import React, { useEffect, useState , useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {DataContext} from './Context';


function Details() {

      
        const { id } = useParams();
        const value = useContext(DataContext);
        //const [user, setUser] = useState(null);
        const [users, setUsers] = value.users;
      
      
        const navigate = useNavigate();
      
        // useEffect(() => {
        //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        //     .then(res => res.json())
        //     .then(data => setUser(data));
        // }, [id]);
        const details = users.filter(user => user.id.toString() === id);
         console.log(details)
      
         if (!users || users.length === 0) return <p>در حال بارگذاری...</p>;
      
        return (
            <>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/users')}
        >
          بازگشت به لیست کاربران
        </Button>
      </Stack>
      {
          details.map(user => (
            <div className="details" key={user.id}>
          <Card sx={{ maxWidth: 500, margin: 'auto', mt: 4 }}>
            <CardContent>
              <Typography variant="h5">{user.username}</Typography>
              <Typography variant="body1">نام :{user.name}</Typography>
              <Typography variant="body2">ایمیل: {user.email}</Typography>
              <Typography variant="body2">شماره تماس: {user.phone}</Typography>
              <Typography variant="body2">آدرس: {user.address.city}</Typography>
          
            </CardContent>
          
          </Card>
          </div>
          ))
        }
            </>
        );

}

export default Details
