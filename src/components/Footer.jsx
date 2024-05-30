import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-section">
                    <img src="../images/logo1.png" alt="Logo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas sem tellus, ac consectetur mi gravida nunc sit amet ante vitae ante facilisis.
                    </p>
                    <a href="#readmore">Read more</a>
                </div>
                <div className="separator"></div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Bazer Maynaguri</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#enquiry">Enquiry Us</a></li>
                        <li><a href="#b2b">B2B Information</a></li>
                    </ul>
                </div>
                <div className="separator"></div>
                <div className="popular-categories">
                    <h3>Popular Categories</h3>
                    <ul>
                        <li><a href="#vegetable">Vegetable</a></li>
                        <li><a href="#fruits">Fruits</a></li>
                        <li><a href="#dairy">Dairy products</a></li>
                        <li><a href="#organic">Organic Products</a></li>
                        <li><a href="#grocery">Grocery Items</a></li>
                    </ul>
                </div>
                <div className="separator"></div>
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <address>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Sarkar shoss exclusive<br />
                        Natun Bazar turminal complex,<br />
                        PO : Maynaguri,<br />
                        Dist : Jalpaiguri, Pin : 753224.<br /><br />
                        <FontAwesomeIcon icon={faPhone} /> +91 7797813261<br /><br />
                        <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:dhrubadjs.mng@gmail.com">dhrubadjs.mng@gmail.com</a>
                    </address>
                </div>
            </div>
            <div className="social-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="footer-bottom">
                <p>&copy; Copyright 2020 bazermaynaguri.com | All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
