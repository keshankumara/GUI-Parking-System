import React from "react";
import "./style/home.css";
import bikeImage from "../componets/images/bike.ico";
import carImage from "../componets/images/car.ico";
import truckImage from "../componets/images/truck.ico";
import NavBar from "../componets/navbar";
import Footer from "../componets/footer";
import Clock from "../componets/images/clock_icon.ico";
import Shield from "../componets/images/shield_icon.ico";
import CreditCard from "../componets/images/credit_card_icon.ico";

const Home = () => {
  const ButtonClick = () => {
    window.location.href = "/login";
  };

  const price_of_car = 2000.0;
  const price_of_bike = 1000.0;
  const price_of_truck = 5000.0;

  const space_of_car = 50;
  const space_of_bike = 100;
  const space_of_truck = 30;

  var booked_space_of_car = 40;
  var booked_space_of_bike = 100;
  var booked_space_of_truck = 10;

  let availability_for_car = "Available";
  let availability_for_bike = "Available";
  let availability_for_truck = "Available";

  let style_car_btn = {};
  if (space_of_car === booked_space_of_car) {
    style_car_btn = { backgroundColor: "#D9534F" };
    availability_for_car = "No Space";
  }

  let style_bike_btn = {};
  if (space_of_bike === booked_space_of_bike) {
    style_bike_btn = { backgroundColor: "#D9534F" };
    availability_for_bike = "No Space";
  }

  let style_truck_btn = {};
  if (space_of_truck === booked_space_of_truck) {
    style_truck_btn = { backgroundColor: "#D9534F" };
    availability_for_truck = "No Space";
  }

  return (
    <div className="home">
      <NavBar />
      <div className="header-div">
        <h1 className="header1">
          Smart Parking Solutions <br/>for Modern Cities
        </h1>
        <p className="para1">
          Find and reserve your perfect parking spot in seconds. Safe, secure,
          and hassle-free.
        </p>
        <button className="book-btn">Get Started</button>
      </div>
      <div className="features-div">
        <div className="content-div">
            <h1 className="header2">Real-time Availability</h1>
        </div>
        <div className="features-grid">
                <div className="feature-card">
                <img src={carImage} alt="car" className="car" />
                <h3>Price per hour : Rs {price_of_car}</h3>
                <h2>{space_of_car}/{booked_space_of_car}</h2>
                <button
                    style={style_car_btn}
                    className="card-btn"
                    onClick={ButtonClick}
                    >
                    {availability_for_car}
                    </button>
                </div>
                <div className="feature-card">
                    <img src={bikeImage} alt="bike" className="bike" />
                    <h3>Price per hour : Rs {price_of_bike}</h3>
                    <h2>{space_of_bike}/{booked_space_of_bike}</h2>
                    <button
                        style={style_bike_btn}
                        className="card-btn"
                        onClick={ButtonClick}
                        >
                        {availability_for_bike}
                    </button>
                </div>
                <div className="feature-card">
                    <img src={truckImage} alt="truck" className="truck" />
                    <h3>Price per hour : Rs {price_of_truck}</h3>
                    <h2>{space_of_truck}/{booked_space_of_truck}</h2>
                    <button
                        style={style_truck_btn}
                        className="card-btn"
                        onClick={ButtonClick}
                    >
                        {availability_for_truck}
                    </button>
                </div>
            </div>
      </div>
      <div className="features-div">
        <div className="content-div">
            <h1 className="header2">Why Choose ParkEase?</h1>
        </div>
        <div className="features-grid">
                <div className="feature-card">
                <img src={Clock} alt="clock" className="mb-4" />
                <h3>24/7 Availability</h3>
                <p>Book your parking spot anytime, anywhere with our real-time system</p>
                </div>
                <div className="feature-card">
                <img src={Shield} alt="shield" className="mb-4" />
                <h3>Secure Parking</h3>
                <p>CCTV surveillance and 24/7 security for your vehicle s safety</p>
                </div>
                <div className="feature-card">
                <img src={CreditCard} alt="credit card" className="mb-4" />
                <h3>Easy Payment</h3>
                <p>Multiple payment options with secure transaction processing</p>
                </div>
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
