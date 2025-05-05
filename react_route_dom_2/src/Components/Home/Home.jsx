import React from 'react';
import "./Home.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg" alt="Swagath Hotel" className="about-image" />
        <div>
          <h1 id="h11">Swagath Hotel</h1>
          <p id="p1">
            Welcome to Swagath Hotel, where luxury meets comfort. Experience world-class hospitality,
            stunning views, and a range of exceptional amenities designed to make your stay unforgettable.
          </p>
          <button className="view-more-btn">View More</button>
        </div>
      </div>
      <div id="m1">
        <marquee behavior="" direction="">welcome to our Resturent</marquee>
        </div>
      
    </div>
  );
}

export default About;
