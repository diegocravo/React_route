import React from 'react';
import {Link} from 'react-router-dom'

import "./Navbar.css"

function Navbar() {
  return (
      <div>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/whoweare">Who we Are</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
          </ul>
      </div>
  );
}

export default Navbar;