import React from 'react';
import './css/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaQuora } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="company-info">
                <img src="https://www.bluetickconsultants.com/images/bluetick-consultants.webp" alt="logo of sitemark" ></img>
                <h1>Bluetick Consultants LLP</h1>
                <p>contact@bluetickconsultants.com</p>
            </div>
            <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaQuora /></a>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Bluetick Consultants LLP. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;