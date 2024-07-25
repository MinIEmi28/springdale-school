import React from 'react';
import Banner from "./sub-components/Banner-components/Banner.jsx";
import About from "./sub-components/About-components/About.jsx";
import Feedback from './sub-components/About-components/Feedback.jsx';

const AboutUs = () => {
    const welcomeMessage = "Welcome to Springdale Public School. Explore our facilities and join our community today!";

    return (
        
        <div>
            <Banner welcomeMessage={welcomeMessage}/>    
            <About />
            <Feedback />
        </div>
    );
};

export default AboutUs;
