import React from 'react';
import HomeBanner from "./sub-components/Home-components/HomeBanner.jsx";
import Curriculum from "./sub-components/Academics/Curriculum.jsx";
import Methodologies from "./sub-components/Academics/Methodology.jsx";
import image from "./sub-components/Home-components/banners/banner2.png"

const Academics = () => {
    return (
        <div>
            <HomeBanner heading={"Academic Curiculum"} para={"Learn and grow with Springdale Academy"} image={image}/>
            <Curriculum />
            <Methodologies />     
        </div>
    );
};

export default Academics;
