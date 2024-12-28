import React from 'react';
import './css/price.css';
import bikeImage from './images/bike.png';
import carImage from'./images/car.png';
import truckImage from './images/truck.png';

const Price = () => {
  const price_of_car = 200.00;
  const total_space_of_car = 10;
  const booking_space_of_car = 6;
  const remaining_space_of_car = total_space_of_car - booking_space_of_car;
  const price_of_bike = 100.00;
  const total_space_of_bike = 100;
  const booking_space_of_bike = 60;
  const remaining_space_of_bike = total_space_of_bike - booking_space_of_bike;
  const price_of_truck = 500.00;
  const total_space_of_truck = 10;
  const booking_space_of_truck = 6;
  const remaining_space_of_truck = total_space_of_truck - booking_space_of_truck;
  return (
    <div className='price'>
            <div className='card'>
                    <img src={carImage} alt='car' className='car'/>
                    <h4>Price per hour : Rs {price_of_car}</h4>
                    <p>Remaining Space {remaining_space_of_car}</p>
                    <button className='card-btn'>Remaining Space</button>
            </div>
            <div className='card'>
                    <img src={bikeImage} alt='bike' className='bike'/>
                    <h4>Price per hour : Rs  {price_of_bike} </h4>
                    <p>Remaining Space {remaining_space_of_bike}</p>
                    <button className='card-btn'> t</button>   
            </div>
            <div className='card'>
                    <img src={truckImage} alt='truck' className='truck'/>
                    <h4>Price per hour : Rs {price_of_truck} </h4>
                    <p>Remaining Space {remaining_space_of_truck }</p>
                    <button className='card-btn'></button>
            </div>
        </div>
  );
};

export default Price;
