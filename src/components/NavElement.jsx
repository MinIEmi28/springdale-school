
import React from 'react';
import { Link } from 'react-router-dom';

const NavElement = ({ to, label }) => {
    return (
        <li className="nav-item">
            <Link to={to} className="nav-link">{label}</Link>
        </li>
    );
};

export default NavElement;
