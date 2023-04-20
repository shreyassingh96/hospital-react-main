// Import required dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Define Navbar component with props
function Navbar({ isLoggedIn }) {
  // Render Navbar component
  return (
    <nav>
      <ul>
        <li><Link to='/home'>Home</Link></li> // Link to Home page
        {!isLoggedIn && <li><Link to='/login'>Login</Link></li>} // Render Login link if user is not logged in
        {!isLoggedIn && <li><Link to='/signup'>Sign up</Link></li>} // Render Sign Up link if user is not logged in
        {isLoggedIn && <li><Link to='/logout'>Logout</Link></li>} // Render Logout link if user is logged in
      </ul>
    </nav>
  );
}

// Export Navbar component as default
export default Navbar;
