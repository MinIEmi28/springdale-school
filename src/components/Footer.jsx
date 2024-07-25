import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container d-flex">
                {/* <div className="footer-section">
                    <h5>Contact Us</h5>
                    <p>Springdale Public School</p>
                    <p>123 Education Lane, Cityville, State, ZIP Code</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p>Email: info@springdale.edu</p>
                </div> */}
                <div className="footer-section nav-tab ">
                    <div className="d-flex justify-content-center">
                        <ul className='m-4'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/academics">Academics</a></li>
                            <li><a href="/admissions">Admissions</a></li>
                        </ul>
                        <ul className='m-4'>
                            <li><a href="/faculty">Faculty</a></li>
                            <li><a href="/students">Student </a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    
                </div>
                <div className="footer-section logo my-3">
                    <img src="/footer-logo.png" alt="Springdale Public School Logo"  />
                </div>
                <div className="footer-section my-3">
                    <h5>Follow Us</h5>
                    <ul className="social-icons mt-2">
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                    <div className="address mt-3">
                        <h6>info@springdale-academia.ca </h6>
                    </div>
                    
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
