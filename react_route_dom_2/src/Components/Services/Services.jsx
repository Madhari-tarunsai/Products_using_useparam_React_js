import React from 'react';
import './Services.css'; 

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <img src="https://assets1.hospitalitytech.com/images/v/max_width_1440/2022-06/happy_diners_shutterstock_1201677928.jpg" alt="Service 1" className="service-icon" />
          <h2 className="service-name">Dine-In</h2>
          <p className="service-description">
            Enjoy a cozy and relaxing dining experience with a wide variety of dishes to choose from.
          </p>
        </div>
        <div className="service-item">
          <img src="https://plus.unsplash.com/premium_photo-1682146662576-900a71864a11?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFja2FnZSUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww" alt="Service 2" className="service-icon" />
          <h2 className="service-name">Delivery</h2>
          <p className="service-description">
            Get your favorite meals delivered to your doorstep with our fast and reliable delivery service.
          </p>
        </div>
        <div className="service-item">
          <img src="https://webestcateringservices.com/wp-content/uploads/2024/06/catering-services-in-vizag.jpeg" alt="Service 3" className="service-icon" />
          <h2 className="service-name">Catering</h2>
          <p className="service-description">
            We offer catering services for events and gatherings, with customized menu options for all occasions.
          </p>
        </div>
        <div className="service-item">
          <img src="https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg" alt="Service 4" className="service-icon" />
          <h2 className="service-name">Special Offers</h2>
          <p className="service-description">
            Enjoy seasonal promotions, discounts, and special deals on our best dishes and meals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
