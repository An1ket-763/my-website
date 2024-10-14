import React from 'react';
import './Features.css';
const Features = () => {
    return (
        <section id="features">
            <h3 id="sf">Swanand Features</h3>
            <h2>Supplement Features</h2>
            <div className="features-container">
                <div className="feature-box">
                    <img src="/images/f1.png" alt="Feature 1" className="feature-image" />
                    <h3>MATERIAL STORAGE</h3>
                    <p>At Swanand, we offer contract food ingredient storage solutions that not only protect your ingredients, but also provide flexibility.
                        We work with your delivery schedules and manage supplier lead times, confirming everything needed is on hand for production.
                        Our goal is to ensure your finished products arrive to you on time and to your specifications.</p>
                </div>
                <div className="feature-box">
                    <img src="/images/f2.jpg" alt="Feature 2" className="feature-image" />
                    <h3>MATERIAL STANDARDS</h3>
                    <p>Food ingredients have a long list of potential threats.
                        At Swanand, we provide safety for your ingredients and packaging before the next production stage.
                        We ensure careful segregation of ingredients. With distinctions such as allergens materials, we minimize any chance of cross-contamination.
                        The Food Safety Modernization Act became federal law in 2011.
                        This shifted the food safety focus from responding to contamination to attempting to prevent it.
                        Ingredient storage is a critical component of this change.
                        As a response to this new standard, Swanand works tirelessly to ensure our plants are always audit-ready, even for unannounced visits.</p>
                </div>
                <div className="feature-box">
                    <img src="/images/f3.jpg" alt="Feature 3" className="feature-image" />
                    <h3>STORAGE PROTECTION</h3>
                    <p>Our receiving personnel also know what to look for when the trucks arrive.
                        We use a rigorous check-in process for raw materials delivery to identify metal, glass, odors or other hazards that could jeopardize your ingredients.
                        Our workers are also careful to verify all materials and quantities to minimize errors and customer complaints.</p>
                </div>
                <div className="feature-box">
                    <img src="images/f4.jpg" alt="Feature 4" className="feature-image" />
                    <h3>STORAGE CONVENIENCE</h3>
                    <p>Need to find something fast? Our management system identifies where your product is and how long it’s been there.
                        We also conduct a monthly physical inventory count to further audit our facilities, and all customers receive a monthly inventory report of their raw and finished materials</p>
                </div>
            </div>
        </section>
    );
};

export default Features;


