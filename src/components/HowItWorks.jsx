import React from 'react';
import './HowItWorks.css'; // Import CSS file for styling

const HowItWorks = () => {
    return (
        <section id="how-it-works">
            <button className="howitworks-heading-button">THE SPRAY DYING PROCESS</button>

            <p className="intro-paragraph">Here is a general breakdown of the spray drying process:</p>

            <div className="buttons-container">
                <div className="left-side">
                    <div className="row">
                        <div className="button-group">
                            <button className="work-button">Step 1</button>
                            <p className="step-paragraph"><b>Develop a customized liquid in-feed.</b> The chemical reactions and processes that take place in liquid batching prior to your product hitting the dryer is where much of the magic happens. Our team will help you perfect your formulation to achieve the particle size, texture and flavor characteristics you require.</p>
                        </div>
                        <div className="button-group">
                            <button className="work-button">Step 2</button>
                            <p className="step-paragraph"><b>Next comes atomization.</b> During this stage, the liquid is fed into the dryer, where a rotary atomizer spins rapidly, dispersing the product into small liquid droplets. The rotational velocity allows us to control particle size.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="button-group">
                            <button className="work-button">Step 3</button>
                            <p className="step-paragraph"><b>Third is drying.</b> Hot air runs up the length of the dryer as the droplets fall, causing product moisture to evaporate quickly, converting the liquid into a powder. We can control moisture during this phase by fine-tuning the temperature of the heated air.</p>
                        </div>
                        <div className="button-group">
                            <button className="work-button">Step 4</button>
                            <p className="step-paragraph"><b>Last is recovery.</b> After drying is complete, a bag filter or cyclone recovers the powder from the exhaust, which is then sent to be packaged.</p>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <img src="/images/moringa.jpg" alt="How it works" />
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

