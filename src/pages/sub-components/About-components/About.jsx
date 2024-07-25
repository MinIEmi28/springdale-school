import React from 'react';
import "./About.css";

const About = () => {
    return(
        
        <div className="d-flex flex-column mb-3  align-items-center " style={{ maxWidth: "100%" }}>
              <div className="d-flex pt-5 infrastructure mb-5" >
                            <div className="p-2 sec-head">
                                <div className="d-flex flex-column">
                                    <div className="p-2 text-align-left">
                                        <p className="sec-heading ">INFRASTRUCTURE AND FACILITIES</p>
                                        <h3>SERVICES PROVIDE FOR YOU</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 sec-tail">
                                <div className="text-align-right">
                                    <p>State-of-the-art science and computer labs</p>
                                    <p>Spacious and well-equipped classrooms</p>
                                    <p>Library with a vast collection of books and digital resources</p>
                                    <p>Sports facilities including a playground, gymnasium, and swimming pool</p>
                                    
                                </div>
                                                
                            </div>
                    </div>
            <div className="bg-light d-flex align-items-center flex-column">
                <div className="p-2 mt-5 ">
                    <p className="sec-heading">ABOUT US</p>
                </div>
                <div className="p-2">
                    <h3>WHY WE ARE BEST</h3>
                </div>
                <div className="p-2 " >
                    
                        <div className="d-flex about-us justify-content-center about-us p-4">
                                <div className="p-2" >
                                    <div className="card p-4" >
                                        <div className="icon">
                                        <i className="fa-solid fa-crosshairs"></i>
                                        </div>
                                        <div className="card-body">
                                        <h6 className="card-title">Vision</h6>
                                            <p className="card-text">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 " >
                                    <div className="card p-4" >
                                        <div className="icon">
                                            <i className="fa-solid fa-gauge-simple-high"></i>    
                                        </div>                            
                                        <div className="card-body">
                                            <h6 className="card-title">Mission</h6>
                                            <p className="card-text">To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>                                
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2" >
                                    <div className="card p-4" >
                                        <div className="icon">
                                            <i className="fa-solid fa-shield-halved"></i>
                                        </div>                                
                                        <div className="card-body">
                                            <h6 className="card-title">Principal's Message</h6>
                                            <p className="card-text">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
                                        </div>
                                    </div>
                        </div>
                </div>
           
            </div>
           
            {/* 
            <ul>
                <li>State-of-the-art science and computer labs</li>
                <li>Spacious and well-equipped classrooms</li>
                <li>Library with a vast collection of books and digital resources</li>
                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul> */}
        </div>
        </div>
    );
  
}

export default About;