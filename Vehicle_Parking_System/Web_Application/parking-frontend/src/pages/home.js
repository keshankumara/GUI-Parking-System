import React from 'react';
import './style/home.css';
import bikeImage from '../componets/images/bike.png';
import carImage from '../componets/images/car.png';
import truckImage from '../componets/images/truck.png'; 
import Parking from '../componets/images/park7.jpg';
import NavBar from '../componets/navbar';
import Footer from '../componets/footer';

const Home = () => {
    const ButtonClick = () => {
        window.location.href = '/login';
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
        <div className="home">
            <NavBar />
            <div className="home-header">
                <img src={Parking} alt="parking" className="parking" />
                <button className="book-btn">Book Now</button>
            </div>
            <div className="header-div">
                <h1 className="header1">Parking Here</h1>
                <p className="para1">Reserve your spot with ease and enjoy hassle-free parking!</p>
            </div>
            <div className="home-body">
                <div className="card">
                    <img src={carImage} alt="car" className="car" />
                    <div className="card-btn-settle">
                        <p>Price per hour : Rs {price_of_car}</p>
                        <button style={style_car_btn} className="card-btn" onClick={ButtonClick}>
                            {availability_for_car}
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src={bikeImage} alt="bike" className="bike" />
                    <p>Price per hour : Rs {price_of_bike}</p>
                    <button style={style_bike_btn} className="card-btn" onClick={ButtonClick}>
                        {availability_for_bike}
                    </button>
                </div>
                <div className="card">
                    <img src={truckImage} alt="truck" className="truck" />
                    <p>Price per hour : Rs {price_of_truck}</p>
                    <button style={style_truck_btn} className="card-btn" onClick={ButtonClick}>
                        {availability_for_truck}
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
