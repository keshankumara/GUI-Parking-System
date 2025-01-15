import React, { useState } from 'react';
import './style/booking.css';
import NavBar from '../componets/navbar';

const Booking = () => {
  let _id = 0;
  for (let i=0; i<1000; i++){
    _id = i;
  }

  const [formData, setFormData] = useState({
    id:_id,
    name: '',
    vehicleType: '',
    vehicleNo: '',
    duration: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Booking Successful');
      } else {
        alert('Booking Failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className='main-div'>
      <NavBar/>
      <form className='booking_form' onSubmit={handleSubmit}>
        <label>Your name </label>
        <input
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Enter your name'
          required
        />

        <label>Vehicle type </label>
        <select
          name='vehicleType'
          value={formData.vehicleType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select vehicle type</option>
          <option value="car">Car</option>
          <option value="bike">Bike</option>
          <option value="truck">Truck</option>
        </select>

        <label>Your vehicle No</label>
        <input
          name='vehicleNo'
          value={formData.vehicleNo}
          onChange={handleChange}
          placeholder='Enter your vehicle number'
          required
        />

        <label>Check-in time</label>
        <input
          name='duration'
          type='number'
          step='0.1'
          value={formData.duration}
          onChange={handleChange}
          placeholder='Enter parking duration time in hours (e.g., 0.5)'
          required
        />

        <button className='bool_btn' type='submit'>
          Book now
        </button>
      </form>
    </div>
  );
};

export default Booking;
