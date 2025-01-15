import React from 'react';
import './css/home.css';
import bikeImage from './images/bike.png';
import carImage from'./images/car.png';
import truckImage from './images/truck.png'; 

const Home = () => {
        const ButtonClick = () => {
                window.location.href = '/booking';
            };

        const price_of_car = 200.00;
        const price_of_bike = 100.00;
        const price_of_truck = 1000.00;

        const space_of_car = 50;
        const space_of_bike = 100;
        const space_of_truck = 30;

        var booked_space_of_car = 40;
        var booked_space_of_bike = 100;
        var booked_space_of_truck = 10;

        let availability_for_car = 'Available';
        let availability_for_bike = 'Available';
        let availability_for_truck = 'Available';

        let style_car_btn = {};
        if (space_of_car === booked_space_of_car) {
                style_car_btn = {backgroundColor: '#D9534F'};
                availability_for_car = 'No Space';
        }

        let style_bike_btn = {};
        if (space_of_bike === booked_space_of_bike){
                style_bike_btn = {backgroundColor: '#D9534F'};
                availability_for_bike = 'No Space';
        }

        let style_truck_btn = {};
        if (space_of_truck === booked_space_of_truck){
                style_truck_btn = {backgroundColor: '#D9534F'};
                availability_for_truck = 'No Space'; 
        }

  return (
    <div className='home'>
        <div className='card'>
                <img src={carImage} alt='car' className='car'/>
                <p>Price per hour : Rs {price_of_car}</p>
                <button style={style_car_btn} className='card-btn' onClick={ButtonClick} >{availability_for_car}</button>
        </div>
        <div className='card'>
                <img src={bikeImage} alt='bike' className='bike'/>
                <p>Price per hour : Rs            {price_of_bike} </p>
                <button style={style_bike_btn} className='card-btn' onClick={ButtonClick} >{availability_for_bike}</button>   
        </div>
        <div className='card'>
                <img src={truckImage} alt='truck' className='truck'/>
                <p>Price per hour : Rs      {price_of_truck} </p>
                <button style={style_truck_btn} className='card-btn' onClick={ButtonClick} >{availability_for_truck }</button>
        </div>
    </div>
  );
};

export default Home;
