import React from 'react';
import './footer.css';
import facebook from './images/facebook.ico';
import twitter from './images/twitter.ico';
import linkedin from './images/linkedin.ico';
import whatsapp from './images/whatsapp.ico';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Information */}
        <div className="footer-brand">
          <h2 className="footer-header">ParkEase</h2>
          <p className='footer_para'>
            Transforming parking with real-time availability, secure bookings, and smart solutions for a hassle-free experience.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/login" className="footer-link">Login</a></li>
            <li><a href="/register" className="footer-link">Register</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p className='footer_para'>Email: keshnkumara11@gmail.com</p>
          <p className='footer_para'>Phone: 071 0334073</p>
          <p className='footer_para'>Address: 123 Parking St, Tech City</p>
          {/* <div className="footer-socials">
            <a href="https://twitter.com" className="social-icon"><img src={whatsapp} alt="whatsapp" /></a>
            <a href="https://twitter.com" className="social-icon"><img src={facebook} alt="Facebook" /></a>
            <a href="https://twitter.com" className="social-icon"><img src={twitter} alt="Twitter" /></a>
            <a href="https://twitter.com" className="social-icon"><img src={linkedin} alt="LinkedIn" /></a>     
          </div> */}
        </div>
      </div>
      <div className="footer-bottom">
        <p className='copright_test'>&copy; 2025 ParkEase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
