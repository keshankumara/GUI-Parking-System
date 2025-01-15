import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Booking from './pages/booking';
import About from './pages/about';
import Admin from './pages/admin';
import AdminPanel from './pages/AdminPanel/admin_panel';
import NavBar from './componets/navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
