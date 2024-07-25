import React from 'react';
import HomeBanner from './sub-components/Home-components/HomeBanner';
import Details from './sub-components/Home-components/Details';
import image from "./sub-components/Stydent-components/images/student-banner.png";
import Faculty from './Faculty';
import Feedback from './sub-components/About-components/Feedback';
const Students = () => {
    const icons = [
        "fa-regular fa-comments",
        "fa-regular fa-file-lines"
    ];
    const headings = ['LIFE AT SPRINGDALE', 'CLUBS AND SOCIETIES'];
    const paragraphs = [
        "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club    ",    
        "Literary Society, Environmental Club, Astronomy Club, Coding Club  "    
    ];
    return (
        <div class="container mt-5">
                        <HomeBanner heading={"Students"} para={"Welcome to the Student Page at Springdale!"} image={image}/>
                        <Details icons={icons} headings={headings} paragraphs={paragraphs} />
   
                    <h2 class="text-center mt-4">Achievements</h2>
                    <ul class="list-group">
                        <li class="list-group-item">John Smith - National Level Math Olympiad Winner</li>
                        <li class="list-group-item">Sarah Lee - Gold Medalist in State Swimming Championship</li>
                        <li class="list-group-item">Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
                    </ul>

                    <div className="bg-light d-flex align-items-center flex-column">
                <div className="p-2 mt-5 ">
                    <p className="sec-heading">STUDENT COUNCIL</p>
                </div>
                <div className="p-2">
                    <h3>MEET OUR MEMBERS</h3>
                </div>
                <div className="p-2 " >
                    
                        <div className="d-flex curriculum justify-content-center p-4">
                                <div className="p-2" >
                                    <div className="card p-4" >
                                        {/* <div className="icon">
                                        <i className="fa-solid fa-crosshairs"></i>
                                        </div> */}
                                        <div className="card-body">
                                        <h6 className="card-title">President</h6>
                                            <p className="card-text"> Amy Parker, Grade 12</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 " >
                                    <div className="card p-4" >
                                        {/* <div className="icon">
                                            <i className="fa-solid fa-gauge-simple-high"></i>    
                                        </div>                             */}
                                        <div className="card-body">
                                            <h6 className="card-title">Vice President</h6>
                                            <p className="card-text">Rajiv Mehta, Grade 11</p>                                
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2" >
                                    <div className="card p-4" >
                                        {/* <div className="icon">
                                            <i className="fa-solid fa-shield-halved"></i>
                                        </div>                                 */}
                                        <div className="card-body">
                                            <h6 className="card-title">Secretary</h6>
                                            <p className="card-text"> Lisa Wong, Grade 10</p>
                                        </div>
                                    </div>
                        </div>
                </div>
           
            </div>
            </div>

            <Feedback/>
    </div>
    
    );
};

export default Students;
