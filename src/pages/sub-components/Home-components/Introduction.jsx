import React from "react";
import "./introduction.css";

const Introduction = ({videoUrl}) => {
    return(
        <div className="d-flex bg-dark introduction-container">
            <div className="flex-item video-container">
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex-item text-container px-5 align-self-center text-align-left">
                <h1>WELCOME TO SPRINGDALE ACADEMY</h1>
                <p>Welcome to Springdale Academy! It is a privilege to lead such a unique learning community.</p>
                <p>Springdale Academy provides academic innovation that inspires transformation in the lives of our students and community.</p>
                <p>I am so proud to be a part of providing opportunities for individuals from all over the world to building their academic qualifications that will lead them to a brighter future.</p>
                <p>Give your education a boost with Springdale Academy and feel how we are changing the way people approach continuing education!</p>
            </div>
        </div>
    );
}

export default Introduction;
