import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import {DataContext} from './Context';

function Header() {

     const [menu, setMenu] = useState(false);
    //  const value = useContext(DataContext);
   

     const toggleMenu = () => {
          setMenu(!menu);
     }

     const styleMenu = {
          right: menu ? 0 : "-100%"
     }

  return (
    <header>

         <ul style={styleMenu}>
              <li><Link to="/">خانه</Link></li>
              <li><Link to="/users">کاربران</Link></li>
      
               <li><img src={Close} width="30" className="menu" alt="" onClick={toggleMenu} /></li>
         </ul>
       
         <div className="menu" onClick={toggleMenu}>
              <img src={Menu} width="30" alt="" />
         </div>
    </header>

  )
}

export default Header