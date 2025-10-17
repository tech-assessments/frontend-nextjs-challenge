import React, { createContext, useEffect, useState } from 'react';
// import  {DATAPRODUCT}  from './data';
import axios from 'axios';
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [users, setUsers]= useState([]);

    const getUsers = () => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.data;
        setUsers(data);
      })
    }



    useEffect(()=>{
        getUsers()
    },[])


    const value = {
        users: [users, setUsers],
     
    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
      
    )
}