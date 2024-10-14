import React from 'react';
import './OurFormula.css'; // Import CSS file for styling

const OurFormula = () => {
    return (
        <section id="our-formula">
            <div className="our-formula-left">
                <h3 className="our-formula-title">.. Swanand's Formula ..</h3>
                <h2 className="our-formula-heading">WE DRY FLAVOURS</h2>
                <p className="our-formula-paragraph">
                    &#8618; We have a tin packing from 40g to 200g capacity is up to 5000 tins per day with printing.
                    Also, we have FFS pouch filling machine with central seal from 5g to 60g pouch with printing.
                    We provide separate godown for storage like raw and packing materials as well as finished product with pallets.
                    We have capacity of blending and shifting of various food products and flavors having capacity from 200kg to 500kg.
                </p>
            </div>
            <div className="our-formula-right">
                <img src="/images/masaladabba.jpg" />
            </div>
        </section>
    );
};

export default OurFormula;
