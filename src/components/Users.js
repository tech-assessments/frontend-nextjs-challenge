import React, {useContext ,useState , useEffect} from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import {DataContext} from './Context';

function Users() {


    const value = useContext(DataContext);
  

    const [users, setUsers] = value.users;
  const navigate = useNavigate();
// ابتدا اطلاعات رو از طریق  useeffect  گرفتم و بعد فکر کردم اگر در context  باشه بهتره
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users') 
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

  const processedUsers = users.map(user => ({
    ...user,
    companyName: user.company.name 
  }));

  const columns = [
   // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'نام', width: 150 },
    { field: 'email', headerName: 'ایمیل', width: 200 },
    { field: 'companyName', headerName:'نام شرکت', width: 200 },


  ];

 return (
   <div>
 

<div style={{ height: 600, width: '100%' }}>
      <DataGrid
     //   rows={users}
     rows={processedUsers}
        columns={columns}
        pageSize={users.length} 
        onRowClick={(params) => navigate(`/users/${params.id}`)}
      />
    </div>
    </div>
 )
}

export default Users
