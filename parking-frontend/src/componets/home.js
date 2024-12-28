import React from 'react';
import './css/home.css';
import bikeImage from './images/bike.png';
import carImage from'./images/car.png';
import truckImage from './images/truck.png'; 

const Home = () => {
  const price_of_car = 200.00;
  const price_of_bike = 100.00;
  const price_of_truck = 500.00;
  return (
    <div className='home'>
        <div className='card'>
                <img src={carImage} alt='car' className='car'/>
                <p>Price per hour : Rs {price_of_car}</p>
                <button className='card-btn'>Available</button>
        </div>
        <div className='card'>
                <img src={bikeImage} alt='bike' className='bike'/>
                <p>Price per hour : Rs            {price_of_bike} </p>
                <button className='card-btn'>Available</button>   
        </div>
        <div className='card'>
                <img src={truckImage} alt='truck' className='truck'/>
                <p>Price per hour : Rs      {price_of_truck} </p>
                <button className='card-btn'>Available</button>
        </div>
    </div>
  );
};

export default Home;
