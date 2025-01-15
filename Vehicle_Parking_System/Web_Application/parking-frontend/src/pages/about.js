import React from 'react';
import './style/about.css';

const Price = () => {

  return (
    <div className='about'>
       <h1 className='main_header'>About Us</h1>
       <h4 className='sub_header'>Welcome to the Vehicle Parking System – your one-stop solution for seamless parking management!</h4> 
       <p className='para'>We understand the challenges of finding parking spaces in today's busy world. Our system is designed to make parking hassle-free, efficient, and user-friendly. Whether you're a driver looking for a convenient spot or a parking lot owner managing multiple spaces, our platform caters to all your needs.</p>  
       <h4 className='sub_header'>Key Features:</h4> 
       <ul>
           <li>Real-time Parking Availability: View available parking spaces instantly.</li>
           <li>Easy Booking: Reserve your spot in just a few clicks.</li>
           <li>Flexible Management: Manage parking slots, bookings, and pricing effortlessly.</li>
           <li>Interactive Interface: An intuitive design for both web and desktop users.</li>
       </ul>
       <p className='para'>Our mission is to optimize parking systems through technology, reducing time, stress, and congestion. With our innovative platform, we aim to create smarter cities, improve urban mobility, and enhance the parking experience for everyone. </p>
        <p className='para'>Thank you for choosing the Vehicle Parking System. Together, let's make parking smarter and stress-free!</p>
    </div>
  );
};

export default Price;
