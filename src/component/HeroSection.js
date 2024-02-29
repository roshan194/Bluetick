import React from 'react';
import './css/HeroSection.css';
import img from './img/heroimg.jpg'

const HeroSection = () => {
  return (
    <div className="hero-container">

      <div className="hero-content">
        <h1>Bluetick Consultants</h1>
        <p>
          Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
          significant impact in the Indian and US startup ecosystems.
          Transforming Enterprises
          with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
        <div className="hero-btns">
          <a href="https://www.bluetickconsultants.com/generative-ai.html" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">To know more about us</button>
          </a>
        </div>
      </div>
      <div className='blueC-img'>
        <img src={img} alt='image'></img>
      </div>
    </div>
  );
}

export default HeroSection;