import React from "react";
import scholarImage from './assets/images/scholar.png';
import './herosec.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="heroheading">Empower Your Future with</h1>
        <h1 className="heroheading2">Quality Education</h1>
        <br/>
        <p className="heropara">
          Join our community of learners and take the first step towards <br />
          achieving your academic goals.
        </p>
        <div className="buttons">
          <button className="getstartedbtn">Get Started</button>
          
          <button className="learnmorebtn">Learn More</button>
        </div>
      </div>
      <img src={scholarImage} alt="Scholar" className="heroimg" />
    </div>
  );
};

export default HeroSection;
