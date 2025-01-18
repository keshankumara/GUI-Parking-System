import React, { useState } from 'react';
import './style/login.css';
import NavBar from '../componets/navbar';
import Footer from '../componets/footer';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for displaying error messages

    const ButtonClick = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message
        try {
            const response = await axios.post('http://localhost:3001/api/login', { email, password });
            if (response?.data?.success) {
                window.location.href = '/booking';
            } else {
                setErrorMessage('Invalid credentials, please try again.');
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div>
            <div className="navbarDiv">
                <NavBar />
            </div>
            <div className="login">
                <div className="login-container">
                    <h1>Welcome Back</h1>
                    <p>Please log in to your account to continue</p>
                    <form className="login-form">
                        <div className="input-group">
                            <label htmlFor="username">Email</label>
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
                        {errorMessage && (
                            <div className="error-box">
                                <p>{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit" className="login-btn" onClick={ButtonClick}>
                            Log In
                        </button>
                    </form>
                    <div className="login-footer">
                        <p>
                            Don't have an account? <a href="/register">Register</a>
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

export default Login;
