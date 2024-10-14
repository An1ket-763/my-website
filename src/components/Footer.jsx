import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        position: 'relative',
        bottom: '0',
        width: '100%',
        borderTop: '1px groove white',
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Swanand Foods. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;


