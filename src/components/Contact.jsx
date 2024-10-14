import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-content">
                <div className="image-cont">
                    <img src="/images/logo.png" alt="Contact" className="contact-image" />
                </div>
                <div className="txt-container">
                    <div className="about-us-container">
                        <h2 className="about-us">About Us</h2>
                        <div className="about-links">
                            <a href="#about">About Company</a>
                            <a href="#features">Features</a>
                            <a href="#why-swanand">Why us</a>
                        </div>
                    </div>
                    <div className="contact-us-container">
                        <h2 className="contact-us">Contact Us</h2>
                        <div className="contact-links">
                            <a href="#contact1">+91 9552693534</a>
                            <a href="#contact2">+91 9922503753</a>
                            <a href="#contact3">Swanandfoods2000@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;






