import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Users from './Users';
import Details from './Details';
import Home from './Home';

function Content() {
  return (
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<Details />} />
        
          </Routes>
  )
}

export default Content