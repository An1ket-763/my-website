import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <div className="image-con">
                <img
                    src="/images/about1.jpg"
                    className="circle-image"
                    alt="Circle"
                />
                <img
                    src="/images/about2.jpg"
                    className="square-image first-square"
                    alt="Square 1"
                />
                <img
                    src="/images/about3.jpg"
                    className="square-image second-square"
                    alt="Square 2"
                />
            </div>
            <div className="text-container">
                <button className="heading-button">SPRAY DRYING IN FOOD MANUFACTURING</button>
                <p>Spray drying is a unique liquid-to-powder process that requires both skill and attention to detail.
                    At its core, it involves an initial ingredient conversion through specialized chemical reactions and processing.
                    This liquid is then dried into a custom food-grade powder through water evaporation.</p>
                <p>Swanand has developed a deep understanding of the spray dry technology.
                    Through it, are able to offer highly customized outputs based on your specifications.</p>
            </div>
        </section>
    );
};

export default About;
