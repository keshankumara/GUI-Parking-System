import React from 'react';
import './style/about.css';
import NavBar from '../componets/navbar';
import Footer from '../componets/footer';

const About = () => {
    return (
        <div>
            <div className="navbarDiv">
                <NavBar />
            </div>
            <div className="about">
                <div className="about-container">
                    <h1>About Us</h1>
                    <p>
                        Welcome to <strong>Smart Parking System</strong>, your ultimate solution for hassle-free and efficient parking management. 
                        Our mission is to transform the way you park, making it more convenient, time-saving, and stress-free.
                    </p>
                    <h2>What We Offer</h2>
                    <ul>
                        <li><strong>Real-Time Slot Availability:</strong> Check and book parking spaces instantly.</li>
                        <li><strong>Affordable Pricing:</strong> Competitive rates to suit your parking needs.</li>
                        <li><strong>User-Friendly Interface:</strong> A seamless experience from booking to parking.</li>
                        <li><strong>Secure Environment:</strong> Ensuring the safety of your vehicles at all times.</li>
                    </ul>
                    <h2>Our Vision</h2>
                    <p>
                        At Smart Parking System, we envision a future where parking is no longer a hassle. 
                        By leveraging modern technology, we aim to provide solutions that save time, reduce traffic congestion, 
                        and enhance your overall experience.
                    </p>
                    <h2>Why Choose Us?</h2>
                    <p>
                        Whether you're a daily commuter or just visiting, Smart Parking System is your trusted partner. 
                        With features like real-time availability, easy bookings, and competitive pricing, 
                        we are redefining how parking works in the modern world.
                    </p>
                </div>
            </div>
            <div className="navbarDiv">
                <Footer />
            </div>
        </div>
    );
};

export default About;
