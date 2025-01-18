import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Information */}
        <div className="footer-brand">
          <h2 className="footer-header">PARKING AREA</h2>
          <p>
            Transforming parking with real-time availability, secure bookings, and smart solutions for a hassle-free experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/login" className="footer-link">Login</a></li>
            <li><a href="/register" className="footer-link">Register</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@parkingarea.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Parking St, Tech City</p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 PARKING AREA. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
