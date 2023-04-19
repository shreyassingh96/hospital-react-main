import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Navbar({ isLoggedIn }) {
  return (
    <nav>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        {!isLoggedIn && <li><Link to='/login'>Login</Link></li>}
        {!isLoggedIn && <li><Link to='/signup'>Sign up</Link></li>}
        {isLoggedIn && <li><Link to='/logout'>Logout</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;
