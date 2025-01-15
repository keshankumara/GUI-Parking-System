import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Booking from './pages/booking';
import Admin from './pages/admin';
import AdminPanel from './pages/AdminPanel/admin_panel';

function App() {
  return (
    <div className='App'>
        <Router>
        <nav className='navbar'>
          <h1 className='nav_header'>PARKING AREA</h1>
          <ul className='nav-links'>
            <li><Link to="/" className='Home'>Home</Link></li>
            <li><Link to="/booking" className='Booking'>Booking</Link></li>
            <li><Link to="/about" className='Price'>About</Link></li>
            <li><Link to="/admin" className='Admin'>Admin</Link></li>
          </ul>
        </nav>
        <link to ="/admin_panel" className='Admin_panel'></link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </Router>
      <footer className='footer'>
        <h4 className='footer-test'>Contact Us - 0710334073</h4>

      </footer>
    </div>
    
  );
}

export default App;
