// src/components/Navbar.jsx

// import React from 'react';
// import Logo from './Logo';
// import NavTab from './NavTab';

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light ">
//             <Logo />
//             <div className="collapse navbar-collapse">
//                 <NavTab />
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState } from 'react';
import Logo from './Logo';
import NavTab from './NavTab';
import './navbar.css'; // Import any additional styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Logo />
                <button className="navbar-toggler" type="button" onClick={toggleSidebar} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                    <NavTab />
                </div>
                <div className="collapse navbar-collapse">
                    <NavTab />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


