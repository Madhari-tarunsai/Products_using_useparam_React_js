import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="container">
      <div className="text">
        <h1 className="title">About Us</h1>
        <p className="description">
          We are dedicated to delivering high-quality web solutions that are responsive,
          efficient, and user-friendly. Our mission is to empower users with the latest technology.
        </p>
      </div>
      <div className="image">
        <img src="https://www.shutterstock.com/shutterstock/photos/2033054912/display_1500/stock-photo-new-york-august-in-the-kitchen-of-gabriel-kreuther-restaurant-in-midtown-manhattan-it-2033054912.jpg" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
