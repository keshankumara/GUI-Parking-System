import React from 'react';
import './style/about.css';
import NavBar from '../componets/navbar';
import Footer from '../componets/footer';

const About = () => {
    return (
        <div>
            <NavBar />
            <div className="about">
                <div className="aboutContent">
                    <h1 className="header1">
                        About Us
                    </h1>
                    <p className="para1">
                        Welcome to Smart Parking System!
                        We offer a hassle-free parking solution designed to save you time and reduce stress. With real-time slot availability and easy booking, we make parking more convenient and efficient. Our user-friendly interface, secure environment, and competitive pricing cater to your parking needs, whether you're commuting daily or visiting.
                    </p>
                </div>
                <div className="aboutDetails">
                    <div className="aboutDetails">
                        <h2 className="header2">Our Vision</h2>
                        <p className="para2">
                        At Smart Parking System, we strive to revolutionize parking by eliminating unnecessary delays and frustrations.<br/>
                        Through cutting-edge technology, we provide efficient, real-time parking solutions that save time, reduce traffic congestion, and enhance the overall urban experience.<br/>

                        We believe in a future where finding a parking space is effortless, quick, and stress-free, ensuring convenience for everyone, from daily commuters to occasional travelers.
                        </p>
                    </div>
                    <h2 className="header2" >What We Offer</h2>
                    <p className="para2">
                        At Smart Parking System, we provide a seamless and efficient parking experience designed to meet your needs. Our platform offers real-time slot availability, allowing you to check and book parking spaces instantly. We ensure affordable pricing, making parking convenient without breaking the bank. With a user-friendly interface, you can navigate effortlessly from booking to parking, saving time and effort. Additionally, our secure environment guarantees the safety of your vehicle at all times, giving you peace of mind while you park.</p>
                    
                </div>
                <div className="aboutDetails">
                    <h2 className="header2">Why Choose Us?</h2>
                    <p className="para2">
                    At Smart Parking System, we are committed to transforming the way you park by providing a seamless, reliable, and efficient experience. Whether you're a daily commuter, a visitor, or a business owner, our platform ensures hassle-free parking with real-time slot availability, easy bookings, and competitive pricing.<br/>

                    We prioritize convenience, security, and affordability, offering a user-friendly interface that allows you to find and reserve parking spaces in just a few clicks. Our system is designed to reduce traffic congestion, save time, and enhance overall parking efficiency.<br/>

                    With secure payment options, 24/7 availability, and advanced parking management tools, we are redefining modern parking solutions. Choose Smart Parking System—because parking should be the least of your worries! 🚗💡
                    </p>
                </div>
            </div>
            <div className="navbarDiv">
                <Footer />
            </div>
        </div>
    );
};

export default About;
