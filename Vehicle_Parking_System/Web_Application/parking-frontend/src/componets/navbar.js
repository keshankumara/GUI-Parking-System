import React from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Prk_icon from './images/park_icon.ico';

function NavBar() {
  const navigate = useNavigate(); // Create a navigate function

  const handleLogout = () => {
    localStorage.removeItem('isLogin');
    navigate('/'); // Navigate to the landing page (home page)
  };

  return (
    <nav className="navbar">
      <img src={Prk_icon} alt="nav_icon" className="nav_icon" />
      <h1 className="nav_header">ParkEase</h1>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>

        {localStorage.getItem('isLogin') !== null ? (
          <li><button onClick={handleLogout} className="nav-link logout-button">Logout</button></li>
        ) : (
          <>
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/register" className="nav-link">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
