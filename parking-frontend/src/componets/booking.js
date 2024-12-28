import React from 'react';
import './css/booking.css';

const Booking = () => {
  return (
    <div className='booking'>
      <form className='booking_form'>
        <label>Your name </label>
        <input placeholder='Enter your name '></input>

        <label>Vehicle type </label>
          <select>
            <option value="" disabled selected>Select vehicle type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="truck">Truck</option>
          </select>

        <label>Your vehicle No  </label>
        <input placeholder='Enter your vehicle number '></input>

        <label>Your booking duration</label>
        <label>Start</label>
        <input type="time" />

        <label>End</label>
        <input type="time" placeholder='hour : minutes AM/PM' />

          <button>
            Book now
          </button>
        
      </form>
    </div>
  );
};

export default Booking;
