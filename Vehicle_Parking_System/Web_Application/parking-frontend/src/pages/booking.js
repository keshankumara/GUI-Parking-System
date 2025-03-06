import React, { useState } from 'react';
import axios from 'axios';
import './style/booking.css';
import NavBar from '../componets/navbar';

const Booking = () => {
  const [formData, setFormData] = useState({
    email: '',
    vehicle_type: '',
    vehicle_no: '',
    time_duration: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);  // State to manage the success message
  const [showError, setShowError] = useState(false);      // State to manage error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/booking', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200 && response.data.success) {
        setShowSuccess(true); // Show success message
        setShowError(false); // Hide error message
        setFormData({
          email: '',
          vehicle_type: '',
          vehicle_no: '',
          time_duration: '',
        });
      } else {
        setShowError(true); // Show error message if booking fails
        setShowSuccess(false);
      }
    } catch (error) {
      setShowError(true); // Show error message on failure
      setShowSuccess(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="booking">
        <div className="booking-container">
          <h2>Book Your Parking Spot</h2>

          <form className="booking-form" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Vehicle Type Dropdown */}
            <div className="input-group">
              <label htmlFor="vehicle_type">Vehicle Type</label>
              <select
                name="vehicle_type"
                value={formData.vehicle_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select vehicle type</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="truck">Truck</option>
              </select>
            </div>

            {/* Vehicle Number Field */}
            <div className="input-group">
              <label htmlFor="vehicle_no">Vehicle Number</label>
              <input
                type="text"
                id="vehicle_no"
                name="vehicle_no"
                placeholder="Enter your vehicle number"
                value={formData.vehicle_no}
                onChange={handleChange}
                required
              />
            </div>

            {/* Parking Duration Field */}
            <div className="input-group">
              <label htmlFor="time_duration">Parking Duration (in hours)</label>
              <input
                type="number"
                id="time_duration"
                name="time_duration"
                step="0.1"
                value={formData.time_duration}
                onChange={handleChange}
                placeholder="Enter duration (e.g., 0.5)"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-action">
              <button type="submit" className="booking-btn">Book Now</button>
            </div>
          </form>

          {/* Success Alert Box */}
          {showSuccess && (
            <div className="alert-box success">
              <h1>Booking Successful</h1>
              <p>Your booking has been confirmed.</p>
              <button onClick={() => setShowSuccess(false)}>Close</button>
            </div>
          )}

          {/* Error Alert Box */}
          {showError && (
            <div className="alert-box error">
              <h1>Booking Failed</h1>
              <p>There was an issue with your booking. Please try again.</p>
              <button onClick={() => setShowError(false)}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
