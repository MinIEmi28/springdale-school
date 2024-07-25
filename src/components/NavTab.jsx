

// export default NavTab;

import React from 'react';
import { Link } from 'react-router-dom';
import './navtab.css'; // Import any additional styles

const NavTab = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about-us" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
                <Link to="/academics" className="nav-link">Academics</Link>
            </li>
            <li className="nav-item">
                <Link to="/admissions" className="nav-link">Admissions</Link>
            </li>
            <li className="nav-item">
                <Link to="/faculty" className="nav-link">Faculty</Link>
            </li>
            <li className="nav-item">
                <Link to="/students" className="nav-link">Students</Link>
            </li>
            <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact-us" className="nav-link">Contact Us</Link>
            </li>
        </ul>
    );
};


export default NavTab;
