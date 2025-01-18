import React, { useState } from 'react';
import './style/register.css';
import NavBar from '../componets/navbar';
import Footer from '../componets/footer';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    const ButtonClick = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error messages

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/register', {
                name,
                email,
                password,
            });
            if (response?.data?.success) {
                window.location.href = '/login'; // Navigate to login on success
            } else {
                setErrorMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error occurred during registration:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <div className="navbarDiv">
                <NavBar />
            </div>
            <div className="register">
                <div className="register-container">
                    <h1>Create Your Account</h1>
                    <p>Join us today to experience hassle-free parking management.</p>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <form className="register-form">
                        <div className="input-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Re-enter your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="register-btn" onClick={ButtonClick}>
                            Register
                        </button>
                    </form>
                    <div className="register-footer">
                        <p>
                            Already have an account? <a href="/login">Log In</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="navbarDiv">
                <Footer />
            </div>
        </div>
    );
};

export default Register;
