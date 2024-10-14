// Sidebar.jsx
import React from 'react';
import './Sidebar.css'; // Import your sidebar styles

const Sidebar = ({ onClose }) => {
    return (
        <div className="sidebar">
            <button className="close-button" onClick={onClose}>X</button>
            <h2>Getting all of the Nutrients you need simply cannot be done without supplements.</h2>
            <h4>Akshay Satkar</h4>
            <h3 id="number">+91 9552693534</h3><hr />
            <h4>Mukund Daundkar</h4>
            <h3 id="number">+91 9922503753</h3><hr />
            <h4>Email</h4>
            <h5>Swanandfoods2000@yahoo.com</h5>
        </div>
    );
};

export default Sidebar;


