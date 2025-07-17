import React from 'react';
import './About.css'; // custom styles
import CustomerNavbar from './CustomerNavbar';

const About = () => {
  return (
    <div>
      <CustomerNavbar />

      {/* Hero Section */}
      <div className="about-hero">
        <div className="overlay">
          <h1>ABOUT US</h1>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Chef Cooking"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title">We Are Specialized In Spicy Modern Fusion Food</h2>
            <p className="lead">
              Welcome to <strong>HOTPOT</strong> – a place where flavor meets innovation!
              We take pride in bringing you a fusion of traditional spices and modern culinary
              artistry. Our chefs handcraft each dish with care, using only the freshest ingredients.
            </p>
            <p>
              Whether you're craving sizzling starters, bold main courses, or refreshing beverages,
              we’ve got something to delight every palate. Experience the passion, the spice, and the
              heart of HOTPOT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
