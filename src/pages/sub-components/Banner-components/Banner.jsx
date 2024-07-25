import React, { useState } from 'react';
import './banner.css'; // Assuming you have some CSS file for styling

const Banner = ({welcomeMessage}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5']; // Example slides

    const goPrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='container-banner'>
            
            <div className="banner">
                {slides.map((slide, index) => (
                    <div
                        key={slide}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        id={slide}
                    ></div>
                ))}
            </div>
            
           
            <div className="banner-nav">
                <button onClick={goPrev}>
                    <i className="fa-solid fa-chevron-left fa-3x"></i>
                </button>
                <button onClick={goNext}>
                    <i className="fa-solid fa-chevron-right fa-3x"></i>
                </button>
            </div>
            <div className="welcome bg-light">
                <p>{welcomeMessage}</p>
            </div>
            
        </div>
    );
    // return (
       
    //         <div className="banner">
    //             <div className="slide" id='slide1'>
    //                 {/* <img src="./banners/banner1.png" alt="" /> */}
    //             </div>
    //             <div className="overlay"></div>
    //         </div>
    // );
};

export default Banner;
