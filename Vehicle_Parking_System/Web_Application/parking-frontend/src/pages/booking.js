import React, { useState } from 'react';
import axios from 'axios';
import './style/booking.css';
import NavBar from '../componets/navbar'; // Fixed typo in 'components'

const Booking = () => {
  const [formData, setFormData] = useState({
    email: '',
    vehicle_type: '',
    vehicle_no: '',
    time_duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Corrected destructuring
    setFormData({ ...formData, [name]: value }); // Use 'name' to update the correct property
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/booking', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200 && response.data.success) {
        const alertBox = document.createElement('div');
        alertBox.innerHTML = `
          <div class="alert-box">
            <h1>Booking Successful</h1>
            <p>Your booking has been confirmed.</p>
            <button onclick="this.parentElement.style.display='none'">Close</button>
          </div>
        `;
        document.body.appendChild(alertBox);
        setFormData({
          email: '',
          vehicle_type: '',
          vehicle_no: '',
          time_duration: '',
        });
      } else {
        alert('Booking Failed. Please try again.');
      }
    } catch (error) {
      alert('Error submitting the form. Please try again.');
    }
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="booking-container">
      <form className="booking_form" onSubmit={handleSubmit}>
        <h2 className='header' >Book Your Parking Spot</h2>

        {/* Email Field */}
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Vehicle Type Dropdown */}
        <div className="form-group">
          <label>Vehicle Type</label>
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
        <div className="form-group">
          <label>Vehicle Number</label>
          <input
            type="text"
            name="vehicle_no"
            value={formData.vehicle_no}
            onChange={handleChange}
            placeholder="Enter your vehicle number"
            required
          />
        </div>

        {/* Parking Duration Field */}
        <div className="form-group">
          <label>Parking Duration (in hours)</label>
          <input
            type="number"
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
          <button className="bool_btn" type="submit">Book Now</button>
        </div>
      </form>
    </div>

    </div>
  );
};

export default Booking;
