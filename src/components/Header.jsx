import React, { useState, useEffect } from 'react';
import './Header.css'; // Import CSS file
import Sidebar from './Sidebar'; // Import Sidebar component

const Header = () => {
    const [selected, setSelected] = useState('home'); // State to track selected button
    const [hidden, setHidden] = useState(false); // State to track header visibility
    const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position
    const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility

    useEffect(() => {
        let timeout;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 0) {
                setHidden(true); // Hide header
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    setHidden(false); // Show header after 1.5 seconds
                }, 1500); // Adjust to 1.5 seconds
            } else {
                setHidden(false); // Show header
            }

            setLastScrollY(currentScrollY); // Update last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setSelected(id); // Set the selected button
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
    };

    return (
        <>
            <header className={hidden ? 'hidden' : ''}>
                <nav>
                    <div className="logo-container">
                        <img src="images/logo.png" alt="logo" className="header-logo" />
                    </div>
                    <div className="nav-buttons">
                        <button className={selected === 'home' ? 'selected' : ''} onClick={() => scrollToSection('home')}>Home</button>
                        <button className={selected === 'about' ? 'selected' : ''} onClick={() => scrollToSection('about')}>About</button>
                        <button className={selected === 'how-it-works' ? 'selected' : ''} onClick={() => scrollToSection('how-it-works')}>How it Works</button>
                        <button className={selected === 'our-formula' ? 'selected' : ''} onClick={() => scrollToSection('our-formula')}>Our Formula</button>
                        <button className={selected === 'features' ? 'selected' : ''} onClick={() => scrollToSection('features')}>Features</button>
                        <button className={selected === 'why-swanand' ? 'selected' : ''} onClick={() => scrollToSection('why-swanand')}>Why Swanand</button>
                        <button className={selected === 'contact' ? 'selected' : ''} onClick={() => scrollToSection('contact')}>Contacts</button>
                    </div>
                    <button className="round-button" onClick={toggleSidebar}></button>
                </nav>
                {sidebarOpen && <Sidebar onClose={toggleSidebar} />} {/* Render Sidebar if open */}
            </header>
        </>
    );
};

export default Header;







