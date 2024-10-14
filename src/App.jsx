import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import OurFormula from './components/OurFormula';
import Features from './components/Features';
import WhySwanand from './components/WhySwanand';
import Contact from './components/Contact';
import './App.css';
const App = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <HowItWorks />
            <div id="sdc">
                <h2>SPRAY DRYING CAPABILITIES</h2>
                <p>Our spray dryer is capable of handling a wide range of inputs. The liquid blend that you send us or that we can create for you is fed into the system and atomized using a rotary atomizer on our production system or via a nozzle on the dryer. A primary cyclone collects and discharges powder that is passed over a sifter before packaging. Our production spray dryer has a nominal water evaporative capacity is200 lit per hour.
                    After completion, our Clean-In-Place (CIP) system and trained operators thoroughly clean the system for the next scheduled production.</p>
            </div>
            <OurFormula />
            <Features />
            <WhySwanand />
            <Contact />
            <Footer />
        </>
    );
};

export default App;



