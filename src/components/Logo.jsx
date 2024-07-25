// src/components/Logo.jsx
import "./logo.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="navbar-brand">
            <img src="/logo.png" alt="Springdale Public School Logo"  />
        </Link>
    );
};

export default Logo;
