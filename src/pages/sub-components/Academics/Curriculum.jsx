import React from "react";
import "./curriculum.css";


const Curriculum = () =>{
    return(
        <div className="container p-0">
            <div className="bg-light d-flex align-items-center flex-column">
                <div className="p-2 mt-5 ">
                    <p className="sec-heading">CURRICULUM</p>
                </div>
                <div className="p-2">
                    <h3>ACADEMIC DETAILS</h3>
                </div>
                <div className="p-2 " >
                    
                        <div className="d-flex curriculum justify-content-center p-4">
                                <div className="p-2" >
                                    <div className="card p-4" >
                                        {/* <div className="icon">
                                        <i className="fa-solid fa-crosshairs"></i>
                                        </div> */}
                                        <div className="card-body">
                                        <h6 className="card-title">Primary (Grades 1-5)</h6>
                                            <p className="card-text">English, Mathematics, Science, Social Studies, Art, Physical Education</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 " >
                                    <div className="card p-4" >
                                        {/* <div className="icon">
                                            <i className="fa-solid fa-gauge-simple-high"></i>    
                                        </div>                             */}
                                        <div className="card-body">
                                            <h6 className="card-title">Secondary (Grades 6-10)</h6>
                                            <p className="card-text">English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art.</p>                                
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2" >
                                    <div className="card p-4" >
                                        {/* <div className="icon">
                                            <i className="fa-solid fa-shield-halved"></i>
                                        </div>                                 */}
                                        <div className="card-body">
                                            <h6 className="card-title">Senior Secondary (Grades 11-12)</h6>
                                            <p className="card-text">Science Stream, Commerce Stream.</p>
                                        </div>
                                    </div>
                        </div>
                </div>
           
            </div>
            </div>
           
        </div>
    );
}

export default Curriculum;