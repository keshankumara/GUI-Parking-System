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
        alert('Booking Successful');
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
      if (error.response) {
        console.error('Backend Error:', error.response.data);
        alert(`Error: ${error.response.data.message || 'Something went wrong'}`);
      } else if (error.request) {
        console.error('No Response:', error.request);
        alert('No response from server. Please check your network.');
      } else {
        console.error('Error:', error.message);
        alert('Error submitting the form. Please try again.');
      }
    }
  };

  return (
    <div className="main-div">
      <NavBar />
      <form className="booking_form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email" // Corrected input name
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Vehicle Type</label>
        <select
          name="vehicle_type" // Corrected name attribute to match the state key
          value={formData.vehicle_type}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select vehicle type
          </option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="truck">Truck</option>
        </select>

        <label>Vehicle Number</label>
        <input
          name="vehicle_no" // Corrected name attribute to match the state key
          value={formData.vehicle_no}
          onChange={handleChange}
          placeholder="Enter your vehicle number"
          required
        />

        <label>Parking Duration (in hours)</label>
        <input
          name="time_duration" // Corrected name attribute to match the state key
          type="number"
          step="0.1"
          value={formData.time_duration}
          onChange={handleChange}
          placeholder="Enter duration (e.g., 0.5)"
          required
        />

        <button className="bool_btn" type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
