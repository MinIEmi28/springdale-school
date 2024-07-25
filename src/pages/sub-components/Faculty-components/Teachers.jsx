

// import React from 'react';
// import "./teachers.css";

// const Teachers = ({ data }) => {
//     const imageList = [
//         './images/teacher1.png',
//         './images/teacher2.png',
//         './images/teacher3.png',
//         './images/teacher4.png',
//         './images/teacher5.png',
//         './images/teacher6.png',
//         './images/teacher7.png',
//         './images/teacher8.png',
//         './images/teacher9.png',
//         './images/teacher10.png',
//     ];

//     return (
//         <section className="section what-we-do pt-5">
//             <div className="d-flex flex-column align-items-center align-self-center " style={{ maxWidth: '70%' }}>
//                 <div className="p-2 flex-fill">
//                     <div className="d-flex align-items-start flex-column" >

//                         <div className="d-flex flex-column align-items-center">
//                         <p className="sec-heading text-align-center">WHAT WE DO</p>
//                             <h3>SERVICES PROVIDE FOR YOU</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="p-2 flex-fill mt-5">
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui quisquam odit ratione sequi accusantium cumque omnis impedit earum cum. Consequatur ex omnis sunt molestias.</p>
//                 </div>
//             </div>
//             <div className="slider-container mb-2" style={{ maxWidth: '65%' }}>
//                 <button className="slider-button prev">&lt;</button>
//                 <div className="slider">
//                     {data.map((teacher, index) => (
//                         <div className="card card-slider " key={index}>
//                             <img src={imageList[index % imageList.length]} alt={`Image ${index + 1}`} />
//                             <div className="overlay">
//                                 <div className="overlay-content p-2">
//                                     <i className="fa-solid fa-chalkboard-teacher"></i>
//                                     <h6><b>{teacher.name}</b></h6>
//                                     <p>{teacher.message}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <button className="slider-button next">&gt;</button>
//             </div>
//             <div className="dots mb-5">
//                 <span className="dot active"></span>
//                 <span className="dot"></span>
//                 <span className="dot"></span>
//             </div>
//         </section>
//     );
// }

// export default Teachers;

import React, { useState, useEffect, useRef } from 'react';
import "./teachers.css";



const Teachers = ({ data,imageList }) => {
 

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(data.length - 1);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, [currentIndex]);

    return (
        <section className="section what-we-do pt-5">
            <div className="d-flex flex-column align-items-center align-self-center" style={{ maxWidth: '70%' }}>
                <div className="p-2 flex-fill">
                    <div className="d-flex align-items-start flex-column">
                        <div className="d-flex flex-column align-items-center">
                            <p className="sec-heading text-align-center red">WHAT WE DO</p>
                            <h3>SERVICES PROVIDE FOR YOU</h3>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex-fill mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui quisquam odit ratione sequi accusantium cumque omnis impedit earum cum. Consequatur ex omnis sunt molestias.</p>
                </div>
            </div>
            <div className="slider-container mb-2" style={{ maxWidth: '65%' }}>
                <button className="slider-button prev" onClick={handlePrev}>&lt;</button>
                <div className="slider" ref={sliderRef}>
                    {data.map((teacher, index) => (
                        <div className="card card-slider" key={index} style={{minHeight:"auto", minWidth:"35%"}}>
                            <img src={imageList[index % imageList.length]} alt={`Image ${index + 1}`} />
                            <div className="overlay">
                                <div className="overlay-content p-2">
                                    <i className="fa-solid fa-chalkboard-teacher"></i>
                                    <h6><b>{teacher.name}</b></h6>
                                    <p >{teacher.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="slider-button next" onClick={handleNext}>&gt;</button>
            </div>
            <div className="dots mb-5">
               
            <span
                    className={`dot ${currentIndex === 0 ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(0)}
                ></span>
                <span
                    className={`dot ${currentIndex > 0 && currentIndex < data.length - 3 ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(Math.floor((data.length - 3) / 2))}
                ></span>
                <span
                    className={`dot ${currentIndex >= data.length - 3 ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(data.length - 3)}
                ></span>
            </div>
        </section>
    );
}

export default Teachers;
