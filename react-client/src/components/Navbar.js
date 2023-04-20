import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const userCategory = localStorage.getItem('userCategory');

  return (
    <nav>
      <ul>
        <li><Link to='/home'>Home</Link></li> 
        {!userCategory && <li><Link to='/login'>Login</Link></li>} 
        {!userCategory && <li><Link to='/signup'>Sign up</Link></li>} 
        {userCategory === 'nurse' || userCategory === 'patient' && <li><Link to='/logout'>Logout</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;
