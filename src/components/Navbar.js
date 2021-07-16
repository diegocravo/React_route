import React from 'react';
import {Link} from 'react-router-dom'
import { useToggle } from '../context/ToggleProvider';

import "./Navbar.css"

function Navbar() {

    const {isLoggedIn} = useToggle();   

  return (
      <div>
            { !isLoggedIn &&
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
            }
            { isLoggedIn &&
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/whoweare">Who we Are</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
                <li><Link to="/Login">Logout</Link></li>
            </ul>
            }
      </div>
  );
}

export default Navbar;