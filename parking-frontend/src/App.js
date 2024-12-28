import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './componets/home';
import Price from './componets/price';
import Booking from './componets/booking';
import Admin from './componets/admin';

function App() {
  return (
    <div className='App'>
        <Router>
        <nav className='navbar'>
          <h1 className='nav_header'>PARKING AREA</h1>
          <ul className='nav-links'>
            <li><Link to="/" className='Home'>Home</Link></li>
            <li><Link to="/booking" className='Booking'>Booking</Link></li>
            <li><Link to="/price" className='Price'>Price</Link></li>
            <li><Link to="/admin" className='Admin'>Admin</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/price" element={<Price />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <footer className='footer'>
        <h4 className='footer-test'>Contact Us - 0710334073</h4>

      </footer>
    </div>
    
  );
}

export default App;
