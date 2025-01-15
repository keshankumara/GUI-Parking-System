import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <h1 className='nav_header'>PARKING AREA</h1>
      <ul className='nav-links'>
        <li><Link to="/" className='Home'>Home</Link></li>
        <li><Link to="/booking" className='Booking'>Booking</Link></li>
        <li><Link to="/about" className='Price'>About</Link></li>
        <li><Link to="/admin" className='Admin'>Admin</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
